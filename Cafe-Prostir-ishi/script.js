
var secLinks = document.getElementsByClassName('sec-links');
var logoRedact = document.getElementsByClassName('logo_redact');

for (var i = 0; i < secLinks.length; i++) {
  secLinks[i].addEventListener('click', function(event) {
    event.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
}

for (var k = 0; k < logoRedact.length; k++) {
  logoRedact[k].addEventListener('click', function(event) {
    event.preventDefault();
    var target2 = document.querySelector(this.getAttribute('href'));
    target2.scrollIntoView({ behavior: 'smooth' });
  });
}

