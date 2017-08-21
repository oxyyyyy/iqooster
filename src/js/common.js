$(document).ready(function () {
	
	// media query event handler
	if (matchMedia) {
		const sm = window.matchMedia("(max-width: 991px)");
		sm.addListener(WidthChange);
		WidthChange(sm);
	}

	// media query change
	function WidthChange(sm) {
		if (sm.matches) {
			$("#course_carousel").glide({
				type: "carousel"
			});
		} else {
			$("#course_carousel").glide().data('glide_api').destroy();
		}
	}

});