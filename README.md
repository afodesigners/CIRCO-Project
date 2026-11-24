# CIRCO: Landing Page

Design and build files for the **CIRCO** app landing page. CIRCO is a local events app ("Your city is more alive than you think."): 12 categories covering music, nightlife, food and drink, family, arts and culture, sports and community, all in one place.

This repo currently holds the **Option 2 "Cylinder" keyframes**: static frames of the scroll animation, ready to import into Figma for design review.

## Contents

| File | What it is |
| --- | --- |
| [`circo-figma-keyframes-2-cylinder.html`](circo-figma-keyframes-2-cylinder.html) | Self-contained 1440px keyframe sheet for Option 2. All images are embedded, so it works offline (about 2.5 MB). |

### Frames in the keyframe sheet

Each frame is a `<section class="fr">` with a `data-name` attribute, so it comes into Figma as a named layer.

| # | Frame | Scroll position | Height |
| --- | --- | --- | --- |
| F1 | Hero: event-card ring (flat approximation of the 3D cylinder) | 0% | 900px |
| F2 | Ring rotated 38° | 25% | 900px |
| F3 | Ring rotated 110° plus second headline ("Your unofficial guide to being…") | 60% | 900px |
| 4 | Story: scroll-reveal quote (final state) | n/a | 900px |
| 5 | Features: numbered rows (Discover, Map, Saved, Food & Drink) | n/a | 900px |
| 6 | Pre-order CTA ("Your city."), where the pinned pre-order pill hides | n/a | 900px |
| 7 | Footer | n/a | 320px |

## Viewing and importing into Figma

1. **Preview:** open the HTML file in a browser. The layout is fixed at 1440px wide, so use a desktop window.
2. **Import into Figma:** use an HTML-to-Figma plugin (for example *html.to.design*). Import the file or a hosted URL at 1440px width. Each `section` becomes its own frame, named from `data-name`.

The F1–F3 ring frames are flattened 2D snapshots of what will be a 3D, scroll-driven cylinder. Card size, position, rotation and the dark overlay (`.sh`) fake the depth.

## Design tokens

| Token | Value | Use |
| --- | --- | --- |
| Background | `#121212` (page `#0b0b0b`) | Frames |
| Cream | `#FFF6F0` | Primary text, store buttons |
| CIRCO Red | `#FF382E` | Accent, CTA pill, numbering |
| Muted | `#bdb6b0` / `#8a8a8a` | Body copy, captions |
| Hairline | `#2a2a2a` | Row dividers |

**Type**
- **Inter** 400–900: UI and display. Headlines use weight 900, uppercase, letter-spacing −0.04em, line-height 0.94.
- **Playfair Display** Italic: editorial accent words (`.pl`).

Both fonts load from Google Fonts.

## Planned build (motion notes)

For when this moves from keyframes to the live page:

- **Cylinder ring:** event cards placed on a 3D cylinder that rotates with scroll (0% → 38° → 110°), with a GSAP ScrollTrigger scrub and pin, plus Lenis smooth scroll.
- **Story quote:** word-by-word scroll reveal.
- **Pinned pre-order pill:** fixed at the bottom-right, hidden once the pre-order CTA section is in view.
- **UI micro-interactions** (pills, menu): Motion. **SVG and decorative effects:** anime.js.
- Respect `prefers-reduced-motion`. Show the flat F1 layout as the static fallback.

## Project structure

```
CIRCO-Project/
├── circo-figma-keyframes-2-cylinder.html   # Option 2 keyframes (Figma import)
├── README.md
├── .editorconfig
├── .gitattributes
└── .gitignore
```

## License

Private project. © CIRCO / afodesigners. All rights reserved.
