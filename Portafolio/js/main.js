// Navegación responsive
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#navbar ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Cerrar menu al hacer clic en un enlace
document.querySelectorAll('#navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

// Cambiar clase 'current' al hacer scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - sectionHeight/3)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('current');
    if(link.getAttribute('href').substring(1) === current) {
      link.classList.add('current');
    }
  });
});

// Slider para la sección de inicio
function initBackgroundSlider() {
  const slides = document.querySelectorAll('.bg-slide');
  let currentSlide = 0;
  const interval = 5000; // 5 segundos por cada imagen
  
  function nextSlide() {
    // Quitar clase active de la diapositiva actual
    slides[currentSlide].classList.remove('active');
    
    // Avanzar al siguiente slide o volver al primero si estamos en el último
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Añadir clase active al nuevo slide actual
    slides[currentSlide].classList.add('active');
  }
  
  // Iniciar el intervalo para cambiar automáticamente
  setInterval(nextSlide, interval);
}

// Animación de aparición al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-animation');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-item, .skill-category, .contact-item').forEach(element => {
    element.classList.add('hidden-initially');
    observer.observe(element);
  });
  
  // Inicializar el slider de fondo
  initBackgroundSlider();
});
