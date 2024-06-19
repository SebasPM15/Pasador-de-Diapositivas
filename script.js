// Obtener referencias a los elementos del DOM
var slideActual = document.getElementById('slideActual');
var totalSlides = document.getElementById('totalSlides');
var numSlides = parseInt(document.getElementById('num_slides').value);
var toggleBtn = document.querySelector('.toggle-btn');
var lista = document.getElementById('lista');
var btnRetroceder = document.getElementById('btnRetroceder');
var btnAvanzar = document.getElementById('btnAvanzar');
var slideImg = document.getElementById('slide-img');

let currentSlide = 1; 

// Función para actualizar el contador de diapositivas
function contador() {
    slideActual.textContent = currentSlide;
    totalSlides.textContent = numSlides;
}

// Función para cambiar la imagen de la diapositiva
function cambiarSlide() {
    slideImg.src = `Diapositiva${currentSlide}.jpeg`;
}

// Inicializamos el contador y la imagen del slide
contador();
cambiarSlide();

// Función para mostrar/ocultar la barra lateral
toggleBtn.onclick = () => {
    lista.classList.toggle('active');
};

// Función para retroceder a la diapositiva anterior
btnRetroceder.onclick = () => {
    if (currentSlide > 1) {
        currentSlide--;
        contador();
        cambiarSlide();
    }
};

// Función para avanzar a la siguiente diapositiva
btnAvanzar.onclick = () => {
    if (currentSlide < numSlides) {
        currentSlide++;
        contador();
        cambiarSlide();
    }
};

// Seleccionar todos los elementos li de la lista y agregar eventos de click
document.querySelectorAll('#lista ul li').forEach((item, index) => {
    item.onclick = () => {
        currentSlide = index + 1; // Los índices comienzan en 0, las diapositivas en 1
        contador();
        cambiarSlide();
    };
});
