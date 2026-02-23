/**
 * LANE SOCIAL CO — Site Components
 * Unified Nav + Footer injector for all 33 pages.
 * Update this one file to update every page simultaneously.
 *
 * Usage: Each page needs:
 *   <div id="site-nav"></div>     ← in <body>, before page content
 *   <div id="site-footer"></div>  ← at end of <body>
 *   <script src="assets/site-components.js"></script>
 */
(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────
     1. ACTIVE PAGE DETECTION
     ───────────────────────────────────────────────────────── */
  var path = window.location.pathname;
  var page = path.split('/').pop() || 'index.html';

  function isActive(href) {
    if (href === 'index.html' && (page === '' || page === 'index.html')) return true;
    if (href !== 'index.html' && page.indexOf(href.replace('.html', '')) !== -1) return true;
    // Blog pages: mark Blog active for all blog-* pages
    if (href === 'blog.html' && page.indexOf('blog') === 0) return true;
    return false;
  }

  function navLink(href, label, cls) {
    var active = isActive(href) ? ' class="active' + (cls ? ' ' + cls : '') + '" aria-current="page"'
                                : (cls ? ' class="' + cls + '"' : '');
    return '<li><a href="' + href + '"' + active + '>' + label + '</a></li>';
  }

  /* ─────────────────────────────────────────────────────────
     2. SVG SOCIAL ICONS
     ───────────────────────────────────────────────────────── */
  var SVG = {
    instagram: '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
    tiktok:    '<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.41a8.16 8.16 0 004.77 1.52V7.48a4.85 4.85 0 01-1-.79z"/></svg>',
    linkedin:  '<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    threads:   '<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V12c0-3.515.85-6.365 2.496-8.42C5.845 1.275 8.6.024 12.179 0h.014c2.746.022 5.143.807 6.925 2.267 1.801 1.476 2.884 3.58 3.197 6.252l-3.783.402c-.54-4.066-2.956-6.035-6.364-6.025-2.459.017-4.326.845-5.553 2.46C5.38 6.94 4.853 9.135 4.853 12s.527 5.061 1.763 6.645c1.227 1.616 3.094 2.443 5.553 2.46 2.459 0 4.131-.691 4.98-2.054.565-.898.87-2.134.87-3.562v-.527h-5.847v-3.386h9.329v3.578c0 2.34-.637 4.285-1.84 5.707C18.37 22.972 15.634 24 12.186 24z"/></svg>'
  };

  function socialLink(href, platform, label) {
    return '<a href="' + href + '" target="_blank" rel="noopener noreferrer" class="footer-bottom-social" aria-label="' + label + '">' + SVG[platform] + '</a>';
  }

  /* ─────────────────────────────────────────────────────────
     3. NAV HTML
     Logo: both light + dark imgs, CSS toggles via prefers-color-scheme.
     CTA: points to shop.html (the main shop page).
     ───────────────────────────────────────────────────────── */
  var NAV_HTML = [
    '<nav id="mainNav">',
    '  <a href="index.html" class="logo" aria-label="Lane Social Co — Home">',
    '    <img src="assets/logo-light.png" alt="Lane Social Co" class="logo-img logo-img-light" height="44"',
    '         onerror="this.style.display=\'none\'">',
    '    <img src="assets/logo-dark.png"  alt="Lane Social Co" class="logo-img logo-img-dark"  height="44"',
    '         onerror="this.style.display=\'none\'">',
    '    <span class="logo-text-fallback" style="display:none;align-items:center;gap:10px;">',
    '      <span style="color:var(--purple);font-size:22px;line-height:1;">✳</span>',
    '      <span style="width:2px;height:22px;background:var(--purple);opacity:0.4;display:block;"></span>',
    '      <span style="font-size:16px;font-weight:800;color:var(--text);line-height:1.2;">Lane<br>Social Co</span>',
    '    </span>',
    '  </a>',
    '  <ul class="nav-links" id="navLinks" role="list">',
    navLink('index.html',   'Home'),
    navLink('services.html','Audit'),
    navLink('shop.html',    'Shop'),
    navLink('blog.html',    'Blog'),
    navLink('results.html', 'Results'),
    navLink('about.html',   'About'),
    navLink('shop.html',    'Shop &amp; Resources', 'nav-cta'),
    '  </ul>',
    '  <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks">',
    '    <span aria-hidden="true"></span>',
    '    <span aria-hidden="true"></span>',
    '    <span aria-hidden="true"></span>',
    '  </button>',
    '</nav>'
  ].join('\n');

  /* ─────────────────────────────────────────────────────────
     4. FOOTER HTML
     Brand column: logo + tagline + location + email capture form.
     Social icons: SVGs moved to the bottom bar.
     Bottom bar: copyright · [IG TT LI TH] + Privacy · Terms · Contact.
     ───────────────────────────────────────────────────────── */
  var FOOTER_HTML = [
    '<footer>',

    '  <!-- Trust strip -->',
    '  <div class="footer-trust" aria-label="Trust indicators">',
    '    <div class="footer-trust-item"><span class="icon" aria-hidden="true">✅</span> No subscription required</div>',
    '    <div class="footer-trust-item"><span class="icon" aria-hidden="true">✅</span> 7-business-day delivery</div>',
    '    <div class="footer-trust-item"><span class="icon" aria-hidden="true">✅</span> 100% actionable report</div>',
    '    <div class="footer-trust-item"><span class="icon" aria-hidden="true">✅</span> Available Worldwide</div>',
    '  </div>',

    '  <!-- Main grid -->',
    '  <div class="footer-inner">',

    '    <!-- Brand + email capture -->',
    '    <div class="footer-brand">',
    '      <a href="index.html" class="footer-logo" aria-label="Lane Social Co">',
    '        <img src="assets/logo-light.png" alt="Lane Social Co" class="footer-logo-img footer-logo-light" height="56"',
    '             onerror="this.style.display=\'none\'">',
    '        <img src="assets/logo-dark.png"  alt="Lane Social Co" class="footer-logo-img footer-logo-dark"  height="56"',
    '             onerror="this.style.display=\'none\'">',
    '      </a>',
    '      <p class="footer-tagline">Social media strategy and audits for businesses tired of posting into the void.</p>',
    '      <p class="footer-location">Las Vegas, NV &amp; everywhere else</p>',

    '      <!-- Email capture (Netlify form) -->',
    '      <form class="footer-email-form" name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field">',
    '        <input type="hidden" name="form-name" value="newsletter">',
    '        <input type="text"  name="bot-field" style="display:none" aria-hidden="true" tabindex="-1" autocomplete="off">',
    '        <label class="footer-email-label" for="footer-email-input">Get social media tips in your inbox</label>',
    '        <div class="footer-email-row">',
    '          <input type="email" id="footer-email-input" name="email" placeholder="your@email.com" required',
    '                 class="footer-email-input" aria-label="Email address">',
    '          <button type="submit" class="footer-email-btn">Subscribe</button>',
    '        </div>',
    '        <p class="footer-email-fine">No spam. Unsubscribe anytime.</p>',
    '      </form>',
    '    </div>',

    '    <!-- Products -->',
    '    <div class="footer-col">',
    '      <h4>Products</h4>',
    '      <ul role="list">',
    '        <li><a href="product-audit.html">Social Media Audit <span class="price-tag">$97</span></a></li>',
    '        <li><a href="product-strategy.html">Social Media Strategy <span class="price-tag">$97</span></a></li>',
    '        <li><a href="product-bundle.html">Audit + Strategy Bundle <span class="price-tag">$150</span></a></li>',
    '        <li><a href="shop.html">Shop all &rarr;</a></li>',
    '      </ul>',
    '    </div>',

    '    <!-- Free Resources -->',
    '    <div class="footer-col">',
    '      <h4>Free Resources</h4>',
    '      <ul role="list">',
    '        <li><a href="free-audit.html">Interactive Audit Tool</a></li>',
    '        <li><a href="freebie-audit-checklist.html">Audit Checklist</a></li>',
    '        <li><a href="freebie-content-pillars.html">Content Pillars</a></li>',
    '        <li><a href="freebie-content-calendar.html">Content Calendar</a></li>',
    '        <li><a href="freebie-bio-optimization.html">Bio Optimization</a></li>',
    '        <li><a href="shop-free.html">All free resources &rarr;</a></li>',
    '      </ul>',
    '    </div>',

    '    <!-- Company -->',
    '    <div class="footer-col">',
    '      <h4>Company</h4>',
    '      <ul role="list">',
    '        <li><a href="about.html">About</a></li>',
    '        <li><a href="results.html">Results</a></li>',
    '        <li><a href="blog.html">Blog</a></li>',
    '        <li><a href="contact.html">Contact</a></li>',
    '        <li><a href="services.html">Services</a></li>',
    '      </ul>',
    '    </div>',

    '    <!-- Legal -->',
    '    <div class="footer-col">',
    '      <h4>Legal</h4>',
    '      <ul role="list">',
    '        <li><a href="privacy-policy.html">Privacy Policy</a></li>',
    '        <li><a href="terms.html">Terms of Service</a></li>',
    '        <li><a href="sitemap.html">Site Map</a></li>',
    '      </ul>',
    '    </div>',

    '  </div>',

    '  <!-- Bottom bar: copyright | social icons + legal links -->',
    '  <div class="footer-bottom">',
    '    <div class="footer-copy">&copy; 2026 Lane Social Co &middot; Las Vegas, NV &middot; All rights reserved</div>',
    '    <div class="footer-bottom-right">',
    '      <div class="footer-bottom-socials">',
    socialLink('https://www.instagram.com/lanesocialco',           'instagram', 'Instagram'),
    socialLink('https://www.tiktok.com/@lanesocialco',             'tiktok',    'TikTok'),
    socialLink('https://www.linkedin.com/company/lanesocialco',    'linkedin',  'LinkedIn'),
    socialLink('https://www.threads.net/@lanesocialco',            'threads',   'Threads'),
    '      </div>',
    '      <div class="footer-bottom-links">',
    '        <a href="privacy-policy.html">Privacy</a>',
    '        <a href="terms.html">Terms</a>',
    '        <a href="contact.html">Contact</a>',
    '      </div>',
    '    </div>',
    '  </div>',

    '  <!-- Centered bottom link row -->',
    '  <div class="footer-bottom-linkrow">',
    '    <a href="https://www.instagram.com/lanesocialco" target="_blank" rel="noopener noreferrer">Instagram</a>',
    '    <span aria-hidden="true">&middot;</span>',
    '    <a href="https://www.tiktok.com/@lanesocialco" target="_blank" rel="noopener noreferrer">TikTok</a>',
    '    <span aria-hidden="true">&middot;</span>',
    '    <a href="https://www.linkedin.com/company/lanesocialco" target="_blank" rel="noopener noreferrer">LinkedIn</a>',
    '    <span aria-hidden="true">&middot;</span>',
    '    <a href="https://www.threads.net/@lanesocialco" target="_blank" rel="noopener noreferrer">Threads</a>',
    '    <span aria-hidden="true">&middot;</span>',
    '    <a href="privacy-policy.html">Privacy</a>',
    '    <span aria-hidden="true">&middot;</span>',
    '    <a href="terms.html">Terms</a>',
    '    <span aria-hidden="true">&middot;</span>',
    '    <a href="contact.html">Contact</a>',
    '  </div>',

    '</footer>'
  ].join('\n');

  /* ─────────────────────────────────────────────────────────
     5. INJECT NAV + FOOTER
     ───────────────────────────────────────────────────────── */
  function inject() {
    var navEl    = document.getElementById('site-nav');
    var footerEl = document.getElementById('site-footer');
    if (navEl)    navEl.innerHTML    = NAV_HTML;
    if (footerEl) footerEl.innerHTML = FOOTER_HTML;
  }

  /* ─────────────────────────────────────────────────────────
     6. NAV INTERACTIONS
     ───────────────────────────────────────────────────────── */
  function initNav() {
    var nav    = document.getElementById('mainNav');
    var toggle = document.getElementById('navToggle');
    var links  = document.getElementById('navLinks');
    if (!nav || !toggle || !links) return;

    /* Mobile toggle */
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Close on link click */
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    /* Scroll shadow */
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ─────────────────────────────────────────────────────────
     7. SCROLL REVEAL
     ───────────────────────────────────────────────────────── */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { obs.observe(el); });
  }

  /* ─────────────────────────────────────────────────────────
     8. MOUSE GLOW
     ───────────────────────────────────────────────────────── */
  function initGlow() {
    var glow = document.getElementById('mouseGlow');
    if (!glow) {
      glow = document.createElement('div');
      glow.id = 'mouseGlow';
      glow.className = 'mouse-glow';
      glow.setAttribute('aria-hidden', 'true');
      document.body.appendChild(glow);
    }
    var x = 0, y = 0, raf = null;
    document.addEventListener('mousemove', function (e) {
      x = e.clientX; y = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(function () {
          glow.style.left = x + 'px';
          glow.style.top  = y + 'px';
          raf = null;
        });
      }
    }, { passive: true });
  }

  /* ─────────────────────────────────────────────────────────
     9. BOOT
     ───────────────────────────────────────────────────────── */
  function boot() {
    inject();
    initNav();
    initReveal();
    initGlow();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
