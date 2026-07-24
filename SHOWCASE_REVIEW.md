# Showcase review

This file records the approved public-media import for `pythia-said/ozlife-experience`.

## Source and validation

- Exact source package used: `.showcase-import/`
- Review inputs: `.showcase-import/MANIFEST.md` and `.showcase-import/PUBLICATION-REVIEW.md`
- The two review documents agree: all ten imported media files are listed in the manifest and explicitly approved in the publication review.
- Every expected file exists. Image dimensions match the review; MP4 and GIF containers were opened successfully.
- The package contains only the two review documents and the ten approved media files. It contains no source code, project files, configuration files, raw asset catalogues, private metadata, or `.DS_Store` files.
- `.showcase-import/` was read only and was not modified.

## Imported files

| Destination | Dimensions | Type and intended use |
| --- | --- | --- |
| `assets/brand/app-icon-approved.png` | 1024 × 1024 | Authentic icon export; README masthead |
| `assets/brand/hero-approved.png` | 2400 × 1200 | Derived composition; README hero |
| `assets/brand/social-preview.png` | 1280 × 640 | Derived composition; manual GitHub social preview |
| `assets/screenshots/01-daily-hub.png` | 1290 × 2796 | Authentic capture; Daily Hub |
| `assets/screenshots/02-daily-focus.png` | 1290 × 2796 | Authentic capture; focus ritual |
| `assets/screenshots/03-guided-body.png` | 1290 × 2796 | Authentic capture; guided Body session |
| `assets/screenshots/04-mind-games.png` | 1290 × 2796 | Authentic capture; Mind Games |
| `assets/screenshots/05-energy-review.png` | 1290 × 2796 | Authentic capture; weekly Energy Review |
| `assets/screenshots/06-garage.png` | 1290 × 2796 | Authentic capture; Garage progress |
| `assets/video/ozlife-teaser.mp4` | 1080 × 1920 | H.264, 21 s, 559,236 bytes; silent main teaser |
| `assets/video/ozlife-teaser.gif` | 360 × 640 | GIF, 8 s, 163,566 bytes; inline teaser preview |

## README and documentation changes

- Refined `README.md` into a calmer, more focused GitHub product landing page while preserving the approved icon, hero, authentic captures, and GIF-linked MP4 teaser.
- Preserved the proprietary-source status and active pre-release positioning. The README does not claim App Store availability or a final build.
- Updated `assets/brand/README.md` and `assets/screenshots/README.md`, and added `assets/video/README.md`, with dimensions, uses, alt text, and provenance for each file.

### Final-polish changes

- Preserved the hero and concise emotional product explanation.
- Replaced the cramped three-column Mind · Body · Energy presentation with three readable, vertically stacked product moments.
- Removed the repeated six-image screenshot story and reduced the supporting gallery to two previously unfeatured captures.
- Made One day with OZLife a compact, text-led sequence supported only by the Daily Hub.
- Moved See OZLife in motion directly after the daily rhythm and increased the inline GIF preview width from 260 to 520 pixels.
- Reduced Product highlights from eleven items to six concise categories, with detailed coverage remaining in `docs/features.md`.
- Added Follow the journey as a calm closing moment before the proprietary and contact sections.
- Tightened Built for iOS, Product status, and Privacy and wellness without removing trust, medical, pre-release, or proprietary statements.

### Presentation-image refinement

- Added six landscape presentation derivatives under `assets/presentation/`, all at 1600 × 1000 pixels.
- Replaced direct portrait screenshot embeds in Mind, Body, Energy, One day with OZLife, and Inside the experience.
- Made every presentation image clickable, linking to its corresponding complete screenshot in `assets/screenshots/`.
- Kept the teaser section and its 520-pixel inline preview unchanged.
- Used only deterministic crops and compositions from the approved public screenshots; no UI, controls, copy, or product state was generated or invented.

| Presentation file | Read-only source | README section |
| --- | --- | --- |
| `assets/presentation/daily-flow-feature.png` | `assets/screenshots/01-daily-hub.png` | One day with OZLife |
| `assets/presentation/focus-feature.png` | `assets/screenshots/02-daily-focus.png` | Inside the experience |
| `assets/presentation/body-feature.png` | `assets/screenshots/03-guided-body.png` | Body |
| `assets/presentation/mind-feature.png` | `assets/screenshots/04-mind-games.png` | Mind |
| `assets/presentation/energy-feature.png` | `assets/screenshots/05-energy-review.png` | Energy |
| `assets/presentation/garage-feature.png` | `assets/screenshots/06-garage.png` | Inside the experience |

## Final screenshot usage map

| Presentation asset | Primary README role | Full screenshot link target |
| --- | --- | --- |
| `assets/presentation/daily-flow-feature.png` | One day with OZLife | `assets/screenshots/01-daily-hub.png` |
| `assets/presentation/focus-feature.png` | Inside the experience | `assets/screenshots/02-daily-focus.png` |
| `assets/presentation/body-feature.png` | Body | `assets/screenshots/03-guided-body.png` |
| `assets/presentation/mind-feature.png` | Mind | `assets/screenshots/04-mind-games.png` |
| `assets/presentation/energy-feature.png` | Energy | `assets/screenshots/05-energy-review.png` |
| `assets/presentation/garage-feature.png` | Inside the experience | `assets/screenshots/06-garage.png` |
| `assets/video/ozlife-teaser.gif` | See OZLife in motion, displayed at 520 px | `assets/video/ozlife-teaser.mp4` |

## Privacy and rights review

- All six screenshots are authentic English app captures exported as publication-safe derivatives. Status bars and lower developer-control zones were excluded.
- The visible progress and states are synthetic; no personal data, debug UI, internal data, third-party footage, or music was imported.
- The icon and all app visuals are app-owned. The reviewed video contains only the approved screenshots and app icon.
- All imported files were listed in `MANIFEST.md` and approved in `PUBLICATION-REVIEW.md`.

## Intentionally excluded

- `MANIFEST.md` and `PUBLICATION-REVIEW.md` were used for review only and were not copied into public asset folders.
- No private app source, project files, raw asset catalogues, configuration, internal documentation, metadata, or unapproved media was imported.
- No other files were present in the approved package.

## Manual GitHub social preview

The social-preview image is included but repository settings were not changed. To apply it manually in GitHub:

**Settings → General → Social preview → Upload `assets/brand/social-preview.png`**

The approved social-preview binary was not changed by the final-polish work, and this document does not claim that the repository setting was updated.

## Manual review recommendations

- Review the final README on GitHub in both light and dark themes.
- Check the landscape presentation images on a narrow mobile viewport.
- Confirm the final public wording and visual pacing before merge.
- Upload `assets/brand/social-preview.png` manually if the GitHub repository setting has not already been configured.

## Confirmations

- [x] Every imported file was listed in `.showcase-import/MANIFEST.md`.
- [x] Every imported file was approved in `.showcase-import/PUBLICATION-REVIEW.md`.
- [x] No source code, configuration, project material, or private metadata was imported.
- [x] No `.DS_Store` files are included.
- [x] `.showcase-import/` was not modified.
- [x] No approved image, GIF, MP4, or other binary asset was modified, renamed, regenerated, resized, recompressed, or replaced during final polish.
- [x] All six original screenshots remained byte-identical while new presentation derivatives were created.
- [x] No source code was added.
- [x] `LICENSE` was not changed.
- [x] The production source remains private and the product remains described as pre-release.
