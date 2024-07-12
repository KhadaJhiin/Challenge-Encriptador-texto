//########################################
//### Funcion global para encriptacion ###
function encriptacion(accion){
    let textoUsuario = document.getElementById('ingresoTexto').value;
    if (!textoUsuario || /[A-Z]|[^a-z0-9\s]/.test(textoUsuario)) {
        enviarAlertaError();
        cerrarAlertaError();
        return "";
    }
    if(accion == "encriptar"){
        textoUsuario = textoUsuario.replace(/a|e|i|o|u/g, function(match) {
            switch(match) {
                case 'a': return 'ai';
                case 'e': return 'enter';
                case 'i': return 'imes';
                case 'o': return 'ober';
                case 'u': return 'ufat';
            }
        });
    } else if(accion == "desencriptar"){
        textoUsuario = textoUsuario.replace(/ai|enter|imes|ober|ufat/g, function(match) {
            switch(match) {
                case 'ai': return 'a';
                case 'enter': return 'e';
                case 'imes': return 'i';
                case 'ober': return 'o';
                case 'ufat': return 'u';
            }
        });
    }    
    document.getElementById('ingresoTexto').value = '';
    return textoUsuario;
}
//########################################
//##### Funcion para insertar texto ######
function insertarTexto(elemento, texto){
    let elementoHtml = document.querySelector(elemento,texto);
    elementoHtml.innerHTML = texto;
    return;
}
//########################################
//### Funciones para mostrar contenido ###
function actualizarContenido(accion){
    let nuevoTexto = encriptacion(accion);
    insertarTexto('.main__areaEncriptacion',`<p>${nuevoTexto}</p> <button>Copiar</button>`);
    let areaEncriptacion = document.getElementById('encriptacionAreaId');
    areaEncriptacion.classList.add('main__areaEncriptacion__textoEncriptado');
}
//########################################
//### Funciones para mostrar alertas #####
function enviarAlertaError(){
    document.getElementById("alertaError").style.display="flex";
}
function cerrarAlertaError(){
    document.getElementById("ok-button").addEventListener("click",function(){
        document.getElementById("alertaError").style.display="none";
    });
}

