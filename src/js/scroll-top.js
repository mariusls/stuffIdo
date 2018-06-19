$(document).ready(function() {

    $("#to-top-button").click(function () {
        var body = $("html, body");
        body.stop().animate({scrollTop:0}, 150);
    });



    /* $("#to-top-button").click(function () {

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }); */
});