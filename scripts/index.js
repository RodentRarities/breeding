document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.querySelector(".overlay");

  hamburger.addEventListener("click", function () {
    navbar.classList.toggle("open");
    overlay.classList.toggle("show");
  });

  overlay.addEventListener("click", function () {
    navbar.classList.remove("open");
    overlay.classList.remove("show");
  });
});

document.querySelector('.hamburger').addEventListener('click', function() {
  this.classList.toggle('open');
});
