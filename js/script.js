$(document).ready(function(){

	"use strict";
	
	/* =================================
	Carregadmento Inicial da Pagina
	=================================== */
	$(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");

    var bgi = $("[data-background]");
    bgi.length > 0 && bgi.each(function() {
    	var e = $(this),
    	t = e.attr('data-background');
    	e.css({'background-image': 'url(' + t + ')'});
    });

    var progressBar = $('.progress-bar');
    progressBar.length > 0 && progressBar.each(function() {
    	var e = $(this),
    	t = e.attr('aria-valuenow');
    	e.css({'width': t + '%'});
    });

    /* =================================
	Rolar para
	=================================== */
	$('a[href^="#"]').on('click', function(event) {

	    var target = $(this.getAttribute('href'));

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }

	});
	
	/* =================================
		Barra de Menu
	=================================== */
	var top = jQuery(document).scrollTop();
	var batas = 200;
	var navbar = jQuery('.navbar-main');
	var navbarnav = jQuery('.navbar-nav');
	var header = jQuery('.header');
	
	
	if ( top > batas ) {
		navbar.addClass('stiky');
		navbarnav.addClass('ml-auto');
	}
	jQuery(window).scroll(function () {
		top = jQuery(document).scrollTop();

		
		if ( top > batas ) {
			navbar.addClass('stiky');
		}else {
			navbar.removeClass('stiky'); 
			if(header.hasClass('header-2')){
				navbarnav.removeClass('ml-auto');
			}
			if(header.hasClass('header-5')){
				navbarnav.removeClass('ml-auto');
			}
		}

	});
	
	/* =================================
		Banner carrousel 
	=================================== */
	var slides = $(".full-screen"),
    b = slides.find('.item');
    b.each(function(){
        var e = $(this),
        ocImg = e.find('img').attr('src');
        e.css({'background-image': 'url(' + ocImg + ')'});
    });

    slides.owlCarousel({
	    // stagePadding: 50,
	    loop: true,
	    // margin: 10,
	    nav: true,
	    dots: false,
	    navText: [
	        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
	    ],
	    navContainer: '.banner .custom-nav',
	    items: 1,
	});	

	/* =================================
	Voltar para o Topo da Pagina
	=================================== */
	
	var offset = 300,
		//Reduz A Opacidade do Botao ao clicar
 		offset_opacity = 1200,
		//Animacao para o botao
		scroll_top_duration = 700,
		//Link de volta para o topo
		$back_to_top = $('.cd-top');

	//Escondendo o Botao de voltar ao topo
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//Scroll do botao volta para o Topo
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	

	/* =================================
	OWL
	=================================== */
	var carousel_1 = $(".testimonial-caro");
	carousel_1.owlCarousel({
	    loop: true,
	    nav: false,
	    items: 1,
	});
	
	/* =================================
		POPUP	
	=================================== */
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });

	$('.grid, .popup-gallery').magnificPopup({
	  delegate: 'a',
	  type: 'image',
	  tLoading: 'Loading image #%curr%...',
	  mainClass: 'mfp-img-mobile',
	  gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1]
	  },
	  image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
		  return item.el.attr('title') + '';
		}
	  }
	});
	
});

function inicializar() {
	var coordenadas = {lat: -22.912869, lng: -43.228963};

	var mapa = new google.maps.Map(document.getElementById('mapa'), {
	  zoom: 15,
	  center: coordenadas 
	});

	var marker = new google.maps.Marker({
	  position: coordenadas,
	  map: mapa,
	  title: 'Meu marcador'
	});
  }


  
  