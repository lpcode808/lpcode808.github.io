# building code

**Live site:** [lpcode808.github.io](https://lpcode808.github.io/)

A small portfolio of tools, explorable explanations, and prototypes at the intersection of education, AI, and craft. The site is meant to be clicked through directly: each card links to a live project, demo, or artifact.

## About the site

This repo powers the GitHub Pages landing page for `lpcode808`. It collects experiments that range from classroom-friendly visual explainers to AI-assisted workflow prototypes.

The portfolio itself is intentionally lightweight:

- **Single-page build:** mostly one `index.html` file with embedded CSS and JavaScript.
- **Vanilla web stack:** no build step required; GitHub Pages can serve it as-is.
- **Themeable interface:** dark, Mauka, and Makai themes share the same content with different visual treatments.
- **Process layer:** the hidden appendix and build-story modal document how the portfolio evolved through AI-assisted iteration, research, privacy checks, and handoffs between coding agents.

## Local preview

```bash
python3 -m http.server 8787
```

Then open `http://localhost:8787`.

## Test and validation

The site has no build step. The cheap regression check is a Node smoke test that reads `index.html` and verifies the critical single-page contract: 19 project cards, semantic card links, native disclosure controls, filter/theme accessibility state, guarded theme storage, reduced-motion handling, and the build-story dialog hook.

```bash
npm test
```

Manual smoke pass before deploy:

- Load the page on desktop and mobile widths.
- Use the filter buttons and confirm the visible card count changes.
- Open and close card talking points, including with keyboard focus.
- Use the theme buttons and keyboard shortcuts `1`, `2`, and `3`.
- Scroll to the appendix, focus blueprint rooms, and open the build-story modal.
- Verify the work-order links resolve to prefilled AI coaching prompts.

## Deploy notes

GitHub Pages serves this repository directly. Deploy by committing changes to the Pages branch configured for the repo; no generated artifacts are required.

## Privacy, storage, and network

The portfolio does not collect visitor data and does not send form data to a backend. Theme preference is stored locally in `localStorage` under `portfolio-theme`; if browser storage is unavailable, the page still works. External network requests are limited to Google Fonts and outbound links that visitors choose to open.

## Known limitations

- Project cards link to external GitHub Pages projects, so their availability depends on those deployments.
- The smoke test is intentionally static and cheap; it does not replace a full browser accessibility audit.
- The site uses embedded Google Fonts, so typography may fall back to system fonts when offline or blocked.
