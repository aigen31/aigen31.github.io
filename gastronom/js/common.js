$(function(){
	$("a[href^='#']").click(function(){
			var _href = $(this).attr("href");
			$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
			return false;
	});

	$("#my-menu").mmenu({
		extensions: ['position-right'],
		navbar: {
			title: '<img src="img/header-logo.png" alt="Мясной Гастроном" style="width: 100%">'
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

$('.thumbs').each(function () {
    $('a', this).each(function () {
        var $a = $(this);
        // set ids, will use them later
        $a.attr({
            id: $a.attr('href').replace(/[\/\.-]/g, '')
        });
    });

    var $thumbs = $(this),
        $fotorama = $thumbs.clone();

    $fotorama.on('fotorama:show', function (e, fotorama) {
        // pick the active thumb by id
        $('#' + fotorama.activeFrame.id)
            .addClass('active')
            .siblings()
            .removeClass('active');

        var activeFrame = fotorama.activeFrame;
        fotorama.$caption = fotorama.$caption || $(this).next('.fotorama-caption');
        fotorama.$caption.html(
            'Title: <strong>' + activeFrame.title + '</strong><br>Caption: ' + activeFrame.author);
    })
        .addClass('fotorama')
        .removeClass('thumbs')
        .insertAfter(this)
        .fotorama({
        nav: false,
        width: '100%',
        maxHeight: 400,
        ratio: 3 / 2
    });

    // get access to the API
    var fotorama = $fotorama.data('fotorama');

    $thumbs.on('click', 'a', function (e) {
        e.preventDefault();
        // show frame by id
        fotorama.show(this.id);
    });

		$(document).ready(function(){
		    $(".owl-carousel").owlCarousel({
		        items: 4,
		        margin: 30,
		        nav: true,
						loop: true,
		        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
						responsive: {
							0:{
								items: 1
							},
							500:{
								items: 2
							},
							1000:{
								items: 3
							}
						}
		    });
		});
});

$(document).ready(function() {
	$('.about-btn').click(function(event) {
		$('.section-about-description').removeClass('active')
		var num = $(this).attr('data-num');
		$('#description-'+num).addClass('active')
	});
});

$(function(){
	$(".section-order-close-img").click(function(){
	  $(".section-order").removeClass("active");
	});

	$(".btn-order").click(function(){
	  $(".section-order").addClass("active");
	});
})
