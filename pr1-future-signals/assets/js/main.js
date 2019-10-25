$(document).ready(function(){
	console.log(3*5);


	$('.research-item').click(function(){
		$(this).toggleClass('large');
	});

	var hideAll = function() {
		$('.research-item').addClass('hide');
	}

		$('.btn-brown').click(function(){
		hideAll();
		$('.brown').removeClass('hide');
	});

		$('.btn-white').click(function(){
		hideAll();
		$('.white').removeClass('hide');
	});

		$('.btn-blue').click(function(){
		hideAll();
		$('.blue').removeClass('hide');
	});

		$('.btn-pink').click(function(){
		hideAll();
		$('.pink').removeClass('hide');
	});

		$('.btn-yellow').click(function(){
		hideAll();
		$('.yellow').removeClass('hide');
	});

});

