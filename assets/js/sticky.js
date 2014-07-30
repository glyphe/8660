$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 117) {
        $('.nav-main').fadeOut();
        $('.nav-collapsed').fadeIn();
    } else {
        $('.nav-collapsed').fadeOut();
        $('.nav-main').fadeIn();
    }
});

// $(function() {

// 	$('.nav-collapsed').on('click', function() {
// 		$('.nav-collapsed').fadeToggle();
// 		$('.nav-main').fadeToggle();
// 	});
// });