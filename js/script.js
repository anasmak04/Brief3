const menuButton = document.querySelector(".menu-hamburger");
const navbarLinks = document.querySelector(".navbar-links");


menuButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("show");
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});





var modal = document.getElementById("myModal");
var buttons = document.querySelectorAll("#myBtn");
var span = document.getElementsByClassName("close")[0];
// popup
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

span.addEventListener("click", () => (modal.style.display = "none"));

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

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