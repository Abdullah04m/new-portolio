# Design Plan — Abdullah Moragaa Shopify Portfolio (Mobile-First Redesign)

## Color (named hex)
- --paper: #F7F5F1        (warm off-white background, not stark white)
- --ink: #1C1B17          (near-black text, warm not blue-black)
- --ink-soft: #56534A     (secondary text, warm gray)
- --line: #E3DFD5         (hairline borders/dividers)
- --surface: #EFECE3      (subtle raised surface, card backs)
- --green: #1F5C3F        (primary accent — deep confident green, not Shopify's exact bright green)
- --green-deep: #163F2B   (pressed/dark state, dark section backgrounds)
- --green-tint: #E4EDE6   (light green wash for tags/badges)
- --white: #FFFFFF        (browser chrome, cards floating on paper)

## Type
- Display/UI: "General Sans" fallback -> use "Inter Tight" (confident, slightly condensed, good at large sizes, not overused like plain Inter)
- Body: "Inter" (workhorse readability at small sizes)
- Mono (functional only — real browser/UI chrome, not decorative labels): "JetBrains Mono" for the browser tab bar URL, price-style figures

## Layout concept
Vertical single-column mobile flow. Case studies are full-viewport-height modules, each centered on a browser-frame mockup with real tab-switching (Home/Product/Collection). Sequence numbering (Case 01, 02...) is earned here because it IS a sequence of projects. Before/after uses a draggable-style split reveal, side by side on mobile stacked vertically for readability. Section rhythm alternates paper and deep-green backgrounds to create pacing breaks (not gradients).

ASCII wireframe (mobile, single column, ~390px):

┌─────────────────────────┐
│  ≡  Abdullah Moragaa     │  <- nav, minimal
├─────────────────────────┤
│                          │
│   Shopify Theme Dev      │  <- eyebrow, functional not decorative
│   I build Shopify        │
│   stores that look       │
│   better, load faster... │  <- big Inter Tight headline
│                          │
│   [View My Work]         │  <- single strong primary CTA
│   WhatsApp Me →          │  <- secondary, text-style
│                          │
├─────────────────────────┤
│  SELECTED WORK           │
│  Case 01 — Sh3ban        │
│  ┌─────────────────┐    │
│  │ ● ● ●  sh3ban.com│    │ <- browser chrome, mono
│  │ [Home][Product]  │    │ <- tabs
│  │ ┌───────────────┐│    │
│  │ │  screenshot    ││    │ <- clipped viewport
│  │ │  (annotated)   ││    │
│  │ └───────────────┘│    │
│  └─────────────────┘    │
│  Problem / Change / Result (compact rows)
│  BEFORE → AFTER strip    │
├─────────────────────────┤
│  Case 02 — Huff Gallery  │
│  (same system, less wt.) │
├─────────────────────────┤
│  SERVICES (quiet, list)  │
├─────────────────────────┤
│  ABOUT (short)           │
├─────────────────────────┤
│  CONTACT (green section) │
│  [WhatsApp] [Email]      │
└─────────────────────────┘

## Principles
1. The browser frame is the hero device of the whole site — real tab UI, not a generic laptop mockup.
2. Green is a tool, used only for CTAs, active tab state, small accents, and one deep-green contact section — never a dominant wash.
3. Numbering is earned (case study sequence) — not applied to non-sequential content like services.
4. Copy stays in short functional blocks (Problem/Change/Result) — no paragraphs pretending to be prose.
5. One bold motion idea (scroll-driven screenshot inside fixed browser frame) is described/mocked but not fully animated in this phase — a static representative multi-state mock is enough to communicate the concept.
