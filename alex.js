document.addEventListener("DOMContentLoaded", function () {
  let scrollContainer = document.querySelector(".gallery");
  let backBtn = document.getElementById("backBtn");
  let nextBtn = document.getElementById("nextBtn");

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });

  nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 900;
  });

  backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 900;
  });
});

//hamburger

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

// light box model

// document.addEventListener("DOMContentLoaded", function()
// let click = document.querySelector("button");
// let over = document.querySelector(".get");
// let close = document.querySelector("span");

// click.addEventListener("click", function (){
//   get.style.display = "flex"
// });
// close.addEventListener("click", function (){
//   get.style.display = "none"
// })
// window.addEventListener("click", function (event) {
//   if (event.target == get) {
//     get.style.display = "none"
//   }
// })
// })

// document.addEventListener("DOMContentLoaded", function () {
//   let open = document.querySelector(".get1");
//   let get = document.querySelector(".name");
//   let close = document.querySelector(".close");

//   open.addEventListener("click", function () {
//     get.style.display = "flex";
//   });

//   close.addEventListener("click", function () {
//     get.style.display = "none";
//   });

//   window.addEventListener("click", function (event) {
//     if (event.target == get) {
//       get.style.display = "none";
//     }
//   });
// });
