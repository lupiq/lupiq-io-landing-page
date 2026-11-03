# Copilot instructions

Static landing page for lupiq GmbH (https://lupiq.io), built with Astro and deployed to GitHub Pages. Content is English only.

## Commands

Uses pnpm (Node version in `.node-version`; `save-exact=true`).

- `pnpm dev` – dev server
- `pnpm build` – static build into `dist/` (also generates the sitemap)
- `pnpm check` – `astro check` type checking
- No test or lint tooling is configured.

## Architecture

- `src/content.config.ts` defines three Markdown content collections under `src/content/`: `pillars`, `services` and `work`. Each entry is one `.md` file; the frontmatter `order` field controls display order. `work` entries also need `tagline`, `url` and optionally `cta`.
- `src/pages/index.astro` is the single page. It loads and renders all collections and lays out the sections (hero, what we do, services, Our Work, contact). Hero and contact copy is written directly in this file, not in Markdown.
- `src/layouts/Base.astro` holds all SEO: canonical URL, Open Graph, sitemap link and `Organization` JSON-LD. Google indexing of `lupiq.io` is the reason this site exists, so keep these intact.
- To add a project to "Our Work", add a Markdown file to `src/content/work/` (the first entry is relwolf, linking to https://relwolf.lupiq.io).
- `public/` has the logos, favicons (`icon.svg`, `favicon.ico`), `CNAME` (`lupiq.io`) and `robots.txt`. The logos are copied from the sibling relwolf repo.
- lupiq.com is the main company site; lupiq.io is the technical domain for this page. The page links to lupiq.com and the JSON-LD `Organization` URL is lupiq.com.
- `.github/workflows/deploy.yml` builds and publishes `dist/` on every push to `main`.

## Conventions

- Brand colors are CSS variables in `src/styles/global.css`: night-violet `#3a2e5e`, teal `#2bb3a3`, grey `#5e5e63`, beige `#f5f2ed`, plus black and white. Use the variables rather than hardcoding hex values.
- Dark theme is automatic via `prefers-color-scheme`. `Logo.astro` switches between the colored and white logo using `<picture>`, so no JavaScript is needed.
- Tone: small software manufacture with cheeky, direct marketing ("We don't manage problems. We build solutions.").
- Pin exact dependency versions (`save-exact`).
