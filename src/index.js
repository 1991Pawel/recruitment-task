import './styles/main.scss';

import Swiper, { Navigation, Autoplay } from 'swiper';

Swiper.use([Autoplay, Navigation]);
// import Swiper styles
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

swiper.autoplay.start();

