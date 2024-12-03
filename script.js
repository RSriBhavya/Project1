const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar', // Ensures progress bar pagination is enabled
    },
  });
  document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  