# Showcase review

This file records the approved media import and the later authentic-visual redesign for `live-oz/ozlife-experience`.

## Approved import baseline

- Exact approved source package: `.showcase-import/`
- Review inputs: `.showcase-import/MANIFEST.md` and `.showcase-import/PUBLICATION-REVIEW.md`
- The review documents agreed: all ten imported media files were listed in the manifest and explicitly approved for publication.
- The package contained no source code, project files, configuration, raw asset catalogues, private metadata, or `.DS_Store` files.
- `.showcase-import/` was read only and was not modified.

The imported brand, screenshot, GIF, and MP4 files remain byte-for-byte unchanged.

### Approved imported files

| Public file | Dimensions | Type and original review use |
| --- | --- | --- |
| `assets/brand/app-icon-approved.png` | 1024 × 1024 | Authentic icon export; README masthead |
| `assets/brand/hero-approved.png` | 2400 × 1200 | Derived composition; historical README hero |
| `assets/brand/social-preview.png` | 1280 × 640 | Derived composition; manual GitHub social preview |
| `assets/screenshots/01-daily-hub.png` | 1290 × 2796 | Authentic capture; Daily Hub |
| `assets/screenshots/02-daily-focus.png` | 1290 × 2796 | Authentic capture; focus ritual |
| `assets/screenshots/03-guided-body.png` | 1290 × 2796 | Authentic capture; guided Body session |
| `assets/screenshots/04-mind-games.png` | 1290 × 2796 | Authentic capture; Mind Games |
| `assets/screenshots/05-energy-review.png` | 1290 × 2796 | Authentic capture; weekly Energy Review |
| `assets/screenshots/06-garage.png` | 1290 × 2796 | Authentic capture; Garage progress |
| `assets/video/ozlife-teaser.mp4` | 1080 × 1920 | H.264, 21 s, 559,236 bytes; historical silent teaser |
| `assets/video/ozlife-teaser.gif` | 360 × 640 | GIF, 8 s, 163,566 bytes; historical inline preview |

## Authentic-visual redesign

The private OZLife reference checkout was inspected and run strictly read only. Its External Release build was compiled with all build products, package data, screenshots, and temporary tooling written into this public showcase working directory.

An isolated iPhone 17 Pro simulator running iOS 26.5 was configured with English UI and a fresh synthetic state. The simulator contained no personal content or production account data.

### New authentic captures

| Public file | Dimensions | Source state | README role |
| --- | --- | --- | --- |
| `assets/captures/daily-hub.png` | 1206 × 2622 | Fresh native External Release capture | One day with OZLife |
| `assets/captures/library.png` | 1206 × 2622 | Fresh native External Release capture | Beyond the daily rhythm |
| `assets/captures/garage.png` | 1206 × 2622 | Fresh native External Release capture | Beyond the daily rhythm |

All three files are complete portrait captures. They contain authentic implemented UI and were not cropped, composited, stretched, retouched, or placed into a decorative frame.

## Visuals retained

- `assets/brand/app-icon-approved.png` remains the README masthead identifier.
- `assets/screenshots/04-mind-games.png` appears once in Mind.
- `assets/screenshots/03-guided-body.png` appears once in Body.
- `assets/screenshots/05-energy-review.png` appears once in Energy.
- `assets/brand/social-preview.png` remains available for its separate manual repository-setting use.

## Visuals replaced

- The dark multi-screen `assets/brand/hero-approved.png` was replaced in the README by a lighter icon-led masthead.
- The previous Daily Hub presentation composite was replaced by `assets/captures/daily-hub.png`.
- The previous Garage presentation composite was replaced by `assets/captures/garage.png`.
- The former Inside the experience section was replaced by Beyond the daily rhythm, using fresh Library and Garage states.

## Visuals removed from the README

- All six files under `assets/presentation/` were removed from the README. They remain documented historical derivatives.
- `assets/video/ozlife-teaser.gif` and `assets/video/ozlife-teaser.mp4` were removed from the README because they are screenshot slideshows, not genuine app navigation.
- The approved focus screenshot and other replaced full-size captures remain available as archives but are not repeated in the main product story.

The complete per-file decisions are recorded in [VISUAL_AUDIT.md](VISUAL_AUDIT.md).

## Motion recording

No replacement recording was published. The available fresh app state does not contain the synthetic completion and unlocked progression required for a coherent 15–20 second flow, and the task explicitly prohibits staging a weak or misleading substitute.

[MEDIA_NEEDED.md](MEDIA_NEEDED.md) requests a publication-safe prepared state for a genuine Daily Hub → focus → activity → completion → reward recording.

## Product-state findings and missing media

- The Focus Ritual choice screen was not published because its Story control overlaps the status area on the capture device.
- The Diary screen was not published because two control labels remain German in the otherwise English UI.
- The approved existing weekly Energy Review remains stronger than a fresh zero-history screen.
- No placeholders, fake UI, invented behaviour, or artificial progress were introduced.

## README redesign

- Shortened the visual narrative and removed the repeated screenshot gallery.
- Assigned every major visual one clear purpose.
- Used authentic portrait UI at restrained widths, linked directly to the full-size image.
- Preserved active pre-release status, proprietary source positioning, non-medical wording, and the absence of any App Store availability claim.
- Kept six concise product highlights and the existing public documentation links.

## Privacy and rights review

- New captures contain synthetic zero-state content only.
- No names, accounts, health data, diary entries, notifications, personal identifiers, debug controls, developer symbols, or purchase states are visible.
- The private app repository and all original app assets were used read only.
- No production source code, project files, configuration, raw asset catalogues, internal documentation, or private metadata were copied.
- All imported files from `.showcase-import/` remain covered by the original manifest and publication approval.

## Intentionally excluded

- Private app source code and project material.
- Raw app assets and asset catalogues.
- Temporary build products, simulator data, capture tooling, and audit contact sheets.
- The Focus Ritual and Diary captures described in `MEDIA_NEEDED.md`.
- Any motion export not recorded from genuine app navigation.

## Manual GitHub social preview

The social-preview image is included, but this review does not claim that repository settings were changed.

**Settings → General → Social preview → Upload `assets/brand/social-preview.png`**

## Confirmations

- [x] Every original imported file was listed in `.showcase-import/MANIFEST.md`.
- [x] Every original imported file was approved in `.showcase-import/PUBLICATION-REVIEW.md`.
- [x] `.showcase-import/` was not modified.
- [x] The six approved source screenshots remain byte-identical.
- [x] The private OZLife repository was used read only and its working tree was unchanged after capture.
- [x] No original app asset was modified.
- [x] No production source code or private configuration was copied.
- [x] No personal information was introduced.
- [x] No `.DS_Store` file is included.
- [x] `LICENSE` was unchanged.
- [x] The product remains described as active pre-release software with no App Store availability claim.
