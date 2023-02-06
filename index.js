const $carousel = document.querySelector('.js_carousel_gestaoCentral');
new Glider($carousel,{
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows:{
        prev: ".js_carousel_gestaoCentral_button_prev",
        next: ".js_carousel_gestaoCentral_button_next",
    },
    scrollLock: true,
})

const $carousel2 = document.querySelector('.js_carousel_gestaoDePedidos');
new Glider($carousel2,{
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows:{
        prev: ".js_carousel_gestaoDePedidos_button_prev",
        next: ".js_carousel_gestaoDePedidos_button_next",
    },
    scrollLock: true,
})

const $carousel3 = document.querySelector('.js_carousel_clients');
new Glider($carousel3,{
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: true,
    arrows:{
        prev: ".js_carousel_clients_button_prev",
        next: ".js_carousel_clients_button_next",
    },
    scrollLock: true,
})