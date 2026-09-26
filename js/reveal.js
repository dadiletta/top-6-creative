// THE PAGE HAS TO BE RIGHT WITH THIS FILE MISSING. Each effect first puts a
// class on <html>, and only that class lets styles.css hide or restyle
// anything. No script, no hidden content. Copy that rule into your own work.

(function () {
  var root = document.documentElement;
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------- 1. the footer year */

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* -------------------------------------------------- 2. the navbar */

  var nav = document.querySelector('[data-nav]');

  if (nav) {
    root.classList.add('is-nav-ready');

    // Solid once you have scrolled 80px. Change the number to change when.
    var solidify = function () {
      nav.classList.toggle('is-stuck', window.scrollY > 80);
    };

    solidify();
    window.addEventListener('scroll', solidify, { passive: true });
  }

  /* ------------------------------------ 3. the reveal, and the countdown */

  var targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length || still || !('IntersectionObserver' in window)) return;

  root.classList.add('is-reveal-ready');

  // Counts a rank numeral down from data-count-from to what the HTML says.
  // The numeral is aria-hidden, so a screen reader never hears it tick.
  var countDown = function (el) {
    var to = parseInt(el.textContent, 10);
    var n = parseInt(el.dataset.countFrom, 10);
    var tick = function () {
      el.textContent = String(n).padStart(2, '0');
      if (n-- > to) setTimeout(tick, 110);
    };
    tick();
  };

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;

        // Things that arrive together fan out 70ms apart.
        entry.target.style.transitionDelay = i * 70 + 'ms';
        entry.target.classList.add('is-in');

        var counter = entry.target.querySelector('[data-count-from]');
        if (counter) countDown(counter);

        // Once. A reveal that replays on every scroll is a twitch.
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -12% 0px' }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
