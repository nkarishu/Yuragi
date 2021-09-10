jQuery(function(){
     //mv swiper

    setTimeout(function () {
        const mySwiperMv = new Swiper('.swipermv__container', {
            loop: true,
            speed: 1000,
            direction: 'horizontal',
            effect: 'fade',
            autoplay: {
                delay: 5000,
            }
        });
    }, 2000);
    
});