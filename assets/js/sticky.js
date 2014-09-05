$(function() {
    if (window.matchMedia('(max-width: 620px)').matches) {

		// Einblenden des Menüs auf Handhelds
		$(function() {
			$('#nav-link').on('click', function() {
				$('.nav-main').fadeToggle();
			});
		});

    } else {

		// Nav-Wechsel bei größeren Screens
		$(document).scroll(function () {
		    var y = $(this).scrollTop();
		    if (y > 117) {
		        // $('.nav-main').fadeOut(600);
		        $('.nav-collapsed').fadeIn(600);
		    } else {
		        $('.nav-collapsed').fadeOut(600).delay(50);
		        // $('.nav-main').fadeIn(600);
		    }
		});

    }
});


// smooth scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});