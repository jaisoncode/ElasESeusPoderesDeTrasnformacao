document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.top-nav ul li a');
  
    // Alternar a visibilidade do menu
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  
    // Fechar o menu quando um item for clicado
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        menu.classList.remove('active');
      });
    });
  });
  