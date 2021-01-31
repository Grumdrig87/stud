jQuery(document).ready(function($) {
  
  if ($(window).width() < 994) {
    $('[data-cont]').appendTo('[data-nav]');
    $('[data-btns]').appendTo('[data-nav]');
    $('[data-main]').appendTo('.main__l');
    $('[data-vac] p').after('<div class="vac-mob" data-vacmob></div>');
    $('[data-vac]').each(function(){
      $(this).find('[data-city]').appendTo($(this).find('[data-vacmob]'));
      $(this).find('[data-comp]').appendTo($(this).find('[data-vacmob]'));
    })
    
    }
 
  //tabs
//   $('[data-can]').on('click', function() {
//       $(this).addClass('active').siblings().removeClass('active').closest('.can__wrap').find('ul.can__list').removeClass('active').eq($(this).index()).addClass('active');
//   });
 
  //slider
  if ($(window).width() < 994) {
    if (jQuery('[data-rate]').length > 0) {
        $('[data-rate]').slick({
            dots: true,
            speed: 300,
            infinite: false,
            slidesToShow: 1
        });
    };
    if (jQuery('[data-info]').length > 0) {
      $('[data-info]').slick({
          dots: true,
          speed: 300,
          infinite: false,
          slidesToShow: 1
      });
  }
  }
  if (jQuery('[data-part]').length > 0) {
    $('[data-part]').slick({
        dots: true,
        speed: 300,
        infinite: true,
        slidesToShow: 3
    });
};
  // faq
//   if (jQuery('[data-faq]').length > 0) {
//       $('[data-faq]').click(function() {
//           $(this).find('.faq__title').toggleClass('open');
//           $(this).find('p').slideToggle(300);
//       })
//   }
  // burger
  $('[data-burger]').click(function() {
      $('html').toggleClass("open");
      $(this).toggleClass("open");
      $('[data-nav]').toggleClass("open");
      $('body').toggleClass('open');
  });

    $( "#slider-range" ).slider({
      range: true,
      min: 14,
      max: 99,
      values: [ 14, 99 ],
      slide: function( event, ui ) {
        $( ".ui-slider-handle:nth-child(2)" ).html(ui.values[ 0 ]);
        $( ".ui-slider-handle:nth-child(3)" ).html(ui.values[ 1 ]);
      }
    });
    $( ".ui-slider-handle:nth-child(2)" ).html( $( "#slider-range" ).slider( "values", 0 ));
    $( ".ui-slider-handle:nth-child(3)" ).html($( "#slider-range" ).slider( "values", 1 ));
});