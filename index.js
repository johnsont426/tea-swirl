function iOS() {

  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()){ return true; }
    }
  }

  return false;
}

$(function(){
	if(iOS()) {
		$('.bg').css('background-attachment', 'initial');
	}
	$('nav a').click(function () {
	  var $href = $(this).attr('href');
	  $('body').stop().animate({
	    scrollTop: $($href).offset().top - 85
	  }, 1000);
	  return false;
	});

	$(document).scroll(function () {
		// var $movebg = $(window).scrollTop() * -0.3;
  // 	$('.bg-1').css('background-positionY', ($movebg) + 'px');
  // 	$('.bg-2, .bg-3').css('background-positionY', ($movebg) + 'px');
  // 	$('.bg-4').css('background-positionY', ($movebg + 400) + 'px');

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

