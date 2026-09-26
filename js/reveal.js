// Two effects, and the same rule governs both: THE PAGE HAS TO BE RIGHT WITH
// THIS FILE MISSING.
//
// Neither effect hides anything on its own. Each one first tells the stylesheet
// "I am here" by putting a class on <html>, and only THAT class turns on the
// rule that hides or un-styles something. So if this script is blocked, fails
// to parse, or never loads at all, you get a solid navbar and six entries that
// are simply visible — which is the page, just without the flourish.
//
// The opposite way round is the common bug and it is brutal: CSS hides the
// content, JS is meant to reveal it, JS does not run, and the reader gets a
// blank page with a scrollbar. Written the way it is below, that cannot happen.

(function () {
  var root = document.documentElement;

  // Read once. It is the reader's system setting, and both effects respect it.
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -------------------------------------------------- 1. the navbar */

  var nav = document.querySelector('[data-nav]');

  if (nav) {
    // From here on the bar is allowed to be see-through.
    root.classList.add('is-nav-ready');

    // The hero is roughly one screen tall, so "past the hero" is close enough
    // to "scrolled more than a bit". 80px is far enough that a trackpad twitch
    // does not flicker the bar and near enough that it feels immediate.
    var solidify = function () {
      nav.classList.toggle('is-stuck', window.scrollY > 80);
    };

    solidify(); // A reload halfway down the page starts in the right state.

    // `passive: true` promises the browser this handler will never call
    // preventDefault(), which lets it scroll without waiting to find out.
    // On a scroll handler that is the difference between smooth and not.
    window.addEventListener('scroll', solidify, { passive: true });
  }

  /* -------------------------------------------------- 2. the reveal */

  var targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  // IntersectionObserver is the browser's own "tell me when this is on screen".
  // The old way was a scroll handler measuring every element on every frame;
  // this one costs nothing and is one line. If a browser is old enough not to
  // have it, we simply never turn the effect on.
  if (still || !('IntersectionObserver' in window)) return;

  root.classList.add('is-reveal-ready');

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;

        // THE STAGGER, and it is per BATCH, not per element. Everything that
        // came into view together fans out by 70ms; a card scrolled to on its
        // own gets no delay at all, because there is nothing to fan out from.
        entry.target.style.transitionDelay = i * 70 + 'ms';
        entry.target.classList.add('is-in');

        // ONCE. A reveal that replays every time you scroll back up stops
        // being an arrival and becomes a twitch.
        observer.unobserve(entry.target);
      });
    },
    {
      // Fire when the element is 12% of the way up from the bottom edge, so it
      // has finished arriving by the time it is properly in the reading area
      // rather than animating under the reader's nose.
      rootMargin: '0px 0px -12% 0px',
    }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
