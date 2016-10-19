// JavaScript Document

// if javascript is enabled, show the screenshot navigation
function display() {
	document.getElementById("navScreenshot").className = "visible";
}

// swap the screenshot and style the correct nav item
function swap(i, alt) {
	document.getElementById("label").innerHTML = alt;
	document.getElementById("window").innerHTML = '<img src="/assets/images/portfolio/' + pagenumber + '/' + i + '.jpg" alt="' + alt + '" id="display" />';
	var navs = document.getElementById("navScreenshot");
	var selectedNav = "image" + i;
	for(n = 0; n < navs.childNodes.length; n++) {
		currentNav = navs.childNodes[n];
		if (currentNav.nodeName=="LI") {
			if (currentNav.id == selectedNav) {
				currentNav.childNodes[0].className = "selected";
			} else {
				currentNav.childNodes[0].className = "";
			}
		}
	}
}
