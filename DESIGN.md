# SciPot — Design System

> **Source of truth** for the visual and verbal design of **scipot.ai** and **docs.scipot.ai**. Any change to typography, colour, spacing, voice or layout lands here first. AI assistants and humans: read this before editing any user-facing surface.
>
> **v2 — 2026-10-09: "The page is a Knowledge Pot."** Replaces the v1 dark editorial system (Cormorant Garamond italics, emerald, gold) of 2026-05-11. The system was born in the investor pitch (`scipot-landing/pitch/`, `pitch/products/`, October 2026) and is now the system of every surface.

---

## Product context

- **What this is:** SciPot, the trust layer for AI knowledge. Knowledge Pots (POTs) hold facts, each with a POT Score (Proof of Truth, 0–1), its source and its contradictions. The system returns an explicit gap when its knowledge does not support an answer.
- **Who scipot.ai and the docs are for:** developers who build on the API (SciPot Cloud), and organisations that need it in their own cloud (SciPot Sovereign). AI power users and vibe coders go to MaBrain (mabra.in, mabrain.dev); teams that want a finished product go to KB2B. Those two are linked as products built on the same public API, never sold from these surfaces.
- **Surfaces covered:** `scipot.ai` (static HTML on Cloudflare Pages, repo `scipot-landing`) and `docs.scipot.ai` (Mintlify, repo `scipot-docs`). The password-protected pages in `scipot-landing` (`/pitch`, `/pitch/products`, `/tech-pitch`, `/manifesto`) use the same visual system with their own voice register (see *Voice*).

## Visual thesis — *"The page is a Knowledge Pot"*

Paper, ink and rules. The only colour on the page is certainty.

Every claim SciPot makes about itself is rendered the way SciPot renders a fact: a score in the left gutter, the claim on the right, the source underneath. Where we don't know, the page says so with a gap. A reader can lower or raise a certainty threshold and watch the unproven claims black out. The product mechanic is the layout.

## The memorable thing

> *"Every fact has a score. Every score has a source."*

If a design choice does not help a reader read a number off the page and trace it to where it came from, the choice is wrong.

---

## Voice

One builder voice on public surfaces. The landing is shorter and more aphoristic; the docs are more technical and exact.

**Do:**
- Use numbers in prose. "POT Score 0.85" beats "high confidence".
- Make claims that can be falsified ("every fact has a score"), not benefits ("trustworthy memory").
- Name the mechanism, not the benefit. "Contradictions flagged through typed edges", not "intelligent contradiction handling".
- Short sentences. Active voice. Concrete nouns.
- **Score your own claims.** On scipot.ai, claims about SciPot carry the score we would give them, assigned by hand on the public scale, and the footer says so. What is in production scores high; what is a plan scores low; what we don't know is a gap.
- Say what does not work yet, once, plainly. A gap beats "coming soon".

**Don't (forbidden vocabulary):**
`delve`, `crucial`, `robust`, `comprehensive`, `leverage`, `empower`, `seamless`, `intuitive`, `powerful`, `cutting-edge`, `enterprise-grade`, `AI-powered`, `intelligent`, `pivotal`, `landscape`, `tapestry`, `foster`, `showcase`, `intricate`, `vibrant`, `fundamental`, `significant`, `furthermore`, `moreover`, `additionally`.

**Canonical lines** (verbatim, never paraphrased):

- *"Knowledge your AI can trust."* — scipot.ai hero, pitch cover.
- *"The trust layer for AI knowledge."* — descriptor under the name.
- *"Every fact has a score. Every score has a source. Every contradiction is flagged."*
- *"Facts, not chunks."* — the engine section.
- *"Your RAG retrieves. SciPot **knows**."* — the comparison with retrieval pipelines.
- *"Try building that in a weekend."* — scipot.ai closing line.

**Names.** POT = Knowledge Pot; POT Score = Proof of Truth. Never "POT (Proof of Truth)". Deployment modes: **SciPot Cloud**, **SciPot Sovereign** (never "BYOC" in public copy). Products on the API: **MaBrain** and **KB2B** by their own names. "SciPot Makers" and "SciPot Teams" are investor-surface names only. **SciPot BlackBox** is an idea and never appears on a public surface.

**Private surfaces** (`/pitch`, `/tech-pitch`, `/manifesto`) share the visual system and keep their own register: market figures, strategy, roadmap and confidential notes are fine there and nowhere else.

---

## Typography

Three families, three roles.

```
Bricolage Grotesque →  DISPLAY. h1, h2, product names, the contact line, axioms.
                       Weight 600 (h2) / 700 (h1, names). Tight tracking.
                       Never for body text, never below 20px.

DM Sans             →  BODY and UI prose. h3 inside a fact. Weight 400 / 600.

JetBrains Mono      →  STRUCTURE and NUMBERS. Every POT Score and every count,
                       section labels (01 / ENGINE), the top strip, level tags
                       (VERIFIED), sources, buttons, code. tabular-nums always.
```

Google Fonts, one request:
`family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700`

### The discipline rule for type

A number that measures trust (POT Score, source count, contradiction count, fact count, price, percentage) is set in JetBrains Mono with `font-variant-numeric: tabular-nums`. No exceptions.

### Scale

```
h1 (cover)       clamp(44px, 9vw, 104px)  Bricolage 700  lh .94   ls -.035em
h1 (board/page)  clamp(34px, 5vw, 60px)   Bricolage 700  lh .96   ls -.03em
h2               clamp(28px, 4.6vw, 46px) Bricolage 600  lh 1.04  ls -.025em
axiom            24px (20px mobile)       Bricolage 600  lh 1.2   ls -.015em
cover sub        20px                     DM Sans 400    ink-soft
body             17px (16px mobile)       DM Sans 400    lh 1.55
fact h3          17px                     DM Sans 600
small body       15–15.5px                DM Sans 400
score (fact)     20px (16px mobile)       Mono 700
label            12px  uppercase ls .08em Mono 400       ink-faint
level tag        10px  uppercase ls .06em Mono 400       level colour
source / meta    11.5px                   Mono 400       ink-faint
```

---

## Colour

Light by default (paper). A derived dark theme exists for readers whose system asks for it; it is the same page with paper and ink swapped, not a second design.

### Tokens

```css
:root {
  --paper:       #fbfbf8;   /* page background */
  --paper-hover: #f1f1ec;   /* hover on a ruled block */
  --ink:         #0c0c0d;   /* text, strong rules, inverted bands */
  --ink-soft:    #4a4a48;   /* body copy under a heading, leads */
  --ink-faint:   #71716b;   /* labels, sources, metadata (4.7:1 on paper) */
  --rule:        #d9d9d2;   /* rule between rows */
  --rule-strong: #0c0c0d;   /* rule above sections, strip border, boxes */

  /* POT Score levels: the only colour on the page */
  --lv-constitution: #0c0c0d;  /* 1.00        CONSTITUTION */
  --lv-verified:     #0b7a4b;  /* 0.85–0.99   VERIFIED     */
  --lv-extracted:    #1f5fbf;  /* 0.50–0.84   EXTRACTED    */
  --lv-inferred:     #9a5b00;  /* 0.30–0.49   INFERRED     */
  --lv-pending:      #71716b;  /* 0.00–0.29   PENDING      */
  --lv-gap:          #c8321e;  /* a gap: a question without an answer */
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) { /* same values as [data-theme="dark"] */ }
}
:root[data-theme="dark"] {
  --paper:       #0e0e0f;
  --paper-hover: #18181a;
  --ink:         #f1f1ec;
  --ink-soft:    #b9b9b3;
  --ink-faint:   #8d8d88;
  --rule:        #2a2a28;
  --rule-strong: #f1f1ec;
  --lv-constitution: #f1f1ec;
  --lv-verified:     #3fbf86;
  --lv-extracted:    #7aa7f5;
  --lv-inferred:     #e3a43c;
  --lv-pending:      #8d8d88;
  --lv-gap:          #f2735e;
}
```

All text tokens pass WCAG AA on their own background (ink-faint 4.7:1 light, 5.8:1 dark; every level colour ≥ 5:1). The pitch pages were drawn with `#8d8d88` faint and `#b26a00` inferred, which fail AA for small text on paper; they should move to these values the next time they are touched.

### Discipline rules for colour

1. **Colour means certainty.** Level colours appear only on a score, its level tag, its bar, a gap, or the border of something that carries a score. Never on a heading, a button or a decorative block.
2. **Links are ink.** Underlined with `text-underline-offset: 3px`. External links: dotted underline and a `↗`.
3. **Primary action = an ink block** (ink background, paper text, no radius). Secondary = a 1px ink outline. There is no brand accent colour.
4. **Inverted bands** (ink background, paper text) mark the one thing a section stands on: the engine strip under the product board, the certainty dial, the closing call to action. At most two per page.
5. **No gradients**, except the 3px dash pattern on a pending bar and the hatch on an idea card. **No purple. No shadows.**
6. **Focus ring:** `outline: 2px solid var(--lv-extracted); outline-offset: 2px`.

---

## Layout

- **Radius: 0.** Everywhere. Buttons, cards, inputs, code blocks.
- **Rules, not boxes.** 1px `--rule-strong` above every section and under the top strip; 1px `--rule` between rows; dashed `--lv-gap` under a gap. Boxes only for a "how to read this" note, an edges line and code.
- **Columns:** reading column 920px (`.wrap`), boards and wide tables 1240px. Side padding 24px (16px under 400px).
- **The gutter:** facts and gaps sit on a two-column grid, `104px` score gutter + content (`62px` on mobile). Everything in a section aligns to it.
- **Section rhythm:** `section { padding: 64px 0 8px; border-top: 1px solid var(--rule-strong) }`. Cover: 88px top, 56px bottom.
- **Grids:** two or three columns of ruled text at most (the "ask" list). Never a grid of icon cards. The five-column product board is the one exception, and it is a staircase, not a feature grid.
- **No emoji, no icons in body.** Mono glyphs only: `→ ↗ ▶ ◉ ◯ ──`.

## Motion

Almost none. Hover changes background or colour in 120ms. The certainty dial redacts and restores instantly. `scroll-behavior: smooth`, off under `prefers-reduced-motion`. No entrance animations, no scroll reveals.

---

## Components

### Top strip
Sticky, 48px, paper, 1px ink border below, mono 12px. Left: `SCIPOT` bold + `/section` in ink-faint. Right: section links (ink-faint, ink on hover/active), then the language toggle or the primary action. On mobile the links hide.

### Section label + h2
`01 / Engine` in mono uppercase ink-faint, then the h2, then an optional lead (640px, ink-soft).

### Fact row (the brand mark)
The v2 Fact Receipt. Replaces the v1 card.

```
┌ gutter 104px ┬──────────────────────────────────────────────┐
│ 0.97         │ POT Score — Proof of Truth          (DM Sans 600)
│ VERIFIED     │ Certainty from 0 to 1 on every fact.  (ink-soft)
│ ▬▬▬▬▬▬▬▬▬▬░  │ in production · source                (mono 11.5 faint)
└──────────────┴──────────────────────────────────────────────┘
```

- Score: mono 700 20px in the level colour, two decimals.
- Level tag: mono 10px uppercase, level colour.
- Bar: 84px × 3px, `--rule` track, fill = score × 100% in the level colour; dashed for PENDING. The bar sits next to the number and never replaces it.
- Body: optional h3, optional paragraph, optional source line. A source is a link when it can be.
- `data-s` holds the score; `data-lv` the level.
- **Axiom row:** score 1.00 CONSTITUTION, the body is the axiom itself in Bricolage 600 24px.
- **Below threshold:** when the dial hides a fact, its text is blacked out (striped ink bars, transparent text) and a mono line says what score it had and how to read it. The row keeps its height, so the reader sees how much was hidden.

### Gap row
Same grid. Gutter: `GAP` / `open` in mono `--lv-gap`. Body: the question as h3, then why it is open. Dashed red rule below.

### Edges line
A boxed mono line of typed relations: `Makers ──feeds──▶ Cloud`. Relation names in ink-faint. Scrolls horizontally on small screens.

### Certainty dial
Fixed bottom band, ink background, 64px (128px mobile). Label, the current threshold (mono 20px), a range input 0–1 step .05, a count ("12 of 31 claims shown") and three presets (Everything / Plans too / Only proven = 0 / .5 / .85). It changes nothing but visibility. Optional on public pages; present wherever the page is scored.

### Product card (board)
Ink-bordered card, staircase offset (`--step` 26px per rank), name in Bricolage 700, a score and bar, one line, a `dl` of facts. Pressed state inverts. An idea is dashed and hatched. Under the board: an inverted engine band.

### Buttons and links
`.btn` = mono 13px, 12px × 18px padding, 1px ink border, no radius. `.btn--ink` filled. Arrow `→` for internal, `↗` for external.

### Code block
Always a dark slab, in both themes: `--code-bg` `#0c0c0d` (light) / `#18181a` (dark), text `#f1f1ec`, 1px `--rule-strong` border, mono 13.5px, 20px padding, no radius. Comments in `#8d8d88`. Strings in `#3fbf86`. A mono label above (`curl`, `response`).

### Ruled table
Mono header row, 1px rules, no zebra, no cell backgrounds. Comparison tables put SciPot in the last column; a yes is `✓`, a no is `—`.

---

## Surfaces

### scipot.ai (static HTML, `scipot-landing`)
- Static, indexable HTML; the dial is progressive enhancement (the page reads complete without JavaScript).
- Order: strip → cover (h1, sub, "this page is a Knowledge Pot", actions, a real `/query` response rendered as fact rows) → constitution → engine → the loop → API → where it runs → built on the same API → pricing → gaps → get started → close.
- Footer states how the scores were assigned and links the public scale.

### docs.scipot.ai (Mintlify, `scipot-docs`)
- Mintlify `theme: "mint"`, `appearance.default: "light"`, colours and fonts from this file in `docs.json`; the rest in `style.css` at the repo root (radius 0, rules, mono labels, code blocks).
- `docs.json` `primary` is ink (`#0c0c0d` light / `#f1f1ec` dark). The level colours never become the primary.
- Fact rows in MDX come from the snippets in `snippets/` (`<Fact>`, `<Gap>`), so a page never hand-draws a score.
- Sidebar, right-rail TOC and API playground stay Mintlify's own: extend them, don't fight them.

---

## Anti-patterns (slop blacklist)

Never, on any surface:

- Purple, violet, or any gradient as an accent
- Grids of icon cards, emoji as decoration, the "sparkles" icon
- Rounded corners, pill buttons, drop shadows, glassmorphism, grain overlays
- Centered-everything heroes with uniform spacing
- Coloured headings or coloured buttons
- A score drawn as a doughnut or a gauge, or a bar without its number
- A claim about SciPot with a score it does not deserve
- Inter / Roboto / Open Sans / Lato / Montserrat / Poppins / Space Grotesk / system-ui as display or body font
- "Built for X" / "Designed for Y" headings; "coming soon"
- Lorem ipsum

---

## Implementation checklist

For each surface:

- [ ] One Google Fonts request with the three families
- [ ] Tokens above as CSS custom properties, light + dark
- [ ] Every number in mono with `tabular-nums`
- [ ] Facts and gaps rendered with the shared components, never hand-drawn
- [ ] Radius 0, no shadows, no gradients outside the two allowed patterns
- [ ] Forbidden-vocabulary pass on all copy
- [ ] Mobile at 375px: no horizontal scroll, gutter 62px, dial 128px

---

## Decisions log

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-11 | v1: dark editorial brutalism, Cormorant italics, emerald + gold, Fact Receipt card | First formalisation. Memorable thing: "every fact has a score, every score has a source". |
| 2026-10-09 | v2: "The page is a Knowledge Pot". Paper and ink, Bricolage Grotesque, colour reserved for certainty levels, fact rows instead of receipt cards, certainty dial, gaps on the page. Light by default with a derived dark theme. | The investor pitch of October 2026 turned the product mechanic into the layout and read better than the v1 surfaces. Seb chose to carry it to scipot.ai and the docs, with the copy aligned to the October 2026 strategy (trust layer for AI knowledge; scipot.ai for developers on Cloud and Sovereign; MaBrain and KB2B as products on the same API). |
