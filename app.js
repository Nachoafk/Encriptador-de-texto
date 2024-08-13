const inputTexto = document.getElementById('input-texto');
const outputTexto = document.getElementById('output-texto');
const botonEncriptar = document.getElementById('boton1');
const botonDesencriptar = document.getElementById('boton2');
const botonCopiar = document.getElementById('copiar');
const Encriptacion = {
  'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat'};

function encriptar() {
  let texto = inputTexto.value.toLowerCase();
  for (const letra in Encriptacion) {
    texto = texto.replaceAll(letra, Encriptacion[letra]);
  }
  outputTexto.value = texto;
}

function desencriptar() {
  let texto = inputTexto.value.toLowerCase();
  for (const letra in Encriptacion) {
    texto = texto.replaceAll(Encriptacion[letra], letra);
  }
  outputTexto.value = texto;
}


document.getElementById('input-texto').addEventListener('focus', function() {
  this.value = '';
});

document.getElementById('boton1').addEventListener('click', function() {
  document.getElementById('texto_ayuda').style.display = 'none';
  document.getElementById('texto_mensaje').style.display = 'none';
  document.getElementById('copiar').style.display = 'block';
  document.getElementById('output-texto').style.display = 'block';
  document.getElementById('imagen').style.display = 'none';
});
document.getElementById('boton2').addEventListener('click', function() {
  document.getElementById('texto_ayuda').style.display = 'none';
  document.getElementById('texto_mensaje').style.display = 'none';
  document.getElementById('copiar').style.display = 'block';
  document.getElementById('output-texto').style.display = 'block';
  document.getElementById('imagen').style.display = 'none';
});



botonEncriptar.addEventListener('click', encriptar);
botonDesencriptar.addEventListener('click', desencriptar);
botonCopiar.addEventListener('click', e => {
  outputTexto.select();
  document.execCommand('copy');
});