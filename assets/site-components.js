/**
 * NATE LANE — Site Components
 * Unified Nav + Footer injector for all pages.
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
    substack:  '<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>'
  };

  function socialLink(href, platform, label) {
    return '<a href="' + href + '" target="_blank" rel="noopener noreferrer" class="footer-bottom-social" aria-label="' + label + '">' + SVG[platform] + '</a>';
  }

  function socialTextLink(href, label) {
    return '<a href="' + href + '" target="_blank" rel="noopener noreferrer" class="footer-social-text">' + label + '</a>';
  }

  /* ─────────────────────────────────────────────────────────
     3. NAV HTML
     Logo: both light + dark imgs, CSS toggles via prefers-color-scheme.
     Shop: dropdown with Mini Audit, Strategy Call, Free Tools.
     CTA: purple button → product-consultation.html (the upsell).
     ───────────────────────────────────────────────────────── */
  var isShopActive = page.indexOf('shop') !== -1 || page.indexOf('product') !== -1 || page === 'services.html';
  var shopDropdownClass = isShopActive ? 'nav-has-dropdown active' : 'nav-has-dropdown';

  var NAV_HTML = [
    '<nav id="mainNav">',
    '  <a href="index.html" class="logo" aria-label="Nate Lane — Home">',
    '    <img src="assets/logo-light.png" alt="Nate Lane" class="logo-img logo-img-light" height="44"',
    '         onerror="this.style.display=\'none\'">',
    '    <img src="assets/logo-dark.png"  alt="Nate Lane" class="logo-img logo-img-dark"  height="44"',
    '         onerror="this.style.display=\'none\'">',
    '    <span class="logo-text-fallback" style="display:none;align-items:center;gap:10px;">',
    '      <span style="color:var(--purple);font-size:22px;line-height:1;">✳</span>',
    '      <span style="width:2px;height:22px;background:var(--purple);opacity:0.4;display:block;"></span>',
    '      <span style="font-size:16px;font-weight:800;color:var(--text);line-height:1.2;">Nate<br>Lane</span>',
    '    </span>',
    '  </a>',
    '  <ul class="nav-links" id="navLinks" role="list">',
    navLink('index.html', 'Home'),
    '    <li class="' + shopDropdownClass + '">',
    '      <a href="shop.html" class="nav-dropdown-trigger" aria-haspopup="true" aria-expanded="false">',
    '        Work With Me <span class="dropdown-caret" aria-hidden="true">&#9662;</span>',
    '      </a>',
    '      <ul class="nav-dropdown-menu" role="list">',
    '        <li><a href="product-mini-audit.html">Mini Audit <span class="nav-price-tag">$49</span></a></li>',
    '        <li><a href="product-audit.html">Social Audit <span class="nav-price-tag">$97</span></a></li>',
    '        <li><a href="product-consultation.html">Strategy Call <span class="nav-price-tag">$129</span></a></li>',
    '        <li><a href="product-strategy.html">Strategy Plan <span class="nav-price-tag">$149</span></a></li>',
    '        <li class="dropdown-divider" role="separator"></li>',
    '        <li><a href="shop-free.html">Free Resources</a></li>',
    '      </ul>',
    '    </li>',
    navLink('blog.html',           'Blog'),
    navLink('about.html',          'About'),
    '    <li><a href="product-consultation.html" class="nav-cta">Book a Call</a></li>',
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
     Bottom bar: copyright · [IG TT LI Substack] + Privacy · Terms · Contact.
     ───────────────────────────────────────────────────────── */
  var FOOTER_HTML = [
    '<footer>',

    '  <!-- Main grid -->',
    '  <div class="footer-inner">',

    '    <!-- Brand + email capture -->',
    '    <div class="footer-brand">',
    '      <a href="index.html" class="footer-logo" aria-label="Nate Lane">',
    '        <img src="assets/logo-light.png" alt="Nate Lane" class="footer-logo-img footer-logo-light" height="80"',
    '             onerror="this.style.display=\'none\'">',
    '        <img src="assets/logo-dark.png"  alt="Nate Lane" class="footer-logo-img footer-logo-dark"  height="80"',
    '             onerror="this.style.display=\'none\'">',
    '      </a>',

    '      <!-- Email capture (Kit newsletter) -->',
    '      <form class="footer-email-form" id="kit-footer-form">',
    '        <label class="footer-email-label" for="footer-email-input">Get entertainment marketing insights in your inbox</label>',
    '        <div class="footer-email-row">',
    '          <input type="email" id="footer-email-input" placeholder="your@email.com" required',
    '                 class="footer-email-input" aria-label="Email address">',
    '          <button type="submit" class="footer-email-btn" id="kit-footer-btn">Subscribe</button>',
    '        </div>',
    '        <p class="footer-email-fine">No spam. Unsubscribe anytime.</p>',
    '      </form>',
    '    </div>',

    '    <!-- Work With Me -->',
    '    <div class="footer-col">',
    '      <h4>Work With Me</h4>',
    '      <ul role="list">',
    '        <li><a href="product-mini-audit.html">Mini Audit <span class="price-tag">$49</span></a></li>',
    '        <li><a href="product-audit.html">Social Audit <span class="price-tag">$97</span></a></li>',
    '        <li><a href="product-consultation.html">Strategy Call <span class="price-tag">$129</span></a></li>',
    '        <li><a href="product-strategy.html">Strategy Plan <span class="price-tag">$149</span></a></li>',
    '      </ul>',
    '    </div>',

    '    <!-- Free Resources -->',
    '    <div class="footer-col">',
    '      <h4>Free Resources</h4>',
    '      <ul role="list">',
    '        <li><a href="shop-free.html">Free tools &amp; downloads</a></li>',
    '        <li><a href="https://theculturemarquee.substack.com" target="_blank" rel="noopener noreferrer">The Culture Marquee (Substack)</a></li>',
    '        <li><a href="blog.html">Blog &rarr;</a></li>',
    '      </ul>',
    '    </div>',

    '    <!-- Company -->',
    '    <div class="footer-col">',
    '      <h4>Company</h4>',
    '      <ul role="list">',
    '        <li><a href="about.html">About Nate</a></li>',
    '        <li><a href="blog.html">Blog</a></li>',
    '        <li><a href="contact.html">Contact</a></li>',
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

    '  <!-- Bottom bar: copyright | social text links (centered) -->',
    '  <div class="footer-bottom">',
    '    <div class="footer-copy">&copy; 2026 Nate Lane &middot; All rights reserved</div>',
    '    <div class="footer-bottom-center">',
    socialTextLink('https://www.tiktok.com/@itsnathanlane',              'TikTok'),
    '      <span aria-hidden="true">&middot;</span>',
    socialTextLink('https://www.instagram.com/itsnathanlane',            'Instagram'),
    '      <span aria-hidden="true">&middot;</span>',
    socialTextLink('https://www.linkedin.com/in/itsnathanlane',          'LinkedIn'),
    '      <span aria-hidden="true">&middot;</span>',
    socialTextLink('https://theculturemarquee.substack.com',             'Substack'),
    '    </div>',
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

    /* Shop dropdown — mobile: tap trigger toggles; desktop: CSS hover handles it */
    links.querySelectorAll('.nav-has-dropdown').forEach(function (item) {
      var trigger = item.querySelector('.nav-dropdown-trigger');
      if (!trigger) return;
      trigger.addEventListener('click', function (e) {
        if (window.innerWidth <= 860) {
          e.preventDefault();
          var isOpen = item.classList.toggle('open');
          trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
      });
    });

    /* Close dropdown when clicking outside */
    document.addEventListener('click', function (e) {
      links.querySelectorAll('.nav-has-dropdown.open').forEach(function (item) {
        if (!item.contains(e.target)) {
          item.classList.remove('open');
          var t = item.querySelector('.nav-dropdown-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });
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
     9. FOOTER KIT FORM
     ───────────────────────────────────────────────────────── */
  function initFooterKit() {
    var form  = document.getElementById('kit-footer-form');
    var input = document.getElementById('footer-email-input');
    var btn   = document.getElementById('kit-footer-btn');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = (input.value || '').trim();
      if (!email) return;
      btn.textContent = 'Subscribing…';
      btn.disabled = true;
      fetch('https://app.kit.com/forms/3235235af8/subscriptions', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'email_address=' + encodeURIComponent(email)
      }).then(function () {
        btn.textContent = 'Done ✓';
        input.value = '';
      }).catch(function () {
        btn.textContent = 'Done ✓';
        input.value = '';
      });
    });
  }

  /* ─────────────────────────────────────────────────────────
     10. BOOT
     ───────────────────────────────────────────────────────── */
  function boot() {
    inject();
    initNav();
    initReveal();
    initGlow();
    initFooterKit();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
