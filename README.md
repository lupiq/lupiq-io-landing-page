<p align="center">
  <img src="public/lupiq_logo_colored.svg" alt="lupiq" width="200" />
</p>

# lupiq-io-landing-page

Landing page of [lupiq GmbH](https://lupiq.com), served at [lupiq.io](https://lupiq.io). A static [Astro](https://astro.build) site whose content is maintained in Markdown.

## Development

Requires Node.js (version in `.node-version`) and [pnpm](https://pnpm.io).

```sh
pnpm install
pnpm dev       # dev server at http://localhost:4321
pnpm check     # type check
pnpm build     # static build into dist/
pnpm preview   # serve the build
```

## Content

Content lives in `src/content/` as Markdown with frontmatter; `order` controls the display order.

| Folder      | Used for                                                                                |
| ----------- | --------------------------------------------------------------------------------------- |
| `pillars/`  | The three pillars in "What we do"                                                       |
| `services/` | Service cards                                                                           |
| `work/`     | "Our Work" cards (`title`, `tagline`, `url`, optional `cta` and `secondary` link)       |
| `legal/`    | Imprint and privacy policy, rendered at `/imprint/` and `/privacy/`                     |

Hero and contact texts are part of `src/pages/index.astro`. Brand colors are CSS variables in `src/styles/global.css`.

The imprint and privacy policy contain `[TODO: ...]` placeholders that have to be filled in before launch.

## Releases and deployment

- Commits follow [Conventional Commits](https://www.conventionalcommits.org/).
- [relwolf](https://relwolf.lupiq.io) opens a release pull request (`.github/workflows/release.yml`, config in `relwolf.yaml` and `cliff.toml`). It bumps the version in `package.json` and `src/app-version.ts` (shown in the footer). The workflow needs the variable `RELWOLF_APP_CLIENT_ID` and the secret `RELWOLF_APP_PRIVATE_KEY` of a GitHub App.
- `.github/workflows/deploy.yml` builds every push. Only stable release tags (`v*.*.*`) are published to GitHub Pages; the `github-pages` environment must allow that tag pattern.
- Pages source: Settings → Pages → _GitHub Actions_, custom domain `lupiq.io`.
