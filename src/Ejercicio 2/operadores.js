// ==========================
// 1️⃣ OPERADORES ARITMÉTICOS
// ==========================

let num1 = 10;
let num2 = 3;

let sumaTotal = num1 + num2;
let restaTotal = num1 - num2;
let multiplicacionTotal = num1 * num2;
let divisionTotal = num1 / num2;
let moduloTotal = num1 % num2;
let potencia = num1 ** 2;

let incremento = num1;
incremento++;

let decremento = num2;
decremento--;


// ==========================
// 2️⃣ OPERADORES DE COMPARACIÓN
// ==========================

let esMayor = num1 > num2;
let esMenor = num1 < num2;
let esMayorIgual = num1 >= 10;
let esMenorIgual = num2 <= 5;
let esIgual = 5 == "5";
let esEstrictamenteIgual = 5 === "5";
let esDiferente = 5 != 3;
let esEstrictamenteDiferente = 5 !== "5";


// ==========================
// 3️⃣ OPERADORES LÓGICOS
// ==========================

let tienePermiso = true;
let esAdulto = true;
let tieneDinero = false;

let puedeEntrar = tienePermiso && esAdulto;
let puedeComprar = tienePermiso || tieneDinero;
let noTienePermiso = !tienePermiso;
let condicionCompleja = (tienePermiso && esAdulto) || tieneDinero;


// ==========================
// 4️⃣ OPERADORES DE ASIGNACIÓN
// ==========================

let puntos = 100;

puntos += 50;
let puntosSuma = puntos;

puntos -= 20;
let puntosResta = puntos;

puntos *= 2;
let puntosMultiplica = puntos;

puntos /= 2;
let puntosDivide = puntos;

puntos %= 10;
let puntosModulo = puntos;


// ==========================
// 5️⃣ OPERADOR TERNARIO
// ==========================

let edad = 18;

let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";

let puntosBase = 100;
let descuento = puntosBase > 100 ? 20 : 10;

let estado = esAdulto ? "Adulto" : "Joven";


// ==========================
// 6️⃣ OPERADOR TYPEOF
// ==========================

let tipoNumero = typeof num1;
let tipoTexto = typeof "Hola";
let tipoBooleano = typeof true;
let tipoUndefined = typeof undefined;
let tipoNull = typeof null;


// ==========================
// Mostrar resultados
// ==========================

const resultado = document.getElementById("resultado");

resultado.innerHTML = `
<h3>Resultados Aritméticos</h3>
<p>Suma: ${sumaTotal}</p>
<p>Resta: ${restaTotal}</p>
<p>Multiplicación: ${multiplicacionTotal}</p>
<p>División: ${divisionTotal}</p>
<p>Módulo: ${moduloTotal}</p>
<p>Potencia: ${potencia}</p>

<h3>Comparaciones</h3>
<p>esMayor: ${esMayor}</p>
<p>esMenor: ${esMenor}</p>
<p>esMayorIgual: ${esMayorIgual}</p>
<p>esMenorIgual: ${esMenorIgual}</p>

<h3>Lógicos</h3>
<p>puedeEntrar: ${puedeEntrar}</p>
<p>puedeComprar: ${puedeComprar}</p>

<h3>Ternario</h3>
<p>Mensaje: ${mensaje}</p>
<p>Descuento: ${descuento}</p>
<p>Estado: ${estado}</p>
`;