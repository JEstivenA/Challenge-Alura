
var textAreaCifrar = document.querySelector("#Cifrar");
var textAreaResultado = document.querySelector("#resultado")
var btnEncriptar = document.querySelector("#btnEncriptar");
var btnDesencriptar = document.querySelector("#btnDesencriptar");
var btnCopy = document.querySelector("#copiar");
var btnLimpiar = document.querySelector("#limpiar");
 

function encriptador(mensaje){

    var encriptado = "";

    encriptado = mensaje.replace(/e/g, "enter" );
    encriptado = encriptado.replace(/i/g, "imes");
    encriptado = encriptado.replace(/a/g, "ai");
    encriptado = encriptado.replace(/o/g, "ober");
    encriptado = encriptado.replace(/u/g, "ufat");

    return encriptado;

}

function desencriptar(mensaje){

    var desencriptado = "";


    desencriptado = mensaje.replace(/enter/g, "e" );
    desencriptado = desencriptado.replace(/imes/g, "i");
    desencriptado = desencriptado.replace(/ai/g, "a");
    desencriptado = desencriptado.replace(/ober/g, "o");
    desencriptado = desencriptado.replace(/ufat/g, "u");

    return desencriptado;
}

function Copiar(){

    var copiarTexto = document.getElementById("resultado");

    copiarTexto.select();
    copiarTexto.setSelectionRange(0,9999);
    navigator.clipboard.writeText(copiarTexto.value);
}

function Limpiar(){
    textAreaCifrar.value = "";
    textAreaResultado.value = "";
}

btnEncriptar.addEventListener("click", function(){
    var mensaje = textAreaCifrar.value;

    if (mensaje == ""){

        alert("No hay mensaje para encriptar")
    } else{

        textAreaResultado.value = encriptador(mensaje);
    }

});

btnDesencriptar.addEventListener("click", function(){

    var mensaje = textAreaCifrar.value;

    if(mensaje == ""){

        alert("No hay mensaje para desencriptar")
    } else{
        textAreaResultado.value = desencriptar(mensaje);
    }
});

btnCopy.addEventListener("click", function(){

    if (textAreaResultado.value == ""){

        alert("No hay mensaje que copiar");
    } else{

        Copiar();
        textAreaResultado.value = "";
    }
})

btnLimpiar.addEventListener("click", Limpiar);

 
