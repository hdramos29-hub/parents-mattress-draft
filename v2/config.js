// Site settings. Change a value here and every button that uses it updates.
// Number buyers text, digits only with country code, no spaces or dashes.
window.SITE = { textNumber: "18599627610" };

// Gives every "Text us" button its link. With scripts off the buttons stay hidden and the Email buttons still work.
(function () {
  var number = window.SITE && window.SITE.textNumber;
  if (!number) return;
  var body = encodeURIComponent("Hi, I'm looking for a mattress. Size: ");
  var links = document.querySelectorAll('a[data-sms]');
  for (var i = 0; i < links.length; i++) {
    links[i].href = 'sms:+' + number + '?&body=' + body;
    links[i].hidden = false;
  }
})();
