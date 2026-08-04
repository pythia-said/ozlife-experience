(() => {
  "use strict";

  const page = document.body.dataset.language || "en";
  const supportedLanguages = ["de", "en", "es", "it"];
  const betaEndpoint =
    "https://ozlife-beta-form.pillendose-byte-65.workers.dev/";
  const turnstileSiteKey = "0x4AAAAAAD9WSI_ekximyNvl";

  const languages = {
    de: { short: "DE", name: "Deutsch" },
    en: { short: "EN", name: "English" },
    es: { short: "ES", name: "Español" },
    it: { short: "IT", name: "Italiano" },
  };

  const copy = {
    de: {
      skip: "Zum Inhalt springen",
      nav: {
        idea: "Idee",
        rhythm: "Tagesrhythmus",
        experience: "Erlebnis",
        principles: "Prinzipien",
      },
      menu: "Menü öffnen",
      language: "Sprache wählen",
      eyebrow: "In aktiver Vorabentwicklung · Native iOS-App",
      title: "Kleine tägliche Routinen für <span>Mind, Body &amp; Energy.</span>",
      intro:
        "OZLife bringt Klarheit, Bewegung und alltagstaugliche Energie in einen ruhigen Tagesrhythmus – mit einem Fokus, einer machbaren Handlung und sichtbarem Fortschritt.",
      explore: "OZLife entdecken",
      repository: "Öffentliches Repository",
      status: ["SwiftUI", "Für iPhone", "Lokal ausgerichtet", "Vorabversion"],
      visualAlt: {
        daily: "OZLife Daily Hub mit dem heutigen Fokus für Mind, Body und Energy",
        mind: "OZLife Mind Games mit täglicher Auswahl und Fokusübungen",
      },
      orbit: "HEUTE",
      pillars: [
        {
          number: "01",
          name: "Mind",
          text: "Kurze Spiele und ruhige Übungen schaffen Raum zwischen Gedanken und Reaktion.",
        },
        {
          number: "02",
          name: "Body",
          text: "Geführte Bewegung passt sich dem echten Alltag an – ohne perfekten Zeitplan.",
        },
        {
          number: "03",
          name: "Energy",
          text: "Kurze Check-ins machen sichtbar, was Energie gibt, nimmt und verändert.",
        },
      ],
      rhythmEyebrow: "Ein Tag mit OZLife",
      rhythmTitle: "Ein einfacher Rhythmus, zu dem du zurückkehren kannst.",
      rhythmIntro:
        "Kein Alles-oder-nichts-Plan. OZLife verbindet Fokus, kleine Handlungen, Reflexion und sichtbaren Fortschritt zu einem Rhythmus, der in den Tag passt.",
      steps: [
        {
          title: "Fokus wählen",
          text: "Beginne mit dem, was heute wirklich Aufmerksamkeit verdient.",
        },
        {
          title: "Klein handeln",
          text: "Wähle eine Übung, Session oder Reflexion, die jetzt machbar ist.",
        },
        {
          title: "Wirkung bemerken",
          text: "Halte kurz fest, was sich in Körper, Gedanken oder Energie verändert.",
        },
        {
          title: "Fortschritt sehen",
          text: "Beständigkeit wird sichtbar – ohne Vergleich, Druck oder Wettbewerb.",
        },
      ],
      experienceEyebrow: "Im Erlebnis",
      experienceTitle: "Drei Bereiche. Ein zusammenhängender Tag.",
      experienceIntro:
        "Mind, Body und Energy haben jeweils eine eigene Stimmung, bleiben aber in einem gemeinsamen täglichen Erlebnis verbunden.",
      features: [
        {
          key: "mind",
          label: "Mind",
          title: "Mehr Raum für Aufmerksamkeit.",
          description:
            "Kurze Spiele und durchdachte Übungen bieten einen ruhigen Ort, zu dem du zurückkehren kannst. Eine tägliche Auswahl erleichtert den Einstieg, verschiedene Formate halten das Fokustraining abwechslungsreich.",
          bullets: ["Tägliche Auswahl", "Kurze Fokusspiele", "Favoriten und Bibliothek"],
          image: "../assets/screenshots/04-mind-games.png",
          alt: "OZLife Mind Games mit Daily Pick und einer Auswahl verschiedener Fokusaktivitäten",
        },
        {
          key: "body",
          label: "Body",
          title: "Bewegung, die in deinen Tag passt.",
          description:
            "Geführte Sessions halten aktuelle Übung, Anleitung und Fortschritt in einer klaren Ansicht zusammen. Bewegung beginnt dort, wo dein Tag gerade ist.",
          bullets: ["Geführte Sessions", "Klare Übungsanleitung", "Sichtbarer Ablauf"],
          image: "../assets/screenshots/03-guided-body.png",
          alt: "Geführte OZLife Body-Session mit Übungsmedium, Anleitung und Session-Fortschritt",
        },
        {
          key: "energy",
          label: "Energy",
          title: "Muster erkennen, die deinen Alltag prägen.",
          description:
            "Kurze Check-ins werden in der Wochenansicht zu verständlichen Mustern. Im Mittelpunkt stehen Reflexion und praktische Wahrnehmung – nicht eine Bewertung deines Wohlbefindens.",
          bullets: ["Kurze Check-ins", "Wöchentliche Muster", "Praktische Reflexion"],
          image: "../assets/screenshots/05-energy-review.png",
          alt: "OZLife Energy-Wochenrückblick mit Highlights, Ausblick und sichtbaren Mustern",
        },
      ],
      worldEyebrow: "Über die tägliche Routine hinaus",
      worldTitle: "Orte, zu denen du gerne zurückkehrst.",
      worldIntro:
        "Der Daily Hub verbindet den Tag. Bibliothek und Garage bewahren, was dir wichtig ist, und machen deine Entwicklung greifbar.",
      zoom: "Bild vergrößern",
      featureDetails: "Mehr erfahren",
      world: [
        {
          title: "Daily Hub",
          text: "Fokus, Handlung und Fortschritt an einem Ort.",
          image: "../assets/captures/daily-hub.png",
          alt: "OZLife Daily Hub mit Tageszitat, Mind-Body-Energy-Rhythmus und Fortschritt",
        },
        {
          title: "Bibliothek",
          text: "Gespeicherte Übungen, Zitate, Rezepte und Reflexionen.",
          image: "../assets/captures/library.png",
          alt: "OZLife Bibliothek mit Tagebuch, Workouts, Zitaten und Rezepten",
        },
        {
          title: "Garage",
          text: "Avatar, XP und Belohnungen machen Beständigkeit sichtbar.",
          image: "../assets/captures/garage.png",
          alt: "OZLife Garage mit Avatar, aktuellem Look, XP und Fortschritt",
        },
      ],
      principlesEyebrow: "Wofür OZLife steht",
      principlesTitle: "Wohlbefinden ohne Leistungsdruck.",
      principlesIntro:
        "OZLife ist bewusst kein Wettbewerb. Fortschritt soll Rückkehr und Anerkennung unterstützen – nicht Dringlichkeit oder Vergleich.",
      quote:
        "Wähle, was heute zählt. Geh einen kleinen Schritt. Bemerke seine Wirkung.",
      principles: [
        {
          label: "PRIVAT",
          title: "Dein persönlicher Raum",
          text: "Persönliche Inhalte sind primär für die lokale Nutzung auf deinem Gerät gedacht; Plattformzugriffe bleiben unter deiner Kontrolle.",
        },
        {
          label: "MENSCHLICH",
          title: "Fortschritt ohne Vergleich",
          text: "XP, Serien, Meilensteine und Sammlerstücke machen Beständigkeit greifbar, ohne sie in einen Wettkampf zu verwandeln.",
        },
      ],
      close: "Sei von Anfang an dabei",
      closeText:
        "Teste OZLife vor dem offiziellen Start und hilf uns mit deinem Feedback, die App noch besser zu machen.",
      beta: "Bei der Beta mitmachen",
      betaEmail: "E-Mail-Adresse",
      betaEmailPlaceholder: "du@beispiel.de",
      betaLanguage: "Bevorzugte Sprache",
      betaDevice: "iPhone und iOS-Version",
      betaDevicePlaceholder: "Optional, z. B. iPhone 15 · iOS 18",
      betaMessage: "Was interessiert dich an OZLife?",
      betaMessagePlaceholder: "Optional – ein kurzer Satz genügt.",
      betaConsent:
        "Ich willige ein, dass meine Angaben zur Bearbeitung meiner Beta-Anfrage verarbeitet werden.",
      betaPrivacy: "Hinweise zur Datenverarbeitung",
      betaSending: "Anfrage wird gesendet …",
      betaSuccess: "Danke! Deine Beta-Anfrage wurde privat übermittelt.",
      betaError:
        "Das hat noch nicht geklappt. Bitte prüfe deine Angaben und versuche es erneut.",
      betaVerification:
        "Bitte schließe zuerst die Sicherheitsprüfung ab.",
      vision: "Produktvision lesen",
      footerNote: "Kleine tägliche Routinen für Mind, Body & Energy.",
      privacy: "Datenschutz & Sicherheit",
      architecture: "Architektur",
      license: "Lizenz",
      legal:
        "© 2026 Cloddy Web. Alle Rechte vorbehalten. OZLife ist eine allgemeine Wellness-App und kein Medizinprodukt.",
      closeDialog: "Bild schließen",
    },
    en: {
      skip: "Skip to content",
      nav: {
        idea: "Idea",
        rhythm: "Daily rhythm",
        experience: "Experience",
        principles: "Principles",
      },
      menu: "Open menu",
      language: "Choose language",
      eyebrow: "In active pre-release development · Native iOS app",
      title: "Small daily routines for <span>Mind, Body &amp; Energy.</span>",
      intro:
        "OZLife brings clarity, movement, and everyday energy into one calm daily rhythm—with a focus, one manageable action, and progress you can see.",
      explore: "Explore OZLife",
      repository: "Public repository",
      status: ["SwiftUI", "Made for iPhone", "Local-first", "Pre-release"],
      visualAlt: {
        daily: "OZLife Daily Hub with today's Mind, Body, and Energy focus",
        mind: "OZLife Mind Games with a daily pick and focus activities",
      },
      orbit: "TODAY",
      pillars: [
        {
          number: "01",
          name: "Mind",
          text: "Short games and calm practices create space between thought and reaction.",
        },
        {
          number: "02",
          name: "Body",
          text: "Guided movement fits real schedules without waiting for a perfect day.",
        },
        {
          number: "03",
          name: "Energy",
          text: "Short check-ins reveal what restores, drains, and shapes everyday life.",
        },
      ],
      rhythmEyebrow: "One day with OZLife",
      rhythmTitle: "A simple rhythm you can return to.",
      rhythmIntro:
        "No all-or-nothing plan. OZLife connects focus, small actions, reflection, and visible progress into a rhythm that fits the day in front of you.",
      steps: [
        {
          title: "Choose a focus",
          text: "Begin with what genuinely deserves your attention today.",
        },
        {
          title: "Take one small action",
          text: "Pick a practice, session, or reflection that feels manageable now.",
        },
        {
          title: "Notice the effect",
          text: "Pause briefly and see what shifted in body, mind, or energy.",
        },
        {
          title: "See your progress",
          text: "Consistency becomes visible without comparison, pressure, or competition.",
        },
      ],
      experienceEyebrow: "Inside the experience",
      experienceTitle: "Three areas. One connected day.",
      experienceIntro:
        "Mind, Body, and Energy each have a distinct character, while staying connected in one daily experience.",
      features: [
        {
          key: "mind",
          label: "Mind",
          title: "Create more space for attention.",
          description:
            "Short games and thoughtful practices offer a calmer place to return to. A daily pick makes it easy to begin, while varied formats keep focus practice approachable.",
          bullets: ["A new daily pick", "Short focus games", "Favourites and library"],
          image: "../assets/screenshots/04-mind-games.png",
          alt: "OZLife Mind Games with a Daily Pick and a varied activity library",
        },
        {
          key: "body",
          label: "Body",
          title: "Movement that fits your day.",
          description:
            "Guided sessions keep the current exercise, instruction, and progress together in one clear view. Movement begins where your day is—not where an ideal schedule says it should be.",
          bullets: ["Guided sessions", "Clear exercise cues", "Visible session flow"],
          image: "../assets/screenshots/03-guided-body.png",
          alt: "OZLife guided Body session with exercise media, instruction, and progress",
        },
        {
          key: "energy",
          label: "Energy",
          title: "See the patterns shaping everyday life.",
          description:
            "Short check-ins become understandable patterns in a weekly view. The focus stays on reflection and practical awareness—not turning wellbeing into a score.",
          bullets: ["Short check-ins", "Weekly patterns", "Practical reflection"],
          image: "../assets/screenshots/05-energy-review.png",
          alt: "OZLife weekly Energy Review with highlights, outlook, and visible patterns",
        },
      ],
      worldEyebrow: "Beyond the daily rhythm",
      worldTitle: "Places worth returning to.",
      worldIntro:
        "The Daily Hub connects the day. The Library and Garage preserve what matters and make your evolving journey tangible.",
      zoom: "Enlarge image",
      featureDetails: "View details",
      world: [
        {
          title: "Daily Hub",
          text: "Focus, action, and visible progress in one place.",
          image: "../assets/captures/daily-hub.png",
          alt: "OZLife Daily Hub with a quote, Mind Body Energy rhythm, and progress",
        },
        {
          title: "Library",
          text: "Saved practices, quotes, recipes, and personal reflection.",
          image: "../assets/captures/library.png",
          alt: "OZLife Library with Diary, workouts, quotes, and recipes",
        },
        {
          title: "Garage",
          text: "Avatar, XP, and rewards make consistency visible.",
          image: "../assets/captures/garage.png",
          alt: "OZLife Garage with avatar, current look, XP, and progression",
        },
      ],
      principlesEyebrow: "What OZLife stands for",
      principlesTitle: "Wellbeing without performance pressure.",
      principlesIntro:
        "OZLife is intentionally not a contest. Progress is designed to support return and recognition—not urgency or comparison.",
      quote: "Choose what matters today. Take a small step. Notice its effect.",
      principles: [
        {
          label: "PRIVATE",
          title: "Your personal space",
          text: "Personal content is designed primarily for local use on your device, with platform access kept under your control.",
        },
        {
          label: "HUMAN",
          title: "Progress without comparison",
          text: "XP, streaks, milestones, and collectibles make consistency tangible without turning it into a competition.",
        },
      ],
      close: "Be there from the beginning",
      closeText:
        "Try OZLife before its official launch and help us make the app even better with your feedback.",
      beta: "Join the beta",
      betaEmail: "Email address",
      betaEmailPlaceholder: "you@example.com",
      betaLanguage: "Preferred language",
      betaDevice: "iPhone and iOS version",
      betaDevicePlaceholder: "Optional, e.g. iPhone 15 · iOS 18",
      betaMessage: "What interests you about OZLife?",
      betaMessagePlaceholder: "Optional—a short sentence is enough.",
      betaConsent:
        "I consent to my information being processed to handle my beta request.",
      betaPrivacy: "Data processing information",
      betaSending: "Sending your request …",
      betaSuccess: "Thank you! Your beta request was submitted privately.",
      betaError:
        "That did not work yet. Please check your details and try again.",
      betaVerification: "Please complete the security check first.",
      vision: "Read the product vision",
      footerNote: "Small daily routines for Mind, Body & Energy.",
      privacy: "Privacy & safety",
      architecture: "Architecture",
      license: "License",
      legal:
        "© 2026 Cloddy Web. All rights reserved. OZLife is a general wellness companion, not a medical device.",
      closeDialog: "Close image",
    },
    es: {
      skip: "Saltar al contenido",
      nav: {
        idea: "Idea",
        rhythm: "Ritmo diario",
        experience: "Experiencia",
        principles: "Principios",
      },
      menu: "Abrir menú",
      language: "Elegir idioma",
      eyebrow: "En desarrollo activo · App nativa para iOS",
      title: "Pequeñas rutinas diarias para <span>Mind, Body &amp; Energy.</span>",
      intro:
        "OZLife reúne claridad, movimiento y energía cotidiana en un ritmo diario sereno: un enfoque, una acción posible y un progreso que puedes ver.",
      explore: "Descubrir OZLife",
      repository: "Repositorio público",
      status: ["SwiftUI", "Para iPhone", "Enfoque local", "Versión preliminar"],
      visualAlt: {
        daily: "Daily Hub de OZLife con el enfoque de hoy para Mind, Body y Energy",
        mind: "Mind Games de OZLife con selección diaria y actividades de concentración",
      },
      orbit: "HOY",
      pillars: [
        {
          number: "01",
          name: "Mind",
          text: "Juegos breves y prácticas tranquilas crean espacio entre pensamiento y reacción.",
        },
        {
          number: "02",
          name: "Body",
          text: "El movimiento guiado se adapta a horarios reales, sin esperar el día perfecto.",
        },
        {
          number: "03",
          name: "Energy",
          text: "Pequeños check-ins muestran qué restaura, agota y moldea la vida cotidiana.",
        },
      ],
      rhythmEyebrow: "Un día con OZLife",
      rhythmTitle: "Un ritmo sencillo al que volver.",
      rhythmIntro:
        "Sin planes de todo o nada. OZLife conecta el foco, pequeñas acciones, la reflexión y el progreso visible en un ritmo que encaja en el día que tienes delante.",
      steps: [
        {
          title: "Elegir un enfoque",
          text: "Empieza por lo que de verdad merece tu atención hoy.",
        },
        {
          title: "Dar un pequeño paso",
          text: "Elige una práctica, sesión o reflexión que ahora mismo sea posible.",
        },
        {
          title: "Notar el efecto",
          text: "Haz una pausa y observa qué ha cambiado en cuerpo, mente o energía.",
        },
        {
          title: "Ver tu progreso",
          text: "La constancia se hace visible sin comparación, presión ni competición.",
        },
      ],
      experienceEyebrow: "Dentro de la experiencia",
      experienceTitle: "Tres áreas. Un solo día conectado.",
      experienceIntro:
        "Mind, Body y Energy tienen un carácter propio y, al mismo tiempo, permanecen unidos en una experiencia diaria.",
      features: [
        {
          key: "mind",
          label: "Mind",
          title: "Más espacio para tu atención.",
          description:
            "Juegos breves y prácticas cuidadas ofrecen un lugar sereno al que volver. Una selección diaria facilita empezar y los distintos formatos mantienen el entrenamiento accesible.",
          bullets: ["Nueva selección diaria", "Juegos breves de enfoque", "Favoritos y biblioteca"],
          image: "../assets/screenshots/04-mind-games.png",
          alt: "Mind Games de OZLife con selección diaria y biblioteca de actividades",
        },
        {
          key: "body",
          label: "Body",
          title: "Movimiento que encaja en tu día.",
          description:
            "Las sesiones guiadas reúnen ejercicio, instrucciones y progreso en una vista clara. El movimiento empieza donde está tu día, no donde lo exige un horario ideal.",
          bullets: ["Sesiones guiadas", "Instrucciones claras", "Progreso visible"],
          image: "../assets/screenshots/03-guided-body.png",
          alt: "Sesión Body guiada de OZLife con ejercicio, instrucciones y progreso",
        },
        {
          key: "energy",
          label: "Energy",
          title: "Descubre los patrones de cada día.",
          description:
            "Los check-ins breves se convierten en patrones comprensibles en la revisión semanal. El centro es la reflexión práctica, no reducir el bienestar a una puntuación.",
          bullets: ["Check-ins breves", "Patrones semanales", "Reflexión práctica"],
          image: "../assets/screenshots/05-energy-review.png",
          alt: "Revisión semanal Energy de OZLife con destacados, perspectiva y patrones",
        },
      ],
      worldEyebrow: "Más allá del ritmo diario",
      worldTitle: "Lugares a los que apetece volver.",
      worldIntro:
        "El Daily Hub conecta el día. La Biblioteca y el Garaje guardan lo importante y hacen tangible tu recorrido.",
      zoom: "Ampliar imagen",
      featureDetails: "Ver detalles",
      world: [
        {
          title: "Daily Hub",
          text: "Enfoque, acción y progreso visible en un solo lugar.",
          image: "../assets/captures/daily-hub.png",
          alt: "Daily Hub de OZLife con cita, ritmo Mind Body Energy y progreso",
        },
        {
          title: "Biblioteca",
          text: "Prácticas, citas, recetas y reflexiones guardadas.",
          image: "../assets/captures/library.png",
          alt: "Biblioteca de OZLife con diario, entrenamientos, citas y recetas",
        },
        {
          title: "Garaje",
          text: "Avatar, XP y recompensas hacen visible la constancia.",
          image: "../assets/captures/garage.png",
          alt: "Garaje de OZLife con avatar, aspecto actual, XP y progresión",
        },
      ],
      principlesEyebrow: "Lo que representa OZLife",
      principlesTitle: "Bienestar sin presión por rendir.",
      principlesIntro:
        "OZLife no es una competición. El progreso apoya el regreso y el reconocimiento, no la urgencia ni la comparación.",
      quote: "Elige lo que importa hoy. Da un pequeño paso. Nota su efecto.",
      principles: [
        {
          label: "PRIVADO",
          title: "Tu espacio personal",
          text: "El contenido personal está pensado principalmente para el uso local en tu dispositivo y tú controlas el acceso a funciones de la plataforma.",
        },
        {
          label: "HUMANO",
          title: "Progreso sin comparación",
          text: "XP, rachas, hitos y coleccionables hacen tangible la constancia sin convertirla en una competición.",
        },
      ],
      close: "Forma parte desde el principio",
      closeText:
        "Prueba OZLife antes de su lanzamiento oficial y ayúdanos con tus comentarios a mejorar aún más la app.",
      beta: "Participar en la beta",
      betaEmail: "Correo electrónico",
      betaEmailPlaceholder: "tu@ejemplo.com",
      betaLanguage: "Idioma preferido",
      betaDevice: "iPhone y versión de iOS",
      betaDevicePlaceholder: "Opcional, p. ej. iPhone 15 · iOS 18",
      betaMessage: "¿Qué te interesa de OZLife?",
      betaMessagePlaceholder: "Opcional; basta con una frase breve.",
      betaConsent:
        "Acepto que mis datos se procesen para gestionar mi solicitud de acceso a la beta.",
      betaPrivacy: "Información sobre el tratamiento de datos",
      betaSending: "Enviando tu solicitud …",
      betaSuccess: "¡Gracias! Tu solicitud se ha enviado de forma privada.",
      betaError:
        "Todavía no ha funcionado. Revisa tus datos e inténtalo de nuevo.",
      betaVerification: "Completa primero la comprobación de seguridad.",
      vision: "Leer la visión del producto",
      footerNote: "Pequeñas rutinas diarias para Mind, Body & Energy.",
      privacy: "Privacidad y seguridad",
      architecture: "Arquitectura",
      license: "Licencia",
      legal:
        "© 2026 Cloddy Web. Todos los derechos reservados. OZLife es una app de bienestar general, no un producto médico.",
      closeDialog: "Cerrar imagen",
    },
    it: {
      skip: "Vai al contenuto",
      nav: {
        idea: "Idea",
        rhythm: "Ritmo quotidiano",
        experience: "Esperienza",
        principles: "Principi",
      },
      menu: "Apri il menu",
      language: "Scegli la lingua",
      eyebrow: "In sviluppo attivo · App iOS nativa",
      title: "Piccole routine quotidiane per <span>Mind, Body &amp; Energy.</span>",
      intro:
        "OZLife riunisce chiarezza, movimento ed energia quotidiana in un ritmo sereno: un obiettivo, un'azione possibile e progressi che puoi vedere.",
      explore: "Scopri OZLife",
      repository: "Repository pubblico",
      status: ["SwiftUI", "Per iPhone", "Dati locali", "Versione preliminare"],
      visualAlt: {
        daily: "Daily Hub di OZLife con il focus di oggi per Mind, Body ed Energy",
        mind: "Mind Games di OZLife con scelta quotidiana e attività di concentrazione",
      },
      orbit: "OGGI",
      pillars: [
        {
          number: "01",
          name: "Mind",
          text: "Giochi brevi e pratiche calme creano spazio tra pensiero e reazione.",
        },
        {
          number: "02",
          name: "Body",
          text: "Il movimento guidato si adatta alla vita reale, senza aspettare il giorno perfetto.",
        },
        {
          number: "03",
          name: "Energy",
          text: "Brevi check-in mostrano cosa rigenera, affatica e influenza la vita quotidiana.",
        },
      ],
      rhythmEyebrow: "Un giorno con OZLife",
      rhythmTitle: "Un ritmo semplice a cui tornare.",
      rhythmIntro:
        "Nessun piano tutto o niente. OZLife collega focus, piccole azioni, riflessione e progressi visibili in un ritmo che si adatta alla giornata.",
      steps: [
        {
          title: "Scegli un obiettivo",
          text: "Inizia da ciò che merita davvero la tua attenzione oggi.",
        },
        {
          title: "Fai un piccolo passo",
          text: "Scegli una pratica, una sessione o una riflessione possibile adesso.",
        },
        {
          title: "Nota l'effetto",
          text: "Fermati un attimo e osserva cosa cambia nel corpo, nella mente o nell'energia.",
        },
        {
          title: "Guarda i progressi",
          text: "La costanza diventa visibile senza confronto, pressione o competizione.",
        },
      ],
      experienceEyebrow: "Dentro l'esperienza",
      experienceTitle: "Tre aree. Una giornata connessa.",
      experienceIntro:
        "Mind, Body ed Energy hanno ciascuno un carattere distinto, ma restano uniti in un'unica esperienza quotidiana.",
      features: [
        {
          key: "mind",
          label: "Mind",
          title: "Più spazio per l'attenzione.",
          description:
            "Giochi brevi e pratiche curate offrono un luogo tranquillo a cui tornare. Una scelta quotidiana facilita l'inizio e formati diversi mantengono la pratica accessibile.",
          bullets: ["Una nuova scelta quotidiana", "Brevi giochi di concentrazione", "Preferiti e libreria"],
          image: "../assets/screenshots/04-mind-games.png",
          alt: "Mind Games di OZLife con scelta quotidiana e libreria di attività",
        },
        {
          key: "body",
          label: "Body",
          title: "Movimento che si adatta alla giornata.",
          description:
            "Le sessioni guidate riuniscono esercizio, istruzioni e progressi in una vista chiara. Il movimento inizia dalla giornata reale, non da un programma ideale.",
          bullets: ["Sessioni guidate", "Istruzioni chiare", "Percorso visibile"],
          image: "../assets/screenshots/03-guided-body.png",
          alt: "Sessione Body guidata di OZLife con esercizio, istruzioni e progressi",
        },
        {
          key: "energy",
          label: "Energy",
          title: "Riconosci i pattern della vita quotidiana.",
          description:
            "Brevi check-in diventano pattern comprensibili nella revisione settimanale. Al centro ci sono riflessione e consapevolezza pratica, non un punteggio sul benessere.",
          bullets: ["Brevi check-in", "Pattern settimanali", "Riflessione pratica"],
          image: "../assets/screenshots/05-energy-review.png",
          alt: "Revisione settimanale Energy di OZLife con momenti chiave e pattern visibili",
        },
      ],
      worldEyebrow: "Oltre il ritmo quotidiano",
      worldTitle: "Luoghi in cui vale la pena tornare.",
      worldIntro:
        "Il Daily Hub collega la giornata. La Libreria e il Garage conservano ciò che conta e rendono tangibile il tuo percorso.",
      zoom: "Ingrandisci immagine",
      featureDetails: "Scopri di più",
      world: [
        {
          title: "Daily Hub",
          text: "Obiettivo, azione e progressi visibili in un unico luogo.",
          image: "../assets/captures/daily-hub.png",
          alt: "Daily Hub di OZLife con citazione, ritmo Mind Body Energy e progressi",
        },
        {
          title: "Libreria",
          text: "Pratiche, citazioni, ricette e riflessioni salvate.",
          image: "../assets/captures/library.png",
          alt: "Libreria di OZLife con diario, allenamenti, citazioni e ricette",
        },
        {
          title: "Garage",
          text: "Avatar, XP e ricompense rendono visibile la costanza.",
          image: "../assets/captures/garage.png",
          alt: "Garage di OZLife con avatar, look attuale, XP e progressione",
        },
      ],
      principlesEyebrow: "I valori di OZLife",
      principlesTitle: "Benessere senza pressione da prestazione.",
      principlesIntro:
        "OZLife non è una gara. I progressi sostengono il ritorno e il riconoscimento, non l'urgenza o il confronto.",
      quote: "Scegli ciò che conta oggi. Fai un piccolo passo. Nota il suo effetto.",
      principles: [
        {
          label: "PRIVATO",
          title: "Il tuo spazio personale",
          text: "I contenuti personali sono pensati principalmente per l'uso locale sul dispositivo; l'accesso alle funzioni della piattaforma resta sotto il tuo controllo.",
        },
        {
          label: "UMANO",
          title: "Progressi senza confronto",
          text: "XP, serie, traguardi e oggetti da collezione rendono tangibile la costanza senza trasformarla in una competizione.",
        },
      ],
      close: "Partecipa fin dall'inizio",
      closeText:
        "Prova OZLife prima del lancio ufficiale e aiutaci con il tuo feedback a rendere l'app ancora migliore.",
      beta: "Partecipa alla beta",
      betaEmail: "Indirizzo email",
      betaEmailPlaceholder: "tu@esempio.it",
      betaLanguage: "Lingua preferita",
      betaDevice: "iPhone e versione iOS",
      betaDevicePlaceholder: "Facoltativo, es. iPhone 15 · iOS 18",
      betaMessage: "Cosa ti interessa di OZLife?",
      betaMessagePlaceholder: "Facoltativo: basta una breve frase.",
      betaConsent:
        "Acconsento al trattamento dei miei dati per gestire la richiesta di partecipazione alla beta.",
      betaPrivacy: "Informazioni sul trattamento dei dati",
      betaSending: "Invio della richiesta …",
      betaSuccess: "Grazie! La tua richiesta è stata inviata privatamente.",
      betaError:
        "Non ha ancora funzionato. Controlla i dati e riprova.",
      betaVerification: "Completa prima il controllo di sicurezza.",
      vision: "Leggi la visione del prodotto",
      footerNote: "Piccole routine quotidiane per Mind, Body & Energy.",
      privacy: "Privacy e sicurezza",
      architecture: "Architettura",
      license: "Licenza",
      legal:
        "© 2026 Cloddy Web. Tutti i diritti riservati. OZLife è un'app di benessere generale, non un dispositivo medico.",
      closeDialog: "Chiudi immagine",
    },
  };

  const c = copy[page] || copy.en;
  const languageLinks = supportedLanguages
    .map(
      (language) => `
        <a href="../${language}/" lang="${language}" ${
          language === page ? 'aria-current="page"' : ""
        }>
          <span>${languages[language].name}</span>
          <strong>${languages[language].short}</strong>
        </a>`,
    )
    .join("");
  const betaLanguageOptions = supportedLanguages
    .map(
      (language) =>
        `<option value="${language}" ${language === page ? "selected" : ""}>${languages[language].name}</option>`,
    )
    .join("");

  const site = document.getElementById("site");

  site.innerHTML = `
    <a class="skip-link" href="#content">${c.skip}</a>
    <header class="site-header" data-header>
      <div class="nav-wrap">
        <a class="brand" href="#top" aria-label="OZLife">
          <span class="brand-mark" aria-hidden="true">
            <span class="brand-node brand-node-mind"></span>
            <span class="brand-node brand-node-body"></span>
            <span class="brand-node brand-node-energy"></span>
          </span>
          <span>OZLife</span>
        </a>
        <button class="menu-toggle" type="button" aria-label="${c.menu}" aria-expanded="false" data-menu-toggle>
          <span></span>
        </button>
        <nav class="nav-links" aria-label="OZLife">
          <a href="#idea">${c.nav.idea}</a>
          <a href="#rhythm">${c.nav.rhythm}</a>
          <a href="#experience">${c.nav.experience}</a>
          <a href="#principles">${c.nav.principles}</a>
          <details class="language-menu">
            <summary aria-label="${c.language}">${languages[page].short}</summary>
            <div class="language-options">${languageLinks}</div>
          </details>
        </nav>
      </div>
    </header>

    <main id="content">
      <section class="hero shell" id="top">
        <div class="hero-copy-block">
          <p class="eyebrow">${c.eyebrow}</p>
          <h1>${c.title}</h1>
          <p class="hero-copy">${c.intro}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#idea">${c.explore}</a>
            <a class="button button-secondary" href="https://github.com/live-oz/ozlife-experience">${c.repository}</a>
          </div>
          <ul class="hero-status" aria-label="Product status">
            ${c.status.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="hero-visual" aria-label="OZLife app preview">
          <figure class="hero-device hero-device-side">
            <img src="../assets/screenshots/04-mind-games.png" alt="${c.visualAlt.mind}" width="1290" height="2796">
          </figure>
          <figure class="hero-device hero-device-main">
            <img src="../assets/captures/daily-hub.png" alt="${c.visualAlt.daily}" width="1206" height="2622">
          </figure>
          <div class="hero-orbit" aria-hidden="true"><span>${c.orbit}</span></div>
        </div>
      </section>

      <section class="shell reveal" id="idea" aria-label="Mind, Body & Energy">
        <div class="rhythm">
          ${c.pillars
            .map(
              (pillar) => `
              <article class="rhythm-item rhythm-item-${pillar.name.toLowerCase()}">
                <div class="rhythm-topline">
                  <span class="rhythm-number">${pillar.number}</span>
                  <span class="rhythm-icon" aria-hidden="true">
                    ${
                      pillar.name === "Mind"
                        ? `<svg viewBox="0 0 32 32" aria-hidden="true"></svg>`
                        : pillar.name === "Body"
                          ? `<svg viewBox="0 0 100 100" fill="currentColor"><circle cx="50" cy="16.5" r="7.5"/><path transform="translate(26 14.5) scale(.48 .82)" d="M43 2h14l2 9c6 1 13 3 17 9 4 11 3 27 10 39-3 7-6 4-6 4-4-10-9-20-13-28l-5 22-2 37c-1 6-6 8-10 5l-4-1c-4 3-9 1-10-5l-2-37-5-22c-4 8-9 18-13 28 0 0-3 3-6-4 7-12 6-28 10-39 4-6 11-8 17-9l2-9Z"/></svg>`
                          : `<svg viewBox="0 0 48 64" fill="currentColor"><path d="M27.84 1.28 7.68 34.56h14.4L16.32 62.72 41.28 24.32H26.4l1.44-23.04Z"/></svg>`
                    }
                  </span>
                </div>
                <h2><span class="rhythm-title-mark" aria-hidden="true"></span>${pillar.name}</h2>
                <p>${pillar.text}</p>
              </article>`,
            )
            .join("")}
        </div>
      </section>

      <section class="section shell" id="rhythm">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">${c.rhythmEyebrow}</p>
            <h2>${c.rhythmTitle}</h2>
          </div>
          <p>${c.rhythmIntro}</p>
        </div>
        <div class="steps reveal">
          ${c.steps
            .map(
              (step, index) => `
              <article class="step">
                <span class="step-index">0${index + 1}</span>
                <h3>${step.title}</h3>
                <p>${step.text}</p>
              </article>`,
            )
            .join("")}
        </div>
      </section>

      <section class="section shell" id="experience">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">${c.experienceEyebrow}</p>
            <h2>${c.experienceTitle}</h2>
          </div>
          <p>${c.experienceIntro}</p>
        </div>
        <div class="feature-stack">
          ${c.features
            .map(
              (feature) => `
              <article class="feature feature-${feature.key} reveal">
                <div class="feature-media">
                  <button class="screen-button" type="button" data-media="${feature.image}" data-alt="${feature.alt}" aria-label="${c.zoom}: ${feature.label}">
                    <img src="${feature.image}" alt="${feature.alt}" width="1290" height="2796" loading="lazy">
                  </button>
                </div>
                <div class="feature-copy">
                  <p class="feature-label">${feature.label}</p>
                  <h3>${feature.title}</h3>
                  <p class="feature-description">${feature.description}</p>
                  <ul class="feature-list feature-list-desktop">
                    ${feature.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                  </ul>
                  <details class="feature-details">
                    <summary>${c.featureDetails}</summary>
                    <ul class="feature-list">
                      ${feature.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                    </ul>
                  </details>
                </div>
              </article>`,
            )
            .join("")}
        </div>
      </section>

      <section class="section shell">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">${c.worldEyebrow}</p>
            <h2>${c.worldTitle}</h2>
          </div>
          <p>${c.worldIntro}</p>
        </div>
        <div class="world-grid reveal">
          ${c.world
            .map(
              (item) => `
              <article class="world-card">
                <button type="button" data-media="${item.image}" data-alt="${item.alt}" aria-label="${c.zoom}: ${item.title}">
                  <span class="world-media">
                    <img src="${item.image}" alt="${item.alt}" width="1206" height="2622" loading="lazy">
                  </span>
                  <span class="world-copy">
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                  </span>
                </button>
              </article>`,
            )
            .join("")}
        </div>
      </section>

      <section class="section shell" id="principles">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">${c.principlesEyebrow}</p>
            <h2>${c.principlesTitle}</h2>
          </div>
          <p>${c.principlesIntro}</p>
        </div>
        <div class="principles reveal">
          <div class="principle-lead">
            <blockquote>${c.quote}</blockquote>
          </div>
          <div class="principle-column">
            ${c.principles
              .map(
                (principle) => `
                <article class="principle-card">
                  <span>${principle.label}</span>
                  <h3>${principle.title}</h3>
                  <p>${principle.text}</p>
                </article>`,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="closing shell reveal">
        <h2>${c.close}</h2>
        <p>${c.closeText}</p>
        <div class="beta-panel">
          <form class="beta-form" data-beta-form>
            <div class="beta-form-row">
              <label>
                <span>${c.betaEmail}</span>
                <input type="email" name="email" autocomplete="email" maxlength="254" placeholder="${c.betaEmailPlaceholder}" required>
              </label>
              <label>
                <span>${c.betaLanguage}</span>
                <select name="language" required>
                  ${betaLanguageOptions}
                </select>
              </label>
            </div>
            <label>
              <span>${c.betaDevice}</span>
              <input type="text" name="device" autocomplete="off" maxlength="120" placeholder="${c.betaDevicePlaceholder}">
            </label>
            <label>
              <span>${c.betaMessage}</span>
              <textarea name="message" maxlength="1000" rows="3" placeholder="${c.betaMessagePlaceholder}"></textarea>
            </label>
            <label class="beta-consent">
              <input type="checkbox" name="consent" required>
              <span>${c.betaConsent} <a href="./privacy/#beta-registration">${c.betaPrivacy}</a></span>
            </label>
            <label class="beta-honeypot" aria-hidden="true">
              Website
              <input type="text" name="website" autocomplete="off" tabindex="-1">
            </label>
            <div class="beta-turnstile" data-beta-turnstile></div>
            <button class="button button-primary beta-submit" type="submit" data-beta-submit>
              <span data-beta-submit-label>${c.beta}</span>
            </button>
            <p class="beta-status" role="status" aria-live="polite" data-beta-status></p>
          </form>
          <a class="button button-secondary" href="./vision/">${c.vision}</a>
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
          <a href="./privacy/">${c.privacy}</a>
          <a href="./architecture/">${c.architecture}</a>
          <a href="./license/">${c.license}</a>
        </nav>
      </div>
    </footer>

    <dialog class="media-dialog" data-media-dialog>
      <button class="dialog-close" type="button" aria-label="${c.closeDialog}" data-dialog-close>×</button>
      <img src="" alt="" data-dialog-image>
    </dialog>
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

  const dialog = document.querySelector("[data-media-dialog]");
  const dialogImage = document.querySelector("[data-dialog-image]");
  const dialogClose = document.querySelector("[data-dialog-close]");

  document.querySelectorAll("[data-media]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      dialogImage.src = trigger.dataset.media;
      dialogImage.alt = trigger.dataset.alt || "";
      dialog.showModal();
    });
  });

  dialogClose.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  const betaForm = document.querySelector("[data-beta-form]");
  const betaSubmit = document.querySelector("[data-beta-submit]");
  const betaSubmitLabel = document.querySelector("[data-beta-submit-label]");
  const betaStatus = document.querySelector("[data-beta-status]");
  const betaTurnstile = document.querySelector("[data-beta-turnstile]");
  let turnstileToken = "";
  let turnstileWidgetId;

  const setBetaStatus = (message, type = "") => {
    betaStatus.textContent = message;
    betaStatus.className = `beta-status${type ? ` is-${type}` : ""}`;
  };

  const resetTurnstile = () => {
    turnstileToken = "";
    if (window.turnstile && turnstileWidgetId !== undefined) {
      window.turnstile.reset(turnstileWidgetId);
    }
  };

  const renderTurnstile = () => {
    if (!window.turnstile || turnstileWidgetId !== undefined) {
      return;
    }

    turnstileWidgetId = window.turnstile.render(betaTurnstile, {
      sitekey: turnstileSiteKey,
      action: "beta-signup",
      theme: "dark",
      language: page,
      callback: (token) => {
        turnstileToken = token;
        if (betaStatus.classList.contains("is-error")) {
          setBetaStatus("");
        }
      },
      "expired-callback": () => {
        turnstileToken = "";
      },
      "error-callback": () => {
        turnstileToken = "";
        setBetaStatus(c.betaError, "error");
      },
    });
  };

  const turnstileScript = document.createElement("script");
  turnstileScript.src =
    "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
  turnstileScript.async = true;
  turnstileScript.defer = true;
  turnstileScript.addEventListener("load", renderTurnstile);
  turnstileScript.addEventListener("error", () => {
    setBetaStatus(c.betaError, "error");
  });
  document.head.append(turnstileScript);

  betaForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!betaForm.reportValidity()) {
      return;
    }

    if (!turnstileToken) {
      setBetaStatus(c.betaVerification, "error");
      return;
    }

    const formData = new FormData(betaForm);
    betaSubmit.disabled = true;
    betaSubmitLabel.textContent = c.betaSending;
    setBetaStatus("");

    try {
      const response = await fetch(betaEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          language: formData.get("language"),
          device: formData.get("device"),
          message: formData.get("message"),
          website: formData.get("website"),
          consent: formData.get("consent") === "on",
          turnstileToken,
        }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) {
        throw new Error("Beta request failed");
      }

      betaForm.reset();
      betaForm.elements.language.value = page;
      setBetaStatus(c.betaSuccess, "success");
    } catch (_error) {
      setBetaStatus(c.betaError, "error");
    } finally {
      resetTurnstile();
      betaSubmit.disabled = false;
      betaSubmitLabel.textContent = c.beta;
    }
  });
})();
