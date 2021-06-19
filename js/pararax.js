jQuery(document).ready(function ($) {
  //initialise Stellar.js
  $(window).stellar();
  //Cache some variables
  slide = $('.slide');
  button = $('.button_base');
  mywindow = $(window);
  htmlbody = $('html,body');
  //Setup waypoints plugin
  slide.waypoint(function (event, direction) {
    //cache the variable of the data-slide attribute associated with each slide
    dataslide = $(this).attr('data-slide');
    //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and
    //remove the active class from the previous navigation link
    if (direction === 'down') {
      $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
    }
    // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and
    //remove the active class from the next navigation link
    else {
      $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
    }
  });
  //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class
  //from navigation link slide 2 and adds it to navigation link slide 1.
  mywindow.scroll(function () {
    if (mywindow.scrollTop() == 0) {
      // $('.navigation li[data-slide="1"]').addClass('active');
      // $('.navigation li[data-slide="2"]').removeClass('active');
    }
  });
  //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
  //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
  function goToByScroll(dataslide) {
    htmlbody.animate({
      scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
    }, 2000, 'easeInOutQuint');
  }
    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
  button.click(function (e) {
    e.preventDefault();
    dataslide = $(this).attr('data-slide');
    goToByScroll(dataslide);
  });
  (function($) {
    $(document).ready(function() {
      /* IF YOU WANT TO APPLY SOME BASIC JQUERY TO REMOVE THE VIDEO BACKGROUND ON A SPECIFIC VIEWPORT MANUALLY
      var is_mobile = false;
      if( $('.player').css('display')=='none') {
        is_mobile = true;
      }
      if (is_mobile == true) {
        //Conditional script here
        $('.big-background, .small-background-section').addClass('big-background-default-image');
      }else{
        $(".player").mb_YTPlayer();
      }
    });

    */
    /*  IF YOU WANT TO USE DEVICE.JS TO DETECT THE VIEWPORT AND MANIPULATE THE OUTPUT  */

    // //Device.js will check if it is Tablet or Mobile - http://matthewhudson.me/projects/device.js/
    // if (!device.tablet() && !device.mobile()) {
    //   $(".player").mb_YTPlayer();
    // } else {
    //   //jQuery will add the default background to the preferred class
    //   $('.big-background, .small-background-section').addClass(
    //     'big-background-default-image');
    //   }

      $(window).resize(function () {
        hsize = $(window).height();
        $("#people").css("height", hsize + "px");
        console.log(hsize);
      });

    });
    // pagetop
    $(function() {
    	$(window).scroll(function () {
    		var s = $(this).scrollTop();
    		var m = 250;
    		if(s > m) {
    			$("#pagetop").fadeIn('slow');
    		} else if(s < m) {
    			$("#pagetop").fadeOut('slow');
    		}
    	});
    	$("#pagetop").click(function () {
    		$('html,body').animate({ scrollTop: 0 }, 'fast');
    		return false;
    	});
    	$("#pagetop2").click(function () {
    		$('html,body').animate({ scrollTop: 0 }, 'fast');
    		return false;
    	});
    });
  })(jQuery);
});
