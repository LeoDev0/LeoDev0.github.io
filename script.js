const typedElem = document.getElementById("typed");

var options = {
  strings: [
    "<i>JavaScript</i>",
    "<i>Python</i>",
    "<i>PHP</i>",
    "<i>Linux</i>",
    "<i>Aprender</i>",
    "<i>Tecnologia</i>."
  ],
  typeSpeed: 75,
  backSpeed: 50,
  smartBackspace: true
};

var typed = new Typed(typedElem, options);
