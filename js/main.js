const fila = document.querySelector('.contenedor-carrucel');
const peliculas = document.querySelectorAll('.fotos-carrucel');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

const numeroPaginas = Math.ceil(peliculas.length / 4);
for (let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');

    if (i === 0) {
        indicador.classList.add('activo')
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    })
}

// ? ----- Hover fotos ------
peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');

        }, 300);
    })
})

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
})




const fila1 = document.querySelector('.contenedor-carrucel1');
const peliculas1 = document.querySelectorAll('.fotos-carrucel1');

const flechaIzquierda1 = document.getElementById('flecha-izquierda1');
const flechaDerecha1 = document.getElementById('flecha-derecha1');

flechaDerecha1.addEventListener('click', () => {
    fila1.scrollLeft += fila1.offsetWidth;

    const indicadorActivo1 = document.querySelector('.indicadores1 .activo');
    if (indicadorActivo1.nextSibling) {
        indicadorActivo1.nextSibling.classList.add('activo');
        indicadorActivo1.classList.remove('activo');
    }
});
flechaIzquierda1.addEventListener('click', () => {
    fila1.scrollLeft -= fila1.offsetWidth;

    const indicadorActivo1 = document.querySelector('.indicadores1 .activo');
    if (indicadorActivo1.previousSibling) {
        indicadorActivo1.previousSibling.classList.add('activo');
        indicadorActivo1.classList.remove('activo');
    }
});

const numeroPaginas1 = Math.ceil(peliculas1.length / 4);
for (let i = 0; i < numeroPaginas1; i++) {
    const indicador1 = document.createElement('button');

    if (i === 0) {
        indicador1.classList.add('activo')
    }

    document.querySelector('.indicadores1').appendChild(indicador1);
    indicador1.addEventListener('click', (e) => {
        fila1.scrollLeft = i * fila1.offsetWidth;

        document.querySelector('.indicadores1 .activo').classList.remove('activo');
        e.target.classList.add('activo');
    })
}

// ? ----- Hover fotos ------
peliculas1.forEach((pelicula1) => {
    pelicula1.addEventListener('mouseenter', (e) => {
        const elemento1 = e.currentTarget;
        setTimeout(() => {
            peliculas1.forEach(pelicula1 => pelicula1.classList.remove('hover'));
            elemento1.classList.add('hover');

        }, 300);
    })
})

fila1.addEventListener('mouseleave', () => {
    peliculas1.forEach(pelicula1 => pelicula1.classList.remove('hover'));
})









/*-------ventana emergente------*/ 

/*----1---*/

var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');


btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
});

/*----2---*/

var btnAbrirPopup2 = document.getElementById('btn-abrir-popup2'),
    overlay2 = document.getElementById('overlay2'),
    popup2 = document.getElementById('popup2'),
    btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');


btnAbrirPopup2.addEventListener('click', function(){
    overlay2.classList.add('active2');
});

btnCerrarPopup2.addEventListener('click', function(){
    overlay2.classList.remove('active2');
});

/*----3---*/

var btnAbrirPopup3 = document.getElementById('btn-abrir-popup3'),
    overlay3 = document.getElementById('overlay3'),
    popup3 = document.getElementById('popup3'),
    btnCerrarPopup3 = document.getElementById('btn-cerrar-popup3');


btnAbrirPopup3.addEventListener('click', function(){
    overlay3.classList.add('active3');
});

btnCerrarPopup3.addEventListener('click', function(){
    overlay3.classList.remove('active3');
});

/*----4---*/

var btnAbrirPopup4 = document.getElementById('btn-abrir-popup4'),
    overlay4 = document.getElementById('overlay4'),
    popup4 = document.getElementById('popup4'),
    btnCerrarPopup4 = document.getElementById('btn-cerrar-popup4');


btnAbrirPopup4.addEventListener('click', function(){
    overlay4.classList.add('active4');
});

btnCerrarPopup4.addEventListener('click', function(){
    overlay4.classList.remove('active4');
});

/*----5---*/

var btnAbrirPopup5 = document.getElementById('btn-abrir-popup5'),
    overlay5 = document.getElementById('overlay5'),
    popup5 = document.getElementById('popup5'),
    btnCerrarPopup5 = document.getElementById('btn-cerrar-popup5');


btnAbrirPopup5.addEventListener('click', function(){
    overlay5.classList.add('active5');
});

btnCerrarPopup5.addEventListener('click', function(){
    overlay5.classList.remove('active5');
});

/*----6---*/

var btnAbrirPopup6 = document.getElementById('btn-abrir-popup6'),
    overlay6 = document.getElementById('overlay6'),
    popup6 = document.getElementById('popup6'),
    btnCerrarPopup6 = document.getElementById('btn-cerrar-popup6');


btnAbrirPopup6.addEventListener('click', function(){
    overlay6.classList.add('active6');
});

btnCerrarPopup6.addEventListener('click', function(){
    overlay6.classList.remove('active6');
});


var btnAbrirPopup7 = document.getElementById('btn-abrir-popup7'),
    overlay7 = document.getElementById('overlay7'),
    popup7 = document.getElementById('popup7'),
    btnCerrarPopup7 = document.getElementById('btn-cerrar-popup7');


btnAbrirPopup7.addEventListener('click', function(){
    overlay7.classList.add('active7');
});

btnCerrarPopup7.addEventListener('click', function(){
    overlay7.classList.remove('active7');
});



var btnAbrirPopup8 = document.getElementById('btn-abrir-popup8'),
    overlay8 = document.getElementById('overlay8'),
    popup8 = document.getElementById('popup8'),
    btnCerrarPopup8 = document.getElementById('btn-cerrar-popup8');


btnAbrirPopup8.addEventListener('click', function(){
    overlay8.classList.add('active8');
});

btnCerrarPopup8.addEventListener('click', function(){
    overlay8.classList.remove('active8');
});

/*------parte 2-------*/

/*----1---*/

var btnAbrirPopup_1 = document.getElementById('btn-abrir-popup-1'),
    overlay_1 = document.getElementById('overlay-1'),
    popup_1 = document.getElementById('popup-1'),
    btnCerrarPopup_1 = document.getElementById('btn-cerrar-popup-1');


btnAbrirPopup_1.addEventListener('click', function(){
    overlay_1.classList.add('active-1');
});

btnCerrarPopup_1.addEventListener('click', function(){
    overlay_1.classList.remove('active-1');
});

/*----2---*/


var btnAbrirPopup_2 = document.getElementById('btn-abrir-popup-2'),
    overlay_2 = document.getElementById('overlay-2'),
    popup_2 = document.getElementById('popup-2'),
    btnCerrarPopup_2 = document.getElementById('btn-cerrar-popup-2');


btnAbrirPopup_2.addEventListener('click', function(){
    overlay_2.classList.add('active-2');
});

btnCerrarPopup_2.addEventListener('click', function(){
    overlay_2.classList.remove('active-2');
});


/*----3---*/


var btnAbrirPopup_3 = document.getElementById('btn-abrir-popup-3'),
    overlay_3 = document.getElementById('overlay-3'),
    popup_3 = document.getElementById('popup-3'),
    btnCerrarPopup_3 = document.getElementById('btn-cerrar-popup-3');


btnAbrirPopup_3.addEventListener('click', function(){
    overlay_3.classList.add('active-3');
});

btnCerrarPopup_3.addEventListener('click', function(){
    overlay_3.classList.remove('active-3');
});

/*----4---*/


var btnAbrirPopup_4 = document.getElementById('btn-abrir-popup-4'),
    overlay_4 = document.getElementById('overlay-4'),
    popup_4 = document.getElementById('popup-4'),
    btnCerrarPopup_4 = document.getElementById('btn-cerrar-popup-4');


btnAbrirPopup_4.addEventListener('click', function(){
    overlay_4.classList.add('active-4');
});

btnCerrarPopup_4.addEventListener('click', function(){
    overlay_4.classList.remove('active-4');
});

/*----5---*/


var btnAbrirPopup_5 = document.getElementById('btn-abrir-popup-5'),
    overlay_5 = document.getElementById('overlay-5'),
    popup_5= document.getElementById('popup-5'),
    btnCerrarPopup_5 = document.getElementById('btn-cerrar-popup-5');


btnAbrirPopup_5.addEventListener('click', function(){
    overlay_5.classList.add('active-5');
});

btnCerrarPopup_5.addEventListener('click', function(){
    overlay_5.classList.remove('active-5');
});

/*----6---*/


var btnAbrirPopup_6 = document.getElementById('btn-abrir-popup-6'),
    overlay_6 = document.getElementById('overlay-6'),
    popup_6 = document.getElementById('popup-6'),
    btnCerrarPopup_6 = document.getElementById('btn-cerrar-popup-6');


btnAbrirPopup_6.addEventListener('click', function(){
    overlay_6.classList.add('active-6');
});

btnCerrarPopup_6.addEventListener('click', function(){
    overlay_6.classList.remove('active-6');
});

var btnAbrirPopup_7 = document.getElementById('btn-abrir-popup-7'),
    overlay_7 = document.getElementById('overlay-7'),
    popup_7 = document.getElementById('popup-7'),
    btnCerrarPopup_7 = document.getElementById('btn-cerrar-popup-7');


btnAbrirPopup_7.addEventListener('click', function(){
    overlay_7.classList.add('active-7');
});

btnCerrarPopup_7.addEventListener('click', function(){
    overlay_7.classList.remove('active-7');
});


var btnAbrirPopup_8 = document.getElementById('btn-abrir-popup-8'),
    overlay_8 = document.getElementById('overlay-8'),
    popup_8 = document.getElementById('popup-8'),
    btnCerrarPopup_8 = document.getElementById('btn-cerrar-popup-8');


btnAbrirPopup_8.addEventListener('click', function(){
    overlay_8.classList.add('active-8');
});

btnCerrarPopup_8.addEventListener('click', function(){
    overlay_8.classList.remove('active-8');
});

