//INICIO DEL SCRIPT DEL RETO DE LAS CAJAS, DOM JS//
//1. CUANDO HAGA CLICK EN EL BTN-CAJAS-TITULO SE CAMBIE EL TITULO DE LAS CAJAS//

// 1. Cambiar el título de las cajas (alternando dos textos//
document.getElementById("btn-cajas-titulo").addEventListener("click", () => {
  const tituloCajas = document.getElementById("titulo-cajas");
  tituloCajas.textContent = "hola:)";
});

document.getElementById("btn-cajas-titulo").addEventListener("click", () => {
  const tituloCajas = document.getElementById("titulo-cajas");
  tituloCajas.textContent = "Erwin";
});

document.getElementById("btn-color-cajas").addEventListener("click", () => {
  const cajas = document.getElementsByClassName("caja");
  for (let i = 0; i < cajas.length; i++) {
    cajas[i].style.backgroundColor = "blue";
  }
});

document.getElementById("btn-primera-caja").addEventListener("click", () => {
  const primeraCaja = document.querySelector(".caja");
  primeraCaja.style.backgroundColor = "red";
});

document.getElementById("btn-borde").addEventListener("click", () => {
  const bordercaja = document.querySelectorAll(".caja");
  bordercaja.forEach(caja => {
    caja.style.border = "6px dotted red";
  });
});
const imageUrlInput = document.getElementById('imageUrlInput');
const addImageBtn = document.getElementById('addImageBtn');
const galleryContainer = document.getElementById('galleryContainer');

// Evento al hacer clic en el botón
addImageBtn.addEventListener('click', () => {
  const imageUrl = imageUrlInput.value.trim();
  
  if (imageUrl) {
    // Crear un nuevo contenedor para la imagen
    const col = document.createElement('div');
    col.classList.add('col'); // Para usar la rejilla de Bootstrap

    // Crear la imagen
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('img-fluid', 'rounded', 'shadow-sm'); 
    img.alt = 'Imagen añadida';

    // Agregar la imagen dentro del contenedor
    col.appendChild(img);

    // Añadir el contenedor a la galería
    galleryContainer.appendChild(col);

    // Limpiar input
    imageUrlInput.value = '';
  } else {
    alert('Por favor ingresa una URL válida.');
  }
});