// Swipers

const teamSwiper = new Swiper(".team__swiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".team-button-next",
    prevEl: ".team-button-prev",
  },
  breakpoints: {
    966: {
      slidesPerView: 3,
    }, 
    520: {
      slidesPerView: 2,
    }
  }
});

const reviewSwiper = new Swiper(".review__swiper", {
  spaceBetween: 40,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".review-button-next",
    prevEl: ".review-button-prev",
  },
});

// Questions

let questionsCard = document.querySelectorAll(".questions__card");

if (questionsCard) {
  questionsCard.forEach((e) => {
    e.querySelector(".questions__btn").addEventListener("click", () => {
      e.querySelector(".questions__answer").classList.toggle(
        "questions__answer-active"
      );
    });
  });
}

// Menu

document.querySelector(".menu__btn").addEventListener("click", () => {
  document.querySelector(".menu__bottom").classList.toggle("menu__bottom-on");
});

// Menu full

let miniMenu = document.querySelector(".menu__mini");

document.querySelector(".header__all-menu").addEventListener("click", () => {
  miniMenu.classList.add("menu__mini-full");
});

document.querySelectorAll(".menu__close, .menu__arrow").forEach((e) => {
  e.addEventListener("click", () => {
    miniMenu.classList.remove("menu__mini-full");
  });
});

document.querySelectorAll(".menu__mini-block").forEach(e => {
  e.querySelector(".menu__mini-block-full").addEventListener("click", () => {
    e.querySelector(".menu__mini-links").classList.toggle("menu__mini-links-full");
  })
})

// Aside

document.querySelector(".aside__btn").addEventListener("click", () => {
  document.querySelector(".aside").classList.toggle("aside-on");
});

// POP-ON

// Call
let callBtn = document.querySelectorAll(".header__btn");
let callPop = document.querySelector(".pop-consultation");
let callClose = document.querySelector(".pop-consultation__close");

callBtn.forEach((e) => {
  e.addEventListener("click", () => {
    callPop.classList.add("pop-on-full");
    document.body.classList.add("body-hidden");
  });
});

callClose.addEventListener("click", () => {
  callPop.classList.remove("pop-on-full");
  document.body.classList.remove("body-hidden");
});
