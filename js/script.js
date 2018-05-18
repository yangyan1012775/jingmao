;
(function($) {
    "use strict";
    var navbar = $('.main_menu_area');
    var nav_offset_top = $('.main_menu_area').offset().top + 67;
    /*-------------------------------------------------------------------------------
      Navbar 
    -------------------------------------------------------------------------------*/
    navbar.affix({
        offset: {
            top: nav_offset_top,
        }
    });
    navbar.on('affix.bs.affix', function() {
        if (!navbar.hasClass('affix')) {
            navbar.addClass('animated slideInDown');
        }
    });
    navbar.on('affixed-top.bs.affix', function() {
        navbar.removeClass('animated slideInDown');
    });
    /*----------------------------------------------------*/



})(jQuery);
