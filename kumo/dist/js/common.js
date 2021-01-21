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
		prevArrow: '<div class="slick-prev-arrow"><img src="img/slick-nav-prev.svg"></div>',
		nextArrow: '<div class="slick-next-arrow"><img src="img/slick-nav-next.svg"></div>',
		focusOnSelect:true,
		variableWidth: true
	});
  });