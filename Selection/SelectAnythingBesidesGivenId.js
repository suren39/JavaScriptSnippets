//anything but the offerLabel & its children
$("body :not( #offerLabel, #offerLabel * )").bind( "click", function( e ){
	
	//if the offer DIV is visible, execute the if block
	if( $( "div#offerLabel" ).is( ":visible" ) ){
			
			$( "div#offerLabel" ).fadeOut( 'slow', function(){
				
				$( "div#offerButtonDiv" ).fadeIn( 'slow' );
		});
	}
});