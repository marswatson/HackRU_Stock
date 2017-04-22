$(document).ready(function() {
	$('form').on('submit',function(event){ 
		$.ajax ({
			data : {
				symbol : $('symbol').val()
			},
			type : 'POST',
			url : '/draw'
		})
		event.preventDefault();
	});
});