jQuery(function(){
    //fadein
    const viewHeight = $(window).height();

    $(window).on('scroll',function(){
        const ST =  $(window).scrollTop();

        //fadein
        $('.fadein').each(function(){
            const target = $(this).offset().top;

            if (ST >= target - (viewHeight / 1.2)) {
                $(this).addClass('show');
            }
        });

    });

});