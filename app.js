window.addEventListener('scroll', function() {
    const menu = document.getElementById('menu');
    const scrollTop = window.scrollY;

    // La posición en la que el menú se vuelve fijo
    const scrollLimit = 100;

    if (scrollTop > scrollLimit) {
        menu.classList.add('fixed');
    } else {
        menu.classList.remove('fixed');
    }
});
let imagenes = ["cesar 1.jpg", "cesar 2.jpg", "cesar 3.jpg"];
let imagenActual = 0;

function mostrarImagen(src) {
  document.getElementById('imagenAmpliada').style.display = "block";
  document.getElementById('imagenAmpliadaSrc').src = src;
  imagenActual = imagenes.indexOf(src);
}

function cerrarImagen() {
  document.getElementById('imagenAmpliada').style.display = "none";
}

function cambiarImagen(delta) {
  imagenActual += delta;
  
  if (imagenActual < 0) {
    imagenActual = imagenes.length - 1;
  } else if (imagenActual >= imagenes.length) {
    imagenActual = 0;
  }
  
  document.getElementById('imagenAmpliadaSrc').src = imagenes[imagenActual];
}
// Obtener el menú
const menu = document.getElementById('menu');

// Obtener la posición de las secciones
const inicio = document.getElementById('inicio').offsetTop;
const quienSoy = document.getElementById('quien-soy').offsetTop;
const hobbies = document.getElementById('hobbies').offsetTop;
const contacto = document.getElementById('contacto').offsetTop;

// Manejar el desplazamiento de la página
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY;

  if (scrollPos >= inicio && scrollPos < quienSoy) {
    menu.style.top = '0';
  } else if (scrollPos >= quienSoy && scrollPos < hobbies) {
    menu.style.top = '0';
  } else if (scrollPos >= hobbies && scrollPos < contacto) {
    menu.style.top = '0';
  } else if (scrollPos >= contacto) {
    menu.style.top = '0';
  } else {
    menu.style.top = '-80px'; // Ocultar el menú cuando esté en la parte superior
  }
});
