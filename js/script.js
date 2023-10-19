const menuButton = document.querySelector(".menu-hamburger");
const navbarLinks = document.querySelector(".navbar-links");
const modal = document.getElementById("myModal");
const buttons = document.querySelectorAll("#myBtn");
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

// menuButton.addEventListener("click", () => {
//   navbarLinks.classList.toggle("show");
// });

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

ScrollReveal().reveal(".headline");

AOS.init();

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `header , .logo , .logo img,
    .app_boxes, .box,
  #section_two, #section_three,
   #section_one,.section_one_description,.appparent,.child-parent
  `,
  { interval: 100 }
);



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}