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
        foundation: "Fundament",
        experiences: "Erlebnisse",
        boundaries: "Grenzen",
      },
      eyebrow: "Öffentlicher technischer Überblick",
      title: "Nativ im Kern. <span>Lokal gedacht.</span>",
      intro:
        "OZLife ist eine native iOS-App in Swift und SwiftUI. Die Architektur hält tägliche Erlebnisse nah am Gerät und erweitert sie nur dort um Apple-Plattformfunktionen, wo sie sinnvoll und vom Nutzer steuerbar sind.",
      explore: "Architektur entdecken",
      visualLabel: "Öffentliche Systemansicht",
      visualCore: "Native iOS-App",
      visualStack: "Swift + SwiftUI",
      visualLocal: "Lokale Inhalte & Fortschritt",
      visualOptional: "Optionale Apple-Integrationen",
      visualStatus: "Produktgrenzen · keine Implementierungsdetails",
      foundationEyebrow: "Das Fundament",
      foundationTitle: "Eine bewusste, klar begrenzte Grundlage.",
      foundationIntro:
        "Der öffentliche Überblick konzentriert sich auf die Entscheidungen, die das Produkterlebnis prägen – ohne private Produktionsdetails offenzulegen.",
      foundations: [
        {
          key: "native",
          number: "01",
          label: "Plattform",
          title: "Natives iOS",
          text: "Swift und SwiftUI bilden das öffentliche technische Fundament. Ausgewählte plattformspezifische Interaktionen können bei Bedarf native iOS-Brücken nutzen.",
        },
        {
          key: "local",
          number: "02",
          label: "Gerät",
          title: "Lokal ausgerichtet",
          text: "Strukturierte Produktinhalte und persönlicher Fortschritt sind in erster Linie für die lokale Nutzung auf dem Gerät konzipiert.",
        },
        {
          key: "optional",
          number: "03",
          label: "Erweiterungen",
          title: "Bewusst optional",
          text: "Ausgewählte Apple-Plattformintegrationen erweitern einzelne Erlebnisse unter der Kontrolle des Nutzers.",
        },
      ],
      experiencesEyebrow: "Produktsystem",
      experiencesTitle: "Sieben Erlebnisse. Ein gemeinsamer Kern.",
      experiencesIntro:
        "Daily verbindet den Tag, während Mind, Body, Energy, Diary, Nutrition und Garage jeweils eine eigene Rolle im OZLife-Erlebnis übernehmen.",
      coreLabel: "Gemeinsamer Kern",
      coreTitle: "OZLife",
      coreMeta: "Native iOS · Swift · SwiftUI",
      experiencesLabel: "Produkterlebnisse",
      modules: [
        { name: "Daily", note: "Tagesrhythmus" },
        { name: "Mind", note: "Fokus & Reflexion" },
        { name: "Body", note: "Bewegung" },
        { name: "Energy", note: "Muster & Check-ins" },
        { name: "Diary", note: "Persönliche Einträge" },
        { name: "Nutrition", note: "Ernährung" },
        { name: "Garage", note: "Fortschritt & Avatare" },
      ],
      foundationLabel: "Produktnahe Grundlagen",
      localTitle: "Lokale Inhalte und Fortschritt",
      localText: "Für die Nutzung auf dem Gerät konzipiert.",
      appleTitle: "Apple-Plattformintegrationen",
      appleText: "Optional und vom Nutzer gesteuert.",
      mapNote:
        "Diese Darstellung zeigt Produktgrenzen und Beziehungen. Sie ist bewusst keine Abbildung der privaten Produktionsarchitektur.",
      boundariesEyebrow: "Bewusster Abstraktionsgrad",
      boundariesTitle: "Klar genug, um das Produkt zu verstehen. Begrenzt genug, um Privates privat zu halten.",
      boundariesText:
        "Die öffentliche Architektur macht die Produktausrichtung nachvollziehbar, ohne interne Umsetzung, Infrastruktur oder Sicherheitsmechanismen zu veröffentlichen.",
      shownLabel: "Was diese Ansicht zeigt",
      shown: [
        "Öffentliche Plattformwahl",
        "Erlebnisbereiche und Produktgrenzen",
        "Lokale Ausrichtung und optionale Erweiterungen",
      ],
      privateLabel: "Was bewusst privat bleibt",
      private: [
        "Konkrete Klassen oder Quelldateien",
        "Framework-Verkabelung",
        "Persistenzschlüssel oder Datenbankschemata",
        "API-Endpunkte oder private Infrastruktur",
        "Berechtigungen, Signierung, Käufe oder interne Kennungen",
        "Details der Sicherheitsimplementierung",
      ],
      closingEyebrow: "Produkt vor Implementierung",
      closingTitle: "Die Architektur unterstützt das Erlebnis – sie drängt sich nicht davor.",
      closingText:
        "OZLife soll sich ruhig, direkt und persönlich anfühlen. Der öffentliche technische Überblick zeigt genau so viel Struktur, wie nötig ist, um diese Richtung zu verstehen.",
      showcase: "OZLife im Showcase erleben",
      sourceDoc: "Technische Kurzfassung lesen",
      footerNote: "Kleine tägliche Routinen für Mind, Body & Energy.",
      vision: "Produktvision",
      privacy: "Datenschutz & Sicherheit",
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
        foundation: "Foundation",
        experiences: "Experiences",
        boundaries: "Boundaries",
      },
      eyebrow: "Public technical overview",
      title: "Native at the core. <span>Local by design.</span>",
      intro:
        "OZLife is a native iOS app built with Swift and SwiftUI. Its architecture keeps daily experiences close to the device and extends them with Apple platform capabilities only where they are useful and remain under user control.",
      explore: "Explore the architecture",
      visualLabel: "Public system view",
      visualCore: "Native iOS app",
      visualStack: "Swift + SwiftUI",
      visualLocal: "Local content & progress",
      visualOptional: "Optional Apple integrations",
      visualStatus: "Product boundaries · no implementation detail",
      foundationEyebrow: "The foundation",
      foundationTitle: "A deliberate, clearly bounded foundation.",
      foundationIntro:
        "This public overview focuses on the choices that shape the product experience without exposing private production detail.",
      foundations: [
        {
          key: "native",
          number: "01",
          label: "Platform",
          title: "Native iOS",
          text: "Swift and SwiftUI form the public technical foundation. Selected platform-specific interactions may use native iOS bridges where needed.",
        },
        {
          key: "local",
          number: "02",
          label: "Device",
          title: "Local-first",
          text: "Structured product content and personal progress are designed primarily for local, on-device use.",
        },
        {
          key: "optional",
          number: "03",
          label: "Extensions",
          title: "Purposefully optional",
          text: "Selected Apple platform integrations extend individual experiences while remaining under user control.",
        },
      ],
      experiencesEyebrow: "Product system",
      experiencesTitle: "Seven experiences. One shared core.",
      experiencesIntro:
        "Daily connects the day, while Mind, Body, Energy, Diary, Nutrition, and Garage each play a distinct role in the OZLife experience.",
      coreLabel: "Shared core",
      coreTitle: "OZLife",
      coreMeta: "Native iOS · Swift · SwiftUI",
      experiencesLabel: "Product experiences",
      modules: [
        { name: "Daily", note: "Daily rhythm" },
        { name: "Mind", note: "Focus & reflection" },
        { name: "Body", note: "Movement" },
        { name: "Energy", note: "Patterns & check-ins" },
        { name: "Diary", note: "Personal entries" },
        { name: "Nutrition", note: "Nutrition" },
        { name: "Garage", note: "Progress & avatars" },
      ],
      foundationLabel: "Product-level foundations",
      localTitle: "Local content and progress",
      localText: "Designed for on-device use.",
      appleTitle: "Apple platform integrations",
      appleText: "Optional and user-controlled.",
      mapNote:
        "This view shows product boundaries and relationships. It is intentionally not a map of the private production architecture.",
      boundariesEyebrow: "Deliberate abstraction",
      boundariesTitle: "Clear enough to understand the product. Bounded enough to keep private work private.",
      boundariesText:
        "The public architecture makes the product direction understandable without publishing internal implementation, infrastructure, or security mechanisms.",
      shownLabel: "What this view shows",
      shown: [
        "Public platform choice",
        "Experience areas and product boundaries",
        "Local orientation and optional extensions",
      ],
      privateLabel: "What deliberately remains private",
      private: [
        "Concrete classes or source files",
        "Framework wiring",
        "Persistence keys or database schemas",
        "API endpoints or private infrastructure",
        "Entitlements, signing, purchases, or internal identifiers",
        "Security implementation details",
      ],
      closingEyebrow: "Product before implementation",
      closingTitle: "The architecture supports the experience. It does not stand in front of it.",
      closingText:
        "OZLife should feel calm, direct, and personal. This public technical overview reveals exactly enough structure to make that direction understandable.",
      showcase: "Experience OZLife in the showcase",
      sourceDoc: "Read the technical summary",
      footerNote: "Small daily routines for Mind, Body & Energy.",
      vision: "Product vision",
      privacy: "Privacy & safety",
      license: "License",
      legal:
        "© 2026 Cloddy Web. All rights reserved. The OZLife production architecture and source code remain private.",
    },
    es: {
      skip: "Saltar al contenido",
      menu: "Abrir menú",
      language: "Elegir idioma",
      back: "Volver a la presentación",
      nav: {
        foundation: "Base",
        experiences: "Experiencias",
        boundaries: "Límites",
      },
      eyebrow: "Resumen técnico público",
      title: "Nativa en el núcleo. <span>Local por diseño.</span>",
      intro:
        "OZLife es una aplicación nativa para iOS creada con Swift y SwiftUI. Su arquitectura mantiene las experiencias diarias cerca del dispositivo y las amplía con funciones de la plataforma Apple solo cuando aportan valor y permanecen bajo el control del usuario.",
      explore: "Explorar la arquitectura",
      visualLabel: "Vista pública del sistema",
      visualCore: "Aplicación iOS nativa",
      visualStack: "Swift + SwiftUI",
      visualLocal: "Contenido y progreso locales",
      visualOptional: "Integraciones Apple opcionales",
      visualStatus: "Límites del producto · sin detalles de implementación",
      foundationEyebrow: "La base",
      foundationTitle: "Una base deliberada y claramente delimitada.",
      foundationIntro:
        "Este resumen público se centra en las decisiones que dan forma a la experiencia sin exponer detalles privados de producción.",
      foundations: [
        {
          key: "native",
          number: "01",
          label: "Plataforma",
          title: "iOS nativo",
          text: "Swift y SwiftUI forman la base técnica pública. Algunas interacciones específicas de la plataforma pueden usar puentes nativos de iOS cuando sea necesario.",
        },
        {
          key: "local",
          number: "02",
          label: "Dispositivo",
          title: "Orientación local",
          text: "El contenido estructurado del producto y el progreso personal están diseñados principalmente para el uso local en el dispositivo.",
        },
        {
          key: "optional",
          number: "03",
          label: "Extensiones",
          title: "Opcional a propósito",
          text: "Algunas integraciones con la plataforma Apple amplían experiencias concretas y permanecen bajo el control del usuario.",
        },
      ],
      experiencesEyebrow: "Sistema de producto",
      experiencesTitle: "Siete experiencias. Un núcleo compartido.",
      experiencesIntro:
        "Daily conecta el día, mientras Mind, Body, Energy, Diary, Nutrition y Garage cumplen funciones distintas dentro de OZLife.",
      coreLabel: "Núcleo compartido",
      coreTitle: "OZLife",
      coreMeta: "iOS nativo · Swift · SwiftUI",
      experiencesLabel: "Experiencias de producto",
      modules: [
        { name: "Daily", note: "Ritmo diario" },
        { name: "Mind", note: "Enfoque y reflexión" },
        { name: "Body", note: "Movimiento" },
        { name: "Energy", note: "Patrones y registros" },
        { name: "Diary", note: "Entradas personales" },
        { name: "Nutrition", note: "Nutrición" },
        { name: "Garage", note: "Progreso y avatares" },
      ],
      foundationLabel: "Bases del producto",
      localTitle: "Contenido y progreso locales",
      localText: "Diseñados para el uso en el dispositivo.",
      appleTitle: "Integraciones con la plataforma Apple",
      appleText: "Opcionales y bajo control del usuario.",
      mapNote:
        "Esta vista muestra límites y relaciones del producto. No pretende representar la arquitectura privada de producción.",
      boundariesEyebrow: "Abstracción deliberada",
      boundariesTitle: "Clara para entender el producto. Limitada para proteger el trabajo privado.",
      boundariesText:
        "La arquitectura pública hace comprensible la dirección del producto sin publicar la implementación interna, la infraestructura ni los mecanismos de seguridad.",
      shownLabel: "Lo que muestra esta vista",
      shown: [
        "Elección pública de plataforma",
        "Áreas de experiencia y límites del producto",
        "Orientación local y extensiones opcionales",
      ],
      privateLabel: "Lo que permanece privado",
      private: [
        "Clases concretas o archivos fuente",
        "Conexiones internas de frameworks",
        "Claves de persistencia o esquemas de base de datos",
        "Endpoints de API o infraestructura privada",
        "Permisos, firma, compras o identificadores internos",
        "Detalles de implementación de seguridad",
      ],
      closingEyebrow: "El producto antes que la implementación",
      closingTitle: "La arquitectura apoya la experiencia. No se interpone delante de ella.",
      closingText:
        "OZLife debe sentirse serena, directa y personal. Este resumen técnico público muestra la estructura justa para entender esa dirección.",
      showcase: "Descubrir OZLife en la presentación",
      sourceDoc: "Leer el resumen técnico",
      footerNote: "Pequeñas rutinas diarias para Mind, Body y Energy.",
      vision: "Visión del producto",
      privacy: "Privacidad y seguridad",
      license: "Licencia",
      legal:
        "© 2026 Cloddy Web. Todos los derechos reservados. La arquitectura de producción y el código fuente de OZLife permanecen privados.",
    },
    it: {
      skip: "Vai al contenuto",
      menu: "Apri menu",
      language: "Scegli la lingua",
      back: "Torna alla presentazione",
      nav: {
        foundation: "Fondamenta",
        experiences: "Esperienze",
        boundaries: "Confini",
      },
      eyebrow: "Panoramica tecnica pubblica",
      title: "Nativa nel cuore. <span>Locale per scelta.</span>",
      intro:
        "OZLife è un'app iOS nativa sviluppata con Swift e SwiftUI. La sua architettura mantiene le esperienze quotidiane vicine al dispositivo e le estende con funzioni della piattaforma Apple solo quando sono utili e restano sotto il controllo dell'utente.",
      explore: "Esplora l'architettura",
      visualLabel: "Vista pubblica del sistema",
      visualCore: "App iOS nativa",
      visualStack: "Swift + SwiftUI",
      visualLocal: "Contenuti e progressi locali",
      visualOptional: "Integrazioni Apple facoltative",
      visualStatus: "Confini del prodotto · nessun dettaglio implementativo",
      foundationEyebrow: "Le fondamenta",
      foundationTitle: "Una base intenzionale e ben delimitata.",
      foundationIntro:
        "Questa panoramica pubblica si concentra sulle scelte che danno forma all'esperienza senza esporre dettagli privati di produzione.",
      foundations: [
        {
          key: "native",
          number: "01",
          label: "Piattaforma",
          title: "iOS nativo",
          text: "Swift e SwiftUI costituiscono la base tecnica pubblica. Alcune interazioni specifiche della piattaforma possono usare bridge iOS nativi quando necessario.",
        },
        {
          key: "local",
          number: "02",
          label: "Dispositivo",
          title: "Orientamento locale",
          text: "I contenuti strutturati del prodotto e i progressi personali sono pensati principalmente per l'uso locale sul dispositivo.",
        },
        {
          key: "optional",
          number: "03",
          label: "Estensioni",
          title: "Facoltativo per scelta",
          text: "Alcune integrazioni con la piattaforma Apple estendono singole esperienze e restano sotto il controllo dell'utente.",
        },
      ],
      experiencesEyebrow: "Sistema di prodotto",
      experiencesTitle: "Sette esperienze. Un unico cuore.",
      experiencesIntro:
        "Daily collega la giornata, mentre Mind, Body, Energy, Diary, Nutrition e Garage hanno ciascuno un ruolo distinto nell'esperienza OZLife.",
      coreLabel: "Cuore condiviso",
      coreTitle: "OZLife",
      coreMeta: "iOS nativo · Swift · SwiftUI",
      experiencesLabel: "Esperienze di prodotto",
      modules: [
        { name: "Daily", note: "Ritmo quotidiano" },
        { name: "Mind", note: "Focus e riflessione" },
        { name: "Body", note: "Movimento" },
        { name: "Energy", note: "Schemi e check-in" },
        { name: "Diary", note: "Voci personali" },
        { name: "Nutrition", note: "Nutrizione" },
        { name: "Garage", note: "Progressi e avatar" },
      ],
      foundationLabel: "Fondamenta del prodotto",
      localTitle: "Contenuti e progressi locali",
      localText: "Pensati per l'uso sul dispositivo.",
      appleTitle: "Integrazioni con la piattaforma Apple",
      appleText: "Facoltative e controllate dall'utente.",
      mapNote:
        "Questa vista mostra confini e relazioni del prodotto. Non è intenzionalmente una mappa dell'architettura privata di produzione.",
      boundariesEyebrow: "Astrazione intenzionale",
      boundariesTitle: "Chiara per comprendere il prodotto. Limitata per proteggere il lavoro privato.",
      boundariesText:
        "L'architettura pubblica rende comprensibile la direzione del prodotto senza pubblicare implementazione interna, infrastruttura o meccanismi di sicurezza.",
      shownLabel: "Cosa mostra questa vista",
      shown: [
        "Scelta pubblica della piattaforma",
        "Aree di esperienza e confini del prodotto",
        "Orientamento locale ed estensioni facoltative",
      ],
      privateLabel: "Cosa rimane volutamente privato",
      private: [
        "Classi concrete o file sorgente",
        "Collegamenti interni dei framework",
        "Chiavi di persistenza o schemi di database",
        "Endpoint API o infrastruttura privata",
        "Entitlement, firma, acquisti o identificatori interni",
        "Dettagli di implementazione della sicurezza",
      ],
      closingEyebrow: "Il prodotto prima dell'implementazione",
      closingTitle: "L'architettura sostiene l'esperienza. Non le si mette davanti.",
      closingText:
        "OZLife deve risultare calma, diretta e personale. Questa panoramica tecnica pubblica mostra la struttura necessaria per comprendere tale direzione.",
      showcase: "Scopri OZLife nella presentazione",
      sourceDoc: "Leggi il riepilogo tecnico",
      footerNote: "Piccole routine quotidiane per Mind, Body ed Energy.",
      vision: "Visione del prodotto",
      privacy: "Privacy e sicurezza",
      license: "Licenza",
      legal:
        "© 2026 Cloddy Web. Tutti i diritti riservati. L'architettura di produzione e il codice sorgente di OZLife restano privati.",
    },
  };

  const c = copy[page] || copy.en;
  const languageLinks = supportedLanguages
    .map(
      (language) => `
        <a href="../../${language}/architecture/" lang="${language}" ${
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
          <a href="#foundation">${c.nav.foundation}</a>
          <a href="#experiences">${c.nav.experiences}</a>
          <a href="#boundaries">${c.nav.boundaries}</a>
          <details class="language-menu">
            <summary aria-label="${c.language}">${languages[page].short}</summary>
            <div class="language-options">${languageLinks}</div>
          </details>
        </nav>
      </div>
    </header>

    <main id="content">
      <section class="architecture-hero shell" id="top">
        <div class="architecture-hero-copy">
          <a class="vision-back-link" href="../">${c.back}</a>
          <p class="eyebrow">${c.eyebrow}</p>
          <h1>${c.title}</h1>
          <p class="architecture-hero-intro">${c.intro}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#foundation">${c.explore}</a>
          </div>
        </div>
        <div class="architecture-console" aria-label="${c.visualLabel}">
          <div class="architecture-console-bar">
            <span aria-hidden="true"><i></i><i></i><i></i></span>
            <strong>${c.visualLabel}</strong>
            <em>01</em>
          </div>
          <div class="architecture-console-body">
            <div class="architecture-visual-node architecture-visual-optional">
              <span>${c.visualOptional}</span>
              <i aria-hidden="true"></i>
            </div>
            <div class="architecture-visual-line" aria-hidden="true"></div>
            <div class="architecture-visual-core">
              <span>OZLife</span>
              <h2>${c.visualCore}</h2>
              <p>${c.visualStack}</p>
            </div>
            <div class="architecture-visual-line" aria-hidden="true"></div>
            <div class="architecture-visual-node architecture-visual-local">
              <span>${c.visualLocal}</span>
              <i aria-hidden="true"></i>
            </div>
          </div>
          <p class="architecture-console-status"><i aria-hidden="true"></i>${c.visualStatus}</p>
        </div>
      </section>

      <section class="architecture-section shell" id="foundation">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">${c.foundationEyebrow}</p>
            <h2>${c.foundationTitle}</h2>
          </div>
          <p>${c.foundationIntro}</p>
        </div>
        <div class="architecture-foundations reveal">
          ${c.foundations
            .map(
              (item) => `
                <article class="architecture-foundation architecture-foundation-${item.key}">
                  <div class="architecture-foundation-top">
                    <span>${item.number}</span>
                    <i aria-hidden="true"></i>
                  </div>
                  <div>
                    <p>${item.label}</p>
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                  </div>
                </article>`,
            )
            .join("")}
        </div>
      </section>

      <section class="architecture-section shell" id="experiences">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">${c.experiencesEyebrow}</p>
            <h2>${c.experiencesTitle}</h2>
          </div>
          <p>${c.experiencesIntro}</p>
        </div>
        <div class="architecture-map reveal">
          <div class="architecture-map-core">
            <span>${c.coreLabel}</span>
            <h3>${c.coreTitle}</h3>
            <p>${c.coreMeta}</p>
          </div>
          <div class="architecture-map-connector" aria-hidden="true"></div>
          <div class="architecture-map-group">
            <p>${c.experiencesLabel}</p>
            <div class="architecture-modules">
              ${c.modules
                .map(
                  (module, index) => `
                    <article>
                      <span>${String(index + 1).padStart(2, "0")}</span>
                      <h3>${module.name}</h3>
                      <p>${module.note}</p>
                    </article>`,
                )
                .join("")}
            </div>
          </div>
          <div class="architecture-map-connector" aria-hidden="true"></div>
          <div class="architecture-map-group">
            <p>${c.foundationLabel}</p>
            <div class="architecture-map-foundations">
              <article>
                <span aria-hidden="true"></span>
                <div>
                  <h3>${c.localTitle}</h3>
                  <p>${c.localText}</p>
                </div>
              </article>
              <article>
                <span aria-hidden="true"></span>
                <div>
                  <h3>${c.appleTitle}</h3>
                  <p>${c.appleText}</p>
                </div>
              </article>
            </div>
          </div>
          <p class="architecture-map-note">${c.mapNote}</p>
        </div>
      </section>

      <section class="architecture-section shell" id="boundaries">
        <div class="architecture-boundaries reveal">
          <div class="architecture-boundary-copy">
            <p class="eyebrow">${c.boundariesEyebrow}</p>
            <h2>${c.boundariesTitle}</h2>
            <p>${c.boundariesText}</p>
          </div>
          <div class="architecture-boundary-lists">
            <article>
              <p>${c.shownLabel}</p>
              <ul class="architecture-shown-list">
                ${c.shown.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </article>
            <article>
              <p>${c.privateLabel}</p>
              <ul class="architecture-private-list">
                ${c.private.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section class="architecture-closing shell reveal">
        <p class="eyebrow">${c.closingEyebrow}</p>
        <h2>${c.closingTitle}</h2>
        <p>${c.closingText}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="../">${c.showcase}</a>
          <a class="button button-secondary" href="../../docs/architecture.md">${c.sourceDoc}</a>
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
          <a href="../vision/">${c.vision}</a>
          <a href="../privacy/">${c.privacy}</a>
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
