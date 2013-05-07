function addJsLink () {

	var path = "http://botachservers.com/css/modal/modal.css";
	
	var headID = document.getElementsByTagName("head")[0];         

	var link = document.createElement( 'link' );// create the link node
	link.setAttribute( 'href', path );
	link.setAttribute( 'rel', 'stylesheet' );
	link.setAttribute( 'type', 'text/css' );
	headID.appendChild( link );

	var jqueryUI = "http://code.jquery.com/ui/1.9.1/jquery-ui.js";
        
	var newScript = document.createElement('script');
	newScript.type = 'text/javascript';
	newScript.src = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=sunset&format=json';
	headID.appendChild(newScript);


	var jqeuryCSS = "http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css";

	var css = document.createElement( 'link' );// create the link node
	css.setAttribute( 'href', jqeuryCSS );
	css.setAttribute( 'rel', 'stylesheet' );
	css.setAttribute( 'type', 'text/css' );
	headID.appendChild( css );
}