$(document).ready(function() {
    
    // Check to see if on indexpage, if so, add class to change headerstyle
    if(window.location.pathname == "/") {
        $('.header-main').addClass('background-style');
        $('.main-logo img').attr("src", "/images/itumxlogo4.PNG")
    }
});