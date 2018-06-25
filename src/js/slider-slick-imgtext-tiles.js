$(document).ready(function() {
    $('.slider-imgtext-tiles').slick({
        dots: false,
        nextArrow: '<span class="slider-arrow-next glyphicon glyphicon-upload"></span>',
        prevArrow: '<span class="slider-arrow-prev glyphicon glyphicon-download"></span>',
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },

            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },

            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});

