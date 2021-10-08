//########################## End ROP Framework functions by bguerville(under development) #########################
function ps3chk(){

	var fwCompat = ["4.00","4.10","4.11","4.20","4.21","4.25","4.30","4.31","4.40","4.41","4.45","4.46","4.50","4.53","4.55","4.60","4.65","4.66","4.70","4.75","4.76","4.78","4.80","4.81","4.82","4.83","4.84","4.85","4.86","4.87","4.88"];
	var ua = navigator.userAgent;
	var uaStringCheck = ua.substring(ua.indexOf("5.0 (") + 5, ua.indexOf(") Apple") - 7);
	var fwVersion = ua.substring(ua.indexOf("5.0 (") + 19, ua.indexOf(") Apple"));
	var msgHFW = "¡ATENCIÓN! \ N \ nLa versión de firmware requiere la instalación de 4.84 - 4.88 HFW (firmware híbrido), que contiene módulos explotables.";
	var msgCongrats = "¡Felicidades! Hemos detectado que tu PlayStation 3 está ejecutando FW "+ fwVersion +", que es compatible con ps3hen. ¡Disfrutar!";
	switch (uaStringCheck) {
		case "PLAYSTATION":
			switch (fwVersion) {
				case fwCompat[26]:
					alert(msgCongrats);
					window.location.href ="./PS3.html"
//					initDEX();
					//loadcex_484();
					break;
					
				case fwCompat[27]:
					alert(msgCongrats);
					window.location.href ="./PS3.html"
//					initDEX();
					//loadcex_485();
					break;
					
				case fwCompat[28]:
					alert(msgCongrats);
					window.location.href ="./PS3.html"
//					initDEX();
					//loadcex_486();
					break;
					
				case fwCompat[29]:
					alert(msgCongrats);
					//document.write( "Informacion Navegador:"+uaStringCheck+" <p />" );
					window.location.href ="./PS3.html"
//					initDEX();
					//loadcex_487();
					break;
					
				case fwCompat[30]:
					alert(msgCongrats);
					window.location.href ="./PS3.html"
//					initDEX();
					//loadcex_488();
					break;
					
				default:
					alert('¡Tu PS3 no está en FW 4.84 - 4.88! Su versión actual de FW en ejecución es '+ fwVersion +', que no es compatible con ps3hen 1.0. Todas las funciones han sido deshabilitadas.');
					//document.write( "Informacion Navegador:"+uaStringCheck+" <p />" );
					disable_all();
					break;
			}
			break;
		
		default:
			alert('¡No estás en un sistema PlayStation! Todas las funciones han sido deshabilitadas.');
			//document.write( "Informacion Navegador:"+uaStringCheck+" <p />" );
			disable_all();
			break;
	}
}

function disable_all(){
	//window.location.href ="../Home/index.html";
	window.location.href ="../Mantenedor/index.html";
}
