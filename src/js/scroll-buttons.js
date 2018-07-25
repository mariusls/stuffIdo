$(document).ready(function() {

    // Show scroll down button if currently at the top of the page, else hide
    $(window).scroll(function() {
        if ($(this).scrollTop() < 1) {
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