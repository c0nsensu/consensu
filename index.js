var posicaoAntiga = window.scrollY;

window.onscroll = function () {
  var posicaoatual = window.scrollY;
  if (posicaoAntiga > posicaoatual) {
    document.getElementById("nav").classList.add("activeNav");
    document.getElementById("nav").style.top = "0";
    if (posicaoatual == 0) {
      document.getElementById("nav").classList.remove("activeNav");
    }
  } else {
    //document.getElementById('nav').classList.remove('activeNav')
    document.getElementById("nav").style.top = "-100px";
  }
  posicaoAntiga = posicaoatual;
};

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
