
//hambuger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);



// form validation

document
  .getElementById("loginform")
  .addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

function validateForm() {
  let inputs = document.querySelectorAll(
    "#loginform input[type='text'], #loginform input[type='email'], #loginform textarea"
  );
  let isValid = true;
  inputs.forEach(function (input) {
    if (input.value.trim() === "") {
      
      input.classList.add("error");
      isValid = false;
      setTimeout(function () {
        input.classList.remove("error");
      }, 2500);
      setTimeout(function () {
        input.style.borderColor = "red"; 
      }, 1250);
    }
  });
  return isValid;
}

