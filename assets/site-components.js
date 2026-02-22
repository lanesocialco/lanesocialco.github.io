/**
 * LANE SOCIAL CO — Site Components
 * Unified Nav + Footer injector for all 32 pages.
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
     2. NAV HTML
     ───────────────────────────────────────────────────────── */
  var NAV_HTML = [
    '<nav id="mainNav">',
    '  <a href="index.html" class="logo" aria-label="Lane Social Co — Home">',
    '    <img src="assets/logo-dark.png" alt="Lane Social Co" class="logo-img logo-img-dark" height="44"',
    '         onerror="this.style.display=\'none\';this.parentNode.querySelector(\'.logo-text-fallback\').style.display=\'flex\'">',
    '    <span class="logo-text-fallback" style="display:none;align-items:center;gap:10px;">',
    '      <span style="color:var(--purple);font-size:22px;line-height:1;">✳</span>',
    '      <span style="width:2px;height:22px;background:var(--purple);opacity:0.4;display:block;"></span>',
    '      <span style="font-size:16px;font-weight:800;color:var(--text);line-height:1.2;">Lane<br>Social Co</span>',
    '    </span>',
    '  </a>',
    '  <ul class="nav-links" id="navLinks" role="list">',
    navLink('index.html',       'Home'),
    navLink('services.html',    'Audit'),
    navLink('shop.html',        'Shop'),
    navLink('blog.html',        'Blog'),
    navLink('results.html',     'Results'),
    navLink('about.html',       'About'),
    navLink('product-audit.html', 'Get your audit &rarr;', 'nav-cta'),
    '  </ul>',
    '  <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks">',
    '    <span aria-hidden="true"></span>',
    '    <span aria-hidden="true"></span>',
    '    <span aria-hidden="true"></span>',
    '  </button>',
    '</nav>'
  ].join('\n');

  /* ─────────────────────────────────────────────────────────
     3. FOOTER HTML
     ───────────────────────────────────────────────────────── */
  var FOOTER_HTML = [
    '<footer>',
    '  <!-- Trust strip -->',
    '  <div class="footer-trust" aria-label="Trust indicators">',
    '    <div class="footer-trust-item"><span class="icon" aria-hidden="true">&#10003;</span> No subscription required</div>',
    '    <div class="footer-trust-item"><span class="icon" aria-hidden="true">&#10003;</span> 7-business-day delivery</div>',
    '    <div class="footer-trust-item"><span class="icon" aria-hidden="true">&#10003;</span> 100% actionable report</div>',
    '    <div class="footer-trust-item"><span class="icon" aria-hidden="true">&#10003;</span> Las Vegas &amp; remote clients</div>',
    '  </div>',
    '  <!-- Main grid -->',
    '  <div class="footer-inner">',
    '    <div class="footer-brand">',
    '      <a href="index.html" class="footer-logo" aria-label="Lane Social Co">',
    '        <img src="assets/logo-dark.png" alt="Lane Social Co" class="footer-logo-img footer-logo-dark" height="56"',
    '             onerror="this.style.display=\'none\'">',
    '      </a>',
    '      <p class="footer-tagline">Social media strategy and audits for businesses tired of posting into the void.</p>',
    '      <p class="footer-location">Las Vegas, NV &amp; everywhere else</p>',
    '      <div class="footer-social-row">',
    '        <a href="https://www.instagram.com/lanesocialco" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Instagram">IG</a>',
    '        <a href="https://www.tiktok.com/@lanesocialco" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="TikTok">TT</a>',
    '        <a href="https://www.linkedin.com/company/lanesocialco" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="LinkedIn">LI</a>',
    '        <a href="https://www.threads.net/@lanesocialco" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Threads">TH</a>',
    '      </div>',
    '    </div>',
    '    <div class="footer-col">',
    '      <h4>Products</h4>',
    '      <ul role="list">',
    '        <li><a href="product-audit.html">Social Media Audit <span class="price-tag">$97</span></a></li>',
    '        <li><a href="product-strategy.html">Social Media Strategy <span class="price-tag">$97</span></a></li>',
    '        <li><a href="product-bundle.html">Audit + Strategy Bundle <span class="price-tag">$150</span></a></li>',
    '        <li><a href="shop.html">Shop all &rarr;</a></li>',
    '      </ul>',
    '    </div>',
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
    '    <div class="footer-col">',
    '      <h4>Legal</h4>',
    '      <ul role="list">',
    '        <li><a href="privacy-policy.html">Privacy Policy</a></li>',
    '        <li><a href="terms.html">Terms of Service</a></li>',
    '        <li><a href="sitemap.html">Site Map</a></li>',
    '      </ul>',
    '    </div>',
    '  </div>',
    '  <div class="footer-bottom">',
    '    <div class="footer-copy">&copy; 2025 Lane Social Co &middot; Las Vegas, NV &middot; All rights reserved</div>',
    '    <div class="footer-bottom-links">',
    '      <a href="privacy-policy.html">Privacy</a>',
    '      <a href="terms.html">Terms</a>',
    '      <a href="contact.html">Contact</a>',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join('\n');

  /* ─────────────────────────────────────────────────────────
     4. INJECT NAV + FOOTER
     ───────────────────────────────────────────────────────── */
  function inject() {
    var navEl    = document.getElementById('site-nav');
    var footerEl = document.getElementById('site-footer');
    if (navEl)    navEl.innerHTML    = NAV_HTML;
    if (footerEl) footerEl.innerHTML = FOOTER_HTML;
  }

  /* ─────────────────────────────────────────────────────────
     5. NAV INTERACTIONS
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
     6. SCROLL REVEAL
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
     7. MOUSE GLOW
     ───────────────────────────────────────────────────────── */
  function initGlow() {
    var glow = document.getElementById('mouseGlow');
    if (!glow) {
      /* Create if not present */
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
     8. BOOT
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
