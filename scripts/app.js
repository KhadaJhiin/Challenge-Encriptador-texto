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
    console.log(textoEncriptado);
    document.getElementById('ingresoTexto').value = '';
    return textoEncriptado;
}

function insertarTexto(elemento, texto){
    let elementoHtml = document.querySelector(elemento,texto);
    elementoHtml.innerHTML = texto;
    return;
}

function actualizarContenido(){
    let nuevoTexto = encriptarTexto();

    if (nuevoTexto != ""){
        insertarTexto('.main__areaEncriptacion',`<p>${nuevoTexto}</p> <button>Copiar</button>`);
        let areaEncriptacion = document.getElementById('encriptacionAreaId');
        areaEncriptacion.classList.add('main__areaEncriptacion__textoEncriptado');
    }
}


