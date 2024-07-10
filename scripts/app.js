function encriptarTexto(){
    let textoUsuario = document.getElementById('ingresoTexto').value;
    let textoEncriptado = "";

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
    insertarTexto('.main__areaEncriptacion',`<p>${nuevoTexto}</p>`);
}


