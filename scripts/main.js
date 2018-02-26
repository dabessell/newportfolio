
$(document).ready(function(){
  $(window).bind('scroll', function() {
   var navHeight = $( window ).height() - 39;
	 if ($(window).scrollTop() > navHeight) {
		 $('nav').addClass('nav-fixed');
	 }
	 else {
		 $('nav').removeClass('nav-fixed');
	 }
});
});
