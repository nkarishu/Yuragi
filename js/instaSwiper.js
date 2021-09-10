jQuery(function(){
    //insta swiper
    const mySwiper01 = new Swiper('.swiper01__container', {
        loop: true,
        loopAdditionalSlides: 6,
        freeMode: true,
        speed: 10000,
        slidesPerView: 5,
        spaceBetween: 45,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
    });

    $(".swiper-mv").hover(function () {
        (this).swiper.autoplay.start();
    });

});