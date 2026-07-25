# OZLife beta form worker

This directory mirrors the Cloudflare Worker deployed for the private beta form.
The Worker accepts requests only from the public showcase origin, validates the
Cloudflare Turnstile token, validates and limits form fields, and forwards the
submission through Resend without creating a database record.

Runtime configuration:

- `ALLOWED_ORIGIN`
- `BETA_RECIPIENT`
- `BETA_SENDER`
- `RESEND_API_KEY` (secret)
- `TURNSTILE_HOSTNAME`
- `TURNSTILE_SECRET_KEY` (secret)

Secrets must remain in the Cloudflare Worker environment and must never be
committed to this repository.
