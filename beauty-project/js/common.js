$(function(){
	$("a[href^='#']").click(function(){
			var _href = $(this).attr("href");
			$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
			return false;
	});

	$("#my-menu").mmenu({
		extensions: ['position-right'],
		navbar: {
			title: '<img src="img/beauty-menu.svg" alt="Бьюти - супер кресло">'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	})
});