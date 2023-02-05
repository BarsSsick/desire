$(function () {




	$('.header__btn').on('click', function () {
		$('.rightside-menu').removeClass('rightside-menu--close');
	});
	$('.rightside-menu__close').on('click', function () {
		$('.rightside-menu').addClass('rightside-menu--close');
	});

	$('.header__btn-mb').on('click', function () {
		$('.menu').toggleClass('menu--open');
	});


	$('.top__slider').slick({

	});

	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living'
		}
	});

	$('.top-slider').slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
	});

})