// Humburger Navbar
const openBtn = document.getElementById("openBtn");
const closeBtn = document.querySelector(".closeBtn");
const sideMenu = document.querySelector("#side-menu");

openBtn.addEventListener("click", openSideMenu);
closeBtn.addEventListener("click", closeSideMenu);
window.addEventListener("click", outsideClick);

function openSideMenu() {
  sideMenu.style.width = "40%";
}

function closeSideMenu() {
  sideMenu.style.width = "0";
}

function outsideClick(e) {
  if (e.target == document.querySelector("body")) {
    sideMenu.style.width = "0%";
  }
}

// img Slider
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to prev sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to last
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Button events
next.addEventListener("click", e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
