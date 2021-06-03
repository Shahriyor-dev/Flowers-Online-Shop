const flowersSlider = new Swiper('.flowers-slider', {
  // Параметры слайдера
  loop: true,
  slidesPerView: 6,

  // Подключение стрелок слайдера
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 // Адаптивные брейкпоинты
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 3,
    }
    310:{
      slidesPerView:1;
    }
  }

});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Параметры слайдера
  loop: true,
  slidesPerView: 1,

  // Подключение стрелок слайдера
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});