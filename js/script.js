const modal = document.getElementById("myModal");
const buttons = document.querySelectorAll("#myBtn");
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");


var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});




function myFunction() {
  var dropdowns = document.querySelectorAll(".myDropdown");
  dropdowns.forEach(function(dropdown) {
    dropdown.classList.toggle("show");
  });
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.querySelectorAll(".myDropdown");
    dropdowns.forEach(function(dropdown) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
};

let theme_toggler = document.querySelector('#theme_toggler');

theme_toggler.addEventListener('click', function(){ 
    document.body.classList.toggle('dark_mode');


    let iconElement = theme_toggler.querySelector('i');
    let lockIcon = document.getElementById('lockIcon');

    if (document.body.classList.contains('dark_mode')) {

        iconElement.classList.remove('fa-sun');
        iconElement.classList.add('fa-star');


    } else {

        iconElement.classList.remove('fa-star');
        iconElement.classList.add('fa-sun');
        lockIcon.src = '/images/lock-black.svg';

    }
});





const hamburger = document.querySelector(".hamburger");
const flexMenu = document.querySelector(".flex-menu");

hamburger.addEventListener('click', function() {
  flexMenu.classList.toggle('open');

});

const menuItems = document.querySelector('.flex-menu');
menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    flexMenu.classList.remove('open');
  });
});







