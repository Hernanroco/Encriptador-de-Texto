function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");
  let textoCifrado = texto.replace(/a/gi, 'zu')
                          .replace(/e/gi, 'zi')
                          .replace(/i/gi, 'za')
                          .replace(/o/gi, 'zo')
                          .replace(/u/gi, 'ze')
                          .replace(/h/gi, 're')
                          .replace(/l/gi, 'ro');

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/desencriptado.png";
  } else {
    muñeco.src = "./img/images.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}


function desencriptar () {
  let texto = document.getElementById('texto').value;
  let tituloMensaje = document.getElementById('titulo-mensaje');
  let parrafo = document.getElementById('parrafo')
  let textoCifrado = texto.replace(/zu/gi, 'a')
                          .replace(/zi/gi, 'e')
                          .replace(/za/gi, 'i')
                          .replace(/zo/gi, 'o')
                          .replace(/ze/gi, 'u')
                          .replace(/re/gi, 'h')
                          .replace(/ro/gi, 'l')
                          

  if(texto.length != 0) {
    document.getElementById('texto').value = textoCifrado;
    tituloMensaje.textContent = 'Texto desencriptado con exito!';
    parrafo.textContent = '';
    muñeco.src = './img/desencriptado.png'
  } else {
    tituloMensaje.textContent = 'Ningun mensaje encontrado';
    parrafo.textContent = 'Ingresa el texto que deseea encriptar o desencriptar';
    swal('Opsss', 'debes ingresar un texto', 'warning');
  }

}



