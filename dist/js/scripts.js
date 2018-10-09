/* Gulp import syntax */
/* $(document).ready(function() {
    if ($(window).width() > 767) {
        var finalMargin = ($('.front-textarea').height() / 2 ) + 100;

        $('.banner-text-front').css("margin-bottom", finalMargin);
    }
}); */
if (document.querySelector('.hamburger') !== null){
    document.querySelector(".hamburger").addEventListener("click", function () {
        this.classList.toggle("is-active");
    }, false);
}
$(document).ready(function() {
    
    // Check to see if on indexpage, if so, add class to change headerstyle
    if(window.location.pathname == "/") {
        $('.header-main').addClass('background-style');
        $('.main-logo img').attr("src", "/images/itumxlogo4.PNG")
    }
});
$(document).ready(function() {

    if ($(window).width() > 991) {
        $('#nav-search-button').click(function(e) {
            if ($('#search-input-container').hasClass('hdn')) {
                e.preventDefault();

                $('#search-input-container').removeClass('hdn');
                $('#navigation-list').addClass('search-open');
            }
        });

        $('')

        // Close search bar if mouseclick outside of it (currently also applies for clicks on the close search button)

        $(document).mouseup(function(e) {
            if (!$('#search-input-container').hasClass('hdn')) {
                var container = $('#navSearchInput');
                //var closeBtn = $('#nav-search-close-button');
                if (!container.is(e.target)) {
                    //console.log("test");
                    $('#search-input-container').addClass('hdn');
                    $('#navigation-list').removeClass('search-open');
                }
            }
        });
        
        // Currently not in use, method above not perfected

        // $('#nav-search-close-button').click(function(e) {
        //     //e.preventDefault();
        //     $('#search-input-container').addClass('hdn');
        //     $('#navigation-list').removeClass('search-open');
        // });
    }    
});
$(document).ready(function() {
    $('.slider-img-tiles').slick({
        dots: false,
        nextArrow: '<span class="slider-arrow-next glyphicon glyphicon-upload"></span>',
        prevArrow: '<span class="slider-arrow-prev glyphicon glyphicon-download"></span>',
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },

            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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


$(document).ready(function() {

    if ($(window).width() > 991) {
        $('#scroll-down-button').show();
    }
   

    // Show scroll down button if currently at the top of the page, else hide
    $(window).scroll(function() {
        if ($(this).scrollTop() < 200) {
            $('#scroll-down-button').fadeIn();
        }
        else {
            $('#scroll-down-button').fadeOut();
        }
    });


    // Scroll down equal to top banners height if clicked
    $('#scroll-down-button').click(function() {
        var height = $('.banner-header-background').outerHeight();
        var body = $("html, body");

        body.stop().animate({scrollTop:height}, 300);
    });

    // Scroll to top button
    $("#to-top-button").click(function () {
        var body = $("html, body");
        body.stop().animate({scrollTop:0}, 150);
    });
});