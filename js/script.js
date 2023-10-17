const menuButton = document.querySelector('.menu-hamburger');
const navbarLinks = document.querySelector('.navbar-links');

menuButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('show');
});


var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });