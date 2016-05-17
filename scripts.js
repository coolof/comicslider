$(document).ready(function(){
  function cslider() {
    $('.cslider .slide').each(function(i){
      var img = $(this).find('img');
      var imgSrc = img.attr('src');

      $(this).css("background-image", "url(" + imgSrc + ")");
      img.hide();

      if(i == 0) {
        $(this).addClass('active');
      }
    });

    $('.cslider').click(function(){
      $(this).toggleClass('from-left from-right');
    });
  }

  cslider();
});
