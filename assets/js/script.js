// Matrix animation
function createMatrixBackground() {
  const canvas = document.createElement('canvas');
  canvas.classList.add('matrix-bg');
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  // Set canvas dimensions
  function setCanvasDimensions() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  setCanvasDimensions();
  window.addEventListener('resize', setCanvasDimensions);

  // Characters for the matrix effect
  const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
  const columns = Math.floor(canvas.width / 20); // Character width
  const drops = [];

  // Initialize drops
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
  }

  function draw() {
    // Semi-transparent black to create fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff9d'; // Matrix green
    ctx.font = '15px monospace';

    // Draw characters
    for (let i = 0; i < drops.length; i++) {
      // Random character
      const text = characters.charAt(Math.floor(Math.random() * characters.length));

      ctx.fillText(text, i * 20, drops[i] * 20);

      // Send the drop back to the top randomly after it crosses the screen
      if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      // Increment y coordinate
      drops[i]++;
    }
  }

  // Run the animation
  setInterval(draw, 35);
}

// Typing effect
function initTypingEffect() {
  const typedElem = document.getElementById('typed');

  if (!typedElem) return;

  const options = {
    strings: [
      '<i>Code </i>',
      '<i>Learn </i>',
      '<i>Share </i>',
      '<i>Solve problems. </i>',
    ],
    typeSpeed: 75,
    backSpeed: 50,
    smartBackspace: true,
  };

  new Typed(typedElem, options);
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');

  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Back to top button
function initBackToTopButton() {
  const backToTopBtn = document.getElementById('back-to-top');

  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopBtn.style.visibility = 'visible';
      backToTopBtn.style.opacity = '1';
    } else {
      backToTopBtn.style.visibility = 'hidden';
      backToTopBtn.style.opacity = '0';
    }
  });

  // Smooth scroll to top
  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize tooltips
function initTooltips() {
  if (typeof tippy === 'undefined') return;

  tippy('#email-icon', {
    duration: [null, 200],
    theme: 'light',
    animation: 'scale',
    interactive: true,
    placement: 'bottom',
    arrow: true,
  });

  tippy('#profile-pic', {
    duration: [null, 200],
    theme: 'light',
    animation: 'scale',
    offset: [100, -20],
  });
}

// Initialize scroll animations
function initScrollAnimations() {
  if (typeof ScrollOut === 'undefined') return;

  ScrollOut({
    once: true,
    threshold: 0.3,
  });
}

// Burger menu toggle for smaller devices
function initBurgerMenu() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navbarIcons = document.querySelector('.navbar-icons');
  const menuOverlay = document.querySelector('.menu-overlay');

  if (!burgerMenu || !navbarIcons || !menuOverlay) return;

  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navbarIcons.classList.toggle('active');
    menuOverlay.classList.toggle('active');

    // Toggle menu-open class on body to prevent scrolling when menu is open
    document.body.classList.toggle('menu-open');
  });

  // Close menu when clicking on a link
  const navLinks = navbarIcons.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      navbarIcons.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  // Close menu when clicking on the overlay
  menuOverlay.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    navbarIcons.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbarIcons.contains(e.target) && !burgerMenu.contains(e.target) && navbarIcons.classList.contains('active')) {
      burgerMenu.classList.remove('active');
      navbarIcons.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // createMatrixBackground();
  initTypingEffect();
  initNavbarScroll();
  initBackToTopButton();
  initTooltips();
  initScrollAnimations();
  initBurgerMenu();
});
