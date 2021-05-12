/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {

/*---------------------------------------------------- */
/* Preloader
------------------------------------------------------ */ 
  	$(window).load(function() {

   	// will first fade out the loading animation 
    	$("#status").fadeOut("slow"); 

    	// will fade out the whole DIV that covers the website. 
    	$("#preloader").delay(500).fadeOut("slow").remove();      

  	}) 

/*---------------------------------------------------- */
/* Menu
------------------------------------------------------ */  
  	var toggle_button = $("<a>", {                         
                        id: "toggle-btn", 
                        html : "Menu",
                        title: "Menu",
                        href : "#" } 
                        );
  	var nav_wrap = $('nav#nav-wrap')
  	var nav = $("ul#nav");  

  	/* id JS is enabled, remove the two a.menu-btns 
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  	nav_wrap.find('a.menu-btn').remove(); 
  	nav_wrap.prepend(toggle_button); 

  	toggle_button.on("click", function(e) {
   	e.preventDefault();
    	nav.slideToggle("fast");     
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function(){
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('ul#nav li a').on("click", function(){      
   	if (nav.hasClass('mobile')) nav.fadeOut('fast');      
  	});


/*----------------------------------------------------*/
/* Backstretch Settings
------------------------------------------------------ */

	$("#intro").backstretch("images/header-background.jpg");


/*----------------------------------------------------*/
/*	Back To Top Button
/*----------------------------------------------------*/
	var pxShow = 300; //height on which the button will show
	var fadeInTime = 400; //how slow/fast you want the button to show
	var fadeOutTime = 400; //how slow/fast you want the button to hide
	var scrollSpeed = 300; //how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (jQuery(window).scrollTop() >= pxShow) {
			jQuery("#go-top").fadeIn(fadeInTime);
		} else {
			jQuery("#go-top").fadeOut(fadeOutTime);
		}

	});


/*----------------------------------------------------*/
/*  Placeholder Plugin Settings
------------------------------------------------------ */  	 
	$('input, textarea').placeholder()


/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */
   setTimeout( function() {

	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	   
   }, 100);

/*----------------------------------------------------*/
/* Final Countdown Settings
------------------------------------------------------ */
	var finalDate = '2016/01/01';

	$('div#counter').countdown(finalDate)
   	.on('update.countdown', function(event) {

   		$(this).html(event.strftime('<span>%D <em>days</em></span>' + 
   										 	 '<span>%H <em>hours</em></span>' + 
   										 	 '<span>%M <em>minutes</em></span>' +
   										 	 '<span>%S <em>seconds</em></span>'));

   });  


/*----------------------------------------------------*/
/*	gmaps settings
------------------------------------------------------*/

   var map;

   // main directions
   map = new GMaps({
      el: '#map', 
      lat: 14.549072, 
      lng: 121.046958, 
      zoom: 14, 
      zoomControl : true,
      zoomControlOpt: { style : 'SMALL', position: 'TOP_LEFT' }, 
      panControl : false, 
      scrollwheel: false
   });

   map.drawOverlay({
	   lat: map.getCenter().lat(),
	   lng: map.getCenter().lng(),
	   content: '<i class="fa fa-map-marker"></i>',
	   verticalAlign: 'top',
	   horizontalAlign: 'center'
	});

   // The styles below present a simplified map. 
   // If you would like to use a normal coloured map, then please remove or comment the code below, from lines 128 to 148.
	var mapStyles = [
	   {
	      featureType: "road",
	      elementType: "geometry",
	      stylers: [{
	         lightness: 100
	      }, {
	         visibility: "simplified"
	      }]
	   }, {
	      featureType: "road",
	      elementType: "labels",
	      stylers: [{
	         visibility: "off"
	      }]
	   }
	];
	
	map.setOptions({
	   styles: mapStyles
	});

   // map.addMarker({ 
 		// lat: map.getCenter().lat(),
	  //  lng: map.getCenter().lng(), 
 		// title: '5th Avenue',
   //  	infoWindow: { content: '<p>You can add your address 1 here</p>' } 
   // });


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});


/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});


/*----------------------------------------------------*/
/*	Make sure that #intro height is
/* equal to the browser height.
------------------------------------------------------ */

   $('#intro, #map').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('#intro, #map').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })

        $("#intro").backstretch("images/header-background.jpg");
   });


});