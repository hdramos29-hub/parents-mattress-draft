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
