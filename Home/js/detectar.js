/* sistema */
function sistemaOperativo(){
  var plataforma = navigator.platform  ;
  if(plataforma=="Win32"){
    document.getElementById("os").innerHTML = "Sistema Operativo: Windows ";
  }else if (plataforma=="Linux x86_64") {
    document.getElementById("os").innerHTML = "Sistema Operativo: Linux ";
  }
}
function arquitecturaSO(){
  var ua = navigator.userAgent;
  var Arquitectura = ua.substring(ua.indexOf("5.0 (") + 28, ua.indexOf(") Apple"));
  document.getElementById("arqui").innerHTML = "Arquitectura: "+Arquitectura;
}

function lanzadera(){
        sistemaOperativo();
        arquitecturaSO();
}
window.onload = lanzadera;

