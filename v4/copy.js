// "Copy address" button. Added by script, so with scripts off it is simply not there.
(function () {
  var row = document.getElementById('address-row');
  var address = document.getElementById('address');
  if (!row || !address || !navigator.clipboard || !navigator.clipboard.writeText) return;
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn-copy';
  btn.textContent = 'Copy address';
  var timer;
  btn.addEventListener('click', function () {
    navigator.clipboard.writeText(address.textContent.trim()).then(function () {
      btn.textContent = 'Copied';
      clearTimeout(timer);
      timer = setTimeout(function () { btn.textContent = 'Copy address'; }, 2000);
    }, function () { /* copying failed: show nothing */ });
  });
  row.appendChild(btn);
})();

// Price pairs: the arrow draws in and our price settles once each list scrolls into view.
// Off for people who ask for reduced motion; with scripts off everything simply shows.
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var lists = document.querySelectorAll('.pairs');
  if (!lists.length) return;
  document.documentElement.classList.add('motion');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
    });
  }, { threshold: 0.3 });
  for (var i = 0; i < lists.length; i++) io.observe(lists[i]);
})();
