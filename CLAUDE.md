# CLAUDE.md — scipot-docs

This file gives AI coding assistants (Claude Code, Cursor, etc.) the context they need to work on this repo without making the docs worse.

## Repo purpose

This is **scipot-docs** — the public developer documentation for SciPot, published at **docs.scipot.ai** via Mintlify (hosted, free tier). The API itself lives in `scipot-core` (separate repo). Per-endpoint reference is auto-imported from `https://api.scipot.ai/openapi.json`; this repo contributes the surrounding meta pages (Welcome, Big Picture, Get Started, Trust Mechanics, Comparisons, Api Surface, Errors, Versioning) plus the Mintlify config.

Sister surface: **scipot.ai** (the marketing landing) lives in the `scipot-landing` repo and shares the same design system.

## Design system — read first

**Before editing any user-facing surface (MDX pages, `mint.json`, copy, layout), read [DESIGN.md](DESIGN.md).**

DESIGN.md is the source of truth for:

- Typography (Cormorant Garamond italic for display emphasis only; DM Sans body; JetBrains Mono for code AND all numeric trust signals)
- Color tokens (the existing dark palette + the POT Score semantic scale + the contradiction flag scale)
- Spacing (4px base, comfortable density)
- Layout (sidebar-left docs; asymmetric hero on landing)
- Motion (minimal-functional; one choreographed POT Score badge entrance)
- Voice rules (builder voice; forbidden vocabulary list; canonical lines)
- The Fact Receipt component (the visual signature of SciPot — appears on every fact-bearing surface)
- Anti-patterns (the slop blacklist: no purple, no gradient CTAs, no bubble-radius, no 3-column SaaS feature grids)

Any change that deviates from DESIGN.md needs an explicit decision in the user's chat and an entry in DESIGN.md's "Decisions log" section before shipping.

## Stack

- **Platform:** Mintlify (free tier, hosted)
- **Format:** MDX (markdown + JSX components like `<CardGroup>`, `<Card>`, `<Steps>`, `<Tabs>`)
- **Reference source:** `https://api.scipot.ai/openapi.json` (auto-imported by Mintlify)
- **Domain:** `docs.scipot.ai` via CNAME
- **Analytics:** PostHog (key in `mint.json`)

## Local development

```bash
# Node 22 LTS or 20 LTS required (Node 25+ is NOT supported by Mintlify CLI)
nvm use 22
mintlify dev
# http://localhost:3000
```

## File structure

```
mint.json                       # Mintlify config — nav, theme colors, OpenAPI source, anchors
welcome.mdx                     # Hero / Welcome
big-picture/                    # Why / How different / When to use SciPot
get-started/                    # Quickstart + Authentication
trust-mechanics/                # POT Score & Provenance / Constitution / Curators / Contradictions
comparisons/                    # vs Mem0 / Zep / OpenAI File Search
api-reference/                  # Introduction / API Surface / Errors / Versioning
guides/                         # (empty — planned, see Phase 2 of the roadmap)
cookbook/                       # (empty — ship 3 full or hide section)
logo/                           # Brand assets (light/dark/favicon)
images/                         # Diagrams, OG images
DESIGN.md                       # ← design system source of truth (READ FIRST)
README.md                       # public-facing repo overview
.gitignore
```

## Common edit patterns

### Adding or updating a page

1. Read DESIGN.md voice section first. Match the register (builder voice; no forbidden vocabulary; numbers in prose).
2. Add the page's MDX file at the right path.
3. Register it in `mint.json` under `navigation`.
4. If it shows a fact, score, or source, render a Fact Receipt component (see DESIGN.md anatomy).
5. `mintlify dev` to verify rendering before commit.

### Updating per-endpoint API reference

Don't edit MDX. Update the FastAPI route's `description=` / `summary=` / `examples=` in [scipot-core](#) and redeploy. Mintlify will auto-re-import from `openapi.json` on next docs build.

### Changing colors, fonts, or anything visual

Don't. Without first updating DESIGN.md and getting explicit user approval. The design system is a coherent whole — changing one token without considering the others creates drift.

## Voice — quick reminders

- Use numbers in prose ("POT Score 0.85" not "high confidence")
- Lead with claims that can be falsified
- Cite mechanism, not benefit
- No forbidden vocabulary (delve, robust, comprehensive, leverage, empower, seamless, intuitive, powerful, cutting-edge, enterprise-grade, AI-powered, intelligent, pivotal, foster, showcase, fundamental, significant, furthermore, moreover, additionally — full list in DESIGN.md)
- Builder talking to builder, never consultant to client

## Skill routing

When the user's request matches an available gstack skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- Visual changes / brand decisions → invoke `/design-consultation` or `/plan-design-review`
- QA after a docs edit → invoke `/qa-only` or `/qa`
- Ship a PR → invoke `/ship`
- Test the site visually post-deploy → invoke `/design-review`
- Investigate a render bug → invoke `/investigate`

---

*This file is loaded into every AI assistant session that opens this repo. Keep it accurate; if a rule changes, update both this file and DESIGN.md.*
