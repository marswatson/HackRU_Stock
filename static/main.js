//$('#btn').click(function() {
//    $.ajax({
//        type : 'POST',
//        url : '/',
//        data : $('#symbol1').serialize()        
//    });  
//});
// $(document).ready(function() {
//     console.log("ready!");
// 	$('form').on('submit',function(event){ 
// 		$.ajax({
// 			data : {
// 				symbol : $('#symbol1').val()
// 			},
// 			type : 'POST',
// 			url : '/'
// 		});
// 		event.preventDefault();
// 	});
// });
//$(document).ready(function() { 

//});

$(document).ready(function() {
	$('#btn').click(function() {
		var symbol = $('#symbol1').val();
		$('form').attr('action', '/'+ symbol);

		$.ajax({
			url: '/' + symbol,
			data: $('form').serialize(),
			type: 'POST',
			success: function(response) {
				console.log(response);
			},
			error: function(error) {
				console.log(error);
			}
		});
	});
});