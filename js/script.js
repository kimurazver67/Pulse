$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        infinite: true,
        speed: 300,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/chevron-left-solid.svg" alt="" srcset=""></button>',
        nextArrow: '<button type="button" class="slick-next""><img src="img/icons/chevron right solid.svg" alt="" srcset=""></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows:false,
                dots:true,
            }
        }]
      });
  });