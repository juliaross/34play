$(function(){
  $('.js-main-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   infinite: true,
   arrows:true,
   fade: true,
   autoplay: true,
   autoplaySpeed: 5000,
   speed:1000,
   dots:true,
   prevArrow: '.js-slider__prev',
   nextArrow: '.js-slider__next',
  });

  $('.js-partners').slick({
   slidesToShow: 6,
   slidesToScroll: 1,
   infinite: true,
   prevArrow: '.js-partners__prev',
   nextArrow: '.js-partners__next',
   responsive: [
     {
       breakpoint: 980,
       settings: {
         slidesToShow: 4,
         arrows: false,
         dots: true,
       }
     },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        dots: true,
        centerPadding: '5px',
      }
    }
  ]
  });


  $('.js-advantages').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   prevArrow: '.js-advantages__prev',
   nextArrow: '.js-advantages__next',
   dots: false,
   responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        arrows: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        dots: false,
      }
    }
  ]
 });

  $('.js-product').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   infinite: true,
   prevArrow: '.js-product__prev',
   nextArrow: '.js-product__next',
   dots: true,
   responsive: [
     {
       breakpoint: 1100,
       settings: {
         slidesToShow: 3,
         arrows: false,
         dots: true,
         centerMode: true,
         centerPadding: '10px',
       }
     },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '10px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        dots: false,
      }
    }
  ]
  });

  $('.js-inst').slick({
   slidesToShow: 8,
   slidesToScroll: 1,
   infinite: true,
   prevArrow: '.js-inst__prev',
   nextArrow: '.js-inst__next',
   responsive: [
     {
       breakpoint: 980,
       settings: {
         slidesToShow: 4,
       }
     },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 360,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
      }
    }
  ]
  });

  $('.close').click(function(){
    $('.top-banner').hide();
  })

});
