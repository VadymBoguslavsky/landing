 $('.slider').slick({
 	lazyLoad: 'ondemand',
  nextArrow: '<i class="fa fa-arrow-right arrow_right"></i>',
  prevArrow: '<i class="fa fa-arrow-left arrow_left"></i>'
 });
$('.slider_testimonial_clients').slick({
  focusOnSelect: true,
	asNavFor: '.slider_testimonial_text',
	slidesToShow: 3,
  slidesToScroll: 3,
	lazyLoad: 'ondemand',
	arrows:false,
	infinite: true,
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
 $('.slider_testimonial_text').slick({
 	asNavFor: '.slider_testimonial_clients',
 	lazyLoad: 'ondemand',
	arrows:false,
	nfinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  focusOnSelect: true
 });