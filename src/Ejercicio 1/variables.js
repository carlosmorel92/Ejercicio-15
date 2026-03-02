// ==========================
// 1. Variables con let
// ==========================

let nombre = "Carlos Alfredo Morel";
let edad = 25;
let esEstudiante = true;


// ==========================
// 2. Variables con const
// ==========================

const PI = 3.14159;
const DIAS_SEMANA = 7;
const MI_EMAIL = "Carlosmorel92@gmail.com";


// ==========================
// 3. Tipos de datos
// ==========================

let numeroEntero = 10;
let numeroDecimal = 3.14;
let textoSimple = 'Texto con comillas simples';
let textoDoble = "Texto con comillas dobles";
let textoTemplate = `Hola ${nombre}, este es un template literal`;
let verdadero = true;
let falso = false;
let indefinido = undefined;
let nulo = null;


// ==========================
// 4. Concatenación y Template Literals
// ==========================

let saludo = "Hola, mi nombre es " + nombre;

let presentacion = `Me llamo ${nombre}, tengo ${edad} años y soy estudiante: ${esEstudiante}`;


// ==========================
// 5. Operaciones básicas
// ==========================

let suma = 10 + 5;
let resta = 10 - 3;
let multiplicacion = 4 * 5;
let division = 20 / 4;
let modulo = 10 % 3;


// ==========================
// Mostrar resultados en pantalla
// ==========================

const output = document.getElementById("output");

output.innerHTML = `
    <p>${saludo}</p>
    <p>${presentacion}</p>
    <p>Suma: ${suma}</p>
    <p>Resta: ${resta}</p>
    <p>Multiplicación: ${multiplicacion}</p>
    <p>División: ${division}</p>
    <p>Módulo: ${modulo}</p>
`;