# giuz.io

Personal site of Alessandro Giuzio, front-end developer in Donostia. It sells to **agencies, design studios and designers across Spain** as their technical partner: white-label builds, technical audits, session packs.

It is separate from **agencyga.es**, his local studio for small businesses in Gipuzkoa. Never add local-business service pages here, and never compete with agencyga.es for the same keywords. The two sites link to each other and share one `Person` identity.

## Commands

```sh
npm run dev       # http://localhost:4321
npm run build     # astro check + astro build → dist/. Must pass with 0 errors, 0 warnings.
npm run preview   # serve dist/ locally
```

Node 22.12+. No test suite: `npm run build` is the gate.

## Structure: a single landing page

Since 11 Oct 2026 the site is **one landing page** (`src/pages/index.astro`) with sections in this order: hero → `#problema` → `#servicios` → `#proyectos` → `#proceso` → `#sobre-mi` (+ FAQ) → `#contacto`. The nav in `site.config.ts` links to these ids; keep them in sync.

- Don't add new top-level pages without asking. New content is a new section or a change to an existing one.
- Separate pages that still exist: legal pages, `/proyectos/<id>/` case studies (optional, linked from the cards), `/notas/` blog (not in the nav; `noindex` and out of the sitemap until the first note is published, then remove `notas` from the sitemap filter).
- The old `/agencias/`, `/sobre-mi/`, `/contacto/` and `/proyectos/` URLs 301 to their section via `public/_redirects`.

## Stack

- Astro 7, `output: 'static'`, `trailingSlash: 'always'`.
- Tailwind CSS v4, CSS-first (`src/styles/global.css`). No `tailwind.config`, no DaisyUI, no component library.
- No client-side JS by default. If a page needs interactivity, ask first.
- Deployed on Cloudflare Workers static assets (`wrangler.jsonc`). Domain, DNS and email routing are on Cloudflare.

## Where things live

| Path | What |
| --- | --- |
| `src/site.config.ts` | Name, URL, email, socials, nav, `personId`. Single source of truth: never hardcode these elsewhere. |
| `src/styles/global.css` | All design tokens (colours, fonts, type scale) and base styles. |
| `src/layouts/Base.astro` | `<head>`, meta, Open Graph, schema.org graph, fonts, header and footer. Has a `head` slot. |
| `src/components/Pending.astro` | Visible placeholder for unwritten content. Search for `<Pending` to find what's left. |
| `src/content.config.ts` | Schemas for the `proyectos` and `notas` collections. |
| `src/content/proyectos/`, `src/content/notas/` | One Markdown file per entry. `draft: true` = not built. |
| `src/pages/llms.txt.ts`, `robots.txt.ts` | Generated at build time from site config and collections. |
| `public/_headers`, `public/_redirects` | Cloudflare security/cache headers and redirects. |

## Design rules (decided 11 Oct 2026, don't change without asking)

**Typography.** Self-hosted with the Astro Fonts API, `local()` provider over installed `@fontsource` packages (see `astro.config.mjs`). Never load fonts from Google Fonts or a CDN.

- Headings: Instrument Serif, weight 400, `font-heading`. Use the `text-heading-1/2/3` sizes, not `text-step-*`, because the serif needs ~1.3× the size.
- Body: Inter (variable), `font-sans`.
- Labels, eyebrows, code, numbers: IBM Plex Mono, `font-mono`.
- `<em>` inside a heading renders in italic and in the accent colour. Use it to highlight one key word, not more.

**Colour.** Verde bosque palette, OKLCH tokens on `:root` with a `prefers-color-scheme: dark` override. Use only the token utilities: `bg-bg`, `bg-surface`, `text-fg`, `text-muted`, `border-line`, `bg-accent`/`text-accent`, `text-accent-fg`. No raw hex or Tailwind palette colours (`text-green-700` etc.) in components.

- Every text/background pair must pass **WCAG AA** (4.5:1 for normal text) in both light and dark. Check contrast before changing a token.
- If you change the palette, also update `theme-color` in `Base.astro` and `public/favicon.svg`.

**Accessibility** is part of what the site sells, so it can't regress: one `h1` per page, logical heading order, visible `:focus-visible`, skip link, `aria-current` on nav, labelled `<section>`s, `prefers-reduced-motion` respected.

## Content and SEO

- Landing sections use the `.section` (spacing + scroll margin) and `.eyebrow` (mono label) classes from `global.css`.
- Copy is in **Spanish**, first person singular ("yo", never "nosotros"), addressing agencies as "vosotros". Plain and direct, no buzzwords.
- Every page goes through `Base.astro` with a `title` and `description`. The home page omits `title`.
- The schema.org graph (`Person`, `WebSite`, `WebPage`) is built in `Base.astro`. Pages add nodes with the `schema` prop. The `Person` `@id` is `https://giuz.io/#person`, and agencyga.es references it as `founder`: never change it.
- Legal pages (`aviso-legal`, `privacidad`, `cookies`) are `noindex` and excluded from the sitemap in `astro.config.mjs`. Any temporary or specimen page must also be `noindex` and added to that filter.
- Don't invent facts, client names, prices or results. Unknown content stays as `<Pending what="…" />`.

## Workflow

- `main` is production: **every push to `main` deploys to giuz.io** automatically.
- Design experiments and larger changes go on a branch (`design/…`, `feat/…`). Merge to `main` only when Alessandro approves.
- Before pushing: `npm run build` passes with 0 errors and 0 warnings, and you've looked at the affected pages in light and dark, desktop and mobile.
- Commit messages: imperative subject line, a short body explaining why.
