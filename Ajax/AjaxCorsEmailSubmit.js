$("input#submitEmail").click ( function ( event ) {

      //prevent from submitting
      event.preventDefault();

      var action = "//botachservers.com/saveEmail";
      var emailToSubmit = $("input#emailToSubmit").val();
   
      $.ajax({
          type: 'GET',
          url: action,
          data: { email: emailToSubmit },
          dataType: 'jsonp',
          jsonp: 'callback',
          jsonpCallback: 'jsonpCallback',
          success: function( data, textStatus, jqXHR ) {
			//capture returned data of number of emails, this part
			//is server side specific, may remove it.
            var count = 0;
            $.each ( data, function (i) {
              count = data.reg;
            });
            //set the updated count in the label
            $("label#totalVotesResult").text( count );
          },
          error: function( jqXHR, textStatus, errorThrown ){
			console.log ( "jqXHR" + jqXHR );
			console.log ( "textStatus" + textStatus );
			console.log ( "errorThrown" + errorThrown );
          }
    });
});

//callback functions is required for JSONP requests.
function jsonpCallback( data ) {
	 console.log( "callback data: " + data );   
}


//---------------------------------------------------------------------------- Version 2 ( Used in Feinstein giveaway )
function loadAjax(){
	var contestHome = "http://www.botachtactical.com/fegi.html";
	//check if the page is the home page, if so call the cookie handler to check or add a cookie and display the modal.
	if ( contestHome == window.location ){
 	
    	var action = "//botachservers.com/saveEmail";
	    $.ajax({
	          type: 'GET',
	          url: action,
	          data: { count: "true"},
	          dataType: 'jsonp',
	          jsonp: 'callback',
	          jsonpCallback: 'jsonpCallback',
	          success: function( data, textStatus, jqXHR) {
	            var count = 0;
	            $.each ( data, function (i) {
	              count = data[i].value;
	            });
	            
	            if ( count > 10000 ){

	            	$("label#totalVotesResult").html("<span style='color: green; font-weight: 900;'>" + count + "</span>");
	            }
	            else
	            {
 					$("label#totalVotesResult").html("<span style='color: red; font-weight: 900;'>" + count + "</span>");
	            }
	           
	          },
	          error: function(jqXHR, textStatus, errorThrown){
	            
	          }
	    });
	}
}