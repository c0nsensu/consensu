const $carousel = document.querySelector(".js_carousel_gestaoCentral");
new Glider($carousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  arrows: {
    prev: ".js_carousel_gestaoCentral_button_prev",
    next: ".js_carousel_gestaoCentral_button_next",
  },
  scrollLock: true,
});

const $carouselCards = document.querySelector(".js_carousel_cards");
new Glider($carouselCards, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  arrows: {
    prev: ".js_carousel_cards_button_prev",
    next: ".js_carousel_cards_button_next",
  },
  scrollLock: true,
});

const $carousel2 = document.querySelector(".js_carousel_gestaoDePedidos");
new Glider($carousel2, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  arrows: {
    prev: ".js_carousel_gestaoDePedidos_button_prev",
    next: ".js_carousel_gestaoDePedidos_button_next",
  },
  scrollLock: true,
});

const $carouselCardsGestaoPedidos = document.querySelector(
  ".js_carousel_cards_gestaopedidos"
);
new Glider($carouselCardsGestaoPedidos, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  arrows: {
    prev: ".js_carousel_cardsGestaoPedidos_button_prev",
    next: ".js_carousel_cardsGestaoPedidos_button_next",
  },
  scrollLock: true,
});

const $carousel3 = document.querySelector(".js_carousel_clients");
new Glider($carousel3, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  arrows: {
    prev: ".js_carousel_clients_button_prev",
    next: ".js_carousel_clients_button_next",
  },
  scrollLock: true,
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: true,
        arrows: {
          prev: ".js_carousel_clients_button_prev",
          next: ".js_carousel_clients_button_next",
        },
      },
    },
  ],
});
