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

  // sliders all

  if ($(".why-slider").length > 0) {
    const sliders = document.querySelectorAll(".why-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).parents(".why-section").find(".btnSwiperNext")[0];
          navPrev = $(slider).parents(".why-section").find(".btnSwiperPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 16,
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
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
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
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

  if ($(".reviews-slider--v2").length > 0) {
    const swiper = new Swiper(".reviews-slider--v2", {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        prevEl: ".reviews-slider--v2__btns.btnSwiperPrev",
        nextEl: ".reviews-slider--v2__btns.btnSwiperNext",
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

  if ($(".portfolio-images-slider").length > 0) {
    const swiper = new Swiper(".portfolio-images-slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        prevEl: ".portfolio-images-slider__btns.btnSwiperPrev",
        nextEl: ".portfolio-images-slider__btns.btnSwiperNext",
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

  if ($(".history-slider").length > 0) {
    const swiper = new Swiper(".history-slider", {
      slidesPerView: 4,
      spaceBetween: 45,
      navigation: {
        prevEl: ".history-slider__btns.btnSwiperPrev",
        nextEl: ".history-slider__btns.btnSwiperNext",
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
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 45,
        },
      },
    });
  }

  if ($(".teams-slider").length > 0) {
    const swiper = new Swiper(".teams-slider", {
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        prevEl: ".teams-slider__btns.btnSwiperPrev",
        nextEl: ".teams-slider__btns.btnSwiperNext",
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
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($(".article-slider").length > 0) {
    const swiper = new Swiper(".article-slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        prevEl: ".article-slider__btns.btnSwiperPrev",
        nextEl: ".article-slider__btns.btnSwiperNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.25,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1.25,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($(".product-slider-big").length > 0) {
    const galleryThumbs = new Swiper(".product-slider-small", {
      slidesPerView: 5,
      spaceBetween: 13,
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 13,
        },
      },
    });

    const swiper = new Swiper(".product-slider-big", {
      slidesPerView: 1,
      spaceBetween: 12,
      navigation: {
        prevEl: ".product-slider-big .btnSwiperPrev",
        nextEl: ".product-slider-big .btnSwiperNext",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }

  if ($(".simple-product-slider").length > 0) {
    const sliders = document.querySelectorAll(".simple-product-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider)
            .parents(".slider-wrapper")
            .find(".btnSwiperNext")[0];
          navPrev = $(slider)
            .parents(".slider-wrapper")
            .find(".btnSwiperPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 4,
            spaceBetween: 19,
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
            breakpoints: {
              0: {
                slidesPerView: 1.25,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 16,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 19,
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

  // /sliders all

  if ($(".btn-show-tags").length > 0) {
    $(".btn-show-tags").on("click", function (event) {
      const self = $(this);
      const parents = self.parents(".tags-section");
      const list = parents.find(".tags-list");

      const text = self.data("default-text");
      const textActive = self.data("active-text");

      event.preventDefault();

      if (self.hasClass("active")) {
        self.removeClass("active").text(text);
        list.stop().slideUp();
      } else {
        self.addClass("active").text(textActive);
        list.stop().slideDown();
      }
    });
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

  // filter

  if ($(".overlay").length > 0) {
    $(".overlay").on("click", function () {
      $(".filter").removeClass("opened");
      $(".sort-blocks-mobile").removeClass("opened");
      $(".overlay").removeClass("visible");
    });
  }

  if ($(".btn-filter-mobile").length > 0) {
    $(".btn-filter-mobile").on("click", function () {
      $(".filter").toggleClass("opened");
      $(".overlay").toggleClass("visible");
    });
  }

  if ($(".btn-sort-mobile").length > 0) {
    $(".btn-sort-mobile").on("click", function () {
      $(".sort-blocks-mobile").toggleClass("opened");
      $(".overlay").toggleClass("visible");
    });
  }

  if ($(".filter-close").length > 0) {
    $(".filter-close").on("click", function () {
      $(".filter").removeClass("opened");
      $(".sort-blocks-mobile").removeClass("opened");
      $(".overlay").removeClass("visible");
    });
  }

  if ($(".filter-title").length > 0) {
    $(".filter-title").on("click", function (event) {
      const self = $(this);
      const parents = self.parents(".filrter-row");
      const content = parents.find(".filter-content");

      event.preventDefault();

      if (self.hasClass("opened")) {
        self.removeClass("opened");
        content.stop().slideUp();
      } else {
        self.addClass("opened");
        content.stop().slideDown();
      }
    });
  }

  if ($(".filter-btn-clear-search").length > 0) {
    $(".filter-btn-clear-search").map(function () {
      const btn = $(this);
      const parents = btn.parents(".filter__search");
      const input = parents.find("input");

      btn.on("click", () => {
        input.val("").focus().trigger("keyup");
      });

      input.on("input", (event) => {
        $(event.target).val().length > 0
          ? btn.addClass("visible")
          : btn.removeClass("visible");
      });
    });
  }

  if ($(".filter-list__all").length > 0) {
    $(".filter-list__all").on("click", function () {
      const self = $(this);
      const text = self.data("default-text");
      const textActive = self.data("active-text");

      if (self.hasClass("opened")) {
        self
          .removeClass("opened")
          .text(text)
          .siblings(".filter-list")
          .find(".filter-item--hide")
          .addClass("hide");
      } else {
        self
          .addClass("opened")
          .text(textActive)
          .siblings(".filter-list")
          .find(".filter-item--hide")
          .removeClass("hide");
      }
    });
  }

  if ($(".filter__search").length > 0) {
    $(".filter__search input").on("keyup", function () {
      let input = $(this);
      let inputValue = input.val().toLowerCase();
      let parents = input.parents(".filter-content");

      if (input.val().trim() !== "") {
        parents.addClass("isSearch");
        input.next(".filter-btn-clear-search").show();
      } else {
        parents.removeClass("isSearch");
        input.next(".filter-btn-clear-search").hide();
      }

      parents.find(".filter-item").each(function () {
        let labelText = $(this).find("label").text().toLowerCase();

        if (labelText.includes(inputValue)) {
          $(this).addClass("visible").show();
        } else {
          $(this).removeClass("visible").hide();
        }
      });
    });
  }

  if ($(".range").length > 0) {
    const rangePrice = $(".rangePrice");
    const rangePriceMin = 0;
    const rangePriceMax = 100000000;
    const rangePriceFrom = 50000000;

    rangePrice.ionRangeSlider({
      min: rangePriceMin,
      max: rangePriceMax,
      from: rangePriceFrom,
      step: 1,
      // hide_from_to: true,

      onStart: function () {},

      onChange: function (data) {},
    });
  }

  // //filter

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

  if ($(".js-hidden-text").length > 0) {
    $(".js-hidden-text").each(function () {
      $(this).on("click", function (event) {
        let parents = $(this).parents(".simple-section");
        let textHidden = parents.find(".text-hidden");

        event.preventDefault(0);
        textHidden.stop().slideDown();
        $(this).hide(0);
      });
    });
  }
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
    } else {
      $(".header").removeClass("isScroll");
    }

    if (currentScroll > heightHeaderTop && window.deltaY < 0) {
      $(".header").removeClass("isScroll");
    }
  });
}

function scrollTouch() {
  let previousY = 0;
  let scrollingUp = false;

  document.addEventListener("touchstart", (event) => {
    previousY = event.touches[0].clientY;
  });

  document.addEventListener("touchmove", (event) => {
    const currentY = event.touches[0].clientY;

    if (currentY < previousY) {
      scrollingUp = true;
      $(".header").addClass("isScroll");
    } else {
      scrollingUp = false;
      $(".header").removeClass("isScroll");
    }

    previousY = currentY;
  });
}

function clearInput(input) {
  input.val("").focus().trigger("input");
}
