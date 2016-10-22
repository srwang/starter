$(document).ready(function(){

	//close on close button
	$('.stay-wanderful-iframe').contents().on('click', '.close-modal-button', function() {
		$('.stay-wanderful-iframe').hide();
	})
	//close on overlay
	$('.stay-wanderful-iframe').contents().on('click', 'html', function() {
		$('.stay-wanderful-iframe').hide();
	})

});
