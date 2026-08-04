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
        principles: "Grundsätze",
        location: "Was bleibt wo?",
        control: "Kontrolle",
        boundaries: "Grenzen",
      },
      eyebrow: "Datenschutz & Sicherheit",
      title: "Dein persönlicher Raum bleibt <span>unter deiner Kontrolle.</span>",
      intro:
        "OZLife ist primär auf lokale Nutzung ausgerichtet. Persönliche Inhalte verdienen einen ruhigen, geschützten Ort; optionale Plattformzugriffe brauchen eine bewusste Entscheidung.",
      explore: "Grundsätze ansehen",
      heroCardLabel: "Öffentliche Produktrichtung",
      heroCardTitle: "Vertrauen durch Klarheit.",
      heroCardText:
        "Diese Seite beschreibt die Produktprinzipien auf hoher Ebene – keine vollständige Datenschutzerklärung, Sicherheitsspezifikation oder rechtliche Garantie.",
      signalLocal: "Primär lokal",
      signalOptional: "Optional verbunden",
      signalControl: "Von dir gesteuert",
      principlesEyebrow: "Vier Grundsätze",
      principlesTitle: "Klare Entscheidungen statt versteckter Zugriffe.",
      principlesIntro:
        "OZLife behandelt persönliche Inhalte, Plattformverbindungen und Schutzfunktionen als Bereiche, die verständlich und kontrollierbar bleiben sollen.",
      principles: [
        {
          key: "local",
          number: "01",
          label: "PRIMÄR LOKAL",
          title: "Auf deinem Gerät gedacht",
          text: "Persönliche Inhalte und Fortschritt sind für eine primär lokale, gerätebezogene Nutzung konzipiert.",
        },
        {
          key: "optional",
          number: "02",
          label: "OPTIONAL",
          title: "Nur verbunden, wenn du es willst",
          text: "Apple Health, Benachrichtigungen und weitere Plattformfunktionen bleiben freiwillige Entscheidungen.",
        },
        {
          key: "permission",
          number: "03",
          label: "FREIGEGEBEN",
          title: "Zugriff mit Kontext",
          text: "Optionale Funktionen hängen von deiner Wahl und den Berechtigungen der Plattform ab.",
        },
        {
          key: "protected",
          number: "04",
          label: "GESCHÜTZT",
          title: "Private Bereiche absichern",
          text: "Biometrischer Schutz kann als nutzergesteuerte Zugangshürde für persönliche Bereiche dienen.",
        },
      ],
      locationEyebrow: "Was bleibt wo?",
      locationTitle: "Persönliche Inhalte im Zentrum. Verbindungen nur bei Bedarf.",
      locationIntro:
        "Die Produktrichtung stellt lokale Erlebnisse in den Mittelpunkt. Optionale Apple-Funktionen liegen als bewusste Verbindungen darum herum.",
      deviceLabel: "AUF DEINEM GERÄT",
      deviceTitle: "Dein persönlicher OZLife-Raum",
      deviceItems: ["Tagebuch & Reflexionen", "Sprachnotizen", "Favoriten & gespeicherte Inhalte", "Persönlicher Fortschritt"],
      optionalLabel: "OPTIONAL VERBUNDEN",
      optionalItems: [
        { title: "Apple Health", text: "Nur nach deiner Freigabe" },
        { title: "Benachrichtigungen", text: "Über iOS steuerbar" },
        { title: "Biometrie", text: "Optionaler Zugangsschutz" },
      ],
      locationNote:
        "„Primär lokal“ ist bewusst präzise formuliert. Es beschreibt keine Speicherarchitektur, Plattform-Backups oder absolute Garantie über die öffentlich verfügbare Produktinformation hinaus.",
      controlEyebrow: "Kontrolle sichtbar machen",
      controlTitle: "Eine Verbindung hat einen verständlichen Zustand.",
      controlIntro:
        "Optionale Funktionen sollten nicht still im Hintergrund entstehen. Die Entscheidung, der Kontext und die Möglichkeit zur Änderung gehören zusammen.",
      controlStates: [
        {
          number: "01",
          state: "NICHT VERBUNDEN",
          title: "Die Funktion bleibt aus",
          text: "Ohne Freigabe besteht keine optionale Verbindung über diesen Produktweg.",
        },
        {
          number: "02",
          state: "BEWUSST FREIGEGEBEN",
          title: "Du kennst den Zweck",
          text: "Der Zugriff wird im Kontext der Funktion und über den Plattformdialog entschieden.",
        },
        {
          number: "03",
          state: "JEDERZEIT ÄNDERBAR",
          title: "Die Entscheidung bleibt bei dir",
          text: "Plattformberechtigungen können über die iOS-Einstellungen angepasst werden.",
        },
      ],
      boundariesEyebrow: "Verantwortungsvolle Grenzen",
      boundariesTitle: "Wellness unterstützen, medizinische Versorgung nicht ersetzen.",
      boundariesText:
        "OZLife unterstützt allgemeines Wohlbefinden, Routinen und Reflexion. Die App ist kein Medizinprodukt und bietet oder ersetzt keine professionelle Beratung, Diagnose oder Behandlung.",
      supportTitle: "Wenn du Unterstützung brauchst",
      supportText:
        "Bei medizinischen oder psychischen Anliegen wende dich bitte an entsprechend qualifizierte Fachpersonen.",
      scopeTitle: "Was diese Seite ist – und was nicht",
      scopeText:
        "Sie beschreibt die öffentliche Produktrichtung. Sie ist keine vollständige Datenschutzerklärung, technische Sicherheitsspezifikation oder rechtliche Garantie.",
      betaPrivacyEyebrow: "Beta-Anmeldung",
      betaPrivacyTitle: "Was mit deinen Angaben geschieht.",
      betaPrivacyIntro:
        "Die Anmeldung ist freiwillig. Verantwortlich ist Cloddy Web; Fragen, Widerruf oder Löschwünsche kannst du an cloddy@larispostae42.eu richten.",
      betaPrivacyFacts: [
        {
          title: "Welche Angaben",
          text: "Verarbeitet werden deine E-Mail-Adresse, deine bevorzugte Sprache sowie freiwillige Angaben zu Gerät und Interesse. Bitte übermittle keine Gesundheitsdaten oder anderen sensiblen Informationen.",
        },
        {
          title: "Zweck und Einwilligung",
          text: "Wir verwenden die Angaben ausschließlich, um deine Beta-Anfrage zu prüfen, dich dazu zu kontaktieren und eine mögliche Teilnahme zu koordinieren. Du kannst deine Einwilligung jederzeit für die Zukunft widerrufen.",
        },
        {
          title: "Technischer Weg",
          text: "Cloudflare Turnstile schützt das Formular vor Missbrauch. Ein Cloudflare Worker prüft und übermittelt die Anfrage über Resend an ein privates Postfach. Der Worker legt keinen öffentlichen Eintrag und keine eigene Datenbankkopie an.",
        },
        {
          title: "Speicherdauer",
          text: "Die Anfrage bleibt nur so lange im privaten Postfach, wie sie für Auswahl und Durchführung des Beta-Tests erforderlich ist, und wird danach gelöscht; gesetzliche Aufbewahrungspflichten bleiben unberührt.",
        },
      ],
      reportEyebrow: "Sicher melden",
      reportTitle: "Sensible Informationen gehören nicht in öffentliche GitHub Issues.",
      reportText:
        "Veröffentliche dort keine Schwachstellendetails, persönlichen Informationen, Zugangsdaten oder sensiblen technischen Daten. Nutze für mögliche Sicherheitsprobleme den beschriebenen Koordinationsweg.",
      security: "Sicherheitsprozess lesen",
      issues: "Allgemeines Problem melden",
      footerNote: "Kleine tägliche Routinen für Mind, Body & Energy.",
      vision: "Produktvision",
      architecture: "Architektur",
      license: "Lizenz",
      legal:
        "© 2026 Cloddy Web. Alle Rechte vorbehalten. Diese Seite beschreibt öffentliche Produktprinzipien und ist keine vollständige Datenschutzerklärung oder Sicherheitsgarantie.",
    },
    en: {
      skip: "Skip to content",
      menu: "Open menu",
      language: "Choose language",
      back: "Back to the showcase",
      nav: {
        principles: "Principles",
        location: "What stays where?",
        control: "Control",
        boundaries: "Boundaries",
      },
      eyebrow: "Privacy & safety",
      title: "Your personal space stays <span>under your control.</span>",
      intro:
        "OZLife is designed primarily around local use. Personal content deserves a calm, protected place; optional platform access should always begin with an informed choice.",
      explore: "View the principles",
      heroCardLabel: "Public product direction",
      heroCardTitle: "Trust through clarity.",
      heroCardText:
        "This page describes high-level product principles—not a complete privacy policy, security specification, or legal guarantee.",
      signalLocal: "Primarily local",
      signalOptional: "Optionally connected",
      signalControl: "Controlled by you",
      principlesEyebrow: "Four principles",
      principlesTitle: "Clear choices instead of hidden access.",
      principlesIntro:
        "OZLife treats personal content, platform connections, and protection features as areas that should remain understandable and controllable.",
      principles: [
        {
          key: "local",
          number: "01",
          label: "PRIMARILY LOCAL",
          title: "Designed around your device",
          text: "Personal content and progress are designed for a primarily local, on-device experience.",
        },
        {
          key: "optional",
          number: "02",
          label: "OPTIONAL",
          title: "Connected only when you choose",
          text: "Apple Health, notifications, and other platform capabilities remain voluntary decisions.",
        },
        {
          key: "permission",
          number: "03",
          label: "PERMISSION-BASED",
          title: "Access with context",
          text: "Optional capabilities depend on your choice and the platform permissions you grant.",
        },
        {
          key: "protected",
          number: "04",
          label: "PROTECTED",
          title: "Secure private areas",
          text: "Biometric protection can provide a user-controlled access barrier for personal areas.",
        },
      ],
      locationEyebrow: "What stays where?",
      locationTitle: "Personal content at the centre. Connections only when needed.",
      locationIntro:
        "The product direction places local experiences at the centre. Optional Apple capabilities sit around them as deliberate connections.",
      deviceLabel: "ON YOUR DEVICE",
      deviceTitle: "Your personal OZLife space",
      deviceItems: ["Diary & reflections", "Voice notes", "Favourites & saved content", "Personal progress"],
      optionalLabel: "OPTIONALLY CONNECTED",
      optionalItems: [
        { title: "Apple Health", text: "Only with your permission" },
        { title: "Notifications", text: "Controlled through iOS" },
        { title: "Biometrics", text: "Optional access protection" },
      ],
      locationNote:
        "“Primarily local” is deliberately precise. It does not describe storage architecture, platform backups, or an absolute guarantee beyond the publicly available product information.",
      controlEyebrow: "Make control visible",
      controlTitle: "A connection should have an understandable state.",
      controlIntro:
        "Optional capabilities should not appear silently in the background. The decision, its context, and the ability to change it belong together.",
      controlStates: [
        {
          number: "01",
          state: "NOT CONNECTED",
          title: "The capability stays off",
          text: "Without permission, no optional connection exists through this product path.",
        },
        {
          number: "02",
          state: "INTENTIONALLY ENABLED",
          title: "You understand the purpose",
          text: "Access is decided in the context of the feature and through the platform permission flow.",
        },
        {
          number: "03",
          state: "CHANGEABLE ANY TIME",
          title: "The decision remains yours",
          text: "Platform permissions can be adjusted through iOS settings.",
        },
      ],
      boundariesEyebrow: "Responsible boundaries",
      boundariesTitle: "Support wellness without replacing medical care.",
      boundariesText:
        "OZLife supports general wellness, routines, and reflection. It is not a medical device and does not provide or replace professional advice, diagnosis, or treatment.",
      supportTitle: "When you need support",
      supportText:
        "For medical or mental-health concerns, please seek appropriately qualified professional support.",
      scopeTitle: "What this page is—and is not",
      scopeText:
        "It describes the public product direction. It is not a complete privacy policy, technical security specification, or legal guarantee.",
      betaPrivacyEyebrow: "Beta registration",
      betaPrivacyTitle: "What happens to your information.",
      betaPrivacyIntro:
        "Registration is voluntary. Cloddy Web is responsible for processing; questions, withdrawals, or deletion requests can be sent to cloddy@larispostae42.eu.",
      betaPrivacyFacts: [
        {
          title: "Information collected",
          text: "We process your email address, preferred language, and any optional information about your device and interest. Please do not submit health data or other sensitive information.",
        },
        {
          title: "Purpose and consent",
          text: "We use the information only to review your beta request, contact you about it, and coordinate possible participation. You may withdraw your consent at any time for the future.",
        },
        {
          title: "Technical processing",
          text: "Cloudflare Turnstile protects the form from abuse. A Cloudflare Worker checks the request and sends it through Resend to a private mailbox. The Worker creates no public record or separate database copy.",
        },
        {
          title: "Retention",
          text: "The request remains in the private mailbox only as long as needed to select and run the beta test, then it is deleted; statutory retention obligations remain unaffected.",
        },
      ],
      reportEyebrow: "Report safely",
      reportTitle: "Sensitive information does not belong in public GitHub Issues.",
      reportText:
        "Do not publish vulnerability details, personal information, credentials, or sensitive technical data there. Use the documented coordination process for potential security concerns.",
      security: "Read the security process",
      issues: "Report a general issue",
      footerNote: "Small daily routines for Mind, Body & Energy.",
      vision: "Product vision",
      architecture: "Architecture",
      license: "License",
      legal:
        "© 2026 Cloddy Web. All rights reserved. This page describes public product principles and is not a complete privacy policy or security guarantee.",
    },
    es: {
      skip: "Saltar al contenido",
      menu: "Abrir menú",
      language: "Elegir idioma",
      back: "Volver a la presentación",
      nav: {
        principles: "Principios",
        location: "¿Qué permanece dónde?",
        control: "Control",
        boundaries: "Límites",
      },
      eyebrow: "Privacidad y seguridad",
      title: "Tu espacio personal permanece <span>bajo tu control.</span>",
      intro:
        "OZLife está diseñado principalmente para el uso local. El contenido personal merece un lugar tranquilo y protegido; los accesos opcionales a la plataforma deben comenzar con una decisión consciente.",
      explore: "Ver los principios",
      heroCardLabel: "Dirección pública del producto",
      heroCardTitle: "Confianza mediante claridad.",
      heroCardText:
        "Esta página describe principios generales del producto, no una política de privacidad completa, una especificación de seguridad ni una garantía legal.",
      signalLocal: "Principalmente local",
      signalOptional: "Conexión opcional",
      signalControl: "Controlado por ti",
      principlesEyebrow: "Cuatro principios",
      principlesTitle: "Decisiones claras en lugar de accesos ocultos.",
      principlesIntro:
        "OZLife trata el contenido personal, las conexiones con la plataforma y las funciones de protección como ámbitos comprensibles y controlables.",
      principles: [
        {
          key: "local",
          number: "01",
          label: "PRINCIPALMENTE LOCAL",
          title: "Pensado para tu dispositivo",
          text: "El contenido personal y el progreso están diseñados para una experiencia principalmente local en el dispositivo.",
        },
        {
          key: "optional",
          number: "02",
          label: "OPCIONAL",
          title: "Conectado solo si tú decides",
          text: "Apple Health, las notificaciones y otras funciones de la plataforma siguen siendo decisiones voluntarias.",
        },
        {
          key: "permission",
          number: "03",
          label: "CON PERMISO",
          title: "Acceso con contexto",
          text: "Las funciones opcionales dependen de tu decisión y de los permisos que concedas en la plataforma.",
        },
        {
          key: "protected",
          number: "04",
          label: "PROTEGIDO",
          title: "Protección de áreas privadas",
          text: "La biometría puede ofrecer una barrera de acceso controlada por el usuario para áreas personales.",
        },
      ],
      locationEyebrow: "¿Qué permanece dónde?",
      locationTitle: "El contenido personal en el centro. Conexiones solo cuando hacen falta.",
      locationIntro:
        "La dirección del producto sitúa las experiencias locales en el centro. Las funciones opcionales de Apple se conectan de forma deliberada alrededor de ellas.",
      deviceLabel: "EN TU DISPOSITIVO",
      deviceTitle: "Tu espacio personal en OZLife",
      deviceItems: ["Diario y reflexiones", "Notas de voz", "Favoritos y contenido guardado", "Progreso personal"],
      optionalLabel: "CONEXIÓN OPCIONAL",
      optionalItems: [
        { title: "Apple Health", text: "Solo con tu permiso" },
        { title: "Notificaciones", text: "Controladas desde iOS" },
        { title: "Biometría", text: "Protección de acceso opcional" },
      ],
      locationNote:
        "«Principalmente local» es una formulación deliberadamente precisa. No describe la arquitectura de almacenamiento, las copias de seguridad de la plataforma ni una garantía absoluta más allá de la información pública disponible.",
      controlEyebrow: "Hacer visible el control",
      controlTitle: "Una conexión debe tener un estado comprensible.",
      controlIntro:
        "Las funciones opcionales no deben aparecer silenciosamente en segundo plano. La decisión, su contexto y la posibilidad de cambiarla van juntas.",
      controlStates: [
        {
          number: "01",
          state: "NO CONECTADO",
          title: "La función permanece desactivada",
          text: "Sin permiso no existe ninguna conexión opcional a través de esta función.",
        },
        {
          number: "02",
          state: "ACTIVADO CONSCIENTEMENTE",
          title: "Conoces su propósito",
          text: "El acceso se decide en el contexto de la función y mediante el diálogo de permisos de la plataforma.",
        },
        {
          number: "03",
          state: "MODIFICABLE EN CUALQUIER MOMENTO",
          title: "La decisión sigue siendo tuya",
          text: "Los permisos de la plataforma pueden ajustarse desde los ajustes de iOS.",
        },
      ],
      boundariesEyebrow: "Límites responsables",
      boundariesTitle: "Apoyar el bienestar sin sustituir la atención médica.",
      boundariesText:
        "OZLife apoya el bienestar general, las rutinas y la reflexión. No es un dispositivo médico y no ofrece ni sustituye asesoramiento, diagnóstico o tratamiento profesional.",
      supportTitle: "Cuando necesites ayuda",
      supportText:
        "Ante cuestiones médicas o de salud mental, busca el apoyo de profesionales debidamente cualificados.",
      scopeTitle: "Qué es esta página y qué no es",
      scopeText:
        "Describe la dirección pública del producto. No es una política de privacidad completa, una especificación técnica de seguridad ni una garantía legal.",
      betaPrivacyEyebrow: "Registro para la beta",
      betaPrivacyTitle: "Qué ocurre con tus datos.",
      betaPrivacyIntro:
        "El registro es voluntario. Cloddy Web es responsable del tratamiento; puedes enviar preguntas, revocaciones o solicitudes de eliminación a cloddy@larispostae42.eu.",
      betaPrivacyFacts: [
        {
          title: "Datos tratados",
          text: "Tratamos tu correo electrónico, el idioma preferido y los datos opcionales sobre tu dispositivo e interés. No envíes datos de salud ni otra información sensible.",
        },
        {
          title: "Finalidad y consentimiento",
          text: "Usamos los datos únicamente para revisar tu solicitud, contactar contigo y coordinar una posible participación. Puedes retirar tu consentimiento en cualquier momento con efectos futuros.",
        },
        {
          title: "Tratamiento técnico",
          text: "Cloudflare Turnstile protege el formulario frente a abusos. Un Cloudflare Worker comprueba la solicitud y la envía mediante Resend a un buzón privado. El Worker no crea registros públicos ni copias en una base de datos.",
        },
        {
          title: "Conservación",
          text: "La solicitud permanece en el buzón privado solo mientras sea necesaria para seleccionar y realizar la beta y se elimina después; las obligaciones legales de conservación no se ven afectadas.",
        },
      ],
      reportEyebrow: "Informar de forma segura",
      reportTitle: "La información sensible no debe publicarse en GitHub Issues.",
      reportText:
        "No publiques allí detalles de vulnerabilidades, información personal, credenciales ni datos técnicos sensibles. Utiliza el proceso de coordinación documentado para posibles problemas de seguridad.",
      security: "Leer el proceso de seguridad",
      issues: "Informar de un problema general",
      footerNote: "Pequeñas rutinas diarias para Mind, Body y Energy.",
      vision: "Visión del producto",
      architecture: "Arquitectura",
      license: "Licencia",
      legal:
        "© 2026 Cloddy Web. Todos los derechos reservados. Esta página describe principios públicos del producto y no es una política de privacidad completa ni una garantía de seguridad.",
    },
    it: {
      skip: "Vai al contenuto",
      menu: "Apri menu",
      language: "Scegli la lingua",
      back: "Torna alla presentazione",
      nav: {
        principles: "Principi",
        location: "Cosa rimane dove?",
        control: "Controllo",
        boundaries: "Limiti",
      },
      eyebrow: "Privacy e sicurezza",
      title: "Il tuo spazio personale rimane <span>sotto il tuo controllo.</span>",
      intro:
        "OZLife è progettato principalmente per l'uso locale. I contenuti personali meritano un luogo tranquillo e protetto; gli accessi opzionali alla piattaforma devono iniziare da una scelta consapevole.",
      explore: "Scopri i principi",
      heroCardLabel: "Direzione pubblica del prodotto",
      heroCardTitle: "Fiducia attraverso la chiarezza.",
      heroCardText:
        "Questa pagina descrive principi di prodotto generali, non un'informativa completa sulla privacy, una specifica di sicurezza o una garanzia legale.",
      signalLocal: "Principalmente locale",
      signalOptional: "Connesso facoltativamente",
      signalControl: "Controllato da te",
      principlesEyebrow: "Quattro principi",
      principlesTitle: "Scelte chiare invece di accessi nascosti.",
      principlesIntro:
        "OZLife tratta contenuti personali, collegamenti alla piattaforma e funzioni di protezione come aree che devono restare comprensibili e controllabili.",
      principles: [
        {
          key: "local",
          number: "01",
          label: "PRINCIPALMENTE LOCALE",
          title: "Pensato per il tuo dispositivo",
          text: "I contenuti personali e i progressi sono progettati per un'esperienza principalmente locale sul dispositivo.",
        },
        {
          key: "optional",
          number: "02",
          label: "FACOLTATIVO",
          title: "Connesso solo se lo scegli",
          text: "Apple Health, notifiche e altre funzioni della piattaforma restano decisioni volontarie.",
        },
        {
          key: "permission",
          number: "03",
          label: "CON AUTORIZZAZIONE",
          title: "Accesso con contesto",
          text: "Le funzioni opzionali dipendono dalla tua scelta e dalle autorizzazioni concesse alla piattaforma.",
        },
        {
          key: "protected",
          number: "04",
          label: "PROTETTO",
          title: "Proteggere le aree private",
          text: "La biometria può offrire una barriera di accesso controllata dall'utente per le aree personali.",
        },
      ],
      locationEyebrow: "Cosa rimane dove?",
      locationTitle: "I contenuti personali al centro. Collegamenti solo quando servono.",
      locationIntro:
        "La direzione del prodotto mette al centro le esperienze locali. Le funzioni Apple opzionali si collegano intorno ad esse in modo consapevole.",
      deviceLabel: "SUL TUO DISPOSITIVO",
      deviceTitle: "Il tuo spazio personale in OZLife",
      deviceItems: ["Diario e riflessioni", "Note vocali", "Preferiti e contenuti salvati", "Progressi personali"],
      optionalLabel: "CONNESSO FACOLTATIVAMENTE",
      optionalItems: [
        { title: "Apple Health", text: "Solo con il tuo consenso" },
        { title: "Notifiche", text: "Controllate tramite iOS" },
        { title: "Biometria", text: "Protezione di accesso opzionale" },
      ],
      locationNote:
        "“Principalmente locale” è una formulazione volutamente precisa. Non descrive l'architettura di archiviazione, i backup della piattaforma o una garanzia assoluta oltre le informazioni pubbliche disponibili.",
      controlEyebrow: "Rendere visibile il controllo",
      controlTitle: "Un collegamento deve avere uno stato comprensibile.",
      controlIntro:
        "Le funzioni opzionali non dovrebbero comparire silenziosamente in sottofondo. La decisione, il suo contesto e la possibilità di cambiarla fanno parte dello stesso processo.",
      controlStates: [
        {
          number: "01",
          state: "NON CONNESSO",
          title: "La funzione rimane disattivata",
          text: "Senza autorizzazione non esiste alcun collegamento opzionale attraverso questa funzione.",
        },
        {
          number: "02",
          state: "ATTIVATO CONSAPEVOLMENTE",
          title: "Ne conosci lo scopo",
          text: "L'accesso viene deciso nel contesto della funzione e tramite il flusso di autorizzazione della piattaforma.",
        },
        {
          number: "03",
          state: "MODIFICABILE IN OGNI MOMENTO",
          title: "La decisione rimane tua",
          text: "Le autorizzazioni della piattaforma possono essere modificate nelle impostazioni di iOS.",
        },
      ],
      boundariesEyebrow: "Limiti responsabili",
      boundariesTitle: "Sostenere il benessere senza sostituire le cure mediche.",
      boundariesText:
        "OZLife sostiene il benessere generale, le routine e la riflessione. Non è un dispositivo medico e non offre né sostituisce consulenza, diagnosi o trattamento professionale.",
      supportTitle: "Quando hai bisogno di supporto",
      supportText:
        "Per problemi medici o di salute mentale, rivolgiti a professionisti adeguatamente qualificati.",
      scopeTitle: "Che cos'è questa pagina e che cosa non è",
      scopeText:
        "Descrive la direzione pubblica del prodotto. Non è un'informativa completa sulla privacy, una specifica tecnica di sicurezza o una garanzia legale.",
      betaPrivacyEyebrow: "Iscrizione alla beta",
      betaPrivacyTitle: "Come vengono trattati i tuoi dati.",
      betaPrivacyIntro:
        "L'iscrizione è volontaria. Il titolare del trattamento è Cloddy Web; domande, revoche o richieste di cancellazione possono essere inviate a cloddy@larispostae42.eu.",
      betaPrivacyFacts: [
        {
          title: "Dati trattati",
          text: "Trattiamo il tuo indirizzo email, la lingua preferita e le informazioni facoltative su dispositivo e interesse. Non inviare dati sanitari o altre informazioni sensibili.",
        },
        {
          title: "Finalità e consenso",
          text: "Utilizziamo i dati esclusivamente per valutare la richiesta, contattarti e coordinare un'eventuale partecipazione. Puoi revocare il consenso in qualsiasi momento per il futuro.",
        },
        {
          title: "Trattamento tecnico",
          text: "Cloudflare Turnstile protegge il modulo dagli abusi. Un Cloudflare Worker verifica la richiesta e la invia tramite Resend a una casella privata. Il Worker non crea registri pubblici né copie in un database.",
        },
        {
          title: "Conservazione",
          text: "La richiesta resta nella casella privata solo per il tempo necessario alla selezione e allo svolgimento della beta, poi viene eliminata; restano salvi gli obblighi legali di conservazione.",
        },
      ],
      reportEyebrow: "Segnalare in sicurezza",
      reportTitle: "Le informazioni sensibili non devono essere pubblicate nelle GitHub Issues.",
      reportText:
        "Non pubblicare dettagli sulle vulnerabilità, informazioni personali, credenziali o dati tecnici sensibili. Usa il processo di coordinamento documentato per possibili problemi di sicurezza.",
      security: "Leggi il processo di sicurezza",
      issues: "Segnala un problema generale",
      footerNote: "Piccole routine quotidiane per Mind, Body ed Energy.",
      vision: "Visione del prodotto",
      architecture: "Architettura",
      license: "Licenza",
      legal:
        "© 2026 Cloddy Web. Tutti i diritti riservati. Questa pagina descrive principi pubblici del prodotto e non è un'informativa completa sulla privacy o una garanzia di sicurezza.",
    },
  };

  const c = copy[page] || copy.en;
  const languageLinks = supportedLanguages
    .map(
      (language) => `
        <a href="../../${language}/privacy/" lang="${language}" ${
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
          <a href="#principles">${c.nav.principles}</a>
          <a href="#location">${c.nav.location}</a>
          <a href="#control">${c.nav.control}</a>
          <a href="#boundaries">${c.nav.boundaries}</a>
          <details class="language-menu">
            <summary aria-label="${c.language}">${languages[page].short}</summary>
            <div class="language-options">${languageLinks}</div>
          </details>
        </nav>
      </div>
    </header>

    <main id="content">
      <section class="privacy-hero shell" id="top">
        <div class="privacy-hero-copy">
          <a class="vision-back-link" href="../">${c.back}</a>
          <p class="eyebrow">${c.eyebrow}</p>
          <h1>${c.title}</h1>
          <p class="privacy-hero-intro">${c.intro}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#principles">${c.explore}</a>
          </div>
        </div>
        <aside class="privacy-trust-card">
          <div class="privacy-shield" aria-hidden="true">
            <span class="privacy-shield-core"></span>
          </div>
          <div class="privacy-trust-copy">
            <p>${c.heroCardLabel}</p>
            <h2>${c.heroCardTitle}</h2>
            <p>${c.heroCardText}</p>
          </div>
          <ul class="privacy-signals">
            <li><span></span>${c.signalLocal}</li>
            <li><span></span>${c.signalOptional}</li>
            <li><span></span>${c.signalControl}</li>
          </ul>
        </aside>
      </section>

      <section class="privacy-section shell" id="principles">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">${c.principlesEyebrow}</p>
            <h2>${c.principlesTitle}</h2>
          </div>
          <p>${c.principlesIntro}</p>
        </div>
        <div class="privacy-principles reveal">
          ${c.principles
            .map(
              (principle) => `
                <article class="privacy-principle privacy-principle-${principle.key}">
                  <div class="privacy-principle-top">
                    <span>${principle.number}</span>
                    <i aria-hidden="true"></i>
                  </div>
                  <div>
                    <p class="privacy-principle-label">${principle.label}</p>
                    <h3>${principle.title}</h3>
                    <p>${principle.text}</p>
                  </div>
                </article>`,
            )
            .join("")}
        </div>
      </section>

      <section class="privacy-section shell" id="location">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">${c.locationEyebrow}</p>
            <h2>${c.locationTitle}</h2>
          </div>
          <p>${c.locationIntro}</p>
        </div>
        <div class="privacy-map reveal">
          <div class="privacy-device-zone">
            <div class="privacy-device">
              <div class="privacy-device-head">
                <span>${c.deviceLabel}</span>
                <i aria-hidden="true"></i>
              </div>
              <h3>${c.deviceTitle}</h3>
              <ul>
                ${c.deviceItems.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>
          <div class="privacy-connections">
            <p class="privacy-connection-label">${c.optionalLabel}</p>
            ${c.optionalItems
              .map(
                (item, index) => `
                  <article>
                    <span>0${index + 1}</span>
                    <div>
                      <h3>${item.title}</h3>
                      <p>${item.text}</p>
                    </div>
                    <i aria-hidden="true"></i>
                  </article>`,
              )
              .join("")}
          </div>
          <p class="privacy-map-note">${c.locationNote}</p>
        </div>
      </section>

      <section class="privacy-section shell" id="control">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">${c.controlEyebrow}</p>
            <h2>${c.controlTitle}</h2>
          </div>
          <p>${c.controlIntro}</p>
        </div>
        <div class="privacy-control reveal">
          ${c.controlStates
            .map(
              (item, index) => `
                <article>
                  <div class="privacy-control-status">
                    <span>0${index + 1}</span>
                    <i class="${index === 1 ? "is-active" : ""}" aria-hidden="true"></i>
                  </div>
                  <p class="privacy-control-state">${item.state}</p>
                  <h3>${item.title}</h3>
                  <p>${item.text}</p>
                </article>`,
            )
            .join("")}
        </div>
      </section>

      <section class="privacy-section shell" id="boundaries">
        <div class="privacy-boundaries reveal">
          <div class="privacy-boundary-lead">
            <p class="eyebrow">${c.boundariesEyebrow}</p>
            <h2>${c.boundariesTitle}</h2>
            <p>${c.boundariesText}</p>
          </div>
          <div class="privacy-boundary-cards">
            <article>
              <span>01</span>
              <h3>${c.supportTitle}</h3>
              <p>${c.supportText}</p>
            </article>
            <article>
              <span>02</span>
              <h3>${c.scopeTitle}</h3>
              <p>${c.scopeText}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="privacy-section shell" id="beta-registration">
        <div class="privacy-beta reveal">
          <div class="privacy-beta-lead">
            <p class="eyebrow">${c.betaPrivacyEyebrow}</p>
            <h2>${c.betaPrivacyTitle}</h2>
            <p>${c.betaPrivacyIntro.replace("cloddy@larispostae42.eu", '<a href="mailto:cloddy@larispostae42.eu">cloddy@larispostae42.eu</a>')}</p>
          </div>
          <div class="privacy-beta-facts">
            ${c.betaPrivacyFacts
              .map(
                (fact) => `
                  <article>
                    <h3>${fact.title}</h3>
                    <p>${fact.text}</p>
                  </article>`,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="privacy-report shell reveal">
        <div>
          <p class="eyebrow">${c.reportEyebrow}</p>
          <h2>${c.reportTitle}</h2>
          <p>${c.reportText}</p>
        </div>
        <div class="hero-actions">
          <a class="button button-primary" href="../security/">${c.security}</a>
          <a class="button button-secondary" href="https://github.com/live-oz/ozlife-experience/issues">${c.issues}</a>
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
