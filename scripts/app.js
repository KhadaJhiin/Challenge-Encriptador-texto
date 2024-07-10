function encriptarTexto(){
    let textoUsuario = document.getElementById('ingresoTexto').value;
    let textoEncriptado = "";
    if (!textoUsuario) {
        alert('Por favor ingrese algún texto.');
        return "";
    }
    let regex = /[A-Z]|[^a-z0-9\s]/;
    if (regex.test(textoUsuario)) {
        alert('El texto no debe contener letras mayúsculas ni caracteres especiales.');
        return "";
    }

    for(let i=0; i<textoUsuario.length; i++){
        switch(textoUsuario[i]){
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += textoUsuario[i];
                break;
        }
    }
    document.getElementById('ingresoTexto').value = '';
    return textoEncriptado;
}

function desEncriptarTexto(){
    let textoUsuario = document.getElementById('ingresoTexto').value;
    if (!textoUsuario) {
        alert('Por favor ingrese algún texto.');
        return "";
    }
    let regex = /[A-Z]|[^a-z0-9\s]/;
    if (regex.test(textoUsuario)) {
        alert('El texto no debe contener letras mayúsculas ni caracteres especiales.');
        return "";
    }
    textoUsuario = textoUsuario.replace(/ai/g, "a");
    textoUsuario = textoUsuario.replace(/enter/g, "e");
    textoUsuario = textoUsuario.replace(/imes/g, "i");
    textoUsuario = textoUsuario.replace(/ober/g, "o");
    textoUsuario = textoUsuario.replace(/ufat/g, "u");

    // Mostrar el texto modificado en otra text area
    document.getElementById('ingresoTexto').value = '';
    return textoUsuario;
}


function insertarTexto(elemento, texto){
    let elementoHtml = document.querySelector(elemento,texto);
    elementoHtml.innerHTML = texto;
    return;
}

function actualizarContenidoEncriptar(){
    let nuevoTexto = encriptarTexto();

    if (nuevoTexto != ""){
        insertarTexto('.main__areaEncriptacion',`<p>${nuevoTexto}</p> <button>Copiar</button>`);
        let areaEncriptacion = document.getElementById('encriptacionAreaId');
        areaEncriptacion.classList.add('main__areaEncriptacion__textoEncriptado');
    }
}

function actualizarContenidoDesencriptar(){
    let nuevoTexto = desEncriptarTexto();

    if (nuevoTexto != ""){
        insertarTexto('.main__areaEncriptacion',`<p>${nuevoTexto}</p> <button>Copiar</button>`);
        let areaEncriptacion = document.getElementById('encriptacionAreaId');
        areaEncriptacion.classList.add('main__areaEncriptacion__textoEncriptado');
    }
}

