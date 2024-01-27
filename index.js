function encriptar () {
  let tituloMensaje = document.getElementById('titulo-mensaje');
  let parrafo = document.getElementById('parrafo');
  let texto = document.getElementById('texto').value;
  let textoCifrado = texto.replace(/a/gi, 'd')
                          .replace(/b/gi, 'c')
                          .replace(/c/gi, 'z')
                          .replace(/d/gi, 'i')
                          .replace(/e/gi, 'f')
                          .replace(/f/gi, 'a')
                          .replace(/g/gi, 'f')
                          .replace(/h/gi, 'o')
                          .replace(/i/gi, 'u')
                          .replace(/j/gi, 'm')
                          .replace(/k/gi, 'l')
                          .replace(/l/gi, 'x')
                          .replace(/m/gi, 'y')
                          .replace(/n/gi, 'v')
                          .replace(/ñ/gi, 'q')
                          .replace(/o/gi, 'e')
                          .replace(/p/gi, 'j')
                          .replace(/q/gi, 'p')
                          .replace(/r/gi, 'r')
                          .replace(/s/gi, 'z')
                          .replace(/t/gi, 'w')
                          .replace(/u/gi, 'ñ')
                          .replace(/v/gi, 'n')
                          .replace(/w/gi, 'b')
                          .replace(/x/gi, 'h')
                          .replace(/y/gi, 'i')
                          .replace(/z/gi, 'k');

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
  
}