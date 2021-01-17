$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:true,
		navText:[
			'<img src="img/nav-prev.svg">',
			'<img src="img/nav-next.svg">'
		]
	});
  });

$(document).ready(function(){
	$('.section-we-create-new-value-slick-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect:true,
		variableWidth: true
	});
  });