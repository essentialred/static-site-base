$(window).load(function(){
	$('#content').anythingSlider({
		expand: false,
		buildStartStop: false,
		buildArrows: false,
		buildNavigation: false,
		navigationFormatter: function(index, panel){ // Format navigation labels with text
			return ['home', 'painting', 'drawing', 'web development', 'digital', 'about', 'contact'][index - 1];
		}
	});

	$('.gallery').anythingSlider({
		mode: 'fade',
		hashTags: false,
		resizeContents: false,
		enlarge: false,
		buildStartStop: false,
		buildArrows: true,
		autoPlay: true
	});
	$(".home-link").click(function(){
	  $('#content').anythingSlider(1);
	});
	$(".painting-link").click(function(){
	  $('#content').anythingSlider(2);
	});
	$(".drawing-link").click(function(){
	  $('#content').anythingSlider(3);
	});
	$(".web-link").click(function(){
	  $('#content').anythingSlider(4);
	});
	$(".digital-link").click(function(){
	  $('#content').anythingSlider(5);
	});
});

$(function(){
    var menu = $('#menu');  // cache menu to a variable for performance

    menu.delegate('a.slide','click',function(){
        menu.find('.cur').removeClass('cur');
        $(this).addClass('cur');
    });
});
//$(function(){
//	$page = jQuery.url.attr('anchor');
//	if(!$page) {
//		$page = '&panel1-1';
//	}
//	$('#menu li a').each(function(){
//		var $href = $(this).attr('href');
//		if ( ($href == $page) || ($href == '') ) {
//			$(this).addClass('cur');
//		} else {
//			$(this).removeClass('cur');
//		}
//	});
//});