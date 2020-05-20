// Efeito de digitação na primeira seção da página
const typedElem = document.getElementById("typed");

var options = {
  strings: [
    "<i>&#8196;JavaScript&#8196;</i>", // "&#8196;" é um caractere invisível no navegador que impede um bug em que os elementos acima da transição de palavras se movam
    "<i>&#8196;Python&#8196;</i>",
    "<i>&#8196;PHP&#8196;</i>",
    "<i>&#8196;Linux&#8196;</i>",
    "<i>&#8196;Aprender&#8196;</i>",
    "<i>&#8196;Tecnologia.&#8196;</i>",
  ],
  typeSpeed: 75,
  backSpeed: 50,
  smartBackspace: true,
};

var typed = new Typed(typedElem, options);

// tooltip na foto de perfil e no ícone de email
tippy("#email-icon", {
  duration: [null, "200"],
  theme: "light",
  animation: "scale",
  interactive: true,
  placement: "bottom",
  arrow: true,
});

tippy("#profile-pic", {
  duration: [null, "200"],
  theme: "light",
  animation: "scale",
  offset: [100, -20],
});

// Inicializando o efeito de scrollagem
ScrollOut({
  once: true,
  threshold: 0.5,
});
