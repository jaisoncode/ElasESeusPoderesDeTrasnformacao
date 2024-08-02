// Adiciona um event listener para o evento de scroll
window.addEventListener('scroll', toggleNavbarColor);

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav ul li a');
    const header = document.querySelector('.header');
  
    function removeSelectPageClass() {
      navItems.forEach(item => {
        item.classList.remove('select-page');
      });
    }
  
    function addSelectPageClass(id) {
      navItems.forEach(item => {
        if (item.getAttribute('href') === `#${id}`) {
          item.classList.add('select-page');
        }
      });
    }
  
    function onScroll() {
      let scrollPos = window.scrollY || document.documentElement.scrollTop;
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - header.offsetHeight;
        const sectionHeight = section.offsetHeight;
  
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          const currentId = section.getAttribute('id');
          removeSelectPageClass();
          addSelectPageClass(currentId);
        }
      });
  
      // Alterar a cor do cabeçalho ao rolar
      if (scrollPos > 100) {
        header.classList.add('scroll');
      } else {
        header.classList.remove('scroll');
      }
    }
  
    window.addEventListener('scroll', onScroll);
    onScroll(); // Run on load to set initial state
  });
  