//real time check, accept only digits
$('input#qtyInput').keypress(function() {
		
	if( event.keyCode < 48 || event.keyCode > 57 ){
	     return false;
	}
});