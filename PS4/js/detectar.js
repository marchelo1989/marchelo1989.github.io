//########################## End ROP Framework functions by bguerville(under development) #########################
function ps4chk(){
	var fwCompat = ["5.05", "6.72", "7.02", "7.50", "7.51", "7.55"];
	var ua = navigator.userAgent;
	var uaStringCheck = ua.substring(ua.indexOf("5.0 (") + 5, ua.indexOf(") Apple") - 7);
	var fwVersion = ua.substring(ua.indexOf("5.0 (") + 19, ua.indexOf(") Apple"));
	var msgCongrats = "¡Felicidades! Hemos detectado que tu PlayStation 4 está ejecutando FW "+ fwVersion +", que es compatible con PS4xploit. ¡Disfrutar!";
	switch (uaStringCheck) {
		case "PlayStation":
			switch (fwVersion) {
				case fwCompat[0]:
					alert(msgCongrats);
					window.location.href ="./PS4.html"
//					initDEX();
					//loadcex_484();
					break;
					
				case fwCompat[1]:
					alert(msgCongrats);
					window.location.href ="./PS4.html"
//					initDEX();
					//loadcex_485();
					break;
					
				case fwCompat[2]:
					alert(msgCongrats);
					window.location.href ="./PS4.html"
//					initDEX();
					//loadcex_486();
					break;
					
				case fwCompat[3]:
					alert(msgCongrats);
					//document.write( "Informacion Navegador:"+uaStringCheck+" <p />" );
					window.location.href ="./PS4.html"
//					initDEX();
					//loadcex_487();
					break;
					
				case fwCompat[4]:
					alert(msgCongrats);
					window.location.href ="./PS4.html"
//					initDEX();
					//loadcex_488();
					break;
					
				case fwCompat[5]:
					alert(msgCongrats);
					window.location.href ="./PS4.html"
//					initDEX();
					//loadcex_488();
					break;
					
				default:
					alert('¡Tu PS4 no está en FW 5.05 - 6.72 - 7.02 - 7.50 - 7.51 - 7.55! Su versión actual de FW en ejecución es '+ fwVersion +', que no es compatible con PS4xploit. Todas las funciones han sido deshabilitadas. Tratar de no Actualizar su consola para poder desbloquearla mas adelante a nuevos xploit');
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