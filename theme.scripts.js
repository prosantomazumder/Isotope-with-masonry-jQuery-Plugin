(function ($) {
    "use strict";

    /**!-------------------------------------------
        01. PRELOADER
    --------------------------------------------**/
    var $mainwindow = $(window);
    $mainwindow.on('load', function() {

        $("#loader").fadeOut(1000);
    });
    
    /**!-------------------------------------------
        01. ISOTOPE FILTER
    --------------------------------------------**/
    //images have loaded activation 
    $('.portfolio-area').imagesLoaded(function() {
        
        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        //init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });
    });
    
    //for menu active class
    $('.portfolio-menu > button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    
})(jQuery);