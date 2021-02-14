/*mixitup js coller*/

  var container = document.querySelector('.gallery');
       var mixer = mixitup(container, {
        selectors:{
            control: '[our-mix-control]'
        }
       });

/*owl carousel call the plugin part*/

  $(document).ready(function(){
	  $(".owl-carousel").owlCarousel({
	  	autoplay:true,
	  	autoplayTimeout:2000,
	  	smartSpeed:300,
	  	responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:false
        }
    	}
	  });


	  //top-bar 

	$('.top').click(function(){
		$("html, body").animate({
			scrollTop:0
		},1000);
	});

	$('.top').hide();

	$(window).scroll(function(){
		var ourWindow = $(this).scrollTop();

		if(ourWindow<500){
			$('.top').fadeOut();
		} else{
			$('.top').fadeIn();
		}

		//Menu Fixed

		if(ourWindow>100){   //menu theke niche 100 poriman scroll
			$('body').addClass('fixed');
		} else{
			$('body').removeClass('fixed');
		}

	});


	//menu active class

	$('.navbar-nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
	});


	//section id with menu id

	$('.navbar-nav a[href^="#"]').click(function(e){
		e.preventDefault();

		var target = this.hash;

		$('html, body').animate({
			scrollTop: $(target).offset().top -75 //section adjust
		}, 500);
	}); 



	// Wow Js initialization

	 new WOW().init();







	});  //