function cargarEncabezado(){
    var barra = 
        '<li><a href="https://twitter.com/marchelo_bm" class="icon brands fa-twitter" target="_blank"><span class="label">Twitter</span></a></li>'+
        '<li><a href="https://www.facebook.com/marcelo.bm" class="icon brands fa-facebook-f" target="_blank"><span class="label">Facebook</span></a></li>'+
        '<li><a href="https://www.instagram.com/marchelo.bm" class="icon brands fa-instagram" target="_blank"><span class="label">Instagram</span></a></li>'+
        '<li><a href="https://wa.me/message/ZWPJK3PZT3QQJ1" class="icon brands fa-whatsapp" target="_blank"><span class="label">Whatsapp</span></a></li>'+
        '<li><a href="https://m.me/marcelo.bm" class="icon brands fa-facebook-messenger" target="_blank"><span class="label">Messenger</span></a></li>'+
        '<li><a href="https://github.com/marchelo1989" class="icon brands fa-github" target="_blank"><span class="label">Github</span></a></li>'+
        '<li><a href="https://t.me/MarcheloBM" class="icon brands fa-telegram" target="_blank"><span class="label">Telegram</span></a></li>';
    var el = document.getElementById("encabezado");
    el.innerHTML = barra;
  
}

window.onload = cargarEncabezado;
