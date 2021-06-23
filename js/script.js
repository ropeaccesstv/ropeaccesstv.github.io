//Select-> go to link
function handleSelect(elm) {
  window.location = elm.value;
}

// Instructions
let instructionsButton = document.getElementsByClassName(
  "instructions--button"
);
let instructionsClose = document.getElementsByClassName("instructions--close");
let a;

for (a = 0; a < instructionsButton.length; a++) {
  instructionsButton[a].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("instructions--modal");
  });
}

for (b = 0; b < instructionsClose.length; b++) {
  instructionsClose[b].addEventListener("click", function () {
    this.parentElement.classList.toggle("instructions--modal");
  });
}

//Collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// MenuBurger
function toggleDropdownMenu() {
  let menuDropdown = document.querySelector("#navbar--menu-dropdown");
  menuDropdown.classList.toggle("navbar--menu-is-visible");
  menuDropdown.style.zIndex = "999";
}

// SwiperJs
const swiper = new Swiper(".swiper-container", {
  preloadImages: false,
  lazy: true,
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    // dynamicBullets: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// GoUpButton
const goUpButton = document.querySelector("#button--go-up");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    goUpButton.style.display = "block";
  } else {
    goUpButton.style.display = "none";
  }
}
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
