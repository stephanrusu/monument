$(document).ready(function() {
	$('#myCarousel').carousel({
		pause: true,
		interval: 5000
	});
	$('#quote-carousel').carousel({
		pause: true,
		interval: 5000
	});
    $(".navicon,.nav-menu-overlay,.logo").click(function(){
        $(".nav-menu-overlay").toggleClass("nav-is-open");
        $(".nav-menu").toggleClass("nav-closed");
        $(".navicon").toggleClass("hidden");
    });
    $('.nav-menu a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {                   
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    setTimeout( function() {
                        $(".nav-menu-overlay").toggleClass("nav-is-open");
                        $(".nav-menu").toggleClass("nav-closed");
                        $(".navicon").toggleClass("hidden");
                    }, 500 );
                    return false;
                }
            }
        });
	// Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label'); 
                } else {
                    $parent.removeClass('js-hide-label');   
                }                     
            } 
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } 
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } 
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        });
    }
});