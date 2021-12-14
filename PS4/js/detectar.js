//########################## End ROP Framework functions by bguerville(under development) #########################
function ps4chk(){
	var fwCompat = ["5.05", "6.72", "7.02", "7.50", "7.51", "7.55", "9.00"];
	var ua = navigator.userAgent;
	var uaStringCheck = ua.substring(ua.indexOf("5.0 (") + 5, ua.indexOf(") Apple") - 7);
	var fwVersion = ua.substring(ua.indexOf("5.0 (") + 19, ua.indexOf(") Apple"));
	var msgCongrats = "¡Felicidades! Hemos detectado que tu PlayStation 4 está ejecutando FW "+ fwVersion +", que es compatible con PS4xploit. ¡Disfrutar!";
	switch (uaStringCheck) {
		case "PlayStation":
			switch (fwVersion) {
				case fwCompat[0]:
					window.location.href ="./5.05/index.html"
					//5.05();
					break;
					
				case fwCompat[1]:
					window.location.href ="./6.72/index.html"
					//6.72();
					break;
					
				case fwCompat[2]:
					window.location.href ="./7.02/index.html"
					//7.02();
					break;
					
				case fwCompat[3]:
					window.location.href ="./7.5x/index.html"
					//7.50();
					break;
					
				case fwCompat[4]:
					window.location.href ="./7.5x/index.html"
					//7.51();
					break;
					
				case fwCompat[5]:
					window.location.href ="./7.5x/index.html"
					//7.55();
					break;
					
				case fwCompat[6]:
					window.location.href ="./9.00/index.html"
					//9.00();
					break;
					
				default:
					alert('¡Tu PS4 no está en FW 5.05 - 6.72 - 7.02 - 7.50 - 7.51 - 7.55 - 9.00! Su versión actual de FW en ejecución es '+ fwVersion +', que no es compatible con PS4xploit. Todas las funciones han sido deshabilitadas. Tratar de no Actualizar su consola para poder desbloquearla mas adelante a nuevos xploit');
					//document.write( "Informacion Navegador:"+uaStringCheck+" <p />" );
					disable_PS4();
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

function disable_PS4(){
	window.location.href ="./Home.html";
}
function disable_all(){
	window.location.href ="../Home/index.html";
}
