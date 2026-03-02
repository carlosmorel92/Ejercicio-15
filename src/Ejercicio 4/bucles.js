// 1️⃣ For básico
function contarHasta(numero) {
    const resultado = [];
    for (let i = 1; i <= numero; i++) {
        resultado.push(i);
    }
    return resultado;
}

// 2️⃣ For con paso
function numerosPares(limite) {
    const resultado = [];
    for (let i = 0; i <= limite; i += 2) {
        resultado.push(i);
    }
    return resultado;
}

// 3️⃣ For inverso
function cuentaRegresiva(inicio) {
    const resultado = [];
    for (let i = inicio; i >= 1; i--) {
        resultado.push(i);
    }
    return resultado;
}

// 4️⃣ While
function sumarHasta(limite) {
    let suma = 0;
    let contador = 1;

    while (suma < limite) {
        suma += contador;
        contador++;
    }

    return suma;
}

// 5️⃣ Do-While
function duplicarHasta(numero, limite) {
    do {
        numero *= 2;
    } while (numero * 2 <= limite);

    return numero;
}

// 6️⃣ Break
function encontrarPrimerMultiplo(numero, multiplo) {
    let resultado = null;

    for (let i = 1; ; i++) {
        if (i % multiplo === 0 && i > numero) {
            resultado = i;
            break;
        }
    }

    return resultado;
}

// 7️⃣ Continue
function numerosImpares(limite) {
    const resultado = [];
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            continue;
        }
        resultado.push(i);
    }
    return resultado;
}

// 8️⃣ Bucles anidados
function tablaMultiplicar(numero) {
    const tabla = [];

    for (let i = 1; i <= numero; i++) {
        const fila = [];
        for (let j = 1; j <= numero; j++) {
            fila.push(i * j);
        }
        tabla.push(fila);
    }

    return tabla;
}

// 9️⃣ Recorrer array
function sumarArray(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

// 🔟 Filtrar
function filtrarMayores(numeros, minimo) {
    const resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > minimo) {
            resultado.push(numeros[i]);
        }
    }
    return resultado;
}

// 1️⃣1️⃣ FizzBuzz
function fizzBuzz(n) {
    const resultado = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultado.push("FizzBuzz");
        } else if (i % 3 === 0) {
            resultado.push("Fizz");
        } else if (i % 5 === 0) {
            resultado.push("Buzz");
        } else {
            resultado.push(i);
        }
    }

    return resultado;
}

// 1️⃣2️⃣ Palíndromo
function esPalindromo(texto) {
    const limpio = texto.toLowerCase().replace(/\s/g, "");
    let invertido = "";

    for (let i = limpio.length - 1; i >= 0; i--) {
        invertido += limpio[i];
    }

    return limpio === invertido;
}


// ====================
// Mostrar ejemplos
// ====================

document.getElementById("forBasico").innerText =
    JSON.stringify(contarHasta(5));

document.getElementById("pares").innerText =
    JSON.stringify(numerosPares(10));

document.getElementById("regresiva").innerText =
    JSON.stringify(cuentaRegresiva(5));

document.getElementById("while").innerText =
    sumarHasta(10);

document.getElementById("doWhile").innerText =
    duplicarHasta(3, 50);

document.getElementById("break").innerText =
    encontrarPrimerMultiplo(25, 7);

document.getElementById("continue").innerText =
    JSON.stringify(numerosImpares(10));

document.getElementById("anidados").innerText =
    JSON.stringify(tablaMultiplicar(3));

document.getElementById("sumarArray").innerText =
    sumarArray([1,2,3,4,5]);

document.getElementById("filtrar").innerText =
    JSON.stringify(filtrarMayores([1,5,10,15,3], 7));

document.getElementById("fizzbuzz").innerText =
    JSON.stringify(fizzBuzz(15));

document.getElementById("palindromo").innerText =
    esPalindromo("anita lava la tina");