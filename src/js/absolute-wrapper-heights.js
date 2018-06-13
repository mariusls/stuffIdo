$(document).ready(function() {
    if ($(window).width() > 767) {
        var finalMargin = ($('.front-textarea').height() / 2 ) + 100;

        $('.banner-text-front').css("margin-bottom", finalMargin);
    }
});