$(document).ready(function(){

  $('.carousel').slick({
  	infinite: true,
  	slidesToShow: 5,
  	slidesToScroll: 2,
  	centerMode: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  
  ]
});

  $('.hamburger').on('click' , function() {
    $('.navigation').slideToggle();

  }
  );



//   $(document).on('open', '.remodal', function () {
//     console.log('open');
// });

// $(document).on('opened', '.remodal', function () {
//     console.log('opened');
// });

// $(document).on('close', '.remodal', function (e) {
//     console.log('close');

//     // "confirmation", or "cancellation", or undefined
//     console.log(e.reason);
// });

// $(document).on('closed', '.remodal', function (e) {
//     console.log('closed');

//     // "confirmation", or "cancellation", or undefined
//     console.log(e.reason);
// });

// $(document).on('confirm', '.remodal', function () {
//     console.log('confirm');
// });

// $(document).on('cancel', '.remodal', function () {
//     console.log('cancel');
// });

});