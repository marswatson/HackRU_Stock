$(document).ready(function() {
    console.log("ready!");
	$('form').on('submit',function(event){ 
		$.ajax ({
			data : {
				symbol : $('symbol').val()
			},
			type : 'POST',
			url : '/'
		})
		event.preventDefault();
	});
});