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