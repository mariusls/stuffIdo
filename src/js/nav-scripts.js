$(document).ready(function() {

    if ($(window).width() > 1199) {
        $('#nav-search-button').click(function(e) {
            if ($('#search-input-container').hasClass('hdn')) {
                e.preventDefault();

                $('#search-input-container').removeClass('hdn');
            }
        });

        $('')

        // Close search bar if mouseclick outside of it
        /*if (!$('#search-input-container').hasClass('hidden')) {
            $(document).mouseup(function (e) {
                var container = $('#navSearchInput');

                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    $('#search-input-container').addClass('hidden');
                }
            });
        }*/

        $('#nav-search-close-button').click(function(e) {
            e.preventDefault();
            $('#search-input-container').addClass('hdn');
        });
    }
});