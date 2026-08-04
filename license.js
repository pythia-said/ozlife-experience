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
      back: "Zurück zum Showcase",
      nav: {
        overview: "Überblick",
        terms: "Bedingungen",
        inquiry: "Anfragen",
      },
      eyebrow: "Nutzungsrechte & Herkunft",
      title: "Offen zum Ansehen. <span>Nicht frei zur Verwendung.</span>",
      intro:
        "OZLife zeigt seine Produktidee öffentlich, bleibt aber ein geschütztes Werk. Diese Seite macht verständlich, was du ansehen darfst, welche Rechte vorbehalten bleiben und wie du eine Nutzung anfragen kannst.",
      explore: "Lizenz verstehen",
      statusLabel: "Lizenzstatus",
      statusTitle: "Alle Rechte vorbehalten.",
      statusText:
        "Öffentlich sichtbar bedeutet nicht Open Source. Quellcode, Texte, Gestaltung, Konzepte und Medien bleiben geschützt.",
      signalPublic: "Öffentlich einsehbar",
      signalProtected: "Geschützt",
      signalPrivate: "Produktion privat",
      overviewEyebrow: "Kurz gesagt",
      overviewTitle: "Ein klarer Rahmen für ein öffentliches Schaufenster.",
      overviewIntro:
        "Die Experience darf betrachtet und bewertet werden. Weitergehende Nutzung braucht vorher die ausdrückliche Zustimmung von Cloddy Web.",
      overview: [
        {
          number: "01",
          label: "ANSEHEN",
          title: "Erleben & bewerten",
          text: "Du darfst die öffentliche Experience und das Repository ansehen, um OZLife kennenzulernen und zu bewerten.",
        },
        {
          number: "02",
          label: "GESCHÜTZT",
          title: "Nicht übernehmen",
          text: "Kopieren, verändern, veröffentlichen, verteilen, bereitstellen oder kommerziell nutzen ist nicht automatisch erlaubt.",
        },
        {
          number: "03",
          label: "ANFRAGEN",
          title: "Vorher sprechen",
          text: "Wenn du Inhalte oder Bestandteile nutzen möchtest, frage bitte vorab nach einer schriftlichen Erlaubnis.",
        },
      ],
      termsEyebrow: "Verbindlicher Lizenztext",
      termsTitle: "Die Bedingungen im Wortlaut.",
      termsIntro:
        "Damit es keine Unklarheit zwischen einer Zusammenfassung und den tatsächlichen Bedingungen gibt, steht hier die vollständige englische Originalfassung.",
      originalLabel: "Verbindliche Originalfassung · Englisch",
      inquiryEyebrow: "Nutzung anfragen",
      inquiryTitle: "Du möchtest etwas verwenden? Lass uns vorher sprechen.",
      inquiryText:
        "Beschreibe kurz, welchen Bestandteil du in welchem Kontext verwenden möchtest. Eine Anfrage erteilt noch keine Lizenz; eine Erlaubnis muss ausdrücklich und schriftlich erfolgen.",
      inquiryButton: "Lizenzanfrage auf GitHub",
      showcase: "Zurück zum Showcase",
      footerNote: "Kleine tägliche Routinen für Mind, Body & Energy.",
      privacy: "Datenschutz & Sicherheit",
      architecture: "Architektur",
      license: "Lizenz",
      legal:
        "© 2026 Cloddy Web. Alle Rechte vorbehalten. Die Produktionsarchitektur und der Quellcode von OZLife bleiben privat.",
    },
    en: {
      skip: "Skip to content",
      menu: "Open menu",
      language: "Choose language",
      back: "Back to the showcase",
      nav: {
        overview: "Overview",
        terms: "Terms",
        inquiry: "Inquiries",
      },
      eyebrow: "Usage rights & authorship",
      title: "Open to view. <span>Not free to use.</span>",
      intro:
        "OZLife presents its product idea publicly while remaining a protected work. This page explains what you may view, which rights remain reserved, and how to request permission.",
      explore: "Understand the license",
      statusLabel: "License status",
      statusTitle: "All rights reserved.",
      statusText:
        "Publicly visible does not mean open source. Source code, copy, design, concepts, and media remain protected.",
      signalPublic: "Publicly viewable",
      signalProtected: "Protected",
      signalPrivate: "Production private",
      overviewEyebrow: "In short",
      overviewTitle: "A clear framework for a public showcase.",
      overviewIntro:
        "The experience may be viewed and evaluated. Any further use requires prior, explicit permission from Cloddy Web.",
      overview: [
        {
          number: "01",
          label: "VIEW",
          title: "Explore & evaluate",
          text: "You may view the public experience and repository to learn about and evaluate OZLife.",
        },
        {
          number: "02",
          label: "PROTECTED",
          title: "Do not reuse",
          text: "Copying, modifying, publishing, distributing, deploying, or commercially exploiting the work is not automatically permitted.",
        },
        {
          number: "03",
          label: "ASK",
          title: "Talk to us first",
          text: "If you want to use any content or component, request written permission before doing so.",
        },
      ],
      termsEyebrow: "Binding license text",
      termsTitle: "The terms in full.",
      termsIntro:
        "To avoid ambiguity between a summary and the actual terms, the complete original wording appears below.",
      originalLabel: "Binding original · English",
      inquiryEyebrow: "Request permission",
      inquiryTitle: "Want to use something? Let’s talk first.",
      inquiryText:
        "Briefly describe which part you want to use and in what context. An inquiry does not grant a license; permission must be explicit and in writing.",
      inquiryButton: "Open a licensing inquiry",
      showcase: "Back to the showcase",
      footerNote: "Small daily routines for Mind, Body & Energy.",
      privacy: "Privacy & safety",
      architecture: "Architecture",
      license: "License",
      legal:
        "© 2026 Cloddy Web. All rights reserved. OZLife’s production architecture and source code remain private.",
    },
    es: {
      skip: "Saltar al contenido",
      menu: "Abrir menú",
      language: "Elegir idioma",
      back: "Volver a la presentación",
      nav: {
        overview: "Resumen",
        terms: "Condiciones",
        inquiry: "Consultas",
      },
      eyebrow: "Derechos de uso & autoría",
      title: "Abierto para verlo. <span>No para usarlo libremente.</span>",
      intro:
        "OZLife presenta públicamente su idea de producto, pero sigue siendo una obra protegida. Esta página explica qué puedes consultar, qué derechos siguen reservados y cómo solicitar permiso.",
      explore: "Entender la licencia",
      statusLabel: "Estado de la licencia",
      statusTitle: "Todos los derechos reservados.",
      statusText:
        "Visible públicamente no significa código abierto. El código, los textos, el diseño, los conceptos y los medios siguen protegidos.",
      signalPublic: "Consulta pública",
      signalProtected: "Protegido",
      signalPrivate: "Producción privada",
      overviewEyebrow: "En resumen",
      overviewTitle: "Un marco claro para una presentación pública.",
      overviewIntro:
        "La experiencia puede consultarse y evaluarse. Cualquier otro uso requiere el permiso previo y explícito de Cloddy Web.",
      overview: [
        {
          number: "01",
          label: "CONSULTAR",
          title: "Explorar & evaluar",
          text: "Puedes consultar la experiencia pública y el repositorio para conocer y evaluar OZLife.",
        },
        {
          number: "02",
          label: "PROTEGIDO",
          title: "No reutilizar",
          text: "Copiar, modificar, publicar, distribuir, desplegar o explotar comercialmente la obra no está permitido automáticamente.",
        },
        {
          number: "03",
          label: "SOLICITAR",
          title: "Hablemos primero",
          text: "Si quieres utilizar algún contenido o componente, solicita previamente una autorización por escrito.",
        },
      ],
      termsEyebrow: "Texto vinculante de la licencia",
      termsTitle: "Las condiciones completas.",
      termsIntro:
        "Para evitar diferencias entre un resumen y las condiciones reales, a continuación aparece la redacción original completa en inglés.",
      originalLabel: "Original vinculante · Inglés",
      inquiryEyebrow: "Solicitar permiso",
      inquiryTitle: "¿Quieres utilizar algo? Hablemos primero.",
      inquiryText:
        "Describe brevemente qué parte quieres utilizar y en qué contexto. Una consulta no concede una licencia; el permiso debe ser explícito y por escrito.",
      inquiryButton: "Abrir una consulta de licencia",
      showcase: "Volver a la presentación",
      footerNote: "Pequeñas rutinas diarias para Mind, Body & Energy.",
      privacy: "Privacidad & seguridad",
      architecture: "Arquitectura",
      license: "Licencia",
      legal:
        "© 2026 Cloddy Web. Todos los derechos reservados. La arquitectura de producción y el código fuente de OZLife siguen siendo privados.",
    },
    it: {
      skip: "Vai al contenuto",
      menu: "Apri menu",
      language: "Scegli lingua",
      back: "Torna alla presentazione",
      nav: {
        overview: "Panoramica",
        terms: "Condizioni",
        inquiry: "Richieste",
      },
      eyebrow: "Diritti d’uso & paternità",
      title: "Aperto alla visione. <span>Non al libero utilizzo.</span>",
      intro:
        "OZLife presenta pubblicamente la propria idea di prodotto, restando un’opera protetta. Questa pagina chiarisce cosa puoi consultare, quali diritti restano riservati e come richiedere un’autorizzazione.",
      explore: "Capire la licenza",
      statusLabel: "Stato della licenza",
      statusTitle: "Tutti i diritti riservati.",
      statusText:
        "Visibile pubblicamente non significa open source. Codice, testi, design, concetti e contenuti multimediali restano protetti.",
      signalPublic: "Consultabile pubblicamente",
      signalProtected: "Protetto",
      signalPrivate: "Produzione privata",
      overviewEyebrow: "In breve",
      overviewTitle: "Un quadro chiaro per una vetrina pubblica.",
      overviewIntro:
        "L’esperienza può essere consultata e valutata. Qualsiasi altro utilizzo richiede il previo ed esplicito consenso di Cloddy Web.",
      overview: [
        {
          number: "01",
          label: "CONSULTARE",
          title: "Esplorare & valutare",
          text: "Puoi consultare l’esperienza pubblica e il repository per conoscere e valutare OZLife.",
        },
        {
          number: "02",
          label: "PROTETTO",
          title: "Non riutilizzare",
          text: "Copiare, modificare, pubblicare, distribuire, distribuire online o sfruttare commercialmente l’opera non è automaticamente consentito.",
        },
        {
          number: "03",
          label: "RICHIEDERE",
          title: "Parliamone prima",
          text: "Se desideri utilizzare un contenuto o un componente, richiedi prima un’autorizzazione scritta.",
        },
      ],
      termsEyebrow: "Testo vincolante della licenza",
      termsTitle: "Le condizioni complete.",
      termsIntro:
        "Per evitare differenze tra una sintesi e le condizioni effettive, di seguito è riportato il testo originale completo in inglese.",
      originalLabel: "Originale vincolante · Inglese",
      inquiryEyebrow: "Richiedere un’autorizzazione",
      inquiryTitle: "Vuoi utilizzare qualcosa? Parliamone prima.",
      inquiryText:
        "Descrivi brevemente quale parte vuoi utilizzare e in quale contesto. Una richiesta non concede una licenza; l’autorizzazione deve essere esplicita e scritta.",
      inquiryButton: "Apri una richiesta di licenza",
      showcase: "Torna alla presentazione",
      footerNote: "Piccole routine quotidiane per Mind, Body & Energy.",
      privacy: "Privacy & sicurezza",
      architecture: "Architettura",
      license: "Licenza",
      legal:
        "© 2026 Cloddy Web. Tutti i diritti riservati. L’architettura di produzione e il codice sorgente di OZLife restano privati.",
    },
  };

  const licenseParagraphs = [
    "OZLife Showcase License",
    "Copyright © 2026 Cloddy Web<br>All rights reserved.",
    "The contents of this repository are made publicly available solely for viewing, demonstration, and evaluation purposes.",
    "No permission is granted to copy, modify, distribute, sublicense, publish, deploy, sell, commercially exploit, or otherwise use the source code, documentation, visual assets, designs, concepts, or substantial portions of this repository without prior written permission from the copyright holder.",
    "The production source code of OZLife is not included in this repository.",
    "Any rights technically required for viewing or forking this public repository through GitHub are limited to the rights provided by GitHub's Terms of Service and do not constitute permission for any other use.",
    "For licensing inquiries, please open a GitHub issue in this repository.",
  ];

  const c = copy[page] || copy.en;
  const languageLinks = supportedLanguages
    .map(
      (language) => `
        <a href="../../${language}/license/" lang="${language}" ${
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
          <a href="#overview">${c.nav.overview}</a>
          <a href="#terms">${c.nav.terms}</a>
          <a href="#inquiry">${c.nav.inquiry}</a>
          <details class="language-menu">
            <summary aria-label="${c.language}">${languages[page].short}</summary>
            <div class="language-options">${languageLinks}</div>
          </details>
        </nav>
      </div>
    </header>

    <main id="content">
      <section class="license-hero shell" id="top">
        <div class="license-hero-copy">
          <a class="vision-back-link" href="../">${c.back}</a>
          <p class="eyebrow">${c.eyebrow}</p>
          <h1>${c.title}</h1>
          <p class="license-hero-intro">${c.intro}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#overview">${c.explore}</a>
          </div>
        </div>
        <aside class="license-status-card" aria-label="${c.statusLabel}">
          <div class="license-seal" aria-hidden="true">
            <span>©</span>
          </div>
          <div class="license-status-copy">
            <p>${c.statusLabel}</p>
            <h2>${c.statusTitle}</h2>
            <p>${c.statusText}</p>
          </div>
          <ul class="license-signals">
            <li><span aria-hidden="true"></span>${c.signalPublic}</li>
            <li><span aria-hidden="true"></span>${c.signalProtected}</li>
            <li><span aria-hidden="true"></span>${c.signalPrivate}</li>
          </ul>
        </aside>
      </section>

      <section class="license-section shell" id="overview">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">${c.overviewEyebrow}</p>
            <h2>${c.overviewTitle}</h2>
          </div>
          <p>${c.overviewIntro}</p>
        </div>
        <div class="license-overview reveal">
          ${c.overview
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

      <section class="license-section shell" id="terms">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">${c.termsEyebrow}</p>
            <h2>${c.termsTitle}</h2>
          </div>
          <p>${c.termsIntro}</p>
        </div>
        <article class="license-document reveal" lang="en">
          <header>
            <span>OZLife</span>
            <strong>${c.originalLabel}</strong>
          </header>
          <div>
            ${licenseParagraphs
              .map((paragraph, index) =>
                index === 0 ? `<h3>${paragraph}</h3>` : `<p>${paragraph}</p>`,
              )
              .join("")}
          </div>
        </article>
      </section>

      <section class="license-inquiry shell reveal" id="inquiry">
        <div>
          <p class="eyebrow">${c.inquiryEyebrow}</p>
          <h2>${c.inquiryTitle}</h2>
          <p>${c.inquiryText}</p>
        </div>
        <div class="hero-actions">
          <a
            class="button button-primary"
            href="https://github.com/live-oz/ozlife-experience/issues/new?title=Licensing%20inquiry"
          >${c.inquiryButton}</a>
          <a class="button button-secondary" href="../">${c.showcase}</a>
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
          <a href="../privacy/">${c.privacy}</a>
          <a href="../architecture/">${c.architecture}</a>
          <a href="./" aria-current="page">${c.license}</a>
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
