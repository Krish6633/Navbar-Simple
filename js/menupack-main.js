(function ($) {
"use strict";

/* slicknav_menu */
$(document).ready(function(){
	
	$('#nav-1').slicknav();
	$('#nav-2').slicknav();
	$('#nav-3').slicknav();
	$('#nav-4').slicknav();
	$('#nav-5').slicknav();
	$('#nav-6').slicknav();
	$('#nav-7').slicknav();
	$('#nav-8').slicknav();
	$('#nav-9').slicknav();
	$('#nav-10').slicknav();	
	$('#nav-11').slicknav();
	$('#nav-12').slicknav();
	$('#nav-13').slicknav();
	$('#nav-14').slicknav();
	$('#nav-15').slicknav();
	$('#nav-16').slicknav();
	$('#nav-17').slicknav();	
	$('#nav-18').slicknav();
	$('#nav-19').slicknav();
	$('#nav-20').slicknav();
	$('#nav-21').slicknav();
	$('#nav-22').slicknav();
	$(".slicknav_menu").appendTo(".bg-2");
	$(".slicknav_menu").appendTo(".mobile-menu");
	$('#nav').slicknav();
	$(".slicknav_menu").appendTo(".menu-pack");
	
$('.toggle-menu').click(function(){
	$('.exo-menu').toggleClass('display');
	
 });	
	

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
 });	
	
	
	

$('#slide-toggle').click(function() {
   $(this).toggleClass('active');
   $('#side-nav').toggleClass('open');
 });	
	

/* Preloader */ 
    $(window).on('load', function () {
        var preLoder = $(".hola");
        preLoder.fadeOut(1000);
    });

	
	/* Scroll Up */
$.scrollUp({
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade',
	scrollText: '<i class="fa fa-angle-up"></i>',
});



// /* header_sticky */
 // $(window).on('scroll',function() {
   // var scroll = $(window).scrollTop();
   // if (scroll < 150) {
    // $("#header-sticky").removeClass("scroll-header");
   // }else{
    // $("#header-sticky").addClass("scroll-header");
   // }
 // });
 
  
 
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
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
 

  
}) ; 

})(jQuery);