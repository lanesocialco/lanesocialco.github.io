# Lane Social Co — Full Launch Plan
*Last updated: February 2026*

---

## Part 1: Pre-Launch Blockers (Fix Before Anything Goes Live)

These are hard stops — the site shouldn't go live without them sorted.

### Technical (Non-Negotiable)

**OG image is missing.** Every page on the site references `assets/images/og-default.jpg` for link previews on social and in iMessage. That file doesn't exist. When someone shares your link, they'll get a blank preview. You need one image at 1200×630px — Canva has a template for this. Make it match the site: dark background, your logo, a one-line value prop.

**Favicon is missing.** No favicon means a blank tab icon in every browser. A simple square version of your logo mark (the ✳ or the logo itself) at 32×32px and 180×180px (Apple touch icon) is all you need. Export from Canva.

**Social profile links are all `#`.** The footer links for Instagram, TikTok, and LinkedIn all point to `#` right now — they go nowhere. Drop in your actual profile URLs before launch or pull those links entirely.

**Contact form goes nowhere.** The contact page has a form that logs data to the console and shows a browser alert. It never actually sends you anything. You need either a form backend (Formspree, Netlify Forms, or EmailJS are all free at small volume) or a simple `mailto:` redirect. Formspree is the easiest — takes about 10 minutes to wire up.

**Email captures don't capture emails.** Same issue on all the freebie pages. They now redirect to the thank-you page (that's fixed), but the email addresses aren't going anywhere. You need an email marketing platform connected before launch: Flodesk, Kit (formerly ConvertKit), or Mailchimp. Flodesk is the best-looking and simplest to use — $38/month or free trial. Once connected, replace the placeholder form handlers with your actual embed code.

**Payment isn't wired up.** The services page mentions checkout but there's no payment link connected. Gumroad is the fastest way to sell a one-time $97 product — takes about 20 minutes to set up, handles delivery and receipts, and you can paste your product link into the "Get your audit" button. Alternatively, use Stripe with a payment link. Either works.

**Blog has no posts.** The blog page, all the category pages, and the blog post template are all built and look good. But there are zero actual articles. You need at least 3-5 posts live at launch — not for traffic (that takes time), but so the blog doesn't look abandoned when early visitors click it. These can be short. 400-600 words each is fine.

### Content

**About page needs a photo.** Or at least a real human element. A good headshot goes a long way on a service-based site. People hire people, not logos. Even a high-quality iPhone photo works.

**Results page needs real data.** The stats (12k followers in 15 days, 2M+ interactions) appear on the homepage. The results page should have more than just the homepage stats — even a few short case study write-ups, screenshots, or client quotes.

**Product mockup images.** The shop pages currently have no product images — just text cards. For every paid product, you want a visual mockup so it looks like something you'd actually buy. Canva has a library of device and paper mockups you can drop your PDF design into.

---

## Part 2: Day-One Launch Lineup

What you actually go live with on launch day. Keep it simple. You can always add.

**Service (the core offer):**
The $97 Social Media Audit. This is the anchor. Everything on the site points here and it's the right thing to lead with — one product, one price, one decision for the visitor.

**Freebies (email list builders):**
Launch with the 4 already built on the site:
- Social Audit Checklist
- Content Pillars Workbook
- 30-Day Content Calendar
- Bio Optimization Cheat Sheet

These just need actual designed PDFs behind them (right now the forms redirect to a thank-you page but there's nothing to download). Priority one for Canva.

**Blog (minimum viable):**
3 posts live at launch, in your highest-intent categories. Suggestions below in Part 6.

**Email list:**
Even 1 signup form working at launch is better than none. Get one freebie connected to your email platform first, then roll out the rest.

---

## Part 3: Freebie Production Plan (Canva)

These are lead magnets — things people exchange their email for. Your goal is to make each one feel like something worth paying for, even though it's free. Good design matters here. Each one should open with your logo, use the same color palette as the site (black `#0A0A0A`, white `#F0F0F0`, purple `#7B2FFF`), use Bricolage Grotesque if available in Canva or Inter/Plus Jakarta Sans as the closest substitute.

### Already Planned (Need PDFs Made)

**Social Audit Checklist** — 2 pages. Page 1 is a visual checklist with checkboxes organized by platform. Page 2 is a short "what to do with your results" explainer. Format: A4 or US Letter.

**Content Pillars Workbook** — 4-6 pages. Cover page, then a worksheet for each of the 3-5 pillars: what it is, content ideas, sample posts. Lots of white space and fill-in areas.

**30-Day Content Calendar** — 2 pages. A calendar grid with daily prompt ideas and a notes area. Can include a second page with 30 caption starter ideas.

**Bio Optimization Cheat Sheet** — 1-2 pages. Formula for a converting bio across Instagram, TikTok, LinkedIn. Before/after examples. Quick reference card format.

### Next Wave (Build After Launch)

**The Hook Formula Sheet** — 1 page, high value, very shareable. Formulas for the first 3 seconds of a video or the first line of a caption. "Nobody tells you this but every high-performing post starts with one of these 7 patterns." This one will get shared.

**30 Caption Templates** — 3-4 pages. 30 fill-in-the-blank captions organized by type (educational, promotional, storytelling, engagement). The kind of thing someone saves to their desktop and uses weekly.

**Platform Comparison Guide** — 2 pages. A visual chart showing which platforms are best for which types of businesses. Answers the question "where should I actually be?" without them having to book an audit. Positions the audit as the next logical step for people who want a personalized answer.

**Hashtag Strategy Workbook** — 3 pages. How hashtags actually work in 2025, what to track, and a worksheet to build your own stack by platform.

**Engagement Rate Calculator** — This one's a spreadsheet (Google Sheets or Notion), not a PDF. You enter your follower count and your average likes/comments and it calculates your rate, benchmarks it against industry averages, and tells you if it's good or not. Dead simple but very high perceived value. Link to a pre-made copy they can duplicate.

**Story Highlight Covers Pack** — A set of 10-12 branded Instagram highlight cover icons in your color palette. Black/white/purple. Icons for things like: About, Tips, Services, Testimonials, Products, Behind the Scenes, etc. This one's quick to make in Canva and has high save/share rates because it's immediately usable.

---

## Part 4: Digital Products Roadmap

The site already has three "coming soon" products. Here's how to think about the full product suite. These go on `shop-paid.html` and eventually a dedicated product shop.

### Phase 1 — Launch With or Soon After (Under $50)

**Content Batch Day Workbook** — $17-27. A step-by-step guide + worksheets to plan and create 30 days of content in one sitting. Covers the planning session, the batch recording session, the editing and scheduling workflow. This is something every small business owner wants but doesn't know how to do.

**30 Done-For-You Caption Templates** — $17. The upgraded paid version of the free cheat sheet. More templates, more variety, organized by niche.

**The Instagram Playbook** — $37-47. Your full framework for Instagram: how to set up the profile, what to post, how often, how to use Reels vs static, how to write captions that work, how to track what's actually growing the account. This becomes the go-to resource for the person who isn't ready for a $97 audit but wants to do it themselves.

### Phase 2 — 60-90 Days Post-Launch ($47-97)

**Local Business Social Media Kit** — $57. Everything a local business needs to start on social and actually get somewhere. Platform recommendations, content calendar, 60 caption templates, profile setup guide, and a checklist to audit your own presence monthly. A bundle product, feels high-value.

**TikTok for Business: The Real Guide** — $47. Not the generic "post 3 times a day" advice. Actual strategy for a small business owner who doesn't want to dance. What types of content work, how to hook viewers, how to convert TikTok viewers to customers, how to batch TikTok content efficiently.

**The Social Media Manager Starter Pack** — $97. This one targets a different audience: people who want to freelance as a social media manager. It includes a client intake template, an audit template they can use with clients, a proposal template, a pricing guide, and a contract template. High value, different buyer, same expertise. This is a smart play because your knowledge translates directly.

### Phase 3 — 6 Months Out ($97-297)

**Complete Social Strategy System** — $147-197. A bundle of your best products. Position it as "everything you need to run your own social media professionally." The individual products have already proven themselves by this point.

**The Audit Kit (DIY Version)** — $97. The full methodology you use in your $97 service audit, packaged so someone can do it themselves. Step-by-step, platform by platform. Yes it's the same price as your service — that's intentional. Some people will buy the DIY kit, realize they don't want to do it themselves, and book the real audit anyway.

**Templates + Resources Membership** — $17-27/month. Monthly access to a growing library of templates, caption packs, new strategies as platforms evolve. Recurring revenue is the goal here. Start this once you have enough products that the library feels valuable.

---

## Part 5: Services Menu

Right now you have one service: the $97 audit. That's the right anchor. Here's how to build out from there.

**Social Media Audit — $97** (active now)
Keep it exactly where it is. One-time, no retainer, delivered in 5 business days. This is your entry-point offer.

**Strategy Session — $197-297**
A 60-75 minute Zoom call where you go deep on one specific problem. This is for people who've done the audit (or done their own research) and want to talk through implementation. Or for people who want a more personalized take before committing to the audit. Loom recordings of the session included.

**Done-For-You Content Strategy Package — $497-797**
Not done-for-you management — done-for-you strategy. You build their entire content strategy: platform decisions, content pillars, posting cadence, 90 days of content ideas, profile optimization guide. Delivered as a document and a 30-minute walkthrough call. This is the step between the audit and full management.

**Monthly Strategy Retainer — $500-1,500/month**
For business owners who want you in their corner ongoing. Not posting for them — advising them. Monthly call, content review, strategy adjustments as platforms change. This is where the real revenue comes from. Even 3 clients at $500/month is $1,500 MRR.

**VIP Strategy Day — $1,500-2,500**
A full day (or half day) intensive. You go through everything together on Zoom: audit their profiles live, build their content strategy together, record the whole thing, they leave with a complete plan and 90 days of content ideas mapped out. High-touch, high-price, high-satisfaction. Perfect for more established business owners.

---

## Part 6: Blog & SEO Content Strategy

The blog categories are already built. What's missing is actual content. Here's how to think about what to write and what order to write it in.

### How to prioritize

Write for two audiences simultaneously: potential clients searching for solutions (bring them to your site) and existing visitors who need to trust you enough to buy (keep them on your site). The first type of post is SEO-driven. The second type is positioning-driven. You need both.

### Highest Priority — Write These First

These target people who are already looking for what you sell. High commercial intent, not super competitive to rank for.

"Why your social media isn't growing (and it's not about posting more)" — This is your homepage argument turned into a long article. Goes after the "social media not working" search. Internal link to the audit.

"How to do a social media audit yourself: the complete checklist" — Yes, teach them how to do it themselves. Counterintuitively, this builds trust and some percentage of people who read it decide to just hire you. Link to your free checklist freebie. This is your highest-value SEO post.

"Social media strategy for small businesses: what actually works in 2025" — A comprehensive guide. Pillars, platforms, posting frequency, content types. This targets the "social media strategy" keyword and positions you as the expert.

"How to choose the right social media platform for your business" — Evergreen, always searched, solves a real problem. Platform comparison that connects to your guide freebie.

"Instagram bio formula: how to write a bio that gets people to follow and buy" — High search volume, connects directly to your bio optimization freebie.

### Local SEO Posts (Las Vegas Angle)

"Social media strategy for Las Vegas small businesses" — Targets local search. Specific to the Las Vegas market, mentions local industries (hospitality, real estate, food and beverage, entertainment), includes local stats. This is how you rank for "social media help Las Vegas."

"How Las Vegas restaurants can use TikTok to fill tables" — A niche but very real audience. Same format for "Las Vegas boutiques," "Las Vegas real estate," "Las Vegas service businesses." Write 3-4 of these.

### Platform-Specific Posts (Map to Your Blog Categories)

One strong post per category to start:

Instagram: "Instagram Reels strategy for small businesses: what to post when you have no idea what to post"

TikTok: "TikTok for business owners who don't want to dance: what actually works"

Growth: "How to grow from 0 to 1,000 followers without spending money on ads"

Content: "How to batch a full month of content in one afternoon"

Strategy: "Content pillars explained: how to stop running out of ideas"

Local: "Social media for local businesses: why what works for big brands won't work for you"

### What You Have vs. What You Need

Currently built: 7 category pages with no posts, a blog template, a newsletter section on the blog page.

What you need to write before launch: 3-5 posts minimum (the audit guide, the "why it's not growing" piece, and the Instagram bio post would be a solid starting lineup).

What the long-term plan looks like: 2 posts per month. One SEO-targeted, one positioning piece. At the end of 12 months you have 24 articles, solid domain authority, and organic traffic that compounds.

---

## Part 7: Canva Asset Production List

Everything to make in Canva, in priority order.

### Launch-Critical (Make These First)

**OG / Link Preview Image** — 1200×630px. One version for the homepage, one generic. Dark background, your logo, one headline. This shows up every time someone shares your link. Non-negotiable.

**Favicon** — 512×512px (Canva exports this, you then resize to 32×32 and 180×180). Simple logo mark on a black or purple background.

**4 Freebie PDFs** — (Audit Checklist, Content Pillars Workbook, Content Calendar, Bio Cheat Sheet). Each one multi-page, fully branded. Use Canva's A4 document templates. Black/white/purple palette, Bricolage Grotesque or Plus Jakarta Sans for headlines.

**Product Mockup Images** — For each freebie, create a "flat lay" style mockup showing the PDF on a surface or in a device frame. Canva has free mockup frames. These go on the shop pages.

### Post-Launch (Make These in Month 1)

**Blog Cover Images** — 1200×630px or 16:9 for each blog post. Consistent template: dark background, article title in large type, your logo small in the corner. Build one template in Canva and duplicate for every post.

**Social Media Templates for Your Own Marketing** — At least 5 reusable post templates: a quote template, a tips template, a testimonial template, a "new post" announcement template, and a freebie promotion template. These make your own social presence consistent and faster to produce.

**Instagram Story Templates** — 1080×1920px. 3-4 templates: one for promoting freebies, one for sharing tips, one for CTA stories that drive people to your link in bio.

**Story Highlight Covers** — 10-12 icons on circular branded backgrounds. Services, Freebies, Testimonials, Tips, About, Blog, Results, etc.

**Link In Bio Page Graphics** — The `links.html` page is already built. Add a profile photo and potentially a banner graphic at the top.

**Email Header Image** — For your email marketing platform. Branded banner with your logo that sits at the top of every email you send.

### As Products Are Built

For each new digital product: a cover page for the PDF, a product mockup image for the shop, and a promotional graphic for social. That's the minimum 3-image set per product.

---

## Summary: The Order of Operations

1. Fix the technical blockers (form backend, payment, email platform, OG image, favicon, social links)
2. Make the 4 freebie PDFs in Canva and connect them to your email platform
3. Write 3 blog posts
4. Go live
5. Build out the Canva social templates and start posting consistently
6. Add products one at a time, starting with the Content Batch Day Workbook and the Instagram Playbook
7. Introduce the Strategy Session service once you have 2-3 audits under your belt post-launch
8. Keep publishing 2 blog posts a month without fail

The site is in good shape. The bones are all there. What's left is filling in the real content, connecting the technical pieces, and making the downloadable assets actually exist. Everything else — the product roadmap, the services expansion, the SEO library — comes after you go live and start learning what your actual audience responds to.
