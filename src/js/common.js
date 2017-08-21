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
			$("#benefits_carousel").glide({
				type: "carousel"
			});
			// $("#consist_carousel").glide({
			// 	type: "carousel"
			// });
		} else {
			$("#course_carousel").glide().data('glide_api').destroy();
			$("#benefits_carousel").glide().data('glide_api').destroy();
			// $("#consist_carousel").glide().data('glide_api').destroy();
		}
	}

});