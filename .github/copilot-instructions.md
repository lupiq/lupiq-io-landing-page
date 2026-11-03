# Copilot instructions

Static landing page for lupiq GmbH (https://lupiq.io), built with Astro and deployed to GitHub Pages. Content is English only.

## Commands

Uses pnpm (Node version in `.node-version`; `save-exact=true`).

- `pnpm dev` – dev server
- `pnpm build` – static build into `dist/` (also generates the sitemap)
- `pnpm check` – `astro check` type checking
- No test or lint tooling is configured.

## Architecture

- `src/content.config.ts` defines three Markdown content collections under `src/content/`: `pillars`, `services` and `work`. Each entry is one `.md` file; the frontmatter `order` field controls display order. `work` entries also need `tagline`, `url` and optionally `cta` and a `secondary` link (`label`, `url`).
- `src/content/legal/` holds the imprint and privacy policy (Markdown); `src/pages/[slug].astro` renders them at `/imprint/` and `/privacy/`. They contain `[TODO: ...]` placeholders (register, UID, VAT, representatives, hosting provider) that must be filled in before launch.
- `src/pages/index.astro` is the home page. It loads and renders all collections and lays out the sections (hero, what we do, services, Our Work, contact). Hero and contact copy is written directly in this file, not in Markdown.
- `src/layouts/Base.astro` holds all SEO: canonical URL, Open Graph, sitemap link and `Organization` JSON-LD. Google indexing of `lupiq.io` is the reason this site exists, so keep these intact.
- To add a project to "Our Work", add a Markdown file to `src/content/work/` (the first entry is relwolf, linking to https://relwolf.lupiq.io).
- `public/` has the logos, favicons (`icon.svg`, `favicon.ico`), `CNAME` (`lupiq.io`) and `robots.txt`. The logos are copied from the sibling relwolf repo.
- lupiq.com is the main company site; lupiq.io is the technical domain for this page. The page links to lupiq.com and the JSON-LD `Organization` URL is lupiq.com.
- `.github/workflows/release.yml` runs the `lupiq/relwolf` action with a GitHub App token (variable `RELWOLF_APP_CLIENT_ID`, secret `RELWOLF_APP_PRIVATE_KEY`). Config is in `relwolf.yaml` and `cliff.toml`; releases are derived from Conventional Commits, so commit messages must follow them.
- `.github/workflows/deploy.yml` builds and publishes `dist/` only when relwolf creates a stable release tag (`v*.*.*`) or on manual dispatch. The footer shows `APP_VERSION` from `src/app-version.ts`; relwolf bumps it (via the `generic` updater and the `x-relwolf-version` marker, which must stay last on its line) together with `package.json` in the release PR.

## Conventions

- Brand colors are CSS variables in `src/styles/global.css`: night-violet `#3a2e5e`, teal `#2bb3a3`, grey `#5e5e63`, beige `#f5f2ed`, plus black and white. Use the variables rather than hardcoding hex values.
- Dark theme is automatic via `prefers-color-scheme`. `Logo.astro` switches between the colored and white logo using `<picture>`, so no JavaScript is needed.
- Tone: small software manufacture with cheeky, direct marketing ("We don't manage problems. We build solutions.").
- Pin exact dependency versions (`save-exact`).
