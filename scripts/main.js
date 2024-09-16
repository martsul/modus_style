// Swipers

const teamSwiper = new Swiper(".team__swiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  navigation: {
    nextEl: '.team-button-prev',
    prevEl: '.team-button-next',
  },
})

const reviewSwiper = new Swiper(".review__swiper", {
  spaceBetween: 40,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.review-button-next',
    prevEl: '.review-button-prev',
  },
})

// Questions

let questionsCard = document.querySelectorAll(".questions__card");

if (questionsCard) {
  questionsCard.forEach(e => {
    e.querySelector(".questions__btn").addEventListener("click", () => {
      e.querySelector(".questions__answer").classList.toggle("questions__answer-active");
    });
  });
};

// Menu

document.querySelector(".menu__btn").addEventListener("click", () => {
  document.querySelector(".menu__bottom").classList.toggle("menu__bottom-on");
});

// Aside 

document.querySelector(".aside__btn").addEventListener("click", () => {
  document.querySelector(".aside").classList.toggle("aside-on")
})