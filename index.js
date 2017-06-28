$(function(){
	$('nav a').click(function () {
	  var $href = $(this).attr('href');
	  $('body').stop().animate({
	    scrollTop: $($href).offset().top - 85
	  }, 1000);
	  return false;
	});

	$(document).scroll(function () {
		if ($(document).scrollTop() > 100 ) {
			$('nav').css({'height': '70px', 'opacity': '0.95'});
			$('.header-social-links').css('display', 'none');
		}else if ($(document).scrollTop() < 100) {
			$('nav').css({'height': '', 'opacity': ''});
			$('.header-social-links').css('display', '');
		}
	  var scrollPos = $(document).scrollTop();
	  $('nav a').each(function () {
	    var currLink = $(this);
	    var refElement = $(currLink.attr("href"));
	    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	      $('nav li').removeClass("active");
	      if (currLink.attr('href') !== '#header') {
	      	currLink.parent().addClass("active");
	      }
	    }
	  });
	  if(scrollPos < $('.about').position().top){
	  	$('nav li').removeClass("active");
	  }
	})
})