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
        idea: "Idee",
        snacks: "Daily Snacks",
        rhythm: "Tagesrhythmus",
        progress: "Fortschritt",
      },
      eyebrow: "Die Produktvision von OZLife",
      title: "Große Veränderung beginnt mit einem <span>kleinen nächsten Schritt.</span>",
      intro:
        "OZLife macht sinnvolle Routinen leichter zugänglich: nicht durch immer größere Pläne, sondern durch eine Handlung, die in den Tag passt, der bereits vor dir liegt.",
      explore: "Die Idee entdecken",
      manifestoLabel: "Ein kleinerer Anfang",
      manifestoText: "Machbar heute. Bedeutsam mit der Zeit.",
      ideaEyebrow: "Ein kleinerer Anfang",
      ideaTitle: "Wohlbefinden muss nicht mit mehr beginnen.",
      ideaText:
        "Viele Ansätze starten mit mehr Zeit, mehr Disziplin und mehr Veränderung. OZLife beginnt kleiner. Ein klarer Fokus und eine machbare Handlung schaffen einen Einstieg, der sich nicht wie eine weitere Verpflichtung anfühlt.",
      ideaQuote:
        "Nicht alles auf einmal verändern. Den nächsten hilfreichen Schritt leichter erkennen.",
      snacksEyebrow: "Daily Snacks",
      snacksTitle: "Klein genug für heute. Verbunden mit etwas Größerem.",
      snacksIntro:
        "Daily Snacks sind kurze, wiederholbare Handlungen. Jede steht für sich – gemeinsam bilden sie einen Tagesrhythmus für Mind, Body und Energy.",
      snacks: [
        {
          key: "mind",
          number: "01",
          name: "Mind",
          title: "Raum schaffen",
          text: "Ein kurzer Moment für Fokus, Ruhe, Atmung, Reflexion oder spielerisches Denken.",
          note: "Aufmerksamkeit",
        },
        {
          key: "body",
          number: "02",
          name: "Body",
          title: "In Bewegung kommen",
          text: "Eine geführte Einheit, ein alltagstauglicher Impuls oder praktische Ernährung.",
          note: "Bewegung",
        },
        {
          key: "energy",
          number: "03",
          name: "Energy",
          title: "Muster bemerken",
          text: "Ein kurzer Check-in zu Stress, Zeit, Geld, Aufmerksamkeit oder alltäglichen Einflüssen.",
          note: "Wahrnehmung",
        },
      ],
      rhythmEyebrow: "Ein verbundener Tag",
      rhythmTitle: "Eine Handlung wird zu einem Rhythmus.",
      rhythmIntro:
        "OZLife verbindet kleine Entscheidungen zu einem ruhigen Kreislauf. Mind, Body und Energy bleiben eigenständig und tragen dennoch zu demselben Tag bei.",
      rhythmImageAlt:
        "OZLife Daily Hub mit Tagesfokus, Mind, Body, Energy und sichtbarem Fortschritt",
      rhythmSteps: [
        {
          title: "Fokus wählen",
          text: "Was verdient heute deine Aufmerksamkeit?",
        },
        {
          title: "Klein handeln",
          text: "Beginne mit etwas, das jetzt machbar ist.",
        },
        {
          title: "Wirkung bemerken",
          text: "Nimm wahr, was sich in dir oder deinem Tag verändert.",
        },
        {
          title: "Zurückkehren",
          text: "Lass Beständigkeit entstehen, ohne Perfektion zu verlangen.",
        },
      ],
      progressEyebrow: "Fortschritt ohne Druck",
      progressTitle: "Beständigkeit darf sichtbar sein, ohne zum Wettbewerb zu werden.",
      progressText:
        "Tagesfortschritt, Serien, Meilensteine, 28-Tage-Pfade und visuelle Belohnungen würdigen die Rückkehr. Sie sollen ermutigen, nicht vergleichen – und nie aus persönlichem Wohlbefinden eine Punktetabelle machen.",
      progressLabel: "Ein 28-Tage-Pfad",
      progressNote: "Jeder Punkt ist eine Einladung, kein Urteil.",
      promiseEyebrow: "Das Versprechen",
      promiseTitle: "Wähle, was heute zählt. Geh einen kleinen Schritt. Bemerke seine Wirkung.",
      promiseText:
        "OZLife soll sich ruhig, unterstützend und menschlich anfühlen – ein persönlicher Ort, zu dem du zurückkehren kannst, wenn der nächste Tag beginnt.",
      showcase: "OZLife im Showcase erleben",
      follow: "Entwicklung auf GitHub verfolgen",
      footerNote: "Kleine tägliche Routinen für Mind, Body & Energy.",
      privacy: "Datenschutz & Sicherheit",
      architecture: "Architektur",
      license: "Lizenz",
      legal:
        "© 2026 Cloddy Web. Alle Rechte vorbehalten. OZLife ist eine allgemeine Wellness-App und kein Medizinprodukt oder Ersatz für professionelle Beratung, Diagnose oder Behandlung.",
    },
    en: {
      skip: "Skip to content",
      menu: "Open menu",
      language: "Choose language",
      back: "Back to the showcase",
      nav: {
        idea: "Idea",
        snacks: "Daily Snacks",
        rhythm: "Daily rhythm",
        progress: "Progress",
      },
      eyebrow: "The OZLife product vision",
      title: "Meaningful change begins with a <span>smaller next step.</span>",
      intro:
        "OZLife makes meaningful routines easier to begin—not through ever bigger plans, but through one action that can fit into the day already in front of you.",
      explore: "Explore the idea",
      manifestoLabel: "A smaller starting point",
      manifestoText: "Manageable today. Meaningful over time.",
      ideaEyebrow: "A smaller starting point",
      ideaTitle: "Wellbeing does not have to begin with more.",
      ideaText:
        "Many approaches start by asking for more time, more discipline, and more change. OZLife starts smaller. A clear focus and one manageable action create an entry point that does not feel like another obligation.",
      ideaQuote:
        "Do not change everything at once. Make the next useful action easier to see.",
      snacksEyebrow: "Daily Snacks",
      snacksTitle: "Small enough for today. Connected to something larger.",
      snacksIntro:
        "Daily Snacks are short, repeatable actions. Each can stand on its own—together they form a daily rhythm across Mind, Body, and Energy.",
      snacks: [
        {
          key: "mind",
          number: "01",
          name: "Mind",
          title: "Create space",
          text: "A short moment for focus, rest, breathing, reflection, or playful thought.",
          note: "Attention",
        },
        {
          key: "body",
          number: "02",
          name: "Body",
          title: "Begin moving",
          text: "A guided session, an everyday movement prompt, or practical nutrition.",
          note: "Movement",
        },
        {
          key: "energy",
          number: "03",
          name: "Energy",
          title: "Notice patterns",
          text: "A brief check-in with stress, time, money, attention, or everyday influences.",
          note: "Awareness",
        },
      ],
      rhythmEyebrow: "One connected day",
      rhythmTitle: "One action becomes a rhythm.",
      rhythmIntro:
        "OZLife connects small decisions into a calm loop. Mind, Body, and Energy remain distinct while contributing to the same day.",
      rhythmImageAlt:
        "OZLife Daily Hub with a daily focus, Mind, Body, Energy, and visible progress",
      rhythmSteps: [
        {
          title: "Choose a focus",
          text: "What genuinely deserves your attention today?",
        },
        {
          title: "Take one small action",
          text: "Begin with something that feels manageable now.",
        },
        {
          title: "Notice the effect",
          text: "See what shifted in you or in the day around you.",
        },
        {
          title: "Return",
          text: "Let consistency grow without requiring perfection.",
        },
      ],
      progressEyebrow: "Progress without pressure",
      progressTitle: "Consistency can be visible without becoming a contest.",
      progressText:
        "Daily progress, streaks, milestones, 28-day paths, and visual rewards recognise the act of returning. They are here to encourage, not compare—and never to turn personal wellbeing into a scoreboard.",
      progressLabel: "A 28-day path",
      progressNote: "Every point is an invitation, not a judgement.",
      promiseEyebrow: "The promise",
      promiseTitle: "Choose what matters today. Take a small step. Notice its effect.",
      promiseText:
        "OZLife should feel steady, supportive, and human—a personal place to return to when the next day arrives.",
      showcase: "Experience OZLife in the showcase",
      follow: "Follow development on GitHub",
      footerNote: "Small daily routines for Mind, Body & Energy.",
      privacy: "Privacy & safety",
      architecture: "Architecture",
      license: "License",
      legal:
        "© 2026 Cloddy Web. All rights reserved. OZLife is a general wellness app, not a medical device or a substitute for professional advice, diagnosis, or treatment.",
    },
    es: {
      skip: "Saltar al contenido",
      menu: "Abrir menú",
      language: "Elegir idioma",
      back: "Volver a la presentación",
      nav: {
        idea: "Idea",
        snacks: "Daily Snacks",
        rhythm: "Ritmo diario",
        progress: "Progreso",
      },
      eyebrow: "La visión de producto de OZLife",
      title: "Un cambio significativo comienza con un <span>pequeño paso siguiente.</span>",
      intro:
        "OZLife facilita el inicio de rutinas con sentido: no mediante planes cada vez más grandes, sino con una acción que cabe en el día que ya tienes por delante.",
      explore: "Descubrir la idea",
      manifestoLabel: "Un punto de partida más pequeño",
      manifestoText: "Posible hoy. Significativo con el tiempo.",
      ideaEyebrow: "Un punto de partida más pequeño",
      ideaTitle: "El bienestar no tiene por qué comenzar con más.",
      ideaText:
        "Muchos enfoques empiezan pidiendo más tiempo, más disciplina y más cambios. OZLife empieza de forma más pequeña. Un foco claro y una acción posible crean una entrada que no se siente como otra obligación.",
      ideaQuote:
        "No cambiarlo todo de una vez. Hacer que la siguiente acción útil sea más fácil de ver.",
      snacksEyebrow: "Daily Snacks",
      snacksTitle: "Lo bastante pequeños para hoy. Conectados con algo mayor.",
      snacksIntro:
        "Los Daily Snacks son acciones breves y repetibles. Cada una funciona por sí sola; juntas forman un ritmo diario para Mind, Body y Energy.",
      snacks: [
        {
          key: "mind",
          number: "01",
          name: "Mind",
          title: "Crear espacio",
          text: "Un momento breve para concentrarse, descansar, respirar, reflexionar o pensar jugando.",
          note: "Atención",
        },
        {
          key: "body",
          number: "02",
          name: "Body",
          title: "Ponerse en movimiento",
          text: "Una sesión guiada, un impulso cotidiano de movimiento o nutrición práctica.",
          note: "Movimiento",
        },
        {
          key: "energy",
          number: "03",
          name: "Energy",
          title: "Observar patrones",
          text: "Un breve registro sobre estrés, tiempo, dinero, atención o influencias cotidianas.",
          note: "Percepción",
        },
      ],
      rhythmEyebrow: "Un día conectado",
      rhythmTitle: "Una acción se convierte en un ritmo.",
      rhythmIntro:
        "OZLife conecta pequeñas decisiones en un ciclo tranquilo. Mind, Body y Energy mantienen su identidad y contribuyen al mismo día.",
      rhythmImageAlt:
        "OZLife Daily Hub con enfoque diario, Mind, Body, Energy y progreso visible",
      rhythmSteps: [
        {
          title: "Elegir un foco",
          text: "¿Qué merece de verdad tu atención hoy?",
        },
        {
          title: "Dar un pequeño paso",
          text: "Empieza con algo que ahora sea posible.",
        },
        {
          title: "Notar el efecto",
          text: "Observa qué ha cambiado en ti o en tu día.",
        },
        {
          title: "Volver",
          text: "Deja que la constancia crezca sin exigir perfección.",
        },
      ],
      progressEyebrow: "Progreso sin presión",
      progressTitle: "La constancia puede ser visible sin convertirse en una competición.",
      progressText:
        "El progreso diario, las rachas, los hitos, los caminos de 28 días y las recompensas visuales reconocen el hecho de volver. Están para animar, no para comparar ni convertir el bienestar personal en una clasificación.",
      progressLabel: "Un camino de 28 días",
      progressNote: "Cada punto es una invitación, no un juicio.",
      promiseEyebrow: "La promesa",
      promiseTitle: "Elige lo que importa hoy. Da un pequeño paso. Nota su efecto.",
      promiseText:
        "OZLife debe sentirse estable, cercano y humano: un lugar personal al que volver cuando llegue el día siguiente.",
      showcase: "Vivir OZLife en la presentación",
      follow: "Seguir el desarrollo en GitHub",
      footerNote: "Pequeñas rutinas diarias para Mind, Body y Energy.",
      privacy: "Privacidad y seguridad",
      architecture: "Arquitectura",
      license: "Licencia",
      legal:
        "© 2026 Cloddy Web. Todos los derechos reservados. OZLife es una aplicación de bienestar general, no un dispositivo médico ni un sustituto del asesoramiento, diagnóstico o tratamiento profesional.",
    },
    it: {
      skip: "Vai al contenuto",
      menu: "Apri menu",
      language: "Scegli la lingua",
      back: "Torna alla presentazione",
      nav: {
        idea: "Idea",
        snacks: "Daily Snacks",
        rhythm: "Ritmo quotidiano",
        progress: "Progresso",
      },
      eyebrow: "La visione di prodotto di OZLife",
      title: "Un cambiamento significativo inizia da un <span>prossimo passo più piccolo.</span>",
      intro:
        "OZLife rende più semplice iniziare routine significative: non con piani sempre più grandi, ma con un'azione che trova spazio nella giornata che hai già davanti.",
      explore: "Scopri l'idea",
      manifestoLabel: "Un punto di partenza più piccolo",
      manifestoText: "Possibile oggi. Significativo nel tempo.",
      ideaEyebrow: "Un punto di partenza più piccolo",
      ideaTitle: "Il benessere non deve per forza iniziare chiedendo di più.",
      ideaText:
        "Molti approcci cominciano chiedendo più tempo, più disciplina e più cambiamenti. OZLife comincia in piccolo. Un focus chiaro e un'azione possibile creano un ingresso che non sembra un altro obbligo.",
      ideaQuote:
        "Non cambiare tutto in una volta. Rendere più facile vedere la prossima azione utile.",
      snacksEyebrow: "Daily Snacks",
      snacksTitle: "Abbastanza piccoli per oggi. Collegati a qualcosa di più grande.",
      snacksIntro:
        "I Daily Snacks sono azioni brevi e ripetibili. Ognuna funziona da sola; insieme formano un ritmo quotidiano per Mind, Body ed Energy.",
      snacks: [
        {
          key: "mind",
          number: "01",
          name: "Mind",
          title: "Creare spazio",
          text: "Un breve momento per concentrazione, riposo, respiro, riflessione o pensiero giocoso.",
          note: "Attenzione",
        },
        {
          key: "body",
          number: "02",
          name: "Body",
          title: "Iniziare a muoversi",
          text: "Una sessione guidata, uno stimolo quotidiano al movimento o nutrizione pratica.",
          note: "Movimento",
        },
        {
          key: "energy",
          number: "03",
          name: "Energy",
          title: "Notare gli schemi",
          text: "Un breve check-in su stress, tempo, denaro, attenzione o influenze quotidiane.",
          note: "Consapevolezza",
        },
      ],
      rhythmEyebrow: "Una giornata connessa",
      rhythmTitle: "Un'azione diventa un ritmo.",
      rhythmIntro:
        "OZLife collega piccole decisioni in un ciclo tranquillo. Mind, Body ed Energy restano distinti e contribuiscono alla stessa giornata.",
      rhythmImageAlt:
        "OZLife Daily Hub con focus quotidiano, Mind, Body, Energy e progresso visibile",
      rhythmSteps: [
        {
          title: "Scegliere un focus",
          text: "Che cosa merita davvero la tua attenzione oggi?",
        },
        {
          title: "Fare un piccolo passo",
          text: "Inizia con qualcosa che ora ti sembra possibile.",
        },
        {
          title: "Notare l'effetto",
          text: "Osserva che cosa è cambiato in te o nella tua giornata.",
        },
        {
          title: "Ritornare",
          text: "Lascia crescere la costanza senza pretendere la perfezione.",
        },
      ],
      progressEyebrow: "Progresso senza pressione",
      progressTitle: "La costanza può essere visibile senza diventare una gara.",
      progressText:
        "Progresso quotidiano, serie, traguardi, percorsi di 28 giorni e ricompense visive riconoscono il gesto di ritornare. Servono a incoraggiare, non a confrontare né a trasformare il benessere personale in una classifica.",
      progressLabel: "Un percorso di 28 giorni",
      progressNote: "Ogni punto è un invito, non un giudizio.",
      promiseEyebrow: "La promessa",
      promiseTitle: "Scegli ciò che conta oggi. Fai un piccolo passo. Nota il suo effetto.",
      promiseText:
        "OZLife dovrebbe sembrare stabile, accogliente e umano: un luogo personale a cui tornare quando arriva il giorno successivo.",
      showcase: "Scopri OZLife nella presentazione",
      follow: "Segui lo sviluppo su GitHub",
      footerNote: "Piccole routine quotidiane per Mind, Body ed Energy.",
      privacy: "Privacy e sicurezza",
      architecture: "Architettura",
      license: "Licenza",
      legal:
        "© 2026 Cloddy Web. Tutti i diritti riservati. OZLife è un'app di benessere generale, non un dispositivo medico né un sostituto di consulenza, diagnosi o trattamento professionale.",
    },
  };

  const c = copy[page] || copy.en;
  const languageLinks = supportedLanguages
    .map(
      (language) => `
        <a href="../../${language}/vision/" lang="${language}" ${
          language === page ? 'aria-current="page"' : ""
        }>
          <span>${languages[language].name}</span>
          <strong>${languages[language].short}</strong>
        </a>`,
    )
    .join("");

  const progressDots = Array.from(
    { length: 28 },
    (_, index) =>
      `<span class="${index < 17 ? "is-complete" : ""}${index === 17 ? " is-current" : ""}" aria-hidden="true"></span>`,
  ).join("");

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
          <a href="#idea">${c.nav.idea}</a>
          <a href="#snacks">${c.nav.snacks}</a>
          <a href="#rhythm">${c.nav.rhythm}</a>
          <a href="#progress">${c.nav.progress}</a>
          <details class="language-menu">
            <summary aria-label="${c.language}">${languages[page].short}</summary>
            <div class="language-options">${languageLinks}</div>
          </details>
        </nav>
      </div>
    </header>

    <main id="content">
      <section class="vision-hero shell" id="top">
        <div class="vision-hero-copy">
          <a class="vision-back-link" href="../">${c.back}</a>
          <p class="eyebrow">${c.eyebrow}</p>
          <h1>${c.title}</h1>
          <p class="vision-hero-intro">${c.intro}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#idea">${c.explore}</a>
          </div>
        </div>
        <div class="vision-manifesto" aria-label="${c.manifestoLabel}">
          <div class="vision-orbit" aria-hidden="true">
            <span class="vision-orbit-ring vision-orbit-ring-one"></span>
            <span class="vision-orbit-ring vision-orbit-ring-two"></span>
            <span class="vision-orbit-ring vision-orbit-ring-three"></span>
            <span class="vision-orbit-core"></span>
          </div>
          <div class="vision-manifesto-copy">
            <span>01 / 28</span>
            <p>${c.manifestoText}</p>
          </div>
        </div>
      </section>

      <section class="vision-section shell" id="idea">
        <div class="vision-editorial reveal">
          <div class="vision-editorial-copy">
            <p class="eyebrow">${c.ideaEyebrow}</p>
            <h2>${c.ideaTitle}</h2>
            <p>${c.ideaText}</p>
          </div>
          <blockquote>${c.ideaQuote}</blockquote>
        </div>
      </section>

      <section class="vision-section shell" id="snacks">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">${c.snacksEyebrow}</p>
            <h2>${c.snacksTitle}</h2>
          </div>
          <p>${c.snacksIntro}</p>
        </div>
        <div class="vision-snacks reveal">
          ${c.snacks
            .map(
              (snack) => `
                <article class="vision-snack vision-snack-${snack.key}">
                  <div class="vision-snack-top">
                    <span>${snack.number}</span>
                    <span class="vision-snack-dot" aria-hidden="true"></span>
                  </div>
                  <div>
                    <p class="vision-snack-name">${snack.name}</p>
                    <h3>${snack.title}</h3>
                    <p class="vision-snack-text">${snack.text}</p>
                  </div>
                  <p class="vision-snack-note">${snack.note}</p>
                </article>`,
            )
            .join("")}
        </div>
      </section>

      <section class="vision-section shell" id="rhythm">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">${c.rhythmEyebrow}</p>
            <h2>${c.rhythmTitle}</h2>
          </div>
          <p>${c.rhythmIntro}</p>
        </div>
        <div class="vision-rhythm reveal">
          <div class="vision-rhythm-device">
            <div class="vision-rhythm-glow" aria-hidden="true"></div>
            <figure>
              <img
                src="../../assets/captures/daily-hub.png"
                alt="${c.rhythmImageAlt}"
                width="1206"
                height="2622"
                loading="lazy"
              >
            </figure>
          </div>
          <ol class="vision-rhythm-steps">
            ${c.rhythmSteps
              .map(
                (step, index) => `
                  <li>
                    <span>0${index + 1}</span>
                    <div>
                      <h3>${step.title}</h3>
                      <p>${step.text}</p>
                    </div>
                  </li>`,
              )
              .join("")}
          </ol>
        </div>
      </section>

      <section class="vision-section shell" id="progress">
        <div class="vision-progress reveal">
          <div class="vision-progress-copy">
            <p class="eyebrow">${c.progressEyebrow}</p>
            <h2>${c.progressTitle}</h2>
            <p>${c.progressText}</p>
          </div>
          <div class="vision-path">
            <div class="vision-path-heading">
              <span>${c.progressLabel}</span>
              <strong>18 / 28</strong>
            </div>
            <div class="vision-path-dots">${progressDots}</div>
            <p>${c.progressNote}</p>
          </div>
        </div>
      </section>

      <section class="vision-promise shell reveal">
        <p class="eyebrow">${c.promiseEyebrow}</p>
        <h2>${c.promiseTitle}</h2>
        <p>${c.promiseText}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="../">${c.showcase}</a>
          <a class="button button-secondary" href="https://github.com/live-oz/ozlife-experience">${c.follow}</a>
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
