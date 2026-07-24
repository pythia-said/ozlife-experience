# OZLife visual audit

This audit records the visual state reviewed before the authentic-showcase redesign and the resulting decision for every existing media asset.

## Audit criteria

Each visual was reviewed for authenticity, readability, duplication, crop quality, product-story value, and behaviour in GitHub light, dark, desktop, and mobile layouts.

The current six landscape presentation images repeat the same source screen twice—once as context and once as an enlarged crop—on broad dark surfaces. This creates visual weight without adding product information. The GIF and MP4 are screenshot slideshows rather than recordings of genuine app interaction.

## Existing visual decisions

| Visual | Decision | Reason |
| --- | --- | --- |
| `assets/brand/app-icon-approved.png` | **KEEP** | Authentic icon export and a strong compact product identifier. |
| `assets/brand/hero-approved.png` | **REPLACE** | Repeats several screens used elsewhere and creates a dark, distant first impression. Replaced in the README by a simpler icon-led masthead. |
| `assets/brand/social-preview.png` | **KEEP** | Clear, correctly sized repository social card with a unique off-README purpose. |
| `assets/screenshots/01-daily-hub.png` | **REPLACE** | Useful state, but superseded in the README by a sharper, complete native simulator capture. |
| `assets/screenshots/02-daily-focus.png` | **KEEP ONLY AS FULL-SIZE ARCHIVE** | Authentic approved export, but not required for the shorter product story. |
| `assets/screenshots/03-guided-body.png` | **KEEP** | Complete guided-session context with exercise media, instruction, and progress. Used once for Body. |
| `assets/screenshots/04-mind-games.png` | **KEEP** | Strong Mind Games identity, Daily Pick, and useful activity variety. Used once for Mind. |
| `assets/screenshots/05-energy-review.png` | **KEEP** | Complete weekly review with meaningful patterns. Used once for Energy. |
| `assets/screenshots/06-garage.png` | **REPLACE** | Authentic approved export, but superseded in the README by a new complete native capture. |
| `assets/presentation/daily-flow-feature.png` | **REMOVE FROM README** | Repeats one screen inside a wide composite and makes the UI smaller. |
| `assets/presentation/focus-feature.png` | **REMOVE FROM README** | Repeats one screen inside a wide composite and weakens readability. |
| `assets/presentation/body-feature.png` | **REMOVE FROM README** | Adds a second crop without adding a second product state. |
| `assets/presentation/mind-feature.png` | **REMOVE FROM README** | Adds a second crop without adding a second product state. |
| `assets/presentation/energy-feature.png` | **REMOVE FROM README** | Adds a second crop without adding a second product state. |
| `assets/presentation/garage-feature.png` | **REMOVE FROM README** | Adds a second crop without adding a second product state. |
| `assets/video/ozlife-teaser.gif` | **KEEP ONLY AS FULL-SIZE ARCHIVE** | Screenshot slideshow, not genuine app motion; removed from the README and not reused. |
| `assets/video/ozlife-teaser.mp4` | **KEEP ONLY AS FULL-SIZE ARCHIVE** | Screenshot slideshow, not genuine app motion; retained only as a historical approved export. |

## Fresh authentic captures

| Visual | Decision | Purpose |
| --- | --- | --- |
| `assets/captures/daily-hub.png` | **KEEP** | Complete daily rhythm, focus, and progression; used once in One day with OZLife. |
| `assets/captures/library.png` | **KEEP** | Genuinely different saved-content and Diary entry point; used once Beyond the daily rhythm. |
| `assets/captures/garage.png` | **KEEP** | Complete avatar and honest progression context; used once Beyond the daily rhythm. |

## Product-state findings

- The real External Release build provides clean, English, public-safe Daily Hub, Library, and Garage states.
- The Focus Ritual is visually distinctive, but the current simulator state places its Story control beneath the status area. It was not published.
- The Diary screen contains two mixed-language control labels in the otherwise English interface. It was not published.
- A fresh weekly Energy Review requires meaningful synthetic history. The approved existing Energy capture already communicates that state more clearly.
- No strong native motion asset could be completed from the fresh zero-state simulator without staging artificial progress. The historical slideshow teaser was therefore removed from the README.

The exact outstanding capture requirements are documented in [MEDIA_NEEDED.md](MEDIA_NEEDED.md).
