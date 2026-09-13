/* Md Hasan — site behaviour. No dependencies. */
(function () {
  'use strict';

  /* ---------------------------------------------------------- Theme */
  var root = document.documentElement;
  var STORE_KEY = 'mh-theme';

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    var btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      btn.setAttribute('aria-pressed', String(theme === 'light'));
    }
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.theme-toggle');
    if (!btn) return;
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    try { localStorage.setItem(STORE_KEY, next); } catch (err) { /* private mode */ }
    applyTheme(next);
  });

  applyTheme(root.getAttribute('data-theme') || 'dark');

  /* ------------------------------------------------------ Mobile nav */
  var burger = document.querySelector('.nav__burger');
  var links = document.querySelector('.nav__links');

  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('is-open')) {
        links.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
      }
    });
  }

  /* ------------------------------------------------- Nav shadow state */
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('is-stuck', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* --------------------------------------------------- Scroll reveals */
  var revealables = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealables.forEach(function (el) { io.observe(el); });
  }

  /* Stagger children of any [data-stagger] container */
  document.querySelectorAll('[data-stagger]').forEach(function (group) {
    var step = parseInt(group.getAttribute('data-stagger'), 10) || 80;
    Array.prototype.forEach.call(group.children, function (child, i) {
      if (child.classList.contains('reveal')) {
        child.style.setProperty('--delay', (i * step) + 'ms');
      }
    });
  });

  /* -------------------------------------------------- Counting stats */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var counters = document.querySelectorAll('[data-count]');

  if (counters.length && 'IntersectionObserver' in window && !reduceMotion) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        cio.unobserve(entry.target);

        var el = entry.target;
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var start = performance.now();
        var dur = 1100;

        (function tick(now) {
          var t = Math.min((now - start) / dur, 1);
          var eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (t < 1) requestAnimationFrame(tick);
        })(start);
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { cio.observe(el); });
  }

  /* --------------------------------------- Contact form (AJAX submit) */
  var form = document.querySelector('form[data-ajax]');
  if (form) {
    var note = form.querySelector('.form-note');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var original = btn.innerHTML;
      btn.disabled = true;
      btn.textContent = 'Sending…';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (res) {
        if (!res.ok) throw new Error('Bad response');
        form.reset();
        if (note) { note.textContent = 'Thanks — your message is on its way. I usually reply within a couple of days.'; note.style.color = 'var(--accent)'; }
      }).catch(function () {
        if (note) { note.textContent = 'Something went wrong. Please email me directly at mdhasan.fau@gmail.com.'; note.style.color = '#e5534b'; }
      }).finally(function () {
        btn.disabled = false;
        btn.innerHTML = original;
      });
    });
  }

  /* ----------------------------------- Active nav link for this page */
  var here = location.pathname.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav__links a[href]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href.charAt(0) === '#') return;
    var path = new URL(href, location.href).pathname.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
    if (path === here) a.classList.add('is-active');
  });

  /* Footer year */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
