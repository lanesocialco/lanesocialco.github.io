# Lane Social Co — Full Site Architecture
*Planning document — review before building*

---

## The big picture

The site has five distinct zones that all feed into each other:

1. **Core** — home, about, contact, links
2. **Services** — the audit and any future offerings
3. **Shop** — free products and paid digital products, each with their own landing pages
4. **Blog/Content Hub** — magazine-style, SEO-heavy, feeds everything else
5. **Utility** — legal, thank-you pages, 404, sitemap

Every blog post points to a product or service. Every product page links back to related content. Every freebie has its own landing page that captures an email and leads toward the $97 audit. That's the full loop.

---

## SECTION 1 — Core Pages

These are the pages that hold the site together.

| Page | File | Status | Notes |
|---|---|---|---|
| Home | `index.html` | Built | Needs review pass |
| About | `about.html` | Built | Needs review pass |
| Contact | `contact.html` | Not built | General inquiry form |
| Bio Link Hub | `links.html` | Not built | Custom Linktree replacement |
| 404 | `404.html` | Not built | Stays on brand, redirects somewhere useful |
| Privacy Policy | `privacy-policy.html` | Not built | Required for email + payments |
| Terms of Service | `terms.html` | Not built | Covers audit deliverables, refund policy |
| Sitemap | `sitemap.xml` | Not built | Required for Google indexing |

---

## SECTION 2 — Services Pages

| Page | File | Status | Notes |
|---|---|---|---|
| Audit (main) | `services.html` | Built | Deep-dive on the $97 audit |
| Audit Intake Form | `audit-intake.html` | Not built | Post-purchase detailed questionnaire |
| Thank You (Audit) | `thank-you-audit.html` | Not built | After Gumroad payment, sends to intake form |
| Strategy Session | `strategy-session.html` | Future | 1:1 call offering, higher ticket |
| Done For You | `done-for-you.html` | Future | Full social media management |

---

## SECTION 3 — Shop & Products

### Shop hub pages

| Page | File | Status | Notes |
|---|---|---|---|
| All Products | `shop.html` | Built | Overview of everything — review structure |
| Free Resources | `shop-free.html` | Not built | Only freebies, filtered view |
| Paid Products | `shop-paid.html` | Not built | Only paid products — launch when ready |

### Individual freebie landing pages

Each freebie gets its own standalone page. Not a product grid card — a real landing page with a headline, what's inside, who it's for, and an email capture form. These also become SEO pages in their own right.

| Page | File | Status | Notes |
|---|---|---|---|
| Social Audit Checklist | `freebie-audit-checklist.html` | Not built | Free PDF, email capture |
| Content Pillars Workbook | `freebie-content-pillars.html` | Not built | Free PDF, email capture |
| 30-Day Content Calendar | `freebie-content-calendar.html` | Not built | Free PDF, email capture |
| Bio Optimization Cheat Sheet | `freebie-bio-optimization.html` | Not built | Free PDF, email capture |

**Thank you page (freebies):** `thank-you-freebie.html` — one shared page for all freebie downloads. "Your download is on its way. Here's what to do next." Warm intro to the $97 audit.

### Individual paid product landing pages

Each paid product also gets its own full landing page. Launch these whenever the product is ready — they can live as "coming soon" pages in the meantime (good for building an email waitlist).

| Page | File | Status | Price | Notes |
|---|---|---|---|---|
| Social Strategy Playbook | `product-strategy-playbook.html` | Not built | $27 | Ebook |
| 90-Day Growth Workbook | `product-growth-workbook.html` | Not built | $19 | Printable workbook |
| Content Creation Course | `product-content-course.html` | Not built | $47 | Short video series |
| [Future products] | `product-[name].html` | Future | TBD | Template reused for each |

---

## SECTION 4 — Blog / Content Hub

This is the SEO engine. Everything in this section is designed to rank on Google and AI search (ChatGPT, Perplexity, Google AI Overviews) and funnel readers toward the audit or a freebie.

### Blog structure

```
blog.html                          ← Magazine homepage (ALL content)
├── blog-category-[topic].html     ← Category pages (one per content pillar)
│   └── blog-[post-slug].html      ← Individual articles (infinite)
└── blog-search.html               ← Search/filter page (optional, later)
```

### The blog homepage (magazine style)

`blog.html` — This is the CNET/BuzzFeed-style hub. Not a simple list of posts. A real editorial layout with:
- Featured/hero article at the top
- Category rows ("Strategy," "Instagram," "TikTok," "For Local Businesses," etc.)
- Most popular / trending section
- A "Start here" block for new visitors
- Newsletter signup woven in
- New posts can be added and the layout stays intact

### Category pages

Each category page is a sub-hub for one topic. These rank for broad terms ("Instagram strategy," "TikTok for small business") while individual posts rank for specific long-tail terms.

| Category | File | Focus topic |
|---|---|---|
| Strategy | `blog-category-strategy.html` | Social media strategy, planning, systems |
| Instagram | `blog-category-instagram.html` | Instagram growth, Reels, bios, algorithms |
| TikTok | `blog-category-tiktok.html` | TikTok for business, hooks, trending formats |
| Content Creation | `blog-category-content.html` | Writing captions, content batching, formats |
| Growth & Audience | `blog-category-growth.html` | Follower growth, engagement, algorithms |
| Local Business | `blog-category-local.html` | Social media for local businesses specifically |
| Digital Products | `blog-category-products.html` | How to sell digital products, passive income |

### Individual blog post template

Every post uses the same HTML template. You update the content, the meta tags, and the internal links. The template includes:
- A clean article layout with a hero section
- Sidebar with related posts + a freebie CTA
- In-content CTAs (at natural break points)
- FAQ section at the bottom (structured data for AI search)
- Author block
- Related posts at the bottom
- Breadcrumb navigation (for SEO)
- JSON-LD structured data built in

**Post naming convention:** `blog-[descriptive-slug].html`
- Example: `blog-how-to-audit-your-instagram.html`
- Example: `blog-best-time-to-post-on-tiktok.html`
- Example: `blog-content-pillars-for-small-business.html`

### Content clusters (the SEO strategy)

Instead of random posts, you build "clusters." Each cluster has one pillar post (broad, long, authoritative) and 5-10 supporting posts (specific, long-tail). They all link to each other and to a relevant product.

**Cluster 1: Social Media Audits**
- Pillar: "The Complete Social Media Audit Guide (2025)"
- Spokes: "How to audit your Instagram," "How to audit your TikTok," "Signs your social media strategy isn't working," "Free social media audit checklist," "What a professional social media audit includes"
- All point to → `freebie-audit-checklist.html` and `services.html`

**Cluster 2: Content Strategy**
- Pillar: "How to Build a Social Media Content Strategy From Scratch"
- Spokes: "What are content pillars," "How to batch create content," "Best content types by platform," "How to repurpose content"
- All point to → `freebie-content-pillars.html` and `services.html`

**Cluster 3: Instagram Growth**
- Pillar: "Instagram Growth Strategy for Small Businesses (2025)"
- Spokes: "How to write an Instagram bio that converts," "Best time to post on Instagram," "Instagram Reels strategy," "How to get your first 1,000 followers on Instagram"
- All point to → `freebie-bio-optimization.html` and `services.html`

**Cluster 4: TikTok for Business**
- Pillar: "TikTok for Small Business: The Complete Guide"
- Spokes: "TikTok hooks that actually work," "Best TikTok posting frequency," "How to go viral on TikTok," "TikTok vs Instagram: Which is better for your business"
- All point to → `services.html`

**Cluster 5: Las Vegas Local SEO** (local authority play)
- Pillar: "Social Media Marketing for Las Vegas Businesses"
- Spokes: "Best social media strategies for Las Vegas restaurants," "Social media for Las Vegas entertainment," "Local business social media tips"
- All point to → `services.html` and `contact.html`

---

## SECTION 5 — Results & Social Proof

| Page | File | Status | Notes |
|---|---|---|---|
| Results Hub | `results.html` | Not built | Full case study index, all the numbers |
| Case Study template | `case-study-[client].html` | Future | One page per notable result |

---

## How all the pages connect (the traffic flow)

```
DISCOVERY (how they find you)
│
├── Google Search → Blog post → Freebie page → Email capture → Nurture email → Audit page
├── Google Search → Audit page → Purchase → Intake form → Delivery
├── Instagram/TikTok → links.html (bio link) → Shop or Audit page
├── Linktree → links.html → Any page
└── Direct → index.html → Wherever they click

THE INTERNAL LOOP (how pages feed each other)
│
├── Blog post → Related freebie landing page → Email capture → Thank you page
│                                           ↓
│                                     Nurture email sequence
│                                           ↓
│                                     Audit sales page → Purchase
│
├── Shop (free) → Individual freebie page → Email capture → Thank you
├── Shop (paid) → Individual product page → Gumroad checkout
├── Home → Services → Audit → Purchase → Intake form
└── About → Contact → (inquiry) or → Services
```

---

## SEO & AI Search Strategy

### For Google

Every page — including blog posts — gets these built in by default:

- `<title>` tags: specific, keyword-first, under 60 characters
- `<meta description>`: conversational, 150 characters, includes the target keyword
- `<meta name="keywords">`: supplementary keywords
- Open Graph tags: so links look good when shared on social
- Canonical tags: prevents duplicate content issues
- Semantic HTML: proper use of `h1`, `h2`, `h3`, `article`, `section`, `nav`
- Image alt text: descriptive, keyword-inclusive
- Internal links: every page links to 2-3 related pages
- Schema markup (JSON-LD): for blog posts, products, the business itself, and FAQ sections

### For AI search (ChatGPT, Perplexity, Google AI Overviews)

AI search rewards pages that answer questions directly and clearly. The strategy:

- Every blog post answers a specific question in the first 2-3 sentences — no preamble
- Every post ends with a FAQ section (5-8 questions and direct answers) — this is what AI pulls from
- Use `FAQPage` schema markup on all FAQ sections so Google's AI Overview picks it up
- Use `HowTo` schema on any step-by-step content
- Use `LocalBusiness` schema on the home and contact pages (Las Vegas)
- Use `Product` schema on all product landing pages
- Write at a reading level that's clear and direct — AI summarizers favor this
- Keep paragraphs short. AI overviews pull paragraph-level excerpts.

### The topical authority play

Google and AI search increasingly favor sites that clearly own a topic. The cluster structure above does this: you're not just writing random posts about social media — you're systematically covering every angle of social media strategy for small businesses, local businesses, and content creators. Over time, that signals to Google that Lane Social Co is the authority on this topic.

Estimated timeline:
- Months 1-3: Core cluster posts published, foundational pages indexed
- Months 3-6: Rankings start moving for long-tail terms
- Months 6-12: Category pages start ranking for broader terms
- Year 2+: Domain authority builds, harder terms become attainable

### Local SEO (Las Vegas)

- `LocalBusiness` schema on index.html and contact.html with address/city
- "Las Vegas" appears naturally in page copy where relevant
- Google Business Profile (separate from the site but links to it)
- The Las Vegas cluster of blog posts builds local relevance

---

## Full page count

| Section | Core pages | Templates | Scalable |
|---|---|---|---|
| Core | 7 | — | — |
| Services | 5 | — | — |
| Shop & Products | 3 hub + 4 freebies + 3 paid | 1 product template | Unlimited |
| Blog | 1 hub + 7 category pages | 1 post template | Unlimited |
| Results | 1 hub | 1 case study template | Unlimited |
| Utility/Legal | 4 | — | — |
| **Total to build** | **~35 pages** | **3 templates** | **Unlimited** |

The 35 pages are the framework. Everything after that — blog posts, product pages, case studies — uses a template and scales indefinitely.

---

## Build order recommendation

**Phase 1 — Go live (do first)**
1. `links.html` — needed the moment you're sending traffic anywhere
2. `contact.html` — catches inquiries
3. `thank-you-audit.html` + `audit-intake.html` — needed before first sale
4. `thank-you-freebie.html` — needed before first freebie goes live
5. `privacy-policy.html` + `terms.html` — needed before any email capture
6. `404.html` — small but professional
7. `sitemap.xml` — submit to Google Search Console immediately

**Phase 2 — Grow the shop**
8. `shop-free.html`
9. Four freebie landing pages
10. `shop-paid.html` (can launch empty / coming soon)
11. Paid product pages as products are ready

**Phase 3 — Build the content engine**
12. `blog.html` (magazine homepage)
13. Category pages (all 7)
14. Blog post template
15. First 5-10 posts (one cluster)
16. `results.html`

**Phase 4 — Expand services**
17. `strategy-session.html`
18. `done-for-you.html`
19. Case study pages as clients accumulate

---

*Built for Lane Social Co · February 2025*
