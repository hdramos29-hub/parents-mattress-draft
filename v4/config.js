// Site settings. Change a value here and every button that uses it updates.
// Number buyers text, digits only with country code, no spaces or dashes.
window.SITE = { textNumber: "18599627610" };

// Points every "Text" button at the number above, with a message already started.
// The size buttons become texts that name the size. With scripts off, the
// Text buttons still open a blank text and the size buttons open an email.
(function () {
  var number = window.SITE && window.SITE.textNumber;
  if (!number) return;
  function sms(message) { return 'sms:+' + number + '?&body=' + encodeURIComponent(message); }
  var i, links = document.querySelectorAll('a[data-sms]');
  for (i = 0; i < links.length; i++) links[i].href = sms("Hi, I'm looking for a mattress. Size: ");
  var sizes = document.querySelectorAll('a[data-size]');
  for (i = 0; i < sizes.length; i++) {
    sizes[i].href = sms("Hi, I'm looking for a " + sizes[i].getAttribute('data-size') + " mattress. What do you have?");
  }
})();
