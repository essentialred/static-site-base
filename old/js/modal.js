var modal = (function(){
	var 
	method = {},
	$overlay,
	$modal,
	$contact,
	$about,
	$close;

	// Center the modal in the viewport
	method.center = function () {
		var top, left;

		top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
		left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

		$modal.css({
			top:top + $(window).scrollTop(), 
			left:left + $(window).scrollLeft()
		});
	};

	// Open the modal
	method.open = function (settings) {
		$contact.append(settings.contact);
		$about.append(settings.about);

		$modal.css({
			width: settings.width || 'auto', 
			height: settings.height || 'auto'
		})

		method.center();

		$(window).bind('resize.modal', method.center);

		$modal.show();
		$overlay.show();
	};

	// Close the modal
	method.close = function () {
		$modal.hide();
		$overlay.hide();
		$contact.empty();
		$about.empty();
		$(window).unbind('resize.modal');
	};

	// Generate the HTML and add it to the document
	$overlay = $('<div id="overlay"></div>');
	$modal = $('<div id="modal"></div>');
	$contact = $('<div id="contact"></div>');
	$about = $('<div id="about"></div>')
	$close = $('<a id="close" class="ir" href="#">close</a>');
	$text = $('<h1>Contact Me</h1><p>Email me at:<br /><a href="mailto:offbeatparadigm@gmail.com">offbeatparadigm@gmail.com</a></p><p>Or telephone: (972) 658-7537</p><p class="small">(true to my generation, texting is great!)</p>I live in Shelburne, VT.</p>');
	$aboutText = $('<div id="about-dialog"><h1>My name is<br /> Megan Elisha H. Tong</h1><p>I graduated with a Liberal Arts degree from Bennington College in 2009, where I studied digital animation and painting. In the fall of 2010, I moved to Burlington and currently am painting out of my Charlotte studio, practicing freelance website design, occasionally teaching folk art classes at the Shelburne Art Center, and training horses.</p><p>Some places in and around Burlington, VT you may have seen my work:	<ol><li>Art&#39;s Alive Burlington Festival of Fine Arts (2011 and 2012)</li><li>SEABA Original Juried Show (2011)</li><li>South End Art Hop (2011)</li><li>Creative Space Gallery (Vergennes, VT, 2010-2011)</li><li>Art in the Windows at Boutilier&#39;s Art (June 2012)</li></ol></p><p>I am just coming to know the vibrant art world of Burlington and look forward to future chances to exhibit my work and connect with other artists!</p><strong>Artist Statement (Painting &amp; Drawing):</strong><p>My impulse to create is fueled by an extensive collection of muses: faces, animals, anthropology, folktales.  I let each idea dictate the medium it needs for expression, and my most recent discovery is the joy of calligraphy ink.  There is a solemn, almost morbid, feel to a subject rendered in dark, lightly washed ink that I find lends a lovely sort of reality to an otherwise strange portrait.  I am enjoying the emotional possibilities of this medium in particular for folklore and animal characters.</p>Best,<br /><img src="images/signature.png" alt"signature" /><br /><a href="mailto:offbeatparadigm@gmail.com">offbeatparadigm@gmail.com</a><br /><strong>972-658-7537</strong></div>');

	$modal.hide();
	$overlay.hide();
	$modal.append($contact, $about, $close);

	$(document).ready(function(){
		$('body').append($overlay, $modal);						
	});

	$close.click(function(e){
		e.preventDefault();
		method.close();
		$modal.append($contact, $about, $close);
	});
	$overlay.click(function(e){
		method.close();
		$modal.append($contact, $about, $close);
	})
	return method;
}());

// Wait until the DOM has loaded before querying the document
$(document).ready(function(){

	$.get('ajax.html', function(data){
		modal.open({contact: data});
		modal.open({about: data});
	});
	
	$('a.about').click(function(e){
		$element = document.getElementById("contact");
		$element.parentNode.removeChild($element);
		modal.open({about: $aboutText});
		e.preventDefault();
	})
	$('a.contact').click(function(e){
		$element = document.getElementById("about");
		$element.parentNode.removeChild($element);
		modal.open({contact: $text});
		e.preventDefault();
	});
});