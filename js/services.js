//swiper
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

/// modals

const buttons = [
  {
    id: "myBtn1",
    content: "Content for Button 1",
  },
  {
    id: "myBtn2",
    content: "Content for Button 2",
  },
  {
    id: "myBtn3",
    content: "Content for Button 1",
  },
  {
    id: "myBtn4",
    content: "Content for Button 2",
  },
  {
    id: "myBtn5",
    content: "Content for Button 1",
  },
  {
    id: "myBtn6",
    content: "Content for Button 2",
  },
];

buttons.forEach((button) => {
  const func = () => {
    const myPopup = new Popup({
      id: "my-popup",
      title: "My Popup",
      content: button.content,
      widthMultiplier: 0.7,
    });
    myPopup.show();
  };

  const btn = document.getElementById(button.id);

  btn.addEventListener("click", func);
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


const hamburger = document.querySelector(".hamburger");
const flexMenu = document.querySelector(".flex-menu");

hamburger.addEventListener('click', function() {
  flexMenu.classList.toggle('open');

});
