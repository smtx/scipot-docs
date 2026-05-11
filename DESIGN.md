# SciPot — Design System

> **Source of truth** for visual and verbal design across **docs.scipot.ai** and **scipot.ai**. Any change to typography, color, spacing, voice, or layout must be reflected here first. AI assistants and humans both: read this before editing any user-facing surface.
>
> **Created:** 2026-05-11 (v0.2.0 of the API)
> **Approved direction:** Editorial Brutalism with numeric receipts. Variant A from `~/.gstack/projects/scipot/designs/design-system-20260511/`.

---

## Product context

- **What this is:** SciPot — a Memory-as-a-Service API for AI agents. POTs (Knowledge Pots) with explicit certainty scoring (POT Score), typed relationships, contradiction detection, human curation.
- **Who it's for:** Developers building production AI agents that operate on organizational knowledge. Free self-serve signup; managed-onboarding optional for partners.
- **Space:** Memory layer for agentic AI. Direct competitors: Mem0, Zep, OpenAI Assistants File Search. Adjacent: vector DBs (Pinecone, Weaviate), enterprise search (Glean).
- **Surfaces covered:** `docs.scipot.ai` (Mintlify-hosted developer docs) + `scipot.ai` (the public marketing landing at `scipot.ai/index.html`). Same system, different jobs.

### Out of scope — password-protected surfaces have their own register

The `scipot-landing` repo contains several password-protected pages used to speak to specific non-developer audiences:

| Page | Audience | Register |
|---|---|---|
| `/pitch` | Investors (VCs, angels) | Business-pitch tone, market data, traction story |
| `/tech-pitch` | Investors + technical advisors + hires evaluating depth | Technical-deep-dive, architecture-heavy, "Memory-as-a-Service platform" framing OK here |
| `/manifesto` | Internal team + close partners | Long-form, narrative, philosophical |
| `/roadmap` | Investors + partners | Specific milestones, dates, sequencing |
| `/kb2b` | KB2B-specific partners | Product-context, partnership terms |

**DESIGN.md rules do NOT apply to these pages.** They each speak to a different audience with different expectations. Imposing builder voice + Fact Receipt + slop-blacklist on `/tech-pitch` would actively hurt its investor-pitch purpose. These pages stay as their authors wrote them; only refresh them when the audience-specific needs change.

The dividing line: **if a page is publicly indexable (robots.txt allows it) and password-free, DESIGN.md applies. Otherwise, the page has its own register.**

## Visual thesis — *"Numbers as the Brand"*

While Mem0 and Zep hide their mechanic behind soft language ("context", "memory", "personalisation"), SciPot puts the **POT Score** on screen — in mono, tabular-aligned, semantic-coloured. The numeric receipt is the brand mark. Editorial brutalism in service of measurement.

## The memorable thing

> *"Every fact has a score. Every score has a source."*

Every design decision serves this. If a choice does not reinforce that you can read a number off this product and trace it to a paragraph, the choice is wrong.

---

## Voice rules

Same builder voice on **both** docs and landing. The landing is more punchy and aphoristic; docs is more technical and precise; both share the rules below.

**Do:**
- Use numbers in prose. "POT Score 0.85" beats "high confidence" every time.
- Lead with claims that can be falsified ("every fact has a score") not benefits ("trustworthy memory").
- Cite mechanism, not benefit. "Contradictions flagged via typed edges" not "intelligent contradiction handling."
- Short sentences. Active voice. Concrete nouns.
- Be honest about what doesn't work yet. "Self-hosted is M26 roadmap" beats "coming soon."
- Builder talking to builder, never consultant to client.

**Don't (forbidden vocabulary):**
`delve`, `crucial`, `robust`, `comprehensive`, `leverage`, `empower`, `seamless`, `intuitive`, `powerful`, `cutting-edge`, `enterprise-grade`, `AI-powered`, `intelligent`, `pivotal`, `landscape`, `tapestry`, `foster`, `showcase`, `intricate`, `vibrant`, `fundamental`, `significant`, `furthermore`, `moreover`, `additionally`.

**The canonical lines** (use verbatim, do not paraphrase):

- *"The trust layer between your data and AI Agents."*
- *"Every fact has a score. Every score has a source. Every contradiction is flagged."*
- *"Your RAG retrieves. SciPot **knows**."* (landing hero)
- *"Try building that in a weekend."* (landing closing line)

---

## Typography

Three families, three explicit roles. Existing fonts; new discipline.

```
Cormorant Garamond  →  DISPLAY ITALICS ONLY for marquee emphasis.
                       Hero "knows" / "remembers" / "trust".
                       Weight 500-600, italic.
                       Used 1-2 times per page max. Never for body.
                       Color: var(--gold).
                       Loaded from Google Fonts.

DM Sans             →  All body, all UI, all headings except marquee emphasis.
                       Weight 400 body / 500 UI labels / 600 headings.
                       Color: var(--text-primary).
                       Loaded from Google Fonts.

JetBrains Mono      →  Code, citations, AND every number on screen.
                       POT Scores, source counts, request IDs, timestamps,
                       UUIDs, hex codes, latency in ms.
                       Weight 400/500. tabular-nums always enabled.
                       Loaded from Google Fonts.
```

### The discipline rule for type

**If it's a number that represents a measurement of trust** (POT Score, confidence percentage, source count, contradiction count, fact count) — it MUST be in JetBrains Mono with `font-variant-numeric: tabular-nums`. This is the visual contract that distinguishes SciPot from every memory-layer competitor.

### Type scale (rem units, 16px root)

```
display-xl      4.5rem   72px    Cormorant Garamond italic (landing hero only)
display-lg      3.75rem  60px    Cormorant Garamond italic (docs hero)
display-md      3rem     48px    DM Sans 600 (section heroes)
heading-xl      2.25rem  36px    DM Sans 600 (page title)
heading-lg      1.875rem 30px    DM Sans 600 (h2)
heading-md      1.5rem   24px    DM Sans 600 (h3)
heading-sm      1.25rem  20px    DM Sans 600 (h4)
body-lg         1.125rem 18px    DM Sans 400 (lead paragraphs)
body            1rem     16px    DM Sans 400 (default body)
body-sm         0.875rem 14px    DM Sans 400 (small body, captions)
caption         0.75rem  12px    DM Sans 400 or JetBrains Mono 400 (metadata, labels)
mono-display    2.25rem  36px    JetBrains Mono 500 (hero POT Score)
mono-body       0.875rem 14px    JetBrains Mono 400 (citations, code inline)
```

### Letter-spacing

- `headings`: -0.02em (tighten display sizes)
- `mono uppercase labels`: 0.1em (VERIFIED / EXTRACTED tags)
- everything else: 0 (default)

### Line-height

- `display`: 1.05
- `headings`: 1.2
- `body`: 1.6
- `mono`: 1.5

---

## Color system

Dark-first. Light is a future variant; not designed yet. All values exact (no Tailwind defaults).

### Tokens

```css
:root {
  /* Backgrounds — never decorative, only structural */
  --bg-deep:        #0a0a0b;   /* page background */
  --bg-surface:     #111113;   /* cards, hero panels */
  --bg-elevated:    #1a1a1d;   /* modals, dropdowns, code blocks */

  /* Text — three tiers, no more */
  --text-primary:   #f5f5f4;   /* default body, headings */
  --text-secondary: #a8a8a6;   /* captions, metadata, sub-headlines */
  --text-muted:     #6b6b69;   /* disabled, placeholder, low-emphasis */

  /* Accents — every appearance must justify itself */
  --emerald:        #10b981;   /* CTAs, "verified" state, hyperlinks */
  --emerald-hover:  #34d399;
  --gold:           #d4a853;   /* Cormorant italic, Constitution=1.0, rare emphasis */
  --gold-dim:       #b8923f;

  /* Borders — low opacity, never decorative */
  --border-subtle:  rgba(245, 245, 244, 0.08);   /* default card border */
  --border-strong:  rgba(245, 245, 244, 0.16);   /* focus, active state */
}
```

### POT Score semantic scale (NEW — tied to product mechanic)

The defining design decision. Every numeric POT Score on screen renders with its semantic color from this scale. Used for badge fill, badge text, or accent dot — never as background fill on large areas (that's the path to slop).

```css
:root {
  --score-axiom:    #d4a853;       /* 1.0  CONSTITUTION  (gold; only place gold appears in scores) */
  --score-verified: #10b981;       /* 0.85-0.99  VERIFIED (emerald) */
  --score-extracted:#a8a89a;       /* 0.50-0.84  EXTRACTED (warm sand) */
  --score-inferred: rgba(212, 168, 83, 0.53); /* 0.30-0.49  INFERRED (gold 53% opacity) */
  --score-pending:  #6b6b69;       /* 0.00-0.29  PENDING (muted) */
}
```

### Contradiction flag scale

```css
:root {
  --flag-critical:  #f87171;       /* contradicts Constitution */
  --flag-high:      #fb923c;       /* contradicts VERIFIED fact */
  --flag-normal:    rgba(212, 168, 83, 0.53);  /* standard */
}
```

### Discipline rules for color

1. **Outside the Fact Receipt + CTA buttons + hyperlinks + state colors, color is forbidden.** Headings inherit `--text-primary`. Borders inherit `--border-subtle`. There is no decorative "brand-secondary."
2. **Gold is rare.** Reserved for: (a) Cormorant Garamond italic marquee emphasis (b) POT Score = 1.0 / Constitution / axiom badges. Never anywhere else.
3. **Emerald is the CTA and verification color.** Hyperlinks in body prose. Primary buttons. "VERIFIED" badge fill. Pass / success states. Never decorative background.
4. **No gradients.** Anywhere. No "primary-to-secondary" gradient buttons. No hero gradient backgrounds. Solid colors only.
5. **No purple.** Purple is the universal AI-SaaS-template signal. We are not a template.

---

## Spacing

4px base. Comfortable density (between Linear's spacious and Trigger.dev's dense, roughly Resend-equivalent).

```css
:root {
  --space-2xs:  2px;    /* dot indicators, icon gutter */
  --space-xs:   4px;    /* tight stacking */
  --space-sm:   8px;    /* component internal padding */
  --space-md:   16px;   /* between related elements */
  --space-lg:   24px;   /* card padding */
  --space-xl:   32px;   /* between sections within a card */
  --space-2xl:  48px;   /* between concept blocks */
  --space-3xl:  64px;   /* between major sections */
  --space-4xl:  96px;   /* hero vertical padding */
}
```

### Standard rhythm

- **Hero vertical padding:** 96-128px
- **Major section vertical padding:** 64-96px
- **Card padding:** 24-32px (large), 16-20px (compact)
- **Reading column max-width:** 720px (body), 640px (narrow articles)
- **Full-bleed elements** (code blocks, large images, Fact Receipt cards in hero): break out to viewport edges or `1280px` max

---

## Layout

### Border-radius

Sharp, not bubbly. Hierarchical:

```css
--radius-sm:   4px;    /* small buttons, badges */
--radius-md:   6px;    /* cards, inputs (DEFAULT) */
--radius-lg:   8px;    /* large cards, modal containers */
--radius-full: 9999px; /* circular dots, avatars only */
```

**Never use:**
- `border-radius: 12px+` on cards (bubble territory)
- `border-radius` on text containers (text doesn't have corners)
- Different radii on adjacent elements (creates visual noise)

### Border vs shadow

**Use borders, not shadows.** Borders communicate edges in dark themes; shadows in dark themes are mostly invisible and add CSS weight.

```css
.card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
}
```

Shadows are reserved for **modal / dropdown elevation** only, and even then minimal: `0 4px 24px rgba(0,0,0,0.4)`.

### Grids

- **Docs surfaces:** Mintlify default (sidebar-left, single-column reading, right-rail TOC). Don't fight Mintlify's grid — extend it.
- **Landing surfaces:** custom. Hero is asymmetric (60% text column + 40% Fact Receipt). Below the fold: full-width sections, content centered in 1024-1200px container.
- **Card grids:** 2 or 3 columns max on desktop. Never 4 columns of feature icons (the SaaS-template tell).

---

## Motion

Minimal-functional. Almost no choreography.

### Easing

```css
--ease-out:  cubic-bezier(0.16, 1, 0.3, 1);   /* designy ease-out for state transitions */
--ease-in:   cubic-bezier(0.4, 0, 1, 1);      /* exits */
--ease-io:   cubic-bezier(0.4, 0, 0.2, 1);    /* shared motion */
```

### Durations

```css
--duration-micro:  150ms;   /* hover, focus, button press */
--duration-short:  300ms;   /* state change, fade-in */
--duration-medium: 500ms;   /* RARE — pageload reveal, modal entrance */
```

Never exceed 500ms. Never bounce. Never spring. Never elastic.

### The one choreographed moment

**POT Score badge entrance.** When a fact card renders for the first time (page load, search results appearing), the POT Score badge fades in 300ms with a 4px `translateY` from below. This is the ONE place motion adds meaning: the score is what arrives last, calmly.

```css
.pot-score {
  animation: score-enter var(--duration-short) var(--ease-out) both;
}
@keyframes score-enter {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  .pot-score { animation: none; opacity: 1; transform: none; }
}
```

Hover states transition opacity, color, and border-color only. No scaling, no translation on hover.

---

## The Fact Receipt component (the brand mark)

A single recurring component that appears across both surfaces. It is the visual signature of SciPot. Every page that references a fact, a POT Score, a source, or a contradiction must render it consistently.

### Anatomy

```
┌─────────────────────────────────────────────────────────┐
│  FACT RECEIPT (12px caption, mono uppercase, gold-dim)   │
│                                                          │
│  Enterprise pricing floor is $25K ARR.                   │
│  (16px DM Sans 400, --text-primary)                      │
│                                                          │
│  POT Score                Source                         │
│  0.95  VERIFIED           pricing-decisions.md           │
│  (36px mono emerald)      (14px mono --text-secondary)   │
│  (10px mono uppercase     §3.2 · CFO approved            │
│   letter-spacing 0.1em)   2026-02-14                     │
│                                                          │
│  ◉ supports 2 facts   ·   ◯ no contradictions            │
│  (12px mono, emerald dot supporting / muted dot empty)   │
└──────────────────────────────────────────────────────────┘
```

### Required fields

| Field | Type | Style |
|---|---|---|
| `RECEIPT` header label | Caption, mono uppercase, gold-dim, letter-spacing 0.1em | 12px |
| Fact text | Body, DM Sans 400, text-primary | 16-18px |
| POT Score numeric | JetBrains Mono 500, semantic color from POT Score scale | 32-48px depending on prominence |
| POT Score level label | Mono uppercase, letter-spacing 0.1em, semantic color | 10-11px |
| Source citation | Mono 400, text-secondary, with `§section` reference | 14px |
| Source metadata (curator + date) | Mono 400, text-muted | 11-12px |
| Edge indicators row | Mono 400 + colored dot (`◉` emerald supporting, `◯` muted neutral, `◉` red flag) | 12px |

### Sizing variants

- **Hero (landing, docs welcome):** large — POT Score at 48px, fact text at 18px. Width 360-420px right column.
- **Inline (concept pages, examples):** medium — POT Score at 36px, fact text at 16px. Full content width.
- **Inline compact (sidebar, list items):** small — POT Score at 24px, fact text at 14px. Single-line edge row.

### Where it appears

- **scipot.ai hero** — right column, anchor of the visual composition
- **docs.scipot.ai welcome hero** — same role, smaller scale
- **`/trust-mechanics/pot-score-and-provenance`** — multiple times, each illustrating a different score level
- **`/trust-mechanics/contradiction-detection`** — paired form showing two contradictory receipts
- **`/get-started/quickstart` synthesize response example** — rendered from the JSON response shape
- **Social share OG images** — center artifact on every page
- **API Reference per-endpoint pages** — example response payloads, rendered

### Anti-patterns for the Fact Receipt

- Do not render the POT Score as a progress bar or doughnut chart. It is a number, not a visualization.
- Do not animate the score on hover. The score is steady-state.
- Do not omit any required field. A receipt without a source is a regression.
- Do not use the Fact Receipt for non-fact content (e.g., "5 active users") — it's specifically for fact + score + provenance.

---

## Surface-specific guidelines

### docs.scipot.ai (Mintlify)

- Sidebar nav left. Right-rail TOC. Content column max 720px.
- Welcome page hero: full-width, Cormorant italic display + sub-hero triplet + Fact Receipt on right (md-size).
- Concept pages: lead paragraph, then mechanism, then example with Fact Receipt, then code block, then cross-link cards.
- Quickstart: must fit on 2-3 screens. Currently 445 lines — see audit fixes.
- Cards: Mintlify default `<Card>` and `<CardGroup>` — overrode via `mint.json` colors but structure stays.
- Code blocks: full-bleed within reading column, JetBrains Mono, no backgrounds on inline code (just `border-bottom: 1px solid --border-subtle`).

### scipot.ai (Cloudflare Pages, static HTML)

- Full-bleed hero with 60/40 asymmetric layout: text column left, Fact Receipt right.
- Below hero: vertical sections, each with its own caption-eyebrow (gold-dim mono uppercase letter-spacing 0.1em).
- Proof strip: 4 horizontal items, no icons, dividers between, ~80-100px vertical padding.
- The "Get Started" cards section currently uses 3 cards (API Docs / ReDoc / Colab Notebook). Keep that, but add a 4th: "Free API key" CTA pointing to `/auth/signup` flow once it's wired to a UI page.

---

## Anti-patterns (slop blacklist)

Never. On any surface.

- ❌ Purple / violet gradient as default accent
- ❌ 3-column or 4-column feature grid with colored circular icons
- ❌ Centered-everything layouts with uniform spacing
- ❌ Uniform bubble border-radius (≥12px on all elements)
- ❌ Gradient buttons as primary CTA
- ❌ Generic stock-photo hero illustrations
- ❌ `system-ui` / `-apple-system` as display or body font
- ❌ "Built for X" / "Designed for Y" marketing patterns
- ❌ Inter / Roboto / Open Sans / Lato / Montserrat / Poppins / Space Grotesk as primary fonts
- ❌ Lorem ipsum or placeholder text in production
- ❌ Emoji decoration in body copy (emoji is OK in code comments and example fact text only)
- ❌ "Sparkles" SVG icon
- ❌ Tilted card hover effects

---

## Audit fixes required (one-time cleanup)

These violate brand integrity and must be fixed before the design system is considered shipped.

### 1. ~~CRITICAL — broken links to private repo~~  ✅ RESOLVED 2026-05-11

Decision applied: option (b) — redirect all 9 references to docs.scipot.ai equivalents. `scipot-core` stays private. Created `/changelog` page in scipot-docs mirroring the CHANGELOG. Updated `mint.json` GitHub anchor to point at the public `smtx/scipot-docs` repo. POT Score spec cross-links redirected to `/trust-mechanics/pot-score-and-provenance` (which already covers the mapping inline). README.md prose updated to text-only references with `hello@scipot.ai` as the contact for API bug reports.

Zero broken `github.com/smtx/scipot-core` links remain in the public docs.

### 2. ~~HIGH — density on `get-started/quickstart.mdx`~~  ✅ RESOLVED 2026-05-11

Split applied. Primary Quickstart now 373 lines (down from 445) — the 5-step happy path with curl/JS/Python tabs at every step, finishing on "Where to go next." The advanced material — curator promotion (SUPPORTED → VERIFIED), error handling reference with retry semantics, the document-size pipeline split, what-to-log guidance — moved to a new `/get-started/quickstart-advanced` page (193 lines).

The 180-line target wasn't hit; 373 reflects keeping all three language tabs on every step (cutting JS/Python from primary would degrade first-touch DX more than it'd reduce scroll fatigue). Accepting 373 as the new reality — meaningful improvement (16% shorter) without compromising the language-switcher value.

### 3. ~~MEDIUM — tone unification across surfaces~~  ✅ INVALIDATED 2026-05-11

Reverted. `/tech-pitch` is a password-protected investor-facing surface — DESIGN.md voice rules do not apply (see "Out of scope — password-protected surfaces have their own register" above). The "Memory-as-a-Service platform" framing on `/tech-pitch` is **appropriate for its audience** (VCs / technical advisors / hire prospects) and should stay. Public landing hero's `"Your RAG retrieves. SciPot knows."` already matches docs voice — no work needed there.

The premise of this audit fix was wrong: we should not have a single voice across ALL surfaces, only across PUBLIC surfaces.

### 4. ~~MEDIUM — Landing hero missing Fact Receipt~~  ✅ RESOLVED 2026-05-11

The Fact Receipt component (the brand's visual signature per "The Fact Receipt component" section above) is now rendered in the scipot.ai/ hero, centered below the CTAs (max-width 480px). Composition: card surface (`--bg-surface`), 1px subtle border, 6px radius, with the canonical "Enterprise pricing floor is $25K ARR" example — POT Score 0.95 in JetBrains Mono tabular-nums emerald, Source citation in mono secondary, "supports 2 facts · no contradictions" edge row with semantic dots.

Implementation: ~115 lines of CSS + ~15 lines of HTML in `scipot-landing/index.html`. Mobile rules: padding reduced to 1.25rem, score size 1.75rem (down from 2.25rem), grid gap tightened.

Pragmatic deviation from the design mockup: the approved `landing-hero.png` showed a 60/40 asymmetric layout (text left, Receipt right). Implementation kept the existing `text-align: center` hero composition and placed the Receipt centered below CTAs — preserves the proven flow of "headline → CTAs → conversion" while adding the brand signature artifact. If we want to revisit the asymmetric 60/40 composition later, it's a separate edit; this delivers the Fact Receipt's brand value without restructuring the hero.

### Audit summary

| # | Severity | Status |
|---|---|---|
| 1 | CRITICAL — 9 broken links to private repo | ✅ Resolved (commit `e775cf6` in scipot-docs) |
| 2 | HIGH — Quickstart density (445 lines) | ✅ Resolved: split into quickstart (373) + quickstart-advanced (193) (commit `39b7d06`) |
| 3 | MEDIUM — tech-pitch tone unification | ✅ Invalidated by scope clarification (DESIGN.md applies to public surfaces only) |
| 4 | MEDIUM — Landing hero missing Fact Receipt | ✅ Resolved (in scipot-landing) |

All four audit findings closed. Design system shipped.

---

## Implementation checklist (when applying this DESIGN.md)

For each surface (`scipot-docs`, `scipot-landing`):

- [ ] All 3 fonts loaded via Google Fonts `<link>` (preconnect + fonts)
- [ ] `tabular-nums` enabled wherever a POT Score / count / metric appears
- [ ] Color tokens defined as CSS custom properties matching this file
- [ ] POT Score badges always render with semantic color from the scale
- [ ] Fact Receipt component implemented (at least in MDX for docs)
- [ ] No purple, no gradient buttons, no bubble-radius (audit pass)
- [ ] No forbidden vocabulary in body copy (audit pass)
- [ ] Private-repo links resolved per audit fix #1
- [ ] Quickstart split per audit fix #2

---

## Reference mockups

Approved direction lives at `~/.gstack/projects/scipot/designs/design-system-20260511/`:

- `variant-A.png` — approved docs.scipot.ai welcome hero
- `landing-hero.png` — landing hero applying the same design system
- `approved.json` — approval record

---

## Decisions log

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-11 | Initial design system created | First-time formalization. Memorable thing: "every fact has a score, every score has a source." Voice: unified builder voice across docs + landing. Aesthetic: editorial brutalism + numbers-as-brand. Anchored on 5-site competitive research (Mem0, Zep, Linear, Trigger.dev, Resend) and the eureka that competitors hide their numeric mechanic while SciPot's edge is to lead with it. |
