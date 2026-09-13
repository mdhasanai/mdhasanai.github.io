/* Inlined in <head> to avoid a flash of the wrong theme. */
(function () {
  try {
    var stored = localStorage.getItem('mh-theme');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    document.documentElement.setAttribute('data-theme', stored || (prefersLight ? 'light' : 'dark'));
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
