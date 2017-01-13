jQuery(document).ready(function() {
	$('.articleGrid__item--twoColumns:even').each(function($index){
		$(this).addClass('clearLeft');
	});
});