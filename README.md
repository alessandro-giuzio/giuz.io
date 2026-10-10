# giuz.io

Personal site of Alessandro Giuzio: front-end developer and technical partner for agencies and studios.

Static [Astro 7](https://astro.build) site, styled with Tailwind CSS v4, deployed on Cloudflare Workers (static assets).

## Run it

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks, then builds to dist/
npm run preview   # serves dist/ locally
```

Node 22.12 or newer (see `.node-version`).

## Where things live

| Path | What |
| --- | --- |
| `src/site.config.ts` | Name, URL, email, socials, nav. Start here. |
| `src/styles/global.css` | Design tokens (colours, type scale) and base styles. |
| `src/layouts/Base.astro` | `<head>`, meta, Open Graph, schema.org graph, header and footer. |
| `src/pages/` | One file per page. |
| `src/content/proyectos/` | Case studies, one Markdown file each. |
| `src/content/notas/` | Technical notes (blog), one Markdown file each. |
| `src/content.config.ts` | Frontmatter schemas for both collections. |
| `public/_headers` | Security and cache headers. |
| `wrangler.jsonc` | Cloudflare deploy config. |

Entries with `draft: true` are not built. Unwritten sections show a dashed "Contenido pendiente" box; search for `<Pending` to find them all.

## SEO

- Canonical URLs, Open Graph and a schema.org graph (`Person`, `WebSite`, `WebPage`) on every page.
- The `Person` node has the stable id `https://giuz.io/#person`. agencyga.es should reference it as its `founder`.
- `sitemap-index.xml`, `robots.txt` and `llms.txt` are generated at build time.
- Legal pages are `noindex` and excluded from the sitemap.

## Deploy (Cloudflare Workers, static assets)

`wrangler.jsonc` tells Cloudflare to serve `dist/` as static assets. No server code runs.

Workers & Pages → Create → Continue with GitHub → pick this repo.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Then, in the Worker's Settings → Domains & Routes:

- Add `giuz.io` as a custom domain.
- Turn off the `workers.dev` route so the preview URL isn't indexed.
- Add a redirect rule on the zone for `www.giuz.io` → `https://giuz.io`.

## Before launch

- [ ] Real copy for every `<Pending>` block
- [ ] LinkedIn URL and booking link in `src/site.config.ts`
- [ ] `hola@giuz.io` working (Cloudflare Email Routing)
- [ ] Legal pages filled in
- [ ] Open Graph image (1200×630)
- [ ] Two case studies with `draft: false`
- [ ] Final palette and type in `global.css`
