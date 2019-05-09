$(function() {
	$('.hamburger').on('click', function () {
	    $(this).toggleClass('slideout-open');
	    $('#panel').toggleClass('slideout-open');
	    $('#menu').toggleClass('slideout-open');
	    $('body').toggleClass('slideout-open');
    });

});