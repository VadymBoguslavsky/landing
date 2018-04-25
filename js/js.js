 $('.slider').slick({
 	lazyLoad: 'ondemand',
  nextArrow: '<i class="fa fa-arrow-right arrow_right"></i>',
  prevArrow: '<i class="fa fa-arrow-left arrow_left"></i>'
 });
  $('.slider_testimonial').slick({
  	lazyLoad: 'ondemand',
 		arrows:false,
 		infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  dots:true,   
	   responsive: [{
	      breakpoint: 1024,
	         settings: {
	            slidesToShow: 3,
	            slidesToScroll: 3,
	            verticalSwiping:true
	         }
	      }, {
	      breakpoint: 480,
	         settings: {
	            slidesToShow: 2,
	            slidesToScroll: 3,
	            verticalSwiping:true
	         }
	   }],
 });