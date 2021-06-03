$(document).ready(function() {
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
    },
    310:{
      slidesPerView:1,
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
  $("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
      opts : {
        caption : 'First caption',
        thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
      }
    },
    {
      src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
      opts : {
        caption : 'Second caption',
        thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
      }
    }

  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});
});