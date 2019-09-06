$(document).ready(function(){
	console.log(3*5);


	$('.research-item').click(function(){
		$(this).toggleClass('large');
	});

	var hideAll = function() {
		$('.research-item').addClass('hide');
	}

	$('.btn-car').click(function(){
		hideAll();
		$('.car').removeClass('hide');
	});

});