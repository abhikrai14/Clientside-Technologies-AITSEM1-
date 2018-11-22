var toggleClass = function() {
	
	var navDiv = document.getElementById("navDiv");
	
	if (navDiv.className === "navb") {
		navDiv.className += " responsive";
	} 
	else {
		navDiv.className = "navb";
	}
}

window.onload = function(){
	document.getElementById("barIcon").onclick = toggleClass;
}