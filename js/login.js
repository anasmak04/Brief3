function myFunction() {
  var dropdowns = document.querySelectorAll(".myDropdown");
  dropdowns.forEach(function (dropdown) {
    dropdown.classList.toggle("show");
  });
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.querySelectorAll(".myDropdown");
    dropdowns.forEach(function (dropdown) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    });
  }
};

let password = document.getElementById("password").value;
let namee = document.getElementById("name").value;
let email = document.getElementById("email").value;
const error = document.getElementById("error");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (namee == "" || namee !== "/^[a-zA-Z ]+$/") {
    error.style.display = "block";
  }

  if (
    email == "" ||
    email !== "/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/"
  ) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});

const hamburger = document.querySelector(".hamburger");
const flexMenu = document.querySelector(".flex-menu");

hamburger.addEventListener("click", function () {
  flexMenu.classList.toggle("open");
});

let theme_toggler = document.querySelector("#theme_toggler");

theme_toggler.addEventListener("click", function () {
  document.body.classList.toggle("dark_mode");

  let iconElement = theme_toggler.querySelector("i");
  let lockIcon = document.querySelectorAll("#lockIcon");
  let uber = document.querySelectorAll("#uber");
  let fb = document.querySelectorAll("#facebook");
  let twitter = document.querySelectorAll("#twitter");
  let dribble = document.querySelectorAll("#dribble");
  let dribble1 = document.querySelectorAll("#dribble1");
  let github = document.querySelectorAll("#github");
  let verified = document.querySelectorAll("#verified");

  if (document.body.classList.contains("dark_mode")) {
    iconElement.classList.remove("fa-sun");
    iconElement.classList.add("fa-star");

    lockIcon.forEach((item) => {
      item.src = "/images/padlock.png";
    });

    uber.forEach((item) => {
      item.src = "/images/uber1.png";
    });

    fb.forEach((item) => {
      item.src = "/images/facebook-app-white.png";
    });

    twitter.forEach((item) => {
      item.src = "/images/twitter-white.png";
    });

    dribble.forEach((item) => {
      item.src = "/images/dribble-white.png";
    });

    dribble1.forEach((item) => {
      item.src = "/images/dribble-v.png";
    });

    github.forEach((item) => {
      item.src = "/images/github-white.png";
    });

    verified.forEach((item) => {
      item.src = "/images/check-white.png";
    });
  } else {
    iconElement.classList.remove("fa-star");
    iconElement.classList.add("fa-sun");
    lockIcon.forEach((item) => {
      item.src = "/images/lock.svg";
    });

    uber.forEach((item) => {
      item.src = "/images/uber.png";
    });

    fb.forEach((item) => {
      item.src = "/images/Facebook.png";
    });
    twitter.forEach((item) => {
      item.src = "/images/twitter.png";
    });

    dribble.forEach((item) => {
      item.src = "/images/Dribble.png";
    });
    github.forEach((item) => {
      item.src = "/images/Github.png";
    });

    verified.forEach((item) => {
      item.src = "/images/virefied.png";
    });

    dribble1.forEach((item) => {
      item.src = "/images/Dribble.png";
    });
  }
});

const saveData = () => {
  const name = document.getElementById("name").value;

  window.Location.href("http://127.0.0.1:5500/index.html");
};
