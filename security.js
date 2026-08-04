(() => {
  "use strict";

  const page = document.body.dataset.language || "en";
  const supportedLanguages = ["de", "en", "es", "it"];

  const languages = {
    de: { short: "DE", name: "Deutsch" },
    en: { short: "EN", name: "English" },
    es: { short: "ES", name: "Español" },
    it: { short: "IT", name: "Italiano" },
  };

  const copy = {
    de: {
      skip: "Zum Inhalt springen",
      menu: "Menü öffnen",
      language: "Sprache wählen",
      back: "Zurück zu Datenschutz & Sicherheit",
      nav: { scope: "Geltungsbereich", process: "Meldeweg", policy: "Richtlinie" },
      eyebrow: "Sicherheitsmeldungen",
      title: "Sensible Hinweise. <span>Nicht für die Öffentlichkeit.</span>",
      intro:
        "Wenn du ein mögliches Sicherheitsproblem bemerkst, teile technische Details, Zugangsdaten oder persönliche Informationen bitte nicht öffentlich. Fordere zuerst einen geeigneten privaten Kontaktweg an.",
      explore: "Sicher melden",
      statusLabel: "Grundregel",
      statusTitle: "Erst privat. Dann koordiniert.",
      statusText:
        "Ein öffentlicher GitHub Issue dient nur dazu, einen privaten Meldeweg anzufragen – ohne Schwachstellendetails oder Reproduktionsdaten.",
      signalNoDetails: "Keine Details im Issue",
      signalPrivate: "Privater Kontaktweg",
      signalCoordinated: "Koordiniert melden",
      scopeEyebrow: "Geltungsbereich",
      scopeTitle: "Öffentliche Experience. Private Produktionssysteme.",
      scopeIntro:
        "Dieses Repository zeigt Produktidee, Dokumentation und ausgewählte Medien. Es enthält weder die produktive Anwendung noch vertrauliche technische Systeme.",
      scope: [
        {
          number: "01",
          label: "ÖFFENTLICH",
          title: "Showcase & Dokumentation",
          text: "Die sichtbaren Inhalte dienen der Präsentation, Orientierung und Bewertung der OZLife-Experience.",
        },
        {
          number: "02",
          label: "NICHT ENTHALTEN",
          title: "Produktionsdetails bleiben privat",
          text: "Produktiver Quellcode, private Infrastruktur, Zugangsdaten und Details der Sicherheitsimplementierung sind nicht Teil dieses Repositorys.",
        },
      ],
      processEyebrow: "Sicherer Meldeweg",
      processTitle: "Drei Schritte. Keine sensiblen Daten im öffentlichen Issue.",
      processIntro:
        "Die erste Nachricht stellt nur den Kontakt her. Technische Einzelheiten folgen erst über einen vom Repository-Inhaber eingerichteten privaten Kanal.",
      steps: [
        {
          number: "01",
          title: "Neuen Issue öffnen",
          text: "Eröffne einen GitHub Issue ohne sensible oder technische Details.",
        },
        {
          number: "02",
          title: "Privaten Kontakt anfragen",
          text: "Schreibe lediglich, dass du ein mögliches Sicherheitsproblem privat melden möchtest.",
        },
        {
          number: "03",
          title: "Rückmeldung abwarten",
          text: "Warte, bis der Repository-Inhaber einen geeigneten privaten Kontaktweg organisiert.",
        },
      ],
      guardrailEyebrow: "Öffentliches Issue",
      guardrailTitle: "Nur die Türklingel – nicht der Bericht.",
      guardrailText:
        "Veröffentliche dort keine Schwachstellendetails, persönlichen Informationen, Zugangsdaten, Reproduktionsdaten oder anderes sensibles technisches Material.",
      safeLabel: "Direkt öffentlich möglich",
      safeText:
        "Allgemeine Korrekturen an der Dokumentation dürfen direkt gemeldet werden, sofern sie keine sensiblen Informationen enthalten.",
      policyEyebrow: "Verbindliche Richtlinie",
      policyTitle: "Der Meldeweg im Wortlaut.",
      policyIntro:
        "Die vollständige englische Originalfassung bleibt sichtbar, damit der Ablauf eindeutig und unverändert nachvollziehbar ist.",
      originalLabel: "Verbindliche Originalfassung · Englisch",
      reportEyebrow: "Privaten Meldeweg anfragen",
      reportTitle: "Du möchtest einen Sicherheitshinweis melden?",
      reportText:
        "Nutze den vorbereiteten Issue ausschließlich zur Kontaktaufnahme. Füge keine vertraulichen, persönlichen oder technischen Einzelheiten hinzu.",
      reportButton: "Privaten Meldeweg anfragen",
      privacy: "Datenschutz & Sicherheit",
      showcase: "Zurück zum Showcase",
      architecture: "Architektur",
      license: "Lizenz",
      footerNote: "Kleine tägliche Routinen für Mind, Body & Energy.",
      legal:
        "© 2026 Cloddy Web. Alle Rechte vorbehalten. Sensible Sicherheitsinformationen gehören nicht in öffentliche Issues.",
    },
    en: {
      skip: "Skip to content",
      menu: "Open menu",
      language: "Choose language",
      back: "Back to privacy & safety",
      nav: { scope: "Scope", process: "Reporting", policy: "Policy" },
      eyebrow: "Security reports",
      title: "Sensitive findings. <span>Not for public disclosure.</span>",
      intro:
        "If you notice a potential security concern, do not share technical details, credentials, or personal information publicly. Request an appropriate private contact route first.",
      explore: "Report safely",
      statusLabel: "Ground rule",
      statusTitle: "Private first. Coordinated next.",
      statusText:
        "A public GitHub issue is only used to request a private reporting route, without vulnerability details or reproduction data.",
      signalNoDetails: "No details in the issue",
      signalPrivate: "Private contact route",
      signalCoordinated: "Coordinated report",
      scopeEyebrow: "Scope",
      scopeTitle: "Public experience. Private production systems.",
      scopeIntro:
        "This repository presents the product idea, documentation, and selected media. It contains neither the production application nor confidential technical systems.",
      scope: [
        {
          number: "01",
          label: "PUBLIC",
          title: "Showcase & documentation",
          text: "The visible content supports presentation, orientation, and evaluation of the OZLife experience.",
        },
        {
          number: "02",
          label: "NOT INCLUDED",
          title: "Production details stay private",
          text: "Production source code, private infrastructure, credentials, and security implementation details are not part of this repository.",
        },
      ],
      processEyebrow: "Safe reporting route",
      processTitle: "Three steps. No sensitive data in the public issue.",
      processIntro:
        "The first message only establishes contact. Technical details follow through a private channel arranged by the repository owner.",
      steps: [
        {
          number: "01",
          title: "Open a new issue",
          text: "Open a GitHub issue without sensitive or technical details.",
        },
        {
          number: "02",
          title: "Request private contact",
          text: "Only state that you want to report a potential security concern privately.",
        },
        {
          number: "03",
          title: "Wait for a response",
          text: "Wait for the repository owner to arrange an appropriate private contact route.",
        },
      ],
      guardrailEyebrow: "Public issue",
      guardrailTitle: "Only the doorbell – not the report.",
      guardrailText:
        "Do not publish vulnerability details, personal information, credentials, reproduction data, or other sensitive technical material there.",
      safeLabel: "Safe to report publicly",
      safeText:
        "General documentation corrections may be reported directly when they contain no sensitive information.",
      policyEyebrow: "Binding policy",
      policyTitle: "The reporting process in full.",
      policyIntro:
        "The complete original wording remains visible so the process is clear, unchanged, and easy to verify.",
      originalLabel: "Binding original · English",
      reportEyebrow: "Request a private reporting route",
      reportTitle: "Want to report a security concern?",
      reportText:
        "Use the prepared issue only to establish contact. Do not include confidential, personal, or technical details.",
      reportButton: "Request a private reporting route",
      privacy: "Privacy & safety",
      showcase: "Back to the showcase",
      architecture: "Architecture",
      license: "License",
      footerNote: "Small daily routines for Mind, Body & Energy.",
      legal:
        "© 2026 Cloddy Web. All rights reserved. Sensitive security information does not belong in public issues.",
    },
    es: {
      skip: "Saltar al contenido",
      menu: "Abrir menú",
      language: "Elegir idioma",
      back: "Volver a privacidad & seguridad",
      nav: { scope: "Alcance", process: "Notificación", policy: "Política" },
      eyebrow: "Avisos de seguridad",
      title: "Información sensible. <span>No para divulgarla públicamente.</span>",
      intro:
        "Si detectas un posible problema de seguridad, no compartas públicamente detalles técnicos, credenciales ni información personal. Solicita primero una vía de contacto privada.",
      explore: "Notificar de forma segura",
      statusLabel: "Regla básica",
      statusTitle: "Primero en privado. Después, coordinado.",
      statusText:
        "Un issue público de GitHub solo sirve para solicitar una vía privada, sin detalles de vulnerabilidades ni datos de reproducción.",
      signalNoDetails: "Sin detalles en el issue",
      signalPrivate: "Contacto privado",
      signalCoordinated: "Aviso coordinado",
      scopeEyebrow: "Alcance",
      scopeTitle: "Experiencia pública. Sistemas de producción privados.",
      scopeIntro:
        "Este repositorio presenta la idea de producto, documentación y medios seleccionados. No contiene la aplicación de producción ni sistemas técnicos confidenciales.",
      scope: [
        {
          number: "01",
          label: "PÚBLICO",
          title: "Presentación & documentación",
          text: "El contenido visible sirve para presentar, orientar y evaluar la experiencia OZLife.",
        },
        {
          number: "02",
          label: "NO INCLUIDO",
          title: "La producción sigue siendo privada",
          text: "El código de producción, la infraestructura privada, las credenciales y los detalles de seguridad no forman parte de este repositorio.",
        },
      ],
      processEyebrow: "Vía segura de notificación",
      processTitle: "Tres pasos. Ningún dato sensible en el issue público.",
      processIntro:
        "El primer mensaje solo establece el contacto. Los detalles técnicos se comparten después mediante un canal privado organizado por el responsable del repositorio.",
      steps: [
        {
          number: "01",
          title: "Abrir un nuevo issue",
          text: "Abre un issue de GitHub sin información sensible ni detalles técnicos.",
        },
        {
          number: "02",
          title: "Solicitar contacto privado",
          text: "Indica únicamente que deseas comunicar un posible problema de seguridad en privado.",
        },
        {
          number: "03",
          title: "Esperar la respuesta",
          text: "Espera a que el responsable organice una vía privada adecuada.",
        },
      ],
      guardrailEyebrow: "Issue público",
      guardrailTitle: "Solo el timbre – no el informe.",
      guardrailText:
        "No publiques detalles de vulnerabilidades, información personal, credenciales, datos de reproducción ni otro material técnico sensible.",
      safeLabel: "Puede comunicarse públicamente",
      safeText:
        "Las correcciones generales de documentación pueden comunicarse directamente si no contienen información sensible.",
      policyEyebrow: "Política vinculante",
      policyTitle: "El proceso completo.",
      policyIntro:
        "La redacción original completa permanece visible para que el proceso sea claro, inalterado y fácil de verificar.",
      originalLabel: "Original vinculante · Inglés",
      reportEyebrow: "Solicitar una vía privada",
      reportTitle: "¿Quieres comunicar un problema de seguridad?",
      reportText:
        "Utiliza el issue preparado solo para establecer contacto. No incluyas detalles confidenciales, personales ni técnicos.",
      reportButton: "Solicitar una vía privada",
      privacy: "Privacidad & seguridad",
      showcase: "Volver a la presentación",
      architecture: "Arquitectura",
      license: "Licencia",
      footerNote: "Pequeñas rutinas diarias para Mind, Body & Energy.",
      legal:
        "© 2026 Cloddy Web. Todos los derechos reservados. La información sensible de seguridad no debe publicarse en issues públicos.",
    },
    it: {
      skip: "Vai al contenuto",
      menu: "Apri menu",
      language: "Scegli lingua",
      back: "Torna a privacy & sicurezza",
      nav: { scope: "Ambito", process: "Segnalazione", policy: "Politica" },
      eyebrow: "Segnalazioni di sicurezza",
      title: "Informazioni sensibili. <span>Non per la divulgazione pubblica.</span>",
      intro:
        "Se noti un possibile problema di sicurezza, non condividere pubblicamente dettagli tecnici, credenziali o informazioni personali. Richiedi prima un canale di contatto privato.",
      explore: "Segnala in sicurezza",
      statusLabel: "Regola di base",
      statusTitle: "Prima in privato. Poi in modo coordinato.",
      statusText:
        "Un issue pubblico di GitHub serve solo a richiedere un canale privato, senza dettagli sulle vulnerabilità o dati di riproduzione.",
      signalNoDetails: "Nessun dettaglio nell’issue",
      signalPrivate: "Contatto privato",
      signalCoordinated: "Segnalazione coordinata",
      scopeEyebrow: "Ambito",
      scopeTitle: "Esperienza pubblica. Sistemi di produzione privati.",
      scopeIntro:
        "Questo repository presenta l’idea di prodotto, la documentazione e contenuti selezionati. Non contiene l’applicazione di produzione né sistemi tecnici riservati.",
      scope: [
        {
          number: "01",
          label: "PUBBLICO",
          title: "Vetrina & documentazione",
          text: "I contenuti visibili servono a presentare, comprendere e valutare l’esperienza OZLife.",
        },
        {
          number: "02",
          label: "NON INCLUSO",
          title: "La produzione resta privata",
          text: "Codice di produzione, infrastruttura privata, credenziali e dettagli della sicurezza non fanno parte di questo repository.",
        },
      ],
      processEyebrow: "Canale sicuro",
      processTitle: "Tre passaggi. Nessun dato sensibile nell’issue pubblico.",
      processIntro:
        "Il primo messaggio serve solo a stabilire il contatto. I dettagli tecnici seguono tramite un canale privato predisposto dal responsabile del repository.",
      steps: [
        {
          number: "01",
          title: "Apri un nuovo issue",
          text: "Apri un issue GitHub senza informazioni sensibili o dettagli tecnici.",
        },
        {
          number: "02",
          title: "Richiedi un contatto privato",
          text: "Indica soltanto che desideri segnalare privatamente un possibile problema di sicurezza.",
        },
        {
          number: "03",
          title: "Attendi la risposta",
          text: "Attendi che il responsabile organizzi un canale di contatto privato adeguato.",
        },
      ],
      guardrailEyebrow: "Issue pubblico",
      guardrailTitle: "Solo il campanello – non il rapporto.",
      guardrailText:
        "Non pubblicare dettagli sulle vulnerabilità, informazioni personali, credenziali, dati di riproduzione o altro materiale tecnico sensibile.",
      safeLabel: "Può essere segnalato pubblicamente",
      safeText:
        "Le correzioni generali alla documentazione possono essere segnalate direttamente se non contengono informazioni sensibili.",
      policyEyebrow: "Politica vincolante",
      policyTitle: "Il processo completo.",
      policyIntro:
        "Il testo originale completo rimane visibile affinché il processo sia chiaro, invariato e facile da verificare.",
      originalLabel: "Originale vincolante · Inglese",
      reportEyebrow: "Richiedi un canale privato",
      reportTitle: "Vuoi segnalare un problema di sicurezza?",
      reportText:
        "Usa l’issue predisposto solo per stabilire il contatto. Non includere dettagli riservati, personali o tecnici.",
      reportButton: "Richiedi un canale privato",
      privacy: "Privacy & sicurezza",
      showcase: "Torna alla presentazione",
      architecture: "Architettura",
      license: "Licenza",
      footerNote: "Piccole routine quotidiane per Mind, Body & Energy.",
      legal:
        "© 2026 Cloddy Web. Tutti i diritti riservati. Le informazioni sensibili sulla sicurezza non appartengono agli issue pubblici.",
    },
  };

  const c = copy[page] || copy.en;
  const languageLinks = supportedLanguages
    .map(
      (language) => `
        <a href="../../${language}/security/" lang="${language}" ${
          language === page ? 'aria-current="page"' : ""
        }>
          <span>${languages[language].name}</span>
          <strong>${languages[language].short}</strong>
        </a>`,
    )
    .join("");

  const site = document.getElementById("site");

  site.innerHTML = `
    <a class="skip-link" href="#content">${c.skip}</a>
    <header class="site-header" data-header>
      <div class="nav-wrap">
        <a class="brand" href="../" aria-label="OZLife">
          <img src="../../assets/brand/app-icon-approved.png" alt="" width="38" height="38">
          <span>OZLife</span>
        </a>
        <button class="menu-toggle" type="button" aria-label="${c.menu}" aria-expanded="false" data-menu-toggle>
          <span></span>
        </button>
        <nav class="nav-links" aria-label="OZLife">
          <a href="#scope">${c.nav.scope}</a>
          <a href="#process">${c.nav.process}</a>
          <a href="#policy">${c.nav.policy}</a>
          <details class="language-menu">
            <summary aria-label="${c.language}">${languages[page].short}</summary>
            <div class="language-options">${languageLinks}</div>
          </details>
        </nav>
      </div>
    </header>

    <main id="content">
      <section class="license-hero security-hero shell" id="top">
        <div class="license-hero-copy">
          <a class="vision-back-link" href="../privacy/">${c.back}</a>
          <p class="eyebrow">${c.eyebrow}</p>
          <h1>${c.title}</h1>
          <p class="license-hero-intro">${c.intro}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#process">${c.explore}</a>
          </div>
        </div>
        <aside class="license-status-card security-status-card" aria-label="${c.statusLabel}">
          <div class="license-seal security-seal" aria-hidden="true">
            <span>!</span>
          </div>
          <div class="license-status-copy">
            <p>${c.statusLabel}</p>
            <h2>${c.statusTitle}</h2>
            <p>${c.statusText}</p>
          </div>
          <ul class="license-signals security-signals">
            <li><span aria-hidden="true"></span>${c.signalNoDetails}</li>
            <li><span aria-hidden="true"></span>${c.signalPrivate}</li>
            <li><span aria-hidden="true"></span>${c.signalCoordinated}</li>
          </ul>
        </aside>
      </section>

      <section class="license-section shell" id="scope">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">${c.scopeEyebrow}</p>
            <h2>${c.scopeTitle}</h2>
          </div>
          <p>${c.scopeIntro}</p>
        </div>
        <div class="license-overview security-scope reveal">
          ${c.scope
            .map(
              (item) => `
                <article>
                  <div>
                    <span>${item.number}</span>
                    <i aria-hidden="true"></i>
                  </div>
                  <p>${item.label}</p>
                  <h3>${item.title}</h3>
                  <p>${item.text}</p>
                </article>`,
            )
            .join("")}
        </div>
      </section>

      <section class="license-section shell" id="process">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">${c.processEyebrow}</p>
            <h2>${c.processTitle}</h2>
          </div>
          <p>${c.processIntro}</p>
        </div>
        <ol class="security-process reveal">
          ${c.steps
            .map(
              (step) => `
                <li>
                  <span>${step.number}</span>
                  <h3>${step.title}</h3>
                  <p>${step.text}</p>
                </li>`,
            )
            .join("")}
        </ol>
      </section>

      <section class="security-guardrail shell reveal">
        <div>
          <p class="eyebrow">${c.guardrailEyebrow}</p>
          <h2>${c.guardrailTitle}</h2>
          <p>${c.guardrailText}</p>
        </div>
        <aside>
          <span>${c.safeLabel}</span>
          <p>${c.safeText}</p>
        </aside>
      </section>

      <section class="license-section shell" id="policy">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">${c.policyEyebrow}</p>
            <h2>${c.policyTitle}</h2>
          </div>
          <p>${c.policyIntro}</p>
        </div>
        <article class="license-document security-policy reveal" lang="en">
          <header>
            <span>OZLife</span>
            <strong>${c.originalLabel}</strong>
          </header>
          <div>
            <h3>Security</h3>
            <section>
              <h4>Scope</h4>
              <p>This public showcase does not contain production application source code, private infrastructure, credentials, or security implementation details.</p>
            </section>
            <section>
              <h4>Reporting sensitive information</h4>
              <p>Do not publish vulnerability details, personal information, credentials, reproduction data, or other sensitive technical material in a public issue.</p>
              <p>To request a private reporting path:</p>
              <ol>
                <li>Open a GitHub Issue without sensitive or technical details.</li>
                <li>State that you want to report a potential security concern privately.</li>
                <li>Wait for the repository owner to arrange an appropriate private contact route.</li>
              </ol>
              <p>General documentation corrections that contain no sensitive information may be reported directly in GitHub Issues.</p>
            </section>
          </div>
        </article>
      </section>

      <section class="license-inquiry security-report shell reveal">
        <div>
          <p class="eyebrow">${c.reportEyebrow}</p>
          <h2>${c.reportTitle}</h2>
          <p>${c.reportText}</p>
        </div>
        <div class="hero-actions">
          <a
            class="button button-primary"
            href="https://github.com/live-oz/ozlife-experience/issues/new?title=Private%20security%20reporting%20path&amp;body=I%20would%20like%20to%20report%20a%20potential%20security%20concern%20privately.%20I%20have%20not%20included%20sensitive%20or%20technical%20details%20in%20this%20issue."
          >${c.reportButton}</a>
          <a class="button button-secondary" href="../privacy/">${c.privacy}</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-wrap shell">
        <div>
          <p class="footer-brand">OZLife</p>
          <p class="footer-note">${c.footerNote}</p>
          <p class="footer-legal">${c.legal}</p>
        </div>
        <nav class="footer-links" aria-label="OZLife">
          <a href="../">${c.showcase}</a>
          <a href="../architecture/">${c.architecture}</a>
          <a href="../license/">${c.license}</a>
        </nav>
      </div>
    </footer>
  `;

  try {
    localStorage.setItem("ozlife-language", page);
  } catch (_error) {
    // Language preference is optional; the page works without storage.
  }

  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navLinks = document.querySelectorAll(".nav-links > a");

  const closeMenu = () => {
    document.body.classList.remove("nav-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
})();
