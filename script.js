(function () {
  const nav = document.querySelector('.nav-main');
  const toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      toggle.setAttribute('aria-label', nav.classList.contains('is-open') ? 'Close menu' : 'Open menu');
    });
  }
})();
