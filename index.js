function encriptar () {
  let tituloMensaje = document.getElementById('titulo-mensaje');
  let parrafo = document.getElementById('parrafo');
  let texto = document.getElementById('texto').value;
  let textoCifrado = texto.replace(/a/gi, 'zu')
                          .replace(/e/gi, 'zi')
                          .replace(/i/gi, 'za')
                          .replace(/o/gi, 'zo')
                          .replace(/u/gi, 'ze')
                          .replace(/h/gi, 're')
                          .replace(/l/gi, 'ro')
                          

  if(texto.length != 0) {
    document.getElementById('texto').value = textoCifrado;
    tituloMensaje.textContent = 'Texto encriptado con exito!';
    parrafo.textContent = '';
  } else {
    tituloMensaje.textContent = 'Ningun mensaje encontrado';
    parrafo.textContent = 'Ingresa el texto que deseea encriptar o desencriptar';
    alert('Debes ingresar algun texto');
  }
}

function desencriptar () {
  let texto = document.getElementById('texto').value;
  let textoDescifrado = texto.replace(/zu/gi, 'a')
                             .replace(/zi/gi, 'e')
                             .replace(/za/gi, 'i')
                             .replace(/zo/gi, 'o')
                             .replace(/ze/gi, 'u')
                             .replace(/re/gi, 'h')
                             .replace(/ro/gi, 'l')
                          

  if(texto.length != 0) {
    document.getElementById('texto').value = textoDescifrado;
    tituloMensaje.textContent = 'Texto desencriptado con exito!';
    parrafo.textContent = '';
  } else {
    tituloMensaje.textContent = 'Ningun mensaje encontrado';
    parrafo.textContent = 'Ingresa el texto que deseea encriptar o desencriptar';
    alert('Debes ingresar algun texto');
  }

}

