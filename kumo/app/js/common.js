$(document).ready(function(){
	$('.slider-main-page').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '<div class="slick-prev-arrow"><img src="img/nav-prev.svg"></div>',
		nextArrow: '<div class="slick-next-arrow"><img src="img/nav-next.svg"></div>'
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