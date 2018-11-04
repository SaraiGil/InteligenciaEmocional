var r1, r2, r3, r4;

r1= null;
r2= null;
r3= null;
r4= null;

function nuevoTest()
{
  location.reload();
}

function verResultados()
{

  var preg1a= document.getElementById('r1A');
  var preg1b= document.getElementById('r1B');
  var preg2a= document.getElementById('r2A');
  var preg2b= document.getElementById('r2B');
  var preg3a= document.getElementById('r3A');
  var preg3b= document.getElementById('r3B');
  var preg4a= document.getElementById('r4A');
  var preg4b= document.getElementById('r4B');

  if (preg1a.checked) {preg1b.disabled=true} else if (preg1b.checked) {preg1a.disabled=true}
  if (preg2a.checked) {preg2b.disabled=true} else if (preg2b.checked) {preg2a.disabled=true}
  if (preg3a.checked) {preg3b.disabled=true} else if (preg3b.checked) {preg3a.disabled=true}
  if (preg4a.checked) {preg4b.disabled=true} else if (preg4b.checked) {preg4a.disabled=true}

    if (preg1a.checked) {r1 = 'Extrovertido';} else if (preg1b.checked) {r1 = 'Introvertido';} else {r1=0}
    if (preg2a.checked) {r2 = 'Sensitivo';} else if (preg2b.checked) {r2 = 'Intuitivo';} else {r2=0}
    if (preg3a.checked) {r3 = 'Pensativo';} else if (preg3b.checked) {r3 = 'Sentimental';} else {r3=0}
    if (preg4a.checked) {r4 = 'Juicioso';} else if (preg4b.checked) {r4 = 'Perceptivo';} else {r4=0}

    console.log(r1,r2,r3,r4);

  if (r1 == 0 || r2 == 0 || r3 == 0 || r4 == 0) {
    document.getElementById('resTitle').innerHTML = "Tus resultados:";
    document.getElementById('resContent').innerHTML = "Selecciona una respuesta de cada par de imágenes para obtener tu resultado";
  } else {
    document.getElementById('resTitle').innerHTML = "Tus resultados:";
    document.getElementById('resContent').innerHTML = r1+","+r2+","+r3+","+r4;
  }




}
