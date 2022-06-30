//########################## End ROP Framework functions by bguerville(under development) #########################
function psVchk(){

	var fwCompat = ["3.73"];
	var ua = navigator.userAgent;
	var uaStringCheck = ua.substring(ua.indexOf("5.0 (") + 5, ua.indexOf(") Apple") - 5);
	var fwVersion = ua.substring(ua.indexOf("5.0 (") + 22, ua.indexOf(") Apple"));
	var msgHFW = "¡ATENCIÓN! La versión de firmware detectada es 3.73.";
	var msgCongrats = "¡Felicidades! Hemos detectado que tu PlayStation Vita está ejecutando FW "+ fwVersion +", que es compatible. ¡Disfrutar!";
	switch (uaStringCheck) {
		case "PlayStation Vita":
			switch (fwVersion) {
				case fwCompat[0]:
					//alert(msgHFW);
					window.location.href ="./PSVita.html"
					break;
					
				default:
					alert('¡Tu PS Vita no está en 3.73! Su versión actual de FW en ejecución es '+ fwVersion +', que no es compatible.');
					//document.write( "Informacion Navegador:"+uaStringCheck+" <p />" );
					disable_PSV();
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
function disable_PSV(){
	window.location.href ="./Home.html";
}
function disable_all(){
	window.location.href ="../Home/index.html";
	//window.location.href ="../Mantenedor/index.html";
}
