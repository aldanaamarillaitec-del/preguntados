// ==========================================
// EL PREGUNTADO - JUEGO DE TRIVIA
// ==========================================


// ==========================================
// PREGUNTAS
// ==========================================

const preguntas = {

    Matemática: [

        {
            pregunta: "¿Cuánto es 8 × 7?",
            respuestas: ["54", "56", "64", "48"],
            correcta: "56"
        },

        {
            pregunta: "¿Cuál es la raíz cuadrada de 81?",
            respuestas: ["7", "8", "9", "10"],
            correcta: "9"
        },

        {
            pregunta: "¿Cuánto es 100 ÷ 4?",
            respuestas: ["20", "25", "30", "40"],
            correcta: "25"
        },

        {
            pregunta: "¿Cuánto es 15 + 27?",
            respuestas: ["32", "40", "42", "45"],
            correcta: "42"
        },

        {
            pregunta: "¿Cuál de estos números es primo?",
            respuestas: ["9", "15", "17", "21"],
            correcta: "17"
        }

    ],


    Historia: [

        {
            pregunta: "¿En qué año llegó Cristóbal Colón a América?",
            respuestas: ["1492", "1500", "1453", "1520"],
            correcta: "1492"
        },

        {
            pregunta: "¿Quién fue el primer presidente de Argentina?",
            respuestas: [
                "Bernardino Rivadavia",
                "Manuel Belgrano",
                "José de San Martín",
                "Domingo Faustino Sarmiento"
            ],
            correcta: "Bernardino Rivadavia"
        },

        {
            pregunta: "¿En qué año comenzó la Revolución Francesa?",
            respuestas: ["1776", "1789", "1804", "1810"],
            correcta: "1789"
        },

        {
            pregunta: "¿Quién lideró el cruce de los Andes?",
            respuestas: [
                "José de San Martín",
                "Manuel Belgrano",
                "Julio A. Roca",
                "Mariano Moreno"
            ],
            correcta: "José de San Martín"
        },

        {
            pregunta: "¿Dónde se declaró la Independencia Argentina en 1816?",
            respuestas: [
                "Buenos Aires",
                "Córdoba",
                "Tucumán",
                "Mendoza"
            ],
            correcta: "Tucumán"
        }

    ],


    Geografía: [

        {
            pregunta: "¿Cuál es el continente más grande?",
            respuestas: [
                "Europa",
                "Asia",
                "África",
                "América"
            ],
            correcta: "Asia"
        },

        {
            pregunta: "¿Cuál es la capital de Argentina?",
            respuestas: [
                "Córdoba",
                "Rosario",
                "Buenos Aires",
                "Mendoza"
            ],
            correcta: "Buenos Aires"
        },

        {
            pregunta: "¿Cuál es el océano más grande?",
            respuestas: [
                "Atlántico",
                "Índico",
                "Pacífico",
                "Ártico"
            ],
            correcta: "Pacífico"
        },

        {
            pregunta: "¿Cuál es el río más largo de Sudamérica?",
            respuestas: [
                "Río Paraná",
                "Río Amazonas",
                "Río Uruguay",
                "Río Colorado"
            ],
            correcta: "Río Amazonas"
        },

        {
            pregunta: "¿En qué continente se encuentra Egipto?",
            respuestas: [
                "Asia",
                "Europa",
                "África",
                "Oceanía"
            ],
            correcta: "África"
        }

    ],


    Ciencias: [

        {
            pregunta: "¿Cuál es el planeta más cercano al Sol?",
            respuestas: [
                "Venus",
                "Marte",
                "Mercurio",
                "Júpiter"
            ],
            correcta: "Mercurio"
        },

        {
            pregunta: "¿Qué órgano bombea la sangre?",
            respuestas: [
                "Pulmón",
                "Corazón",
                "Hígado",
                "Riñón"
            ],
            correcta: "Corazón"
        },

        {
            pregunta: "¿Cuál es el gas que necesitamos principalmente para respirar?",
            respuestas: [
                "Oxígeno",
                "Helio",
                "Hidrógeno",
                "Dióxido de carbono"
            ],
            correcta: "Oxígeno"
        },

        {
            pregunta: "¿Cuántos huesos tiene aproximadamente un adulto?",
            respuestas: [
                "106",
                "206",
                "306",
                "406"
            ],
            correcta: "206"
        },

        {
            pregunta: "¿Qué fuerza nos mantiene sobre la superficie terrestre?",
            respuestas: [
                "Electricidad",
                "Magnetismo",
                "Gravedad",
                "Fricción"
            ],
            correcta: "Gravedad"
        }

    ],


    Lengua: [

        {
            pregunta: "¿Cuál de estas palabras es un sustantivo?",
            respuestas: [
                "Correr",
                "Hermoso",
                "Casa",
                "Rápidamente"
            ],
            correcta: "Casa"
        },

        {
            pregunta: "¿Cuál es un sinónimo de 'feliz'?",
            respuestas: [
                "Triste",
                "Contento",
                "Enojado",
                "Cansado"
            ],
            correcta: "Contento"
        },

        {
            pregunta: "¿Cuál es el antónimo de 'grande'?",
            respuestas: [
                "Enorme",
                "Gigante",
                "Pequeño",
                "Alto"
            ],
            correcta: "Pequeño"
        },

        {
            pregunta: "¿Cuál de estas palabras es un verbo?",
            respuestas: [
                "Mesa",
                "Azul",
                "Correr",
                "Casa"
            ],
            correcta: "Correr"
        },

        {
            pregunta: "¿Cuál palabra está correctamente escrita?",
            respuestas: [
                "Haver",
                "Aver",
                "Haber",
                "Havir"
            ],
            correcta: "Haber"
        }

    ]

};


// ==========================================
// VARIABLES
// ==========================================

let materiaSeleccionada = "";

let preguntasActuales = [];

let preguntaActual = 0;

let puntaje = 0;

let vidas = 3;


// ==========================================
// ELEMENTOS HTML
// ==========================================

const menu =
    document.getElementById("menu");

const juego =
    document.getElementById("juego");

const resultado =
    document.getElementById("resultado");


const materiaActual =
    document.getElementById("materiaActual");

const puntajeElemento =
    document.getElementById("puntaje");

const vidasElemento =
    document.getElementById("vidas");


const numeroPregunta =
    document.getElementById("numeroPregunta");

const textoPregunta =
    document.getElementById("textoPregunta");

const respuestasElemento =
    document.getElementById("respuestas");


const mensaje =
    document.getElementById("mensaje");

const siguiente =
    document.getElementById("siguiente");


const barraProgreso =
    document.getElementById("barraProgreso");


const puntajeFinal =
    document.getElementById("puntajeFinal");

const mensajeFinal =
    document.getElementById("mensajeFinal");


const volver =
    document.getElementById("volver");


// ==========================================
// SELECCIONAR MATERIA
// ==========================================

document
    .querySelectorAll(".materia")
    .forEach(boton => {

        boton.addEventListener("click", () => {

            materiaSeleccionada =
                boton.dataset.materia;

            iniciarJuego();

        });

    });


// ==========================================
// INICIAR JUEGO
// ==========================================

function iniciarJuego() {

    menu.classList.add("oculto");

    resultado.classList.add("oculto");

    juego.classList.remove("oculto");


    preguntasActuales =
        [...preguntas[materiaSeleccionada]];


    // Mezclar preguntas

    preguntasActuales.sort(
        () => Math.random() - 0.5
    );


    preguntaActual = 0;

    puntaje = 0;

    vidas = 3;


    materiaActual.textContent =
        materiaSeleccionada;

    puntajeElemento.textContent =
        puntaje;

    vidasElemento.textContent =
        vidas;


    mostrarPregunta();

}


// ==========================================
// MOSTRAR PREGUNTA
// ==========================================

function mostrarPregunta() {

    const pregunta =
        preguntasActuales[preguntaActual];


    textoPregunta.textContent =
        pregunta.pregunta;


    numeroPregunta.textContent =
        `Pregunta ${preguntaActual + 1} de ${preguntasActuales.length}`;


    respuestasElemento.innerHTML = "";


    mensaje.textContent = "";

    mensaje.className = "";


    siguiente.classList.add("oculto");


    // Progreso

    const porcentaje =
        (preguntaActual /
        preguntasActuales.length) * 100;


    barraProgreso.style.width =
        `${porcentaje}%`;


    // Mezclar respuestas

    const respuestasMezcladas =
        [...pregunta.respuestas];


    respuestasMezcladas.sort(
        () => Math.random() - 0.5
    );


    // Crear botones

    respuestasMezcladas.forEach(respuesta => {

        const boton =
            document.createElement("button");


        boton.classList.add("respuesta");


        boton.textContent =
            respuesta;


        boton.addEventListener(
            "click",
            () => {

                comprobarRespuesta(
                    respuesta,
                    pregunta.correcta,
                    boton
                );

            }
        );


        respuestasElemento.appendChild(
            boton
        );

    });

}


// ==========================================
// COMPROBAR RESPUESTA
// ==========================================

function comprobarRespuesta(
    respuesta,
    correcta,
    botonSeleccionado
) {

    const botones =
        document.querySelectorAll(".respuesta");


    // Desactivar todas

    botones.forEach(boton => {

        boton.disabled = true;

    });


    // Respuesta correcta

    if (respuesta === correcta) {

        botonSeleccionado
            .classList
            .add("correcta");


        puntaje += 10;


        puntajeElemento.textContent =
            puntaje;


        mensaje.textContent =
            "¡Respuesta correcta! +10 puntos";


        mensaje.classList.add(
            "correcto"
        );


    }

    // Respuesta incorrecta

    else {

        botonSeleccionado
            .classList
            .add("incorrecta");


        vidas--;


        vidasElemento.textContent =
            vidas;


        mensaje.textContent =
            `Incorrecto. La respuesta correcta era: ${correcta}`;


        mensaje.classList.add(
            "incorrecto"
        );


        // Mostrar respuesta correcta

        botones.forEach(boton => {

            if (
                boton.textContent ===
                correcta
            ) {

                boton.classList.add(
                    "correcta"
                );

            }

        });

    }


    // Mostrar botón siguiente

    siguiente.classList.remove(
        "oculto"
    );


    // Cambiar texto

    if (
        vidas <= 0 ||
        preguntaActual ===
        preguntasActuales.length - 1
    ) {

        siguiente.innerHTML =
            `Ver resultado <i class="fa-solid fa-trophy"></i>`;

    }

    else {

        siguiente.innerHTML =
            `Siguiente <i class="fa-solid fa-arrow-right"></i>`;

    }

}


// ==========================================
// SIGUIENTE PREGUNTA
// ==========================================

siguiente.addEventListener(
    "click",
    () => {

        if (
            vidas <= 0 ||
            preguntaActual ===
            preguntasActuales.length - 1
        ) {

            finalizarJuego();

            return;

        }


        preguntaActual++;


        mostrarPregunta();

    }
);


// ==========================================
// FINALIZAR JUEGO
// ==========================================

function finalizarJuego() {

    juego.classList.add("oculto");

    resultado.classList.remove("oculto");


    barraProgreso.style.width =
        "100%";


    puntajeFinal.textContent =
        puntaje;


    if (vidas <= 0) {

        mensajeFinal.textContent =
            "Te quedaste sin vidas. ¡Podés volver a intentarlo!";

    }

    else if (
        puntaje ===
        preguntasActuales.length * 10
    ) {

        mensajeFinal.textContent =
            "¡Excelente! Respondiste todas correctamente.";

    }

    else if (puntaje >= 30) {

        mensajeFinal.textContent =
            "¡Muy bien! Conseguís un buen resultado.";

    }

    else {

        mensajeFinal.textContent =
            "¡Seguí practicando para mejorar tu puntaje!";

    }

}


// ==========================================
// VOLVER AL MENÚ
// ==========================================

volver.addEventListener(
    "click",
    () => {

        resultado.classList.add(
            "oculto"
        );

        juego.classList.add(
            "oculto"
        );

        menu.classList.remove(
            "oculto"
        );

        // Restaurar barra

        barraProgreso.style.width =
            "0%";

    }
);
