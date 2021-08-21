// Efeito de digitação na primeira seção da página
const typedElem = document.getElementById('typed');

const options = {
    strings: [
        '<i>&#8196;Code&#8196;</i>', // "&#8196;" é um caractere invisível no navegador que impede um bug em que os elementos acima da transição de palavras se movam
        '<i>&#8196;Learn&#8196;</i>',
        '<i>&#8196;Share&#8196;</i>',
        '<i>&#8196;Solve problems.&#8196;</i>',
    //     '<i>&#8196;Programar&#8196;</i>',
    //     '<i>&#8196;Linux&#8196;</i>',
    //     '<i>&#8196;Aprender&#8196;</i>',
    //     '<i>&#8196;Tecnologia.&#8196;</i>',
    ],
    typeSpeed: 75,
    backSpeed: 50,
    smartBackspace: true,
};

const typed = new Typed(typedElem, options);

// Animação do botão para voltar ao topo da página
const backToTopBtn = document.getElementById('back-to-top');

window.onscroll = () => {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        backToTopBtn.style.visibility = 'visible';
        backToTopBtn.style.opacity = '1';
    } else {
        backToTopBtn.style.visibility = 'hidden';
        backToTopBtn.style.opacity = '0';
    }
};

// tooltip na foto de perfil e no ícone de email
tippy('#email-icon', {
    duration: [null, '200'],
    theme: 'light',
    animation: 'scale',
    interactive: true,
    placement: 'bottom',
    arrow: true,
});

tippy('#profile-pic', {
    duration: [null, '200'],
    theme: 'light',
    animation: 'scale',
    offset: [100, -20],
});

// Inicializando o efeito de scrollagem
ScrollOut({
    once: true,
    threshold: 0.5,
});
