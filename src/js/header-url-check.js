$(document).ready(function() {
    if(window.location.href.indexOf("articlepage") > -1) {
        console.log("Dette er artikkelsiden");
        $('.header-main').addClass('background-style');
    }
});