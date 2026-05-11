# scipot-docs

Developer documentation for **SciPot** — the trust layer between your data and AI Agents.

Published at **[docs.scipot.ai](https://docs.scipot.ai)** (work in progress).

Hosted on [Mintlify](https://mintlify.com), auto-deployed from this repository.

---

## What's here

- **Welcome / hero** — what SciPot is, who it's for, what makes it different.
- **Big Picture** — why SciPot exists, how it's different from vector DBs / memory layers / OpenAI File Search, when to use it (and when not to).
- **Get Started** — Quickstart (curl + JavaScript + Python end-to-end) and authentication.
- **Trust Mechanics** — POT Score & Provenance, Constitution, Curators, Contradiction Detection. The moat, explained.
- **Comparisons** — honest tradeoffs vs Mem0, Zep, and OpenAI File Search.
- **API Reference** — Introduction, Errors, Versioning + auto-imported reference from [api.scipot.ai/openapi.json](https://api.scipot.ai/openapi.json).

The API itself is served from `https://api.scipot.ai` (interactive Swagger at `/docs`, OpenAPI spec at `/openapi.json`). The source repo is private during pre-revenue phase; for bug reports against the API itself, email `hello@scipot.ai`. For bug reports against docs content, open an issue here.

---

## Local development

```bash
# Install Mintlify CLI
npm i -g mintlify

# Preview locally
mintlify dev
# Opens http://localhost:3000 with live reload
```

`mintlify dev` reads `mint.json` and renders every `.mdx` file under the repo. Edit, save, refresh — the usual loop.

---

## Stack

- **Platform:** [Mintlify](https://mintlify.com) (hosted, free tier)
- **Format:** MDX (markdown + JSX components)
- **API reference source:** auto-imported from `https://api.scipot.ai/openapi.json`
- **Domain:** `docs.scipot.ai` (CNAME → Mintlify)
- **Analytics:** PostHog (set the key in `mint.json` before deploy)

---

## Structure

```
scipot-docs/
├── mint.json                       # Mintlify config (nav, theme, colors, OpenAPI source)
├── welcome.mdx                     # Hero / Welcome
├── big-picture/                    # Why / How different / When to use
├── get-started/                    # Quickstart, Authentication
├── trust-mechanics/                # POT Score & Provenance, Constitution, Curators, Contradictions
├── comparisons/                    # vs Mem0 / Zep / OpenAI File Search
├── api-reference/                  # Introduction, Errors, Versioning
├── guides/                         # (coming soon — empty dir for now)
├── cookbook/                       # (coming soon — empty dir for now)
├── logo/                           # Brand assets (light/dark/favicon)
└── images/                         # Diagrams, OG images
```

---

## Brand tokens

These mirror [scipot.ai](https://scipot.ai) so the docs feel continuous with the marketing site. If you change one, change it in both places.

| Token | Value | Used for |
|---|---|---|
| Background | `#0a0a0b` (deep) | Page background (dark theme) |
| Surface | `#111113` | Cards |
| Elevated | `#1a1a1d` | Modals, dropdowns |
| Text primary | `#f5f5f4` | Body |
| Text secondary | `#a8a8a6` | Captions, metadata |
| Accent gold | `#d4a853` | Eyebrows, italic emphasis, headings accent |
| Accent emerald | `#10b981` | Primary CTA, code highlights, Mintlify primary color |
| Display font | Cormorant Garamond | Headings |
| Body font | DM Sans | Body |
| Mono font | JetBrains Mono | Code |

---

## Deploy notes

1. Create a Mintlify workspace at [dashboard.mintlify.com](https://dashboard.mintlify.com).
2. Connect this GitHub repo. Mintlify watches `main` and auto-deploys on push.
3. Add custom domain `docs.scipot.ai` in the Mintlify dashboard.
4. In Cloudflare DNS: add a CNAME `docs` → the target Mintlify provides. Make sure orange-cloud is **OFF** (Mintlify handles TLS).
5. Replace `REPLACE_WITH_POSTHOG_KEY` in `mint.json` with the production PostHog project key.

---

## Contributing

Found a typo, an inaccurate description, an example that doesn't run? Open a PR — small fixes are merged quickly. For larger structural changes, open an issue first so we can align on direction.

When editing API reference content: the per-endpoint docs are **auto-imported** from `api.scipot.ai/openapi.json`. To fix an endpoint description, update the FastAPI route in the private API repo (contact `hello@scipot.ai` if you've spotted something), not the MDX here. The MDX files in `api-reference/` are the surrounding meta pages (Introduction, API Surface, Errors, Versioning, Changelog), not the per-endpoint reference itself.

---

## License

Documentation content © SciPot. The Mintlify configuration and any utility code are MIT-licensed for inspection and reuse.
