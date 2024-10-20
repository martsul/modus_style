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
  spaceBetween: 200,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".review-button-next",
    prevEl: ".review-button-prev",
  },
  breakpoints: {
    765: {
      spaceBetween: 40,
    },
  },
});

const interestingSwiper = new Swiper(".interesting__swiper", {
  spaceBetween: 20,
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    966: {
      spaceBetween: 40,
      slidesPerView: 3,
    },
    695: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: ".interesting-button-next",
    prevEl: ".interesting-button-prev",
  },
});

const interestingFilters = new Swiper(".interesting__fiters", {
  spaceBetween: 8.67,
  slidesPerView: "auto",
  centredSlides: true,
  freeMode: true,
  breakpoints: {
    695: {
      spaceBetween: 9.5,
    },
    966: {
      spaceBetween: 21.67,
    },
  },
});

const products = new Swiper(".product__pagination", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 20,
  allowTouchMove: false,
  breakpoints: {
    695: {
      slidesPerView: 4,
      spaceBetween: 29,
    },
  },
  navigation: {
    nextEl: ".product-button-next",
    prevEl: ".product-button-prev",
  },
});

const productionSwiper = new Swiper(".gallery__swiper", {
  loop: true,
  slidesPerView: 1,
  width: 270,
  spaceBetween: 40,
  breakpoints: {
    966: {
      width: null,
      slidesPerView: 3,
    },
    695: {
      width: 376,
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".gallery__button-next",
    prevEl: ".gallery__button-prev",
  },
});

const clauseSwiper = new Swiper(".readalso__swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    966: {
      spaceBetween: 40,
      slidesPerView: 3,
    },
    695: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: ".readalso-button-next",
    prevEl: ".readalso-button-prev",
  },
});

// Questions

let questionsCard = document.querySelectorAll(".questions__card");

if (questionsCard) {
  questionsCard.forEach((e) => {
    e.querySelector(".questions__qust").addEventListener("click", () => {
      e.querySelector(".questions__answer").classList.toggle(
        "questions__answer-active"
      );
    });
  });
}

// Menu

document.querySelector(".menu__btn").addEventListener("click", () => {
  document.querySelector(".menu-bottom").classList.toggle("menu-bottom-on");
});

// Menu Change

let menuChanges = document.querySelectorAll(".menu-bottom__btn");
let menuTargetChange = document.querySelector(".menu-bottom__btn.active");
let menuLinks = document.querySelectorAll(".menu-bottom__links");
let menuTargetLinks = document.querySelector(".menu-bottom__links.active");

menuChanges.forEach((element, ind) => {
  element.addEventListener("mouseover", (event) => {
    if (event.target !== menuTargetChange) {
      menuTargetChange.classList.remove("active");
      element.classList.add("active");
      menuTargetChange = element;

      menuTargetLinks.classList.remove("active");
      menuLinks[ind].classList.add("active");
      menuTargetLinks = menuLinks[ind];
    }
  });
});

// Menu full

let miniMenu = document.querySelector(".menu__mini");

document.querySelector(".header__all-menu").addEventListener("click", () => {
  miniMenu.classList.add("menu__mini-full");
  document.body.classList.add("body-hidden");
});

document.querySelectorAll(".menu__close, .menu__arrow").forEach((e) => {
  e.addEventListener("click", () => {
    miniMenu.classList.remove("menu__mini-full");
    document.body.classList.remove("body-hidden");
  });
});

document.querySelectorAll(".menu__mini-block").forEach((e) => {
  e.querySelector(".menu__mini-block-full").addEventListener("click", () => {
    e.querySelector(".menu__mini-links").classList.toggle(
      "menu__mini-links-full"
    );
  });
});

document
  .querySelector(".header__svg-search-btn")
  .addEventListener("click", () => {
    document
      .querySelector(".header__search")
      .classList.toggle("header__search-full");
  });

// // Aside

// document.querySelector(".aside__btn").addEventListener("click", () => {
//   document.querySelector(".aside").classList.toggle("aside-on");
// });

// POP-ON

function callPop(callingButton, callingPop, closePop) {
  callingButton.forEach((e) => {
    e.addEventListener("click", () => {
      callingPop.classList.add("pop-on-full");
      document.body.classList.add("body-hidden");

      document.addEventListener("keyup", (event) => {
        if (event.key === "Escape") {
          callingPop.classList.remove("pop-on-full");
          document.body.classList.remove("body-hidden");
        }
      });

      callingPop.addEventListener("click", (event) => {
        if (event.target === callingPop) {
          callingPop.classList.remove("pop-on-full");
          document.body.classList.remove("body-hidden");
        }
      });
    });
  });

  closePop.addEventListener("click", () => {
    callingPop.classList.remove("pop-on-full");
    document.body.classList.remove("body-hidden");
  });
}

// Call
let callCurrBtn = document.querySelectorAll(".header__btn");
let callCurrPop = document.querySelector(".pop-consultation");
let callCurrClose = document.querySelector(".pop-consultation__close");

callPop(callCurrBtn, callCurrPop, callCurrClose);

// Delivery
let deliveryBtn = document.querySelectorAll("#product-deliv");

if (deliveryBtn[0]) {
  let deliveryPop = document.querySelector(".pop-delivery");
  let deliveryClose = document.querySelector(".pop-delivery__close");

  callPop(deliveryBtn, deliveryPop, deliveryClose);

  // Payment
  let paymentBtn = document.querySelectorAll("#product-pay");
  let paymentPop = document.querySelector(".pop-payment");
  let paymentClose = document.querySelector(".pop-payment__close");

  callPop(paymentBtn, paymentPop, paymentClose);
}

// Qwiz catalog

let nextBtnCat = document.querySelector(".cost__btn-next");
let prevBtnCat = document.querySelector(".cost__btn-prev");

if (nextBtnCat) {
  let cards = document.querySelectorAll(".cost__card");
  let load = document.querySelector(".cost__load");
  let line = document.querySelector(".cost__load-line");
  let checkedInputs = [];
  let i = 0;

  cards.forEach((e) => {
    e.querySelectorAll("input").forEach((e) => {
      e.addEventListener("change", () => {
        checkedInputs[i] = true;
        nextBtnCat.disabled = false;
      });
    });
  });

  nextBtnCat.addEventListener("click", () => {
    cards[i].classList.remove("cost__card-on");

    i++;

    cards[i].classList.add("cost__card-on");

    line.setAttribute(
      "style",
      `width: calc(${i + 1} * 100% / ${cards.length})`
    );

    prevBtnCat.setAttribute("style", "display: inline-block;");

    if (i === cards.length - 1) {
      load.setAttribute("style", "display: none;");
    }

    nextBtnCat.disabled = !checkedInputs[i];
  });

  prevBtnCat.addEventListener("click", () => {
    cards[i].classList.remove("cost__card-on");

    i--;

    cards[i].classList.add("cost__card-on");

    if (i === 0) {
      prevBtnCat.setAttribute("style", "display: none;");
    }

    line.setAttribute(
      "style",
      `width: calc(${i + 1} * 100% / ${cards.length})`
    );

    nextBtnCat.disabled = !checkedInputs[i];
  });
}

// Clock

if (document.querySelector(".present")) {
  class Clock {
    constructor(selector, selectTime) {
      this.item = selector;
      this.bool = true;
      this.time = selectTime;
    }
  }

  let firstSecondBlock = new Clock(
    document.querySelector(
      "div.present__time-piece:nth-child(7) > div:nth-child(1) > div:nth-child(2)"
    )
  );
  let secondSecondBlock = new Clock(
    document.querySelector(
      "div.present__time-piece:nth-child(7) > div:nth-child(1) > div:nth-child(1)"
    ),
    3
  );
  let firstMinuteBlock = new Clock(
    document.querySelector(
      "div.present__time-piece:nth-child(5) > div:nth-child(1) > div:nth-child(2)"
    ),
    3
  );
  let secondMinuteBlock = new Clock(
    document.querySelector(
      "div.present__time-piece:nth-child(5) > div:nth-child(1) > div:nth-child(1)"
    ),
    2
  );
  let firstHourBlock = new Clock(
    document.querySelector(
      "div.present__time-piece:nth-child(3) > div:nth-child(1) > div:nth-child(2)"
    ),
    3
  );
  let firstDayBlock = new Clock(
    document.querySelector(
      "div.present__time-piece:nth-child(1) > div:nth-child(1) > div:nth-child(2)"
    ),
    4
  );

  let timerDate = new Date(0, 0, 4, 3, 23, 30);

  setInterval(() => {
    firstSecondBlock.item.classList.toggle("present__time-num-rotate");
    timerDate = new Date(timerDate - 1000);
    setTimeout(() => {
      let seconds =
        timerDate.getSeconds() >= 10
          ? "" + timerDate.getSeconds()
          : "0" + timerDate.getSeconds();
      let minutes =
        timerDate.getMinutes() >= 10
          ? "" + timerDate.getMinutes()
          : "0" + timerDate.getMinutes();
      let hours =
        timerDate.getHours() >= 10
          ? "" + timerDate.getHours()
          : "0" + timerDate.getHours();
      let days =
        timerDate.getDay() >= 10
          ? "" + timerDate.getDay()
          : "0" + timerDate.getDay();

      function changeTime(timeElem, currentTime) {
        if (timeElem.bool) {
          timeElem.item.querySelector(".present__time-num-second").innerText =
            currentTime;
          timeElem.bool = false;
        } else {
          timeElem.item.querySelector(".present__time-num-first").innerText =
            currentTime;
          timeElem.bool = true;
        }
      }

      if (firstSecondBlock.bool) {
        firstSecondBlock.item.querySelector(
          ".present__time-num-first"
        ).innerText = seconds[1];
        firstSecondBlock.bool = false;
      } else {
        firstSecondBlock.item.querySelector(
          ".present__time-num-second"
        ).innerText = seconds[1];
        firstSecondBlock.bool = true;
      }

      if (secondSecondBlock.time != seconds[0]) {
        setTimeout(() => {
          changeTime(secondSecondBlock, seconds[0]);
          secondSecondBlock.time = seconds[0];
          secondSecondBlock.item.classList.toggle("present__time-num-rotate");
        }, 510);

        if (firstMinuteBlock.time != minutes[1]) {
          setTimeout(() => {
            changeTime(firstMinuteBlock, minutes[1]);
            firstMinuteBlock.time = minutes[1];
            firstMinuteBlock.item.classList.toggle("present__time-num-rotate");
          }, 510);
        }

        if (secondMinuteBlock.time != minutes[0]) {
          setTimeout(() => {
            changeTime(secondMinuteBlock, minutes[0]);
            secondMinuteBlock.time = minutes[0];
            secondMinuteBlock.item.classList.toggle("present__time-num-rotate");
          }, 510);
        }

        if (firstHourBlock.time != hours[1]) {
          setTimeout(() => {
            changeTime(firstHourBlock, hours[1]);
            firstHourBlock.time = hours[1];
            firstHourBlock.item.classList.toggle("present__time-num-rotate");
          }, 510);
        }

        if (firstDayBlock.time != days[1]) {
          setTimeout(() => {
            changeTime(firstDayBlock, days[1]);
            firstDayBlock.time = days[1];
            firstDayBlock.item.classList.toggle("present__time-num-rotate");
          }, 510);
        }
      }
    }, 500);
  }, 1000);
}

// Select Btn

document.querySelectorAll(".select__label").forEach((element) => {
  element.querySelectorAll(".select__option").forEach((e) => {
    e.addEventListener("click", (event) => {
      element.querySelector(".search-input").value = event.target.innerText;
      element
        .querySelector(".select__options")
        .classList.remove("select__options-on");
    });
  });
});

// Select input

let selectLabels = document.querySelectorAll(".select__label");

selectLabels.forEach((e) => {
  let currInput = e.querySelector("input");
  let currOptions = e.querySelector(".select__options");
  currInput.addEventListener("click", (event) => {
    let thereIsOptions = document.querySelector(".select__options-on");

    if (thereIsOptions) {
      if (currOptions == thereIsOptions) {
        currOptions.classList.remove("select__options-on");
      } else {
        thereIsOptions.classList.remove("select__options-on");
        currOptions.classList.add("select__options-on");
      }
    } else {
      currOptions.classList.add("select__options-on");
    }
  });
});

// Add file

let filesLabel = document.querySelector(".connection__file");

if (filesLabel) {
  filesLabel
    .querySelector(".connection__file-input")
    .addEventListener("change", function () {
      filesLabel.querySelector(".connection__file-text").innerText =
        this.files[0].name;
    });
}

// Filters

let filterGroups = document.querySelectorAll(".filters__block");

if (filterGroups[0]) {
  filterGroups.forEach((e) => {
    e.querySelector(".filters__btn").addEventListener("click", () => {
      e.querySelector(".filters__group").classList.toggle("filters__group-off");
    });

    let btnMore = e.querySelector(".filters__subgroup-btn");

    if (btnMore) {
      btnMore.addEventListener("click", () => {
        e.querySelector(".filters-second").classList.toggle(
          "filters-second-full"
        );
      });
    }
  });

  let wrapBtn = document.querySelector(".filters__wrap");
  let wrapFilters = document.querySelector(".filters");
  let wrapAllFilters = document.querySelector(".filters__all");

  wrapBtn.addEventListener("click", () => {
    wrapFilters.classList.toggle("filters-full");
    wrapAllFilters.classList.toggle("filters__all-full");

    if (wrapFilters.classList.contains("filters-full")) {
      wrapBtn.innerText = "свернуть каталог";
    } else {
      wrapBtn.innerText = "развернуть фильтр";
    }
  });
}

// Cases Pagination

let caseBlock = document.querySelector(".cases");

if (caseBlock) {
  let caseGroups = caseBlock.querySelectorAll(".cases__group");
  let paginationNum = caseBlock.querySelectorAll(".cases__pagination-num-btn");
  let paginationPrev = caseBlock.querySelector(".cases__pagination-prev");
  let paginationNext = caseBlock.querySelector(".cases__pagination-next");
  let paginationAll = caseBlock.querySelector(".cases__pagination-all");
  let currIndexGroup;
  let indexGroups = [];
  let currGroup = 1;

  paginationPrev.addEventListener("click", () => {
    caseGroups[currGroup - 1].classList.remove("active");
    caseGroups[currGroup - 2].classList.add("active");
    paginationNum[currGroup - 1].classList.remove("active");
    paginationNum[currGroup - 2].classList.add("active");

    currGroup--;

    if (currGroup === 1) {
      paginationPrev.disabled = true;
    }
    if (currGroup < caseGroups.length) {
      paginationNext.disabled = false;
    }
  });

  paginationNext.addEventListener("click", () => {
    caseGroups[currGroup - 1].classList.remove("active");
    caseGroups[currGroup].classList.add("active");
    paginationNum[currGroup - 1].classList.remove("active");
    paginationNum[currGroup].classList.add("active");

    currGroup++;

    if (currGroup === caseGroups.length) {
      paginationNext.disabled = true;
    }
    if (currGroup > 1) {
      paginationPrev.disabled = false;
    }
  });

  paginationNum.forEach((e) => {
    e.addEventListener("click", () => {
      let currNum = +e.innerHTML;
      caseGroups[currGroup - 1].classList.remove("active");
      caseGroups[currNum - 1].classList.add("active");
      paginationNum[currGroup - 1].classList.remove("active");
      paginationNum[currNum - 1].classList.add("active");

      currGroup = currNum;

      if (currGroup === 1) {
        paginationPrev.disabled = true;
      } else {
        paginationPrev.disabled = false;
      }

      if (currGroup === caseGroups.length) {
        paginationNext.disabled = true;
      } else {
        paginationNext.disabled = false;
      }
    });
  });

  paginationAll.addEventListener("click", () => {
    if (paginationAll.classList.contains("active")) {
      paginationAll.classList.remove("active");
      caseGroups[currGroup - 1].innerHTML = currIndexGroup;

      paginationNum[currGroup - 1].classList.add("active");

      paginationNum.forEach((e) => {
        e.disabled = false;
      });

      if (currGroup === 1) {
        paginationPrev.disabled = true;
        paginationNext.disabled = false;
      } else if (currGroup === paginationNum.length) {
        paginationPrev.disabled = false;
        paginationNext.disabled = true;
      } else {
        paginationNext.disabled = false;
        paginationPrev.disabled = false;
      }

      indexGroups = [];
    } else {
      paginationAll.classList.add("active");
      currIndexGroup = caseGroups[currGroup - 1].innerHTML;
      indexGroups.push(currIndexGroup);

      caseGroups.forEach((e, ind) => {
        if (ind != currGroup - 1) {
          indexGroups.push(e.innerHTML);
        }
      });

      caseGroups[currGroup - 1].innerHTML = indexGroups.join("");

      paginationNum[currGroup - 1].classList.remove("active");

      paginationPrev.disabled = true;
      paginationNext.disabled = true;
      paginationNum.forEach((e) => {
        e.disabled = true;
      });
    }
  });
}

// Description More

let description = document.querySelector(".description");
let descriptionMore = document.querySelector(".description__more");

if (descriptionMore) {
  descriptionMore.addEventListener("click", () => {
    document
      .querySelector(".description__block.second")
      .classList.toggle("description__block-full");
  });
}

// Product

let cards = document.querySelectorAll(".product__img");

if (cards[0]) {
  let i = 0;

  document
    .querySelector(".product__pagination")
    .addEventListener("click", (event) => {
      if (event.target.getAttribute("data-count")) {
        let curCount = +event.target.getAttribute("data-count");

        cards[i].classList.remove("active");
        document
          .querySelectorAll(`.product__img-mini[data-count='${i}']`)
          .forEach((e) => {
            e.classList.remove("active");
          });
        i = curCount;

        cards[i].classList.add("active");
        document
          .querySelectorAll(`.product__img-mini[data-count='${i}']`)
          .forEach((e) => {
            e.classList.add("active");
          });
      }
    });

  document
    .querySelector(".product__btn-block")
    .addEventListener("click", (event) => {
      if (event.target.getAttribute("aria-label") === "Next slide") {
        cards[i].classList.remove("active");
        document
          .querySelectorAll(`.product__img-mini[data-count='${i}']`)
          .forEach((e) => {
            e.classList.remove("active");
          });
        if (i === cards.length - 1) {
          i = 0;
        } else {
          i++;
        }
        cards[i].classList.add("active");
        document
          .querySelectorAll(`.product__img-mini[data-count='${i}']`)
          .forEach((e) => {
            e.classList.add("active");
          });
      } else if (event.target.getAttribute("aria-label") === "Previous slide") {
        cards[i].classList.remove("active");
        document
          .querySelectorAll(`.product__img-mini[data-count='${i}']`)
          .forEach((e) => {
            e.classList.remove("active");
          });
        if (i === 0) {
          i = cards.length - 1;
        } else {
          i--;
        }
        cards[i].classList.add("active");
        document
          .querySelectorAll(`.product__img-mini[data-count='${i}']`)
          .forEach((e) => {
            e.classList.add("active");
          });
      }
    });
}

// Fav btn

let btnFav = document.querySelector(".fav");

if (btnFav) {
  btnFav.addEventListener("click", () => {
    btnFav.classList.toggle("active");
  });
}

// Interesting Filters

let filtersInteresting = document.querySelectorAll(".interesting__filter");

if (filtersInteresting[0]) {
  filtersInteresting.forEach((e) => {
    e.addEventListener("click", () => {
      if (e.classList.contains("active")) {
        e.classList.remove("active");
      } else {
        filtersInteresting.forEach((e) => {
          e.classList.remove("active");
        });

        e.classList.add("active");
      }
    });
  });
}

// Volume Swiper

let volumeCards = document.querySelectorAll(".volume__img");

if (volumeCards[0]) {
  let i = 0;
  let btnPrev = document.querySelector(".volume__btn-prev");
  let btnNext = document.querySelector(".volume__btn-next");
  let volumeCardsMini = document.querySelectorAll(".volume__img-mini");

  volumeCardsMini.forEach((e) => {
    e.addEventListener("click", () => {

      volumeCards[i].classList.remove("active");
      volumeCardsMini[i].classList.remove("active");
      i = e.getAttribute("data-count") - 1;
      volumeCards[i].classList.add("active");
      volumeCardsMini[i].classList.add("active");
    });
  });

  btnNext.addEventListener("click", () => {
    volumeCards[i].classList.remove("active");
    volumeCardsMini[i].classList.remove("active");
    if (i === volumeCards.length - 1) {
      i = 0;
    } else i++;

    volumeCards[i].classList.add("active");
    volumeCardsMini[i].classList.add("active");
  });

  btnPrev.addEventListener("click", () => {
    volumeCards[i].classList.remove("active");
    volumeCardsMini[i].classList.remove("active");
    if (i === 0) {
      i = volumeCards.length - 1;
    } else i--;

    volumeCards[i].classList.add("active");
    volumeCardsMini[i].classList.add("active");
  });
}

// Slider

let blockWithRange = document.querySelectorAll(".with-range");

if (blockWithRange[0]) {
  function changeDivPosition(min, max, value, div) {
    let maxPercent, minPercent;
    let windowWidth = window.innerWidth;

    if (windowWidth >= 1123) {
      maxPercent = 94.4;
      minPercent = 5.6;
    } else if (windowWidth >= 1001) {
      maxPercent = 92.7;
      minPercent = 7.3;
    } else if (windowWidth >= 900) {
      maxPercent = 96.3;
      minPercent = 3.7;
    } else if (windowWidth >= 800) {
      maxPercent = 95.7;
      minPercent = 4.3;
    } else if (windowWidth >= 695) {
      maxPercent = 95;
      minPercent = 5;
    } else if (windowWidth >= 600) {
      maxPercent = 97.3;
      minPercent = 2.7;
    } else if (windowWidth >= 500) {
      maxPercent = 96.6;
      minPercent = 3.4;
    } else if (windowWidth >= 376) {
      maxPercent = 95.4;
      minPercent = 4.6;
    }

    let percent = ((value - min) * maxPercent) / max + minPercent;
    div.setAttribute("style", `left: ${percent}%;`);
  }

  blockWithRange.forEach((e) => {
    let currInput = e.querySelector(".calculation__range-input");
    let currDiv = e.querySelector(".calculation__range-custom");
    let currInputText = e.querySelector(".calculation__number");
    let currMin = currInput.min;
    let currMax = currInput.max - currMin;
    let currValue = currInput.value;
    let startFocus;

    changeDivPosition(currMin, currMax, currValue, currDiv);

    currInput.addEventListener("input", () => {
      currValue = currInput.value;
      changeDivPosition(currMin, currMax, currValue, currDiv);

      if (currInputText.id === "sum") {
        currInputText.value = currValue + " ₽";
      } else if (currInputText.id === "time") {
        if (currValue == 21) {
          currInputText.value = currValue + " месяц";
        } else if (currValue > 21 && currValue < 25) {
          currInputText.value = currValue + " месяца";
        } else {
          currInputText.value = currValue + " месяцев";
        }
      } else if (currInputText.id === "precent") {
        currInputText.value = currValue + " %";
      }

      let allSum = blockWithRange[0].querySelector(
        ".calculation__range-input"
      ).value;
      let allTime = blockWithRange[1].querySelector(
        ".calculation__range-input"
      ).value;
      let allPercent = blockWithRange[2].querySelector(
        ".calculation__range-input"
      ).value;

      let paySum = Math.round((allSum * ((100 - allPercent) / 100)) / allTime);
      let tempSum = "";
      let spaceInd = 0;

      for (let i = `${paySum}`.length - 1; i >= 0; i--) {
        if (spaceInd === 3) {
          tempSum += " ";
          spaceInd = 0;
          i++;
        } else {
          tempSum += `${paySum}`[i];
          spaceInd++;
        }
      }
      paySum = tempSum.split("").reverse().join("");

      document.querySelector(".calculation__number.all-sum").value =
        paySum + " ₽";
    });

    currInputText.addEventListener("focus", () => {
      startFocus = currInputText.value;
      currInputText.value = startFocus.match("[0-9]*");
    });
    currInputText.addEventListener("blur", () => {
      if (currInputText.value === "") {
        currInputText.value = startFocus;
      } else {
        if (currInputText.id === "sum") {
          if (currInputText.value >= 10000 && currInputText.value <= 500000) {
            currInputText.value = currInputText.value + " ₽";
          } else {
            currInputText.value = startFocus;
          }
        } else if (currInputText.id === "time") {
          if (currInputText.value == 21) {
            currInputText.value = currInputText.value + " месяц";
          } else if (currInputText.value > 21 && currInputText.value < 25) {
            currInputText.value = currInputText.value + " месяца";
          } else if (currInputText.value > 5 && currInputText.value < 21) {
            currInputText.value = currInputText.value + " месяцев";
          } else {
            currInputText.value = startFocus;
          }
        } else if (currInputText.id === "precent") {
          if (currInputText.value >= 0 && currInputText.value <= 100) {
            currInputText.value = currInputText.value + " %";
          } else {
            currInputText.value = startFocus;
          }
        }
      }

      if (currInputText.value != startFocus) {
        currValue = currInputText.value.match("[0-9]*");
        currInput.value = currValue;
        changeDivPosition(currMin, currMax, currValue, currDiv);

        let allSum = blockWithRange[0].querySelector(
          ".calculation__range-input"
        ).value;
        let allTime = blockWithRange[1].querySelector(
          ".calculation__range-input"
        ).value;
        let allPercent = blockWithRange[2].querySelector(
          ".calculation__range-input"
        ).value;

        let paySum = Math.round(
          (allSum * ((100 - allPercent) / 100)) / allTime
        );
        let tempSum = "";
        let spaceInd = 0;

        for (let i = `${paySum}`.length - 1; i >= 0; i--) {
          if (spaceInd === 3) {
            tempSum += " ";
            spaceInd = 0;
            i++;
          } else {
            tempSum += `${paySum}`[i];
            spaceInd++;
          }
        }
        paySum = tempSum.split("").reverse().join("");

        document.querySelector(".calculation__number.all-sum").value =
          paySum + " ₽";
      }
    });

    currInputText.addEventListener("keydown", (event) => {
      if (
        Number.isNaN(+event.key) &&
        event.key != "Backspace" &&
        event.key != "Delete"
      )
        event.preventDefault();
    });
  });
}

// Production Img

let productCards = document.querySelectorAll(".gallery__card");

if (productCards[0]) {
  let imgPop = document.querySelector(".pop-img__img");
  let popOn = document.querySelector(".pop-img");

  productCards.forEach((e) => {
    e.addEventListener("click", () => {
      imgPop.setAttribute("src", e.querySelector("img").getAttribute("src"));
      popOn.classList.add("pop-on-full");
      document.body.classList.add("body-hidden");
    });
  });
  popOn.addEventListener("click", (event) => {
    if (event.target == popOn) {
      popOn.classList.remove("pop-on-full");
      document.body.classList.remove("body-hidden");
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      popOn.classList.remove("pop-on-full");
      document.body.classList.remove("body-hidden");
    }
  });
}

// Band

let bandCards = document.querySelectorAll(".band__card");

if (bandCards[0]) {
  let filterButtons = document.querySelectorAll(".band__label");
  let cardsContainer = document.querySelector(".band__container");
  let innerCards = cardsContainer.innerHTML;

  filterButtons.forEach((e) => {
    e.addEventListener("click", () => {
      let currRange = e.querySelector("input");
      if (!currRange.checked) {
        let currCity = currRange.value;
        cardsContainer.innerHTML = "";

        if (currCity == "Все") {
          cardsContainer.innerHTML = innerCards;
        } else {
          bandCards.forEach((e) => {
            if (
              e.querySelector(".band__subtitle").innerText.match(`${currCity}`)
            ) {
              cardsContainer.appendChild(e);
            }
          });
        }
      }
    });
  });
}

// Partners

if (document.body.classList.contains("partners")) {
  let partnersCards = document.querySelectorAll(".mates__card");
  let filters = document.querySelectorAll(".mates__label");
  let container = document.querySelector(".mates__container");
  let allInnerCards = container.innerHTML;

  filters.forEach((e) => {
    let currData = e.getAttribute("data-sort");
    e.addEventListener("click", () => {
      if (!e.querySelector("input").checked) {
        container.innerHTML = "";

        if (currData == "all") {
          container.innerHTML = allInnerCards;
        } else {
          partnersCards.forEach((e) => {
            if (
              e.getAttribute("data-sort").match(`${currData}`) ||
              e.getAttribute("data-sort") == "m f"
            ) {
              container.appendChild(e);
            }
          });
        }
      }
    });
  });
}

// Reviews

if (document.body.classList.contains("reviews")) {
  // img

  let clickCards = document.querySelectorAll(".mates__img-item");
  let popOn = document.querySelector(".pop-img");
  let imgPop = popOn.querySelector(".pop-img__img");

  clickCards.forEach((e) => {
    e.addEventListener("click", () => {
      let currImg = e.querySelector(".mates__img").getAttribute("src");
      imgPop.setAttribute("src", currImg);
      popOn.classList.add("pop-on-full");
      document.body.classList.add("body-hidden");
    });
    popOn.addEventListener("click", (event) => {
      if (event.target == popOn) {
        popOn.classList.remove("pop-on-full");
        document.body.classList.remove("body-hidden");
      }
    });
    document.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        popOn.classList.remove("pop-on-full");
        document.body.classList.remove("body-hidden");
      }
    });
  });

  // pop-on

  let popBtn = document.querySelectorAll(".preview-review__btn");
  let currPop = document.querySelector(".pop-review");
  let currClose = document.querySelector(".pop-review__close");

  callPop(popBtn, currPop, currClose);

  // filters

  let filtersBtn = document.querySelectorAll(".mates__label");
  let cardsContainer = document.querySelector(".mates__container");
  let startCards = cardsContainer.innerHTML;
  let allCards = document.querySelectorAll(".mates__card");

  filtersBtn.forEach((e) => {
    e.addEventListener("click", () => {
      if (!e.querySelector("input").checked) {
        cardsContainer.innerHTML = "";
        if (e.getAttribute("data-sort") == "all") {
          cardsContainer.innerHTML = startCards;
        } else {
          allCards.forEach((element) => {
            if (
              e.getAttribute("data-sort") == element.getAttribute("data-sort")
            ) {
              cardsContainer.appendChild(element);
            }
          });
        }
      }
    });
  });
}

// Mates Pagination

let matesNavigation = document.querySelector(".mates__navigation");

if (matesNavigation) {
  let index = 0;
  let navigationNum = document.querySelector(".mates__navigation-pages");
  let mateContainers = document.querySelectorAll(".mates__container");

  for (let i = 0; i < mateContainers.length; i++) {
    navigationNum.insertAdjacentHTML(
      "beforeend",
      `<button type="button" class="mates__navigation-num">${i + 1}</button>`
    );
  }

  let prevSlide = document.querySelector(".mates__navigation-prev");
  let nextSlide = document.querySelector(".mates__navigation-next");
  let allSlide = document.querySelector(".mates__navigation-all");
  let numSlide = document.querySelectorAll(".mates__navigation-num");
  let allActive = false;
  let startContainer;

  prevSlide.addEventListener("click", () => {
    mateContainers[index].classList.remove("active");
    index--;
    mateContainers[index].classList.add("active");
    nextSlide.disabled = false;
    if (index == 0) prevSlide.disabled = true;
  });

  nextSlide.addEventListener("click", () => {
    mateContainers[index].classList.remove("active");
    index++;
    mateContainers[index].classList.add("active");
    prevSlide.disabled = false;
    if (index == mateContainers.length - 1) nextSlide.disabled = true;
  });

  numSlide.forEach((e, ind) => {
    e.addEventListener("click", () => {
      mateContainers[index].classList.remove("active");
      index = ind;
      mateContainers[index].classList.add("active");

      if (ind == 0) {
        prevSlide.disabled = true;
      } else {
        prevSlide.disabled = false;
      }
      if (ind == mateContainers.length - 1) {
        nextSlide.disabled = true;
      } else {
        nextSlide.disabled = false;
      }
    });
  });

  allSlide.addEventListener("click", () => {
    if (allActive) {
      mateContainers[index].innerHTML = startContainer;
      allActive = false;
      if (index == 0) {
        prevSlide.disabled = true;
      } else {
        prevSlide.disabled = false;
      }
      if (index == mateContainers.length - 1) {
        nextSlide.disabled = true;
      } else {
        nextSlide.disabled = false;
      }
    } else {
      startContainer = mateContainers[index].innerHTML;
      prevSlide.disabled = true;
      nextSlide.disabled = true;
      numSlide.forEach((num) => {
        num.disabled = true;
      });
      allActive = true;
      mateContainers.forEach((element, ind) => {
        if (ind !== index) {
          mateContainers[index].insertAdjacentHTML(
            "beforeend",
            element.innerHTML
          );
        }
      });
    }
  });
}

// Useful

if (document.body.classList.contains("useful")) {
  let filtersBtn = document.querySelectorAll(".mates__label");
  let cardsContainer = document.querySelector(".mates__container");
  let startCards = cardsContainer.innerHTML;
  let allCards = document.querySelectorAll(".mates__card");

  filtersBtn.forEach((e) => {
    e.addEventListener("click", () => {
      if (!e.querySelector("input").checked) {
        cardsContainer.innerHTML = "";
        if (e.getAttribute("data-sort") == "all") {
          cardsContainer.innerHTML = startCards;
        } else {
          allCards.forEach((element) => {
            if (
              e.getAttribute("data-sort") ==
                element.getAttribute("data-sort") ||
              element.getAttribute("data-sort") == "a"
            ) {
              cardsContainer.appendChild(element);
            }
          });
        }
      }
    });
  });
}

// Copy Info

let btnCopy = document.querySelectorAll(".copy-btn");

if (btnCopy[0]) {
  btnCopy.forEach((e) => {
    e.addEventListener("click", () => {
      navigator.clipboard.writeText(e.innerText);
    });
  });
}
