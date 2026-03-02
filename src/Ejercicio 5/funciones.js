// 1️⃣ Función sin parámetros
function saludar() {
    return "¡Hola, mundo!";
}

// 2️⃣ Función con un parámetro
function saludarPersona(nombre) {
    return `¡Hola, ${nombre}!`;
}

// 3️⃣ Función con múltiples parámetros
function sumar(a, b) {
    return a + b;
}

// 4️⃣ Parámetros por defecto
function crearMensaje(texto, veces = 1) {
    let resultado = "";
    for (let i = 0; i < veces; i++) {
        resultado += texto + " ";
    }
    return resultado.trim();
}

// 5️⃣ Retornar objeto
function crearPersona(nombre, edad, ciudad) {
    return {
        nombre: nombre,
        edad: edad,
        ciudad: ciudad
    };
}

// 6️⃣ Retornar múltiples valores (array)
function operacionesMatematicas(num1, num2) {
    return [
        num1 + num2,
        num1 - num2,
        num1 * num2,
        num1 / num2
    ];
}

// 7️⃣ Validación
function dividir(dividendo, divisor) {
    if (divisor === 0) {
        return "Error: No se puede dividir por cero";
    }
    return dividendo / divisor;
}

// 8️⃣ Scope local
function calcularTotal(precio) {
    let impuesto = 0.21;
    let total = precio + (precio * impuesto);
    return total;
}

// 9️⃣ Scope global y local
let contador = 0;

function incrementarContador() {
    contador++;
    return contador;
}

// 🔟 Función que llama a otra
function esPar(numero) {
    return numero % 2 === 0;
}

function filtrarPares(numeros) {
    const resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        if (esPar(numeros[i])) {
            resultado.push(numeros[i]);
        }
    }
    return resultado;
}

// 1️⃣1️⃣ Recursiva
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// 1️⃣2️⃣ Expresión de función
const multiplicar = function(a, b) {
    return a * b;
};

// 1️⃣3️⃣ Rest parameters
function sumarTodos(...numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

// 1️⃣4️⃣ Función que retorna función
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

// Función auxiliar para mostrar resultados
function mostrarResultado(resultado) {
    document.getElementById("output").innerText = resultado;
}

// Probar multiplicador
function probarMultiplicador() {
    const duplicar = crearMultiplicador(2);
    mostrarResultado(duplicar(5));
}