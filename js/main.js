$(document).ready(function () {
  if (!("ontouchstart" in window)) {
    scrollDesktop();
  } else {
    scrollTouch();
  }

  if ($(".header-top__search").length > 0) {
    const btn = $(".header-top__search");
    const parents = btn.parents(".search-block");
    const inputBlock = parents.find(".search-block__input");
    const input = inputBlock.find(".input");
    const btnClearInput = inputBlock.find(".btn-clear-search");

    btn.on("click", () => {
      inputBlock.toggleClass("opened");
      input.focus();
    });

    btnClearInput.on("click", () => {
      clearInput(input);
    });

    input.on("input", (event) => {
      $(event.target).val().length > 0
        ? btnClearInput.addClass("visible")
        : btnClearInput.removeClass("visible");
    });
  }

  if ($(".burger").length > 0) {
    let burger = $(".burger");
    let menu = $(".menu");
    let body = $("body");
    let burgerClose = $(".burger-close");

    burgerClose.on("click", function () {
      handleClick();
    });

    burger.on("click", function () {
      handleClick();
    });

    function handleClick() {
      if (body.hasClass("isOpenMenu")) {
        closeMenu();
      } else {
        body.addClass("isOpenMenu");
        menu.addClass("opened").stop().slideDown();
      }
    }

    function closeMenu() {
      body.removeClass("isOpenMenu");
      menu.removeClass("opened").stop().slideUp();

      setTimeout(() => {
        menu.attr("style", "");
      }, 500);
    }

    $(window).resize(function () {
      if (body.hasClass("isOpenMenu")) {
        $(window).width() >= 1200 && closeMenu();
      }
    });
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  // sliders

  if ($(".why-slider").length > 0) {
    const swiper = new Swiper(".why-slider", {
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".why-slider .btnSwiperPrev",
        nextEl: ".why-slider .btnSwiperNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        1550: {
          slidesPerView: 5,
          spaceBetween: 28,
        },
      },
    });
  }

  if ($(".action-slider").length > 0) {
    const swiper = new Swiper(".action-slider", {
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        prevEl: ".action-slider__btns.btnSwiperPrev",
        nextEl: ".action-slider__btns.btnSwiperNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.25,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($(".brands-slider").length > 0) {
    const swiper = new Swiper(".brands-slider", {
      slidesPerView: 5,
      spaceBetween: 100,
      navigation: {
        prevEl: ".brands-slider .btnSwiperPrev",
        nextEl: ".brands-slider .btnSwiperNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        390: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 100,
        },
      },
    });
  }

  if ($(".reviews-slider").length > 0) {
    const swiper = new Swiper(".reviews-slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        prevEl: ".reviews-slider__btns.btnSwiperPrev",
        nextEl: ".reviews-slider__btns.btnSwiperNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.25,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($(".portfolio-slider").length > 0) {
    const swiper = new Swiper(".portfolio-slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        prevEl: ".portfolio-slider__btns.btnSwiperPrev",
        nextEl: ".portfolio-slider__btns.btnSwiperNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.25,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  // /sliders

  // base

  if ($(".grettings-main-slider").length > 0) {
    const swiper = new Swiper(".grettings-main-slider", {
      slidesPerView: 1,
      spaceBetween: 16,
      effect: "fade",
      fadeEffect: { crossFade: true },
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".grettings-main-slider .btnSwiperPrev",
        nextEl: ".grettings-main-slider .btnSwiperNext",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
      },
    });
  }

  if ($(".faq-list").length > 0) {
    $(".faq-section__quest").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).parents(".faq-item").removeClass("opened");
        $(this).next(".faq-section__answer").stop().slideUp();
      } else {
        $(".faq-item").removeClass("opened");
        $(".faq-section__quest").removeClass("active");
        $(".faq-section__answer").stop().slideUp();

        $(this).parents(".faq-item").addClass("opened");
        $(this).addClass("active");
        $(this).next(".faq-section__answer").stop().slideDown();
      }
    });
  }

  if ($(".subcategories-slider").length > 0) {
    const sliders = document.querySelectorAll(".subcategories-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider)
            .parents(".subcategories")
            .find(".btnSwiperNext")[0];
          navPrev = $(slider)
            .parents(".subcategories")
            .find(".btnSwiperPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 24,
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".sort-block").length > 0) {
    $(".sort-block").on("click", function () {
      if ($(this).hasClass("opened")) {
        $(this)
          .removeClass("opened")
          .find(".sort-block__list")
          .stop()
          .slideUp();
      } else {
        let self = $(this);

        self.addClass("opened").find(".sort-block__list").stop().slideDown();

        $(document).mouseup(function (e) {
          if (!self.is(e.target) && self.has(e.target).length === 0) {
            self
              .removeClass("opened")
              .find(".sort-block__list")
              .stop()
              .slideUp();
          }
        });
      }
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($("[data-aos]").length > 0) {
    if ($(window).width() < 1280) {
      AOS.init({
        disable: true,
      });
    } else {
      AOS.init({
        once: true,
      });
    }
  }
  // /base
});

function scrollDesktop() {
  $(window).on("wheel", function (event) {
    window.deltaY = event.originalEvent.deltaY;
  });

  $(window).on("scroll", function () {
    let currentScroll = $(window).scrollTop();
    let heightHeaderTop = $(".header-top").outerHeight() - 30;

    // console.log("currentScroll", currentScroll);

    if (currentScroll > heightHeaderTop) {
      $(".header").addClass("isScroll");
    }

    if (currentScroll > heightHeaderTop) {
      $(".header").addClass("isScroll");
    } else {
      $(".header").removeClass("isScroll");
    }

    if (currentScroll > heightHeaderTop && window.deltaY < 0) {
      $(".header").removeClass("isScroll");
    }
  });
}

function scrollTouch() {
  let lastY = 0;
  let lastDirection = null;

  document.addEventListener("touchstart", (event) => {
    lastY = event.touches[0].clientY;
  });

  document.addEventListener("touchmove", (event) => {
    let currentY = event.touches[0].clientY;
    let direction = currentY > lastY ? "up" : "down";

    // Игнорируем незначительные движения
    if (Math.abs(currentY - lastY) < 10) return;

    if (direction !== lastDirection) {
      if (direction === "up") {
        $(".header").removeClass("isScroll");
      } else {
        $(".header").addClass("isScroll");
      }
      lastDirection = direction;
    }

    lastY = currentY;
  });
}

function clearInput(input) {
  input.val("").focus().trigger("input");
}
