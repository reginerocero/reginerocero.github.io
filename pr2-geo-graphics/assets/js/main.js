$(document).ready(function(){
	console.log(3*5);


	$('.thumbnail-content').click(function(){
		$(this).toggleClass('large');
	});

	var hideAll = function() {
		$('.thumbnail-content').addClass('hide');
	}

		$('.btn-cloud').click(function(){
		hideAll();
		$('.cloud').removeClass('hide');
	});

		$('.btn-interface').click(function(){
		hideAll();
		$('.interface').removeClass('hide');
	});
});