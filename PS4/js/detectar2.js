//########################## End ROP Framework functions by bguerville(under development) #########################
function ps4chk(){
	var fwCompat = ["9.00"];
	var ua = navigator.userAgent;
	var uaStringCheck = ua.substring(ua.indexOf("5.0 (") + 5, ua.indexOf(") Apple") - 20);
	var fwVersion = ua.substring(ua.indexOf("5.0 (") + 32, ua.indexOf(") Apple"));
	var msgCongrats = "¡Felicidades! Hemos detectado que tu PlayStation 4 está ejecutando FW "+ fwVersion +", que es compatible con PS4xploit. ¡Disfrutar!";
	switch (uaStringCheck) {
		case "PlayStation":
			switch (fwVersion) {
				case fwCompat[0]:
					window.location.href ="./9.00/index.html"
					//9.00();
					break;
					
				default:
					alert('¡Tu PS4 no está en FW 9.00! Su versión actual de FW en ejecución es '+ fwVersion +', que no es compatible con PS4xploit. Todas las funciones han sido deshabilitadas. Tratar de no Actualizar su consola para poder desbloquearla mas adelante a nuevos xploit');
					//document.write( "Informacion Navegador:"+uaStringCheck+" <p />" );
					disable_PS4();
					break;
			}
			break;
		
		default:
			alert('¡No estás en un sistema PlayStation!'+ uaStringCheck +'Todas las funciones han sido deshabilitadas.');
			//document.write( "Informacion Navegador:"+uaStringCheck+" <p />" );
			disable_all();
			break;
	}
}

function disable_PS4(){
	window.location.href ="./Home.html";
}
function disable_all(){
	window.location.href ="../Home/index.html";
}
