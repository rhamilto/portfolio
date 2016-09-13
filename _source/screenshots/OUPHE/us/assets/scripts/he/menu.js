// JavaScript Document
// enable primary nav menus for IE
	function startList() {
		if (document.all&&document.getElementById) {
			navRoot = document.getElementById("navPrimaryUL");
			for (i=0; i<navRoot.childNodes.length; i++) {
				node = navRoot.childNodes[i];
				if (node.nodeName=="LI") {
					node.onmouseover=function() {
						this.className+=" over";
					}
					node.onmouseout=function() {
						this.className=this.className.replace(" over", "");
					}
				}
			}
		}
	}  


	// Sniff pre v.86 versions of Safari and hide the primary nav menus
	function detectSafari() {
		var agt = navigator.userAgent.toLowerCase();
		var appVer = navigator.appVersion.toLowerCase();	
		var is_safari = (agt.indexOf("safari") != -1);
		var build = appVer.substring(appVer.lastIndexOf("/")+1);
		var majorBuild = build.split(".");
		
		if (is_safari == 1 && majorBuild[0] < 86) {
			document.write('<style type="text/css">#navPrimary li:hover ul { display: none; }</style>');
		}
	}
	detectSafari();
