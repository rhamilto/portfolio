// JavaScript Document

var heightUnit = "em"; // px or em are supported

function pxToEms( pixels ){
	return Math.round(pixels / 16);
	}

function setAllHeights() {
if( heightUnit == "em" ){
		var h = pxToEms( h );
		alert("hi");
		}	
	}
window.onload = function() {
	setAllHeights();
	}