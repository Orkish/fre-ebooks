
(function() {

	var myNav = $(".my-nav");

	$( myNav ).addClass( 'original' ).clone().insertAfter( myNav ).addClass( 'cloned' ).css({
		'position': 'fixed'
		,'top': '0'
		,'margin-top': '0'
		,'z-index': '9999'
	}).removeClass( 'original' ).hide();

	// we do not want hoisting
	scrollIntervalID = setInterval( makeItStick, 10 );

	function makeItStick() {
		var orgElPos = $( '.original' ).offset();
		orgElTop = orgElPos.top;

		if( $(window).scrollTop() >= orgElTop ) {
			
			// scrolled past original's pos, show only cloned el
			var orgEl = $( '.original' )
					,coordsOrgEl = orgEl.offset()
					,leftOrgEl = coordsOrgEl.left
					,widthOrgEl = orgEl.css( 'width' );
			$( '.cloned' ).css({
				'left': leftOrgEl + 'px'
				,'top': '0'
				,'width': widthOrgEl 
			}).show();
			$( '.original' ).css( 'visibility', 'hidden');
		} else {
			$( '.cloned' ).hide();
			$( '.original' ).css( 'visibility', 'visible' );
		}
	}


})();






