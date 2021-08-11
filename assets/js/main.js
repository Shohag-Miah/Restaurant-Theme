$(document).ready(function() {

    var mixer = mixitup('.menu-mixitup-item-wrap');
    $(".owl-carousel").owlCarousel({
        loo: true,
        autoplay: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1024: {
                items: 2
            },
        }
    });
});