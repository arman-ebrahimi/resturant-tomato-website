	function show(){
		var x=document.getElementById("menubar").style;
		if(x.display=="none"){
			x.display="block";
			x.transform="rotatex(360deg)";
			document.getElementById("link-hidden").style.transform="scale(0.9)";
		}else{
			x.display="none";
			document.getElementById("link-hidden").style.transform="scale(1.1)";
		}
	}