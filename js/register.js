function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const hamburger = document.querySelector(".hamburger");
const flexMenu = document.querySelector(".flex-menu");

hamburger.addEventListener("click", function () {
  flexMenu.classList.toggle("open");
});



const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {

  e.preventDefault();
  let password = document.getElementById('password').value;
  let secondpwd = document.getElementById('secondPwd').value;


  if(password !== secondpwd){
    alert("passwords is not equals")
  }

  else{
    alert("Form submitted successfully!");
  }

  
})