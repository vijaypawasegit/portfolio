// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  jQuery(document).ready(function() {
    /******************************
       BOTTOM SCROLL TOP BUTTON
    ******************************/
 
   // declare variable
     var scrollTop = $(".scrollTop");
 
     $(window).scroll(function() {
     // declare variable
     var topPos = $(this).scrollTop();
 
     // if user scrolls down - show scroll to top button
     if (topPos > 100) {
         $(scrollTop).css("opacity", "1");
 
     } else {
         $(scrollTop).css("opacity", "0");
     }
 
     }); // scroll END
 
     //Click event to scroll to top
     $(scrollTop).click(function() {
     $('html, body').animate({
         scrollTop: 0
     }, 800);
     return false;
 
     }); // click() scroll top EMD
 });