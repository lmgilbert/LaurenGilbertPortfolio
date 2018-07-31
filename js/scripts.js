$(document).ready(function(){

        $('.nav-link, #logo, index.html#issues').click(function(e){
            e.preventDefault();
            var target = $(this).attr('href');
            var target_div = $(target);
            $('html,body').animate({scrollTop: $(target_div).offset().top - $("nav").height()}, 'slow');
        });

    });

    $(window).on('load', function() {

    });

    $(window).scroll(function(){
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

$(function() {
    $('.jscroll').jscroll();    
});