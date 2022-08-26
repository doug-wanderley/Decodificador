const inputTexto = document.querySelector(".input-text");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);   
    mensagem.value = textoEncriptado; 
}
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptado;           
}

// A letra "e" convertida para "enter"
// A letra "i" convertida para "imes"
// A letra "a" convertida para "ai"
// A letra "o" convertida para "ober"
// A letra "u" convertida para "ufat"

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length;i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

document.getElementById(".btnCopiar").addEventListener('click', execCopy);

function btnCopiar(){
  document.querySelector(".mensagem").select();
  document.execCommand("copy");
  alert("Texto copiado!")
}