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


//lightbox model
// elements
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');
var captionText = document.getElementById('caption');
var close = document.getElementsByClassName('close')[0];

//  to show the lightbox when an image is clicked
document.querySelectorAll('.gallery a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        lightbox.style.display = 'block';
        lightboxImg.src = this.href;
        captionText.innerHTML = this.nextElementSibling.innerHTML;
    });
});

// to hide  the lightbox when the close button is clicked
close.onclick = function () {
    lightbox.style.display = 'none';
};

// to hide the lightbox when clicking outside of the image
lightbox.onclick = function (e) {
    if (e.target == lightbox) {
        lightbox.style.display = 'none';
    }
};
