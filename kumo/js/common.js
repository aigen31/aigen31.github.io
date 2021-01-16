$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items:1,
		loop:true,
		// autoplay:true,
		// autoplayTimeout:5000,
		nav:true,
		dots:true,
		navText:[
			'<img src="img/nav-prev.svg">',
			'<img src="img/nav-next.svg">'
		]
	});
  });