// JavaScript Document
var d = document;
function setHeight() {
	// get the heights
	var box = new Array("c1","c2","c3"); //list of DIV ids
	var h = 0;
	for(x=0;x<box.length;x++){
		if( d.getElementById(box[x]) ){
			div = d.getElementById(box[x]);
			// unset height and scrollHeight
			div.style.height = "auto";
			div.style.scrollHeight = "auto";
			// determine the tallest div
			test_h = div.offsetHeight;
			if( test_h > h ){
				h = test_h;
			}
		}
	}
	// set the height of all divs to the tallest
	for(x=0;x<box.length;x++){
		if( d.getElementById(box[x]) ){
			div = d.getElementById(box[x]);
			div.style.height = h +"px"; 
			div.style.scrollHeight = h +"px";
		}
	}		
	// zero the margins and padding on the footer
	/* d.getElementById("footer").style.margin = "0";
	d.getElementById("footer").style.padding = "0"; */
}

window.onload = function() {
	setHeight();
}

window.onresize = function() {
	setHeight();
}