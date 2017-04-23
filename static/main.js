//$('#btn').click(function() {
//    $.ajax({
//        type : 'POST',
//        url : '/',
//        data : $('#symbol1').serialize()        
//    });  
//});
$(document).ready(function() {
    console.log("ready!");
	$('form').on('submit',function(event){ 
		$.ajax({
			data : {
				symbol : $('#symbol1').val()
			},
			type : 'POST',
			url : '/'
		});
		event.preventDefault();
	});
});
//$(document).ready(function() { 

//});