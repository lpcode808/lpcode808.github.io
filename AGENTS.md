# AGENTS.md — lpcode808.github.io Portfolio

Working agreement for any agent (Claude Code, Cursor, Codex, Windsurf, etc.) operating in this repo.

## On entry

1. Read this file.
2. Skim `_planning/log.md` (last 1–2 entries) for recent context.
3. Check `~/Coding/_hopper.md` for items routed to this project.

## The project

Single-page portfolio at [lpcode808.github.io](https://lpcode808.github.io/). Vanilla HTML/CSS/JS, no build step, GitHub Pages deployment.

## Key files

| File | Purpose |
|------|---------|
| `index.html` | The entire site — HTML, CSS, JS inline |
| `_planning/log.md` | Session log (append after every session) |
| `_planning/hopper.md` | Idea intake — raw thoughts awaiting triage |
| `_planning/brainstorms/` | Explored ideas with detail |
| `_planning/plans/` | Implementation plans ready to build |
| `portfolio-content.md` | Card content and descriptions |
| `RESEARCH-NOTES.md` | Design research and references |

## Constraints

- **Single-file site.** Everything lives in `index.html`. No new HTML/CSS/JS files.
- **No build step.** No npm, no bundler, no framework.
- **Theme-aware.** Three themes (dark, Mauka, Makai). All visual changes must work in all three.
- **Accessibility.** Respect `prefers-reduced-motion`, keep keyboard nav working, use semantic HTML.

## Hopper workflow

Central intake lives at `~/Coding/_hopper.md`. When items are routed here:
1. Read `_planning/brainstorms/README.md`.
2. Review any files in `_planning/brainstorms/` with `source: central-hopper` and `status: routed`.
3. If actionable → expand the routed file, create a plan in `_planning/plans/`, or implement directly.
4. If a small tweak → just do it and log.
5. When resolved, distill the outcome into `_planning/brainstorms/ledger.md`.
6. Update the routed file status (`explored`, `planned`, `implemented`, `deferred`, or `archived`) and append to `_planning/log.md`.

## Session log format

Append to `_planning/log.md`:

```markdown
## YYYY-MM-DD — Agent: [what changed]

**Agent:** [which agent/tool]

**What changed**
- bullet points

**Handoff**
- what remains, risks, gotchas
```
