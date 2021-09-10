jQuery(function(){
    //header resizing
    const mvHeight = $('#mv').outerHeight();

    $(window).on('scroll', function () {
        const scrollTop = $(window).scrollTop();
        if (scrollTop >= mvHeight) {
            $('#header').addClass('st__resize');
            $('#gnav').addClass('st__translate');
            $('.gnav__subnav').addClass('st__subresize');
        } else {
            $('#header').removeClass('st__resize');
            $('#gnav').removeClass('st__translate');
            $('.gnav__subnav').removeClass('st__subresize');
        }
    });

});