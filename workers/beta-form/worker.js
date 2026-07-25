const RESEND_ENDPOINT = "https://api.resend.com/emails";
const TURNSTILE_ENDPOINT =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const ALLOWED_LANGUAGES = new Set(["de", "en", "es", "it"]);

function responseHeaders(origin, allowedOrigin) {
  const headers = {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
  };

  if (origin === allowedOrigin) {
    headers["Access-Control-Allow-Origin"] = allowedOrigin;
    headers["Access-Control-Allow-Headers"] = "Content-Type";
    headers["Access-Control-Allow-Methods"] = "POST, OPTIONS";
    headers["Access-Control-Max-Age"] = "86400";
    headers.Vary = "Origin";
  }

  return headers;
}

function jsonResponse(body, status, origin, allowedOrigin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: responseHeaders(origin, allowedOrigin),
  });
}

function cleanText(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

async function verifyTurnstile(request, env, token) {
  const formData = new FormData();
  formData.set("secret", env.TURNSTILE_SECRET_KEY);
  formData.set("response", token);
  formData.set("idempotency_key", crypto.randomUUID());

  const remoteIp = request.headers.get("CF-Connecting-IP");
  if (remoteIp) {
    formData.set("remoteip", remoteIp);
  }

  const response = await fetch(TURNSTILE_ENDPOINT, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    return { valid: false, unavailable: true };
  }

  const result = await response.json();
  return {
    valid:
      result.success === true &&
      result.hostname === env.TURNSTILE_HOSTNAME &&
      result.action === "beta-signup",
    unavailable: false,
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "GET") {
      return jsonResponse(
        { service: "ozlife-beta-form", status: "ok" },
        200,
        origin,
        env.ALLOWED_ORIGIN,
      );
    }

    if (request.method === "OPTIONS") {
      if (origin !== env.ALLOWED_ORIGIN) {
        return jsonResponse(
          { ok: false, error: "origin_not_allowed" },
          403,
          origin,
          env.ALLOWED_ORIGIN,
        );
      }

      return new Response(null, {
        status: 204,
        headers: responseHeaders(origin, env.ALLOWED_ORIGIN),
      });
    }

    if (request.method !== "POST") {
      return jsonResponse(
        { ok: false, error: "method_not_allowed" },
        405,
        origin,
        env.ALLOWED_ORIGIN,
      );
    }

    if (origin !== env.ALLOWED_ORIGIN) {
      return jsonResponse(
        { ok: false, error: "origin_not_allowed" },
        403,
        origin,
        env.ALLOWED_ORIGIN,
      );
    }

    const requiredConfiguration = [
      "RESEND_API_KEY",
      "TURNSTILE_SECRET_KEY",
      "BETA_RECIPIENT",
      "BETA_SENDER",
      "ALLOWED_ORIGIN",
      "TURNSTILE_HOSTNAME",
    ];
    const missingConfiguration = requiredConfiguration.filter(
      (key) => !env[key],
    );

    if (missingConfiguration.length > 0) {
      console.error("Missing Worker configuration", missingConfiguration);
      return jsonResponse(
        { ok: false, error: "service_unavailable" },
        503,
        origin,
        env.ALLOWED_ORIGIN,
      );
    }

    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.startsWith("application/json")) {
      return jsonResponse(
        { ok: false, error: "invalid_content_type" },
        415,
        origin,
        env.ALLOWED_ORIGIN,
      );
    }

    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (contentLength > 20_000) {
      return jsonResponse(
        { ok: false, error: "request_too_large" },
        413,
        origin,
        env.ALLOWED_ORIGIN,
      );
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse(
        { ok: false, error: "invalid_json" },
        400,
        origin,
        env.ALLOWED_ORIGIN,
      );
    }

    if (cleanText(payload.website, 200)) {
      return jsonResponse(
        { ok: true },
        200,
        origin,
        env.ALLOWED_ORIGIN,
      );
    }

    const email = cleanText(payload.email, 254).toLowerCase();
    const language = cleanText(payload.language, 2).toLowerCase();
    const device = cleanText(payload.device, 120);
    const message = cleanText(payload.message, 1_000);
    const turnstileToken = cleanText(payload.turnstileToken, 2_048);
    const emailIsValid =
      !email.includes("\r") &&
      !email.includes("\n") &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (
      !emailIsValid ||
      !ALLOWED_LANGUAGES.has(language) ||
      payload.consent !== true ||
      !turnstileToken
    ) {
      return jsonResponse(
        { ok: false, error: "invalid_submission" },
        400,
        origin,
        env.ALLOWED_ORIGIN,
      );
    }

    const turnstile = await verifyTurnstile(
      request,
      env,
      turnstileToken,
    );

    if (turnstile.unavailable) {
      return jsonResponse(
        { ok: false, error: "verification_unavailable" },
        503,
        origin,
        env.ALLOWED_ORIGIN,
      );
    }

    if (!turnstile.valid) {
      return jsonResponse(
        { ok: false, error: "verification_failed" },
        400,
        origin,
        env.ALLOWED_ORIGIN,
      );
    }

    const emailText = [
      "Neue Beta-Anmeldung für OZLife",
      "",
      `E-Mail: ${email}`,
      `Sprache: ${language.toUpperCase()}`,
      `Gerät / iOS: ${device || "Nicht angegeben"}`,
      "",
      "Interesse an OZLife:",
      message || "Nicht angegeben",
      "",
      "Die Person hat der Verarbeitung ihrer Angaben für den Beta-Test zugestimmt.",
    ].join("\n");

    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify({
        from: env.BETA_SENDER,
        to: [env.BETA_RECIPIENT],
        reply_to: email,
        subject: `OZLife Beta-Anmeldung (${language.toUpperCase()})`,
        text: emailText,
      }),
    });

    if (!resendResponse.ok) {
      console.error("Resend request failed", resendResponse.status);
      return jsonResponse(
        { ok: false, error: "delivery_failed" },
        502,
        origin,
        env.ALLOWED_ORIGIN,
      );
    }

    return jsonResponse(
      { ok: true },
      200,
      origin,
      env.ALLOWED_ORIGIN,
    );
  },
};
