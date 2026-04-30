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
