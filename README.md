# CIRCO: Landing Page

Design and build files for the **CIRCO** app landing page. CIRCO is a local events app ("Your city is more alive than you think."): 12 categories covering music, nightlife, food and drink, family, arts and culture, sports and community, all in one place.

The live landing page lives in [`Landingpage/`](Landingpage/) and is the main build that gets deployed.

## Contents

| Path | What it is |
| --- | --- |
| [`Landingpage/index.html`](Landingpage/index.html) | **The landing page.** Self-contained HTML (images embedded, fonts from Google Fonts), served as-is. |
| [`Landingpage/.figma/`](Landingpage/.figma/), `package.json`, `vite.config.ts`, `pnpm-lock.yaml` | Figma Make project files, kept so the page can be re-imported and edited in Figma Make. Not published. |
| [`Landingpage/.assetsignore`](Landingpage/.assetsignore) | Tells Cloudflare which files in `Landingpage/` must not be served. |

## Deployment

The site deploys to **Cloudflare Workers** (static assets, no Worker script) on every push to `main`, through Workers Builds. No build step is needed.

- [`wrangler.jsonc`](wrangler.jsonc) serves the `Landingpage/` folder. The `name` must stay `circo-project` to match the Worker in the dashboard.
- Anything added to `Landingpage/` is public unless it is listed in `Landingpage/.assetsignore`.
- Live URL: https://circo-project.afodesigners.workers.dev (once workers.dev is enabled).
- Local preview: `npx wrangler dev`. Manual deploy: `npx wrangler deploy`.

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
├── Landingpage/            # Served by Cloudflare
│   ├── index.html          # The landing page (main build)
│   ├── .assetsignore       # Files excluded from publishing
│   ├── .figma/             # Figma Make config (not published)
│   ├── package.json        # Figma Make / Vite tooling (not published)
│   └── vite.config.ts
├── wrangler.jsonc          # Cloudflare Workers config
├── README.md
├── .editorconfig
├── .gitattributes
└── .gitignore
```

## License

Private project. © CIRCO / afodesigners. All rights reserved.
