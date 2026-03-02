// 1️⃣ Arrow básica
const multiplicarPorDos = numero => numero * 2;

// 2️⃣ Arrow con return implícito
const cuadrado = x => x * x;

// 3️⃣ Arrow sin parámetros
const obtenerFechaActual = () => new Date();

// 4️⃣ Arrow múltiples parámetros
const calcularArea = (base, altura) => base * altura;

// 5️⃣ Callback simple
function procesarNumero(numero, callback) {
    return callback(numero);
}

// 6️⃣ Callback con array
function procesarArray(array, callback) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(callback(array[i]));
    }
    return resultado;
}

// 7️⃣ map()
function doblarNumeros(numeros) {
    return numeros.map(n => n * 2);
}

// 8️⃣ filter()
function filtrarMayoresDeEdad(personas) {
    return personas.filter(p => p.edad > 18);
}

// 9️⃣ reduce()
function sumarEdades(personas) {
    return personas.reduce((acc, p) => acc + p.edad, 0);
}

// 🔟 find()
function encontrarPorNombre(personas, nombre) {
    return personas.find(p => p.nombre === nombre);
}

// 1️⃣1️⃣ forEach()
function imprimirNombres(nombres) {
    let resultado = "";
    nombres.forEach((n, index) => {
        resultado += n;
        if (index < nombres.length - 1) {
            resultado += ", ";
        }
    });
    return resultado;
}

// 1️⃣2️⃣ Encadenamiento
function procesarNumeros(numeros) {
    return numeros
        .filter(n => n % 2 === 0)
        .map(n => n * 2)
        .reduce((acc, n) => acc + n, 0);
}

// 1️⃣3️⃣ Closure
function crearContador() {
    let cuenta = 0;

    return {
        incrementar: function() {
            cuenta++;
            return cuenta;
        },
        obtenerValor: function() {
            return cuenta;
        }
    };
}

// 1️⃣4️⃣ Orden superior con múltiples callbacks
function operacionMatematica(a, b, operacion) {
    return operacion(a, b);
}

// 1️⃣5️⃣ some() y every()
function tieneAprobados(notas) {
    return notas.some(n => n >= 60);
}

function todosAprobados(notas) {
    return notas.every(n => n >= 60);
}


// ======================
// Funciones para mostrar en HTML
// ======================

function mostrar(valor) {
    document.getElementById("contenido").innerText = valor;
}

function probarClosure() {
    const contador = crearContador();
    contador.incrementar();
    contador.incrementar();
    mostrar(contador.obtenerValor());
}