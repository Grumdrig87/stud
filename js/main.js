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
 

 
  //slider
  if ($(window).width() < 1200) {
    if (jQuery('[data-news]').length > 0) {
      $('[data-news]').slick({
          dots: true,
          speed: 300,
          infinite: false,
          slidesToShow: 2,
          responsive: [{
            breakpoint: 769,
            settings: {
              slidesToShow: 1
            }
          }]
      });
    }
  }
  if ($(window).width() < 994) {
    $('[data-rababout]').before('<div class="rab__card-mob" data-rabcardmob></div>')
    $('[data-card]').appendTo('[data-rabcardmob]');
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
        slidesToShow: 3,
        responsive: [{
          breakpoint: 769,
          settings: {
            slidesToShow: 1
          }
        }]
    });
};
if ($(window).width() < 769) {
  $('[data-newsmeta]').after('<div class="img-mob" data-fotomob></div>');
  $('[data-newsimg]').appendTo('[data-fotomob]');
  $('[data-sort]').before('<div class="sort-mob" data-sortmob><div class="soisk__sort-item" data-filters><svg xmlns="http://www.w3.org/2000/svg" viewBox="-57.2 -57.3 132.4 132.7" width="18" height="18"><path fill="#727272" d="M-26.6 60.6H-50c-4.1 0-7.4-3.3-7.4-7.4s3.3-7.4 7.4-7.4h23.4c4.1-11.5 16.7-17.6 28.2-13.5S19.2 49 15.1 60.5C11 72.1-1.6 78.1-13.1 74.1c-6.3-2.3-11.3-7.2-13.5-13.5zM52 1.6h16c4.1 0 7.4 3.3 7.4 7.4S72 16.4 68 16.4H52C47.9 27.9 35.3 34 23.8 29.9 12.2 25.8 6.2 13.1 10.3 1.6c4-11.5 16.7-17.5 28.2-13.5C44.8-9.6 49.7-4.7 52 1.6zM31.1 16.4c4.1 0 7.4-3.3 7.4-7.4s-3.3-7.4-7.4-7.4-7.4 3.3-7.4 7.4 3.3 7.4 7.4 7.4zM9-27.9c-4.1 0-7.4-3.3-7.4-7.4s3.3-7.4 7.4-7.4h59c4.1 0 7.4 3.3 7.4 7.4S72-27.9 68-27.9H9zm-59 44.3c-4.1 0-7.4-3.3-7.4-7.4S-54 1.6-50 1.6h36.9C-9 1.6-5.7 4.9-5.7 9s-3.3 7.4-7.4 7.4H-50zm44.3 44.2c4.1 0 7.4-3.3 7.4-7.4s-3.3-7.4-7.4-7.4-7.4 3.3-7.4 7.4 3.3 7.4 7.4 7.4zm-29.5-73.7c-12.2 0-22.1-9.9-22.1-22.1s9.9-22.1 22.1-22.1 22.1 9.9 22.1 22.1-9.9 22.1-22.1 22.1zm0-14.8c4.1 0 7.4-3.3 7.4-7.4s-3.3-7.4-7.4-7.4-7.4 3.3-7.4 7.4 3.3 7.4 7.4 7.4zm73.7 88.5c-4.1 0-7.4-3.3-7.4-7.4s3.3-7.4 7.4-7.4H68c4.1 0 7.4 3.3 7.4 7.4S72 60.6 68 60.6H38.5z"/></svg>Фильтр</div></div>')
  $('[data-sbr]').appendTo('[data-sortmob]');
  $('[data-sortmob]').after('<div class="filt-menu" data-filmen><div class="close-btn" data-close>x</div></div>');
  $('[data-sort]').appendTo('[data-filmen]');
  $('[data-range]').appendTo('[data-filmen]');
  if (jQuery('[data-filters]').length > 0) {
    $('[data-filters]').click(function(){
      $('[data-filmen]').addClass('open');
      $('body').addClass('open');
    })
    $('[data-close]').click(function(){
      $('[data-filmen]').removeClass('open');
      $('body').removeClass('open');
    })
  }
}


    //upload
    if ($('[data-att]').length > 0) {
      $('[data-att]').on('change', function() {
        $('[data-fname]').text(this.files[0].name);
      });
    }
    if ($('[data-upload]').length > 0) {
      $('[data-upload]').on('change', function() {
        $('[data-labupl]').text(this.files[0].name);
      });
    }
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