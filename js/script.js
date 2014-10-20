$(document).ready(function() {
	var winWidth = ($(window).width()); //ширина окна
	var winHeight = ($(window).height()); //высота окна

	// Функция исчезновения мобильной навигации
	function navOf(){
		navMobileBut = false;
		$('#nav').stop().animate({top: '-400'}, 500)
	}

	//Появление/исчезновение фиксированной навигации и параллакс
	var navTopFix = false; //статус фиксированной навигации
	window.onscroll = function() {
		
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (winWidth > 991) {
			if(scrolled > winHeight-10 && navTopFix === false){
				navTopFix = true;
				$('#naviFix').css('display', 'block');
				$('#naviFix').animate({top: '30px'}, 400);
				$('#naviFix').animate({top: '0'}, 400);
			}
			else if(scrolled < winHeight-10 && navTopFix === true){
				navTopFix = false;
				$('#naviFix').animate({top: '30px'}, 200);
				$('#naviFix').animate({top: '-50px'}, 150);
				setTimeout(function(){$('#topFix').css('display', 'none')}, 300);
			}
		};
	}

	// Пролистывание при клике на пункты меню
	$('.home-but').on('click', function(e){
	navOf();
	$('html,body').stop().animate({ scrollTop: $('#home').offset().top }, 1000);
	e.preventDefault();
	});

	$('.services-but').on('click', function(e){
	navOf();
	$('html,body').stop().animate({ scrollTop: $('#services').offset().top }, 1000);
	e.preventDefault();
	});

	$('.portfolio-but').on('click', function(e){
	navOf();
	$('html,body').stop().animate({ scrollTop: $('#portfolio').offset().top }, 1000);
	e.preventDefault();
	});

	$('.about-but').on('click', function(e){
	navOf();
	$('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
	e.preventDefault();
	});

	$('.contacts-but').on('click', function(e){
	navOf();
	$('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 1000);
	e.preventDefault();
	});

	// Выпадающий список мобильной навигации
	var navMobileBut = false;
	$('#navMobileBut').click(function() {
		if(navMobileBut === false){
			navMobileBut = true;
			$('#nav').stop().animate({top: '50'}, 500)
		}
		else{
			navOf()
		}
	});
});