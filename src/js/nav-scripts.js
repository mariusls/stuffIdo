$(document).ready(function() {

    if ($(window).width() > 991) {
        $('#nav-search-button').click(function(e) {
            if ($('#search-input-container').hasClass('hdn')) {
                e.preventDefault();

                $('#search-input-container').removeClass('hdn');
            }
        });

        $('')

        // Close search bar if mouseclick outside of it

        if (!$('#search-input-container').hasClass('hdn')) {
            $(document).mouseup(function (e) {
                var container = $('#navSearchInput');
                //console.log("hei");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    console.log("hei");
                    $('#search-input-container').addClass('hdn');
                }
            });
        }
        

        $('#nav-search-close-button').click(function(e) {
            e.preventDefault();
            $('#search-input-container').addClass('hdn');
        });
    }
});