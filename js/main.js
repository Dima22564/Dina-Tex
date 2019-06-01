$(document).ready(function () {
    // All goods
    $('header .allGoods').hover(function (e) {
        e.stopPropagation();
        $('header menu').slideDown();
    });

    $('header menu').hover(function (e) {
        e.stopPropagation();
        $(this).show();
    }, function (e) {
        e.stopPropagation();
        $(this).slideUp();
    });

    $('header .nav-links div a').hover(function (e) {
        e.stopPropagation();
        $('header menu').slideUp();
    })

    $('header .menu-link').hover(function (e) {
        e.stopPropagation();
        $('header menu').slideUp();
    });


    // Burger
    $('header .menu-link').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('header .menu-hide').toggleClass('active-menu');
        $('header menu').slideUp();
    });


    // Oreder link
    $('.orderLink').click(function (e) {
        // e.preventDefault();
        e.stopPropagation();
        var id = $(this).attr('href');
        var target = $(id).offset().top;

        $('html').animate({
            scrollTop: target
        }, 600);
    });


    // All goods mobile
    $('header .allGoods').on('touchstart', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('header menu').slideToggle();
        $('header .menu-hide').removeClass('active-menu');
    });

    $('header .allGoods').click(function (e) {
        e.preventDefault();
    });



});