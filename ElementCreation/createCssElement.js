function createCssElement (){
	
	//create a style element
	var css = document.createElement("style");
	css.type = "text/css";
	
	//some arbitrary css
	var myCSS = "#offerSlogan { width: 100%; font-size: 15px; margin-bottom: 10px; font-weight: 900;}";
	
	//append arbitrary css into the css element
	css.innerHTML = myCSS;
	
	//append the <style> block to body
	//** cannot inject this way inot IE. will throw an error, use try catch to
	//avoid errors in IE, or different approach of appending CSS block
	document.body.appendChild(css);
}

