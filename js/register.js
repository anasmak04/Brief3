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