$(document).ready(function () {

	//sticky menu

	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 1) {
			$(".sticky").removeClass("scroll-header");
		} else {
			$(".sticky").addClass("scroll-header");
		}
	});


	// Js for Slider

	$('.slider-active').slick({
		infinite: true,
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
		slidesToScroll: 1,
		autoplaySpeed: 2000,
	});


	// Js for Testimonial Slider

	$('.testimonial-active').slick({
		infinite: true,
		slidesToShow: 1,
		dots: true,
		arrows: false,
		autoplay: true,
		slidesToScroll: 1,
		autoplaySpeed: 2000,
	});


	// Js for Brand Slider

	$('.brand-active').slick({
		infinite: true,
		slidesToShow: 5,
		dots: false,
		arrows: false,
		autoplay: true,
		slidesToScroll: 1,
		autoplaySpeed: 2000,
	});

	// Js for Counter

	jQuery(document).ready(function ($) {
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});
	});

	// Js for Google Map

	function basicmap() {
		// Basic options for a simple Google Map
		var mapOptions = {
			// How Zoomed in you want the map to sart at (always required)
			zoom: 11,
			scrollwheel: false,
			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(23.810332, -73.9400), // New York
			// This is where you would paste any style found on Snazzy Maps.
			styles: [
				{
					"featureType": "all",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#202c3e"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"gamma": 0.01
						},
						{
							"lightness": 20
						},
						{
							"weight": "1.39"
						},
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"weight": "0.96"
						},
						{
							"saturation": "9"
						},
						{
							"visibility": "on"
						},
						{
							"color": "#000000"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 30
						},
						{
							"saturation": "9"
						},
						{
							"color": "#29446b"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"saturation": 20
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 20
						},
						{
							"saturation": -20
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 10
						},
						{
							"saturation": -30
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#193a55"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"saturation": 25
						},
						{
							"lightness": 25
						},
						{
							"weight": "0.01"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"lightness": -20
						}
					]
				}
			]

		}

		// Get the HTML DOM element that will contain your map
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('contact-map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		//Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(23.810332, 90.412518),
			map: map,
			title: 'Cryptox'
		});
	}
	if ($('#contact-map').length != 0) {
		google.maps.event.addDomListener(window, 'load', basicmap);
	}


	// Js for scroll up

	$(function () {
		$.scrollUp({
			scrollName: 'scrollUp', // Element ID
			topDistance: '300', // Distance from top before showing element (px)
			topSpeed: 300, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: '<i class="fas fa-angle-double-up" ></i>', // Text for element
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		});
	});


	// wow js

	new WOW().init();



});