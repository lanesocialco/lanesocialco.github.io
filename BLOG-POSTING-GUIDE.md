# Blog Posting Guide for Lane Social Co

A step-by-step guide for Nate to publish new blog posts. This is designed to be simple and non-technical.

---

## Quick Overview

Publishing a blog post takes about 20-30 minutes if you have your content ready. Here's the process:

1. Duplicate the blog template file
2. Write your content (or use the provided framework)
3. Fill in all the editable sections
4. Add a card to blog.html
5. Upload and test

---

## Step-by-Step: How to Publish a New Blog Post

### Step 1: Duplicate the Template File

1. Open the `blog-post-template.html` file
2. Save it as a new file with this naming format: `blog-[post-slug].html`
   - Example: `blog-instagram-growth-tips.html`
   - Use hyphens between words, no spaces
   - Slugs should be short and SEO-friendly

3. Open your new file in a text editor (VS Code, Sublime, etc.)

### Step 2: Fill in the Head Section (SEO & Metadata)

At the very top of the file, you'll see comments marked with ✏️ EDIT. Start here:

1. **Update the title tag:**
   ```html
   <title>Your Post Title — Lane Social Co</title>
   ```
   - Keep it under 60 characters
   - Include your main keyword
   - Always end with " — Lane Social Co"

2. **Update the meta description:**
   ```html
   <meta name="description" content="Write a 155-160 character description here.">
   ```
   - This shows up in Google search results
   - Include your target keyword naturally
   - Make it compelling enough to click

3. **Update the canonical URL:**
   ```html
   <link rel="canonical" href="https://lanesocialco.com/blog-[post-slug].html">
   ```
   - Replace `[post-slug]` with your filename (without .html)

4. **Update Open Graph tags** (for social sharing):
   ```html
   <meta property="og:image" content="https://lanesocialco.com/assets/images/[post-slug]-og.jpg">
   ```
   - You'll need a 1200x630px image for this
   - Save it to: `/assets/images/[post-slug]-og.jpg`

### Step 3: Update Category Information

Find the section in the article hero that says `badge-strategy`:

1. **Change the category badge text:**
   ```html
   <span class="category-badge badge-strategy">STRATEGY</span>
   ```
   - Replace "STRATEGY" with your category
   - Options: STRATEGY, INSTAGRAM, TIKTOK, CONTENT, GROWTH, LOCAL, DIGITAL PRODUCTS

2. **Change the badge class to match:**
   - `badge-strategy` (purple)
   - `badge-instagram` (coral)
   - `badge-tiktok` (teal)
   - `badge-content` (amber)
   - `badge-growth` (green)
   - `badge-local` (blue)
   - `badge-products` (orange)

3. **Update the date and read time:**
   ```html
   <span>Jan 15, 2025</span>
   <span>8 min read</span>
   ```

### Step 4: Write Your Article Content

1. **Replace the h1 title** with your actual post title
   - Make it catchy and keyword-rich
   - 50-70 characters is ideal

2. **Write your intro paragraph** (marked as ✏️ ADD)
   - Hook the reader in the first 2-3 sentences
   - Why should they read this?
   - What will they learn?

3. **Write 4-5 main sections**
   - Each section should have an h2 heading
   - Follow with 150-250 words of content per section
   - Use lists to break up text
   - Include examples or frameworks

4. **Add the pullquote** (optional but recommended)
   - A memorable sentence that summarizes a key point
   - Breaks up the text visually
   - Should be around 20 words

5. **Add mid-article CTA** (optional)
   - Around the halfway point
   - Offer something related: free download, booking link, product
   - Example: "Get the Content Pillars Framework"

6. **Write the FAQ section**
   - 4-5 common questions from your audience
   - Answer each in 1-3 sentences
   - These drive SEO and help readers

7. **Write the conclusion**
   - Summarize the main takeaways
   - What's the next step?
   - 2-3 sentences max

### Step 5: Update Related Posts Section

At the bottom, update the "More Posts" grid:

```html
<a href="blog-category-strategy.html" class="post-card">
  <h4>Related Post Title</h4>
  <p>Date • Read time</p>
</a>
```

- Link to 2-3 related posts
- Include a link back to blog.html
- Include a CTA link (audit booking, product, etc.)

### Step 6: Update the JSON-LD Schema

At the very bottom, find the `<script type="application/ld+json">` section:

```json
{
  "headline": "Your Post Title",
  "description": "Same as meta description",
  "image": "https://lanesocialco.com/assets/images/[slug]-og.jpg",
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-15"
}
```

- This helps Google understand your post
- Update all fields marked with ✏️ EDIT
- Use format: YYYY-MM-DD for dates

### Step 7: Add Your Post to blog.html

1. Open `blog.html`
2. Find the `.article-grid` section (around line 280)
3. Copy one of the existing article cards:

```html
<a href="blog-category-instagram.html" class="article-card reveal">
  <span class="category-badge badge-instagram">INSTAGRAM</span>
  <h3>The Instagram Algorithm in 2025: What Actually Matters</h3>
  <p class="excerpt">Everyone has opinions about the algorithm. Most are wrong. Here's what Meta engineers actually prioritize and what your account should focus on instead of chasing vanity metrics.</p>
  <div class="meta">
    <span class="author">Lane</span>
    <span class="date">Jan 8, 2025</span>
    <span class="read-time">6 min</span>
  </div>
</a>
```

4. Update for your post:
   - Change `href` to your new blog file
   - Update the category badge and class
   - Update h3 with your title
   - Update excerpt (2-3 lines, compelling summary)
   - Update date
   - Update read time

5. Add it to the top of the grid (most recent first)

---

## SEO Tips: Writing Great Blog Posts

### Title & Description
- Include your target keyword in the title
- Write descriptions people actually want to click
- "Learn X, Y, Z" formulas work well
- "Complete guide to X" ranks well
- Don't be clickbaity, be specific

### Content Structure
- Headings should have keywords
- First 100 words matter for SEO
- Use short sentences and paragraphs
- Break up text with lists and visuals
- Aim for 1,000-1,500 words minimum

### Keywords
- Use your target keyword 2-3 times in the post
- Use variations: "social media strategy," "strategy for social," etc.
- Don't stuff keywords, write naturally
- Internal links to other posts help SEO

### FAQ Section
- FAQs get featured snippets on Google
- Answer questions people actually ask
- One question per accordion/section
- Answer directly in the first sentence

---

## Category Pages

If you want to turn your post into a category page (like we did for Strategy, Instagram, TikTok, etc.):

1. Duplicate one of the existing category files: `blog-category-strategy.html`
2. Rename it: `blog-category-[category-name].html`
3. Update the hero color and style
4. Include your article content inline
5. Update footer links to related posts

---

## Checklist Before Publishing

Before you upload, check all of these:

- [ ] Title is updated and SEO-friendly
- [ ] Meta description is 155-160 characters
- [ ] Canonical URL is correct
- [ ] Category badge text and class match
- [ ] Date is correct
- [ ] Hero title (h1) is compelling
- [ ] Intro paragraph hooks the reader
- [ ] Content is 1,000+ words
- [ ] At least 4-5 sections with h2 headings
- [ ] FAQ section has 4-5 good questions
- [ ] Internal links to other posts
- [ ] Read time estimate is accurate
- [ ] Related posts at bottom are relevant
- [ ] JSON-LD schema is updated
- [ ] Post is added to blog.html
- [ ] Tested in browser (desktop and mobile)

---

## Estimating Read Time

General rule: Readers read ~200 words per minute.

- 1,000 words = 5 min
- 1,500 words = 7-8 min
- 2,000 words = 10 min

Add 1-2 minutes if there are lots of lists or visuals.

---

## Publishing Frequency

Consistency matters more than frequency.

- 1 post per week is great (52 posts/year)
- 1 post per month is okay
- 1 post per day will burn you out

Pick a schedule you can sustain. Write a batch of posts at once, then schedule them out.

---

## After Publishing

1. **Submit to Google Search Console** so Google indexes it faster
2. **Share on social media** with a link to the full post
3. **Email list** - send to subscribers
4. **Monitor analytics** - see if it ranks and gets traffic
5. **Update based on feedback** - did readers have questions?

---

## Quick Template Checklist

When you duplicate `blog-post-template.html`, it will have comments like:

- `<!-- ✏️ EDIT: Change this -->` - Replace the placeholder
- `<!-- ✏️ ADD: Write your content here -->` - Add your own content
- `<!-- ✏️ OPTIONAL: -->` - You can skip this if you want

Search for "✏️" to find every editable section.

---

## Questions?

If something doesn't make sense, check an existing post for the pattern:
- Strategy: `blog-category-strategy.html`
- Instagram: `blog-category-instagram.html`
- TikTok: `blog-category-tiktok.html`

All follow the same structure. Copy the pattern and adapt it for your new post.

---

**Ready to write?** Open `blog-post-template.html` and start with the title. The rest will flow.
