# Lane Social Co — Email Strategy & Kit Setup Plan

---

## What's On Every Page Right Now

### Pages with active email capture
| Page | Form Name | Backend | Action / Destination | Status |
|------|-----------|---------|----------------------|--------|
| `shop.html` | `shop-freebie` | Netlify | `/thank-you-freebie.html` | ✅ Live (not Kit) |
| `blog.html` | `newsletter` | Netlify | `/thank-you-freebie.html` | ✅ Live (not Kit) |
| `contact.html` | `contact` | Netlify | `/thank-you-audit.html` | ✅ Live (not Kit) |
| `shop-free.html` quiz gate | *(none)* | JS only | Not submitted anywhere | ⚠️ Broken — collects nothing |
| `shop-free.html` add-all modal | *(none)* | JS only | Not submitted anywhere | ⚠️ Broken — collects nothing |

### Pages with NO email capture (missed opportunities)
| Page | Why it matters |
|------|---------------|
| `freebie-audit-checklist.html` | People land here to grab a free resource and leave with nothing captured |
| `freebie-content-calendar.html` | Same — dedicated freebie page, zero capture |
| `freebie-content-pillars.html` | Same |
| `freebie-bio-optimization.html` | Same |
| `blog-post-template.html` | No in-article email opt-in |
| `index.html` | No direct email capture on the homepage |

---

## The Email Strategy: 2 Lists, 3 Kit Forms

Keep it simple. Almost everything funnels into one of two buckets.

---

### LIST 1: "Free + Nurture" — The main list

**Who goes here:** Anyone who downloads a freebie, uses the quiz, or engages with free tools. This is the biggest bucket — most of the site feeds here.

**Goal:** Build trust → educate → convert to Audit or Bundle.

**What connects here:**
- `shop.html` — "Grab all four free resources" form
- `shop-free.html` — Quiz gate email + "Add all" modal (currently broken; needs Kit form to fix)
- `freebie-audit-checklist.html` — needs a form added
- `freebie-content-calendar.html` — needs a form added
- `freebie-content-pillars.html` — needs a form added
- `freebie-bio-optimization.html` — needs a form added

**Kit Form to create:** `Free Resources — Lane Social Co`
- Redirect URL: `https://lanesocialco.com/thank-you-freebie.html`
- Tag to assign: `free-download`

---

### LIST 2: "Newsletter" — The ongoing readers list

**Who goes here:** Blog readers who want regular content. Could overlap with List 1 — that's fine, Kit handles it. If someone is already on the free list, they just get a second tag.

**Goal:** Stay top of mind → drive repeat traffic → warm audience for paid products.

**What connects here:**
- `blog.html` — newsletter signup section
- `blog-post-template.html` — needs an in-article opt-in added

**Kit Form to create:** `Newsletter — Lane Social Co`
- Redirect URL: `https://lanesocialco.com/thank-you-freebie.html` (reuse same page)
- Tag to assign: `newsletter`

---

### CONTACT FORM — Keep in Netlify, don't run through Kit

The contact form (`contact.html`) is a service inquiry, not an email signup. These people want to talk to you, not receive a drip sequence. Keep it as Netlify → your inbox. No Kit form needed.

---

## Kit Forms to Build: The Complete List

**Total: 2 forms** (possibly 3 if you want a separate one for individual freebie pages vs. the shop — but you don't need to)

---

### Form 1 — Free Resources

| Field | Value |
|-------|-------|
| **Form name in Kit** | `Free Resources — Lane Social Co` |
| **Incentive text** | "Get instant access to all four free tools" |
| **Fields needed** | Email only (no first name required — lower friction) |
| **Tag to apply** | `free-download` |
| **Redirect after submit** | `/thank-you-freebie.html` |
| **Sequence to connect** | Free Resources Welcome Sequence (see below) |

**Used on these pages:**
- `shop.html` — replace current Netlify form
- `shop-free.html` — replace JS-only quiz gate and add-all modal
- `freebie-audit-checklist.html` — add form (currently missing)
- `freebie-content-calendar.html` — add form (currently missing)
- `freebie-content-pillars.html` — add form (currently missing)
- `freebie-bio-optimization.html` — add form (currently missing)

---

### Form 2 — Newsletter

| Field | Value |
|-------|-------|
| **Form name in Kit** | `Newsletter — Lane Social Co` |
| **Incentive text** | "Weekly strategy tips for businesses that want to grow" |
| **Fields needed** | Email only |
| **Tag to apply** | `newsletter` |
| **Redirect after submit** | `/thank-you-freebie.html` (reuse) |
| **Sequence to connect** | Newsletter Welcome (1 email) → move to broadcast list |

**Used on these pages:**
- `blog.html` — replace current Netlify form
- `blog-post-template.html` — add in-article opt-in

---

### Optional Form 3 — Homepage Capture (if you want one)

If you want to capture emails on the homepage without sending people to the shop first:

| Field | Value |
|-------|-------|
| **Form name in Kit** | `Homepage — Lane Social Co` |
| **Incentive text** | "Get the free Social Audit Checklist" |
| **Tag to apply** | `free-download` |
| **Redirect after submit** | `/thank-you-freebie.html` |
| **Sequence to connect** | Same as Form 1 (Free Resources Welcome Sequence) |

This would go in the `final-cta` section ("Stop guessing. Start growing.") as an alternative or addition to the "Get the Bundle" button. Low priority but high upside.

---

## Sequences to Build in Kit

### Sequence A: Free Resources Welcome (for Form 1)

| Email | Send time | Subject line idea | Goal |
|-------|-----------|-------------------|------|
| 1 | Immediately | "Here's everything — plus one thing to do first" | Deliver downloads, set expectations |
| 2 | Day 2 | "The thing most businesses skip before posting anything" | Educate → content pillars concept |
| 3 | Day 5 | "Are you on the right platform? (Quick test)" | Educate → platform clarity |
| 4 | Day 8 | "What a full audit actually looks like" | Introduce the Audit service |
| 5 | Day 12 | "How a Vegas restaurant went from 800 to 13K in 15 days" | Social proof → case study |
| 6 | Day 18 | "Want us to do this analysis for you?" | Direct pitch — Audit or Bundle |

### Sequence B: Newsletter Welcome (for Form 2)

| Email | Send time | Subject line idea | Goal |
|-------|-----------|-------------------|------|
| 1 | Immediately | "Welcome — here's what you can expect" | Set tone, point to free resources |
| → | Ongoing | Weekly broadcast | Stay top of mind |

---

## Summary: What to Do in Kit

1. Create **Form 1** — "Free Resources — Lane Social Co"
2. Create **Form 2** — "Newsletter — Lane Social Co"
3. Create **Sequence A** — 6-email Free Resources Welcome
4. Create **Sequence B** — Newsletter Welcome (1 email, then broadcasts)
5. Tag system: `free-download`, `newsletter`
6. *(Optional)* Create **Form 3** — "Homepage — Lane Social Co"

Then come back and we'll swap out the Netlify forms on each page to point to the right Kit embed code or action URL.

---

*Pages that need a form added (none currently exist):*
- `freebie-audit-checklist.html`
- `freebie-content-calendar.html`
- `freebie-content-pillars.html`
- `freebie-bio-optimization.html`
- `blog-post-template.html`
