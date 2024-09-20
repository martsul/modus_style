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
    },
  },
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

document.querySelectorAll(".menu__mini-block").forEach((e) => {
  e.querySelector(".menu__mini-block-full").addEventListener("click", () => {
    e.querySelector(".menu__mini-links").classList.toggle(
      "menu__mini-links-full"
    );
  });
});

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

    document.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        callPop.classList.remove("pop-on-full");
        document.body.classList.remove("body-hidden");
      }
    });

    callPop.addEventListener("click", event => {
      if (event.target === callPop) {
        callPop.classList.remove("pop-on-full");
        document.body.classList.remove("body-hidden");
      }
    })
  });
});

callClose.addEventListener("click", () => {
  callPop.classList.remove("pop-on-full");
  document.body.classList.remove("body-hidden");
});

// Qwiz catalog

let nextBtnCat = document.querySelector(".cost__btn-next");
let prevBtnCat = document.querySelector(".cost__btn-prev");

if (nextBtnCat) {
  let cards = document.querySelectorAll(".cost__card");
  let load = document.querySelector(".cost__load");
  let line = document.querySelector(".cost__load-line");
  let i = 0;

  nextBtnCat.addEventListener("click", () => {
    cards[i].classList.remove("cost__card-on");
    cards[i].setAttribute("style", "display: none;");

    i++;

    cards[i].setAttribute("style", "display: inline-block;");
    cards[i].classList.add("cost__card-on");

    line.setAttribute(
      "style",
      `width: calc(${i + 1} * 100% / ${cards.length})`
    );

    prevBtnCat.setAttribute("style", "display: inline-block;");

    if (i === cards.length - 1) {
      load.setAttribute("style", "display: none;");
    }
  });

  prevBtnCat.addEventListener("click", () => {
    cards[i].classList.remove("cost__card-on");
    cards[i].setAttribute("style", "display: none;");

    i--;

    cards[i].setAttribute("style", "display: inline-block;");
    cards[i].classList.add("cost__card-on");

    if (i === 0) {
      prevBtnCat.setAttribute("style", "display: none;");
    }
  });
}
