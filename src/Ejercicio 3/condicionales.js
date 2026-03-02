// 1️⃣ Condicional Simple
function verificarEdad(edad) {
    if (edad >= 18) {
        return "Eres mayor de edad";
    }
}

// 2️⃣ if-else
function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

// 3️⃣ if-else if-else
function obtenerCalificacion(nota) {
    if (nota >= 90) {
        return "A";
    } else if (nota >= 80) {
        return "B";
    } else if (nota >= 70) {
        return "C";
    } else if (nota >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// 4️⃣ Condicionales Anidados
function verificarAcceso(edad, tieneTicket) {
    if (edad >= 18) {
        if (tieneTicket) {
            return "Acceso permitido";
        } else {
            return "Necesitas un ticket";
        }
    } else {
        return "Eres menor de edad";
    }
}

// 5️⃣ Ternario Simple
function esMayorDeEdad(edad) {
    return edad >= 18 ? "Mayor" : "Menor";
}

// 6️⃣ Ternario Anidado
function clasificarTemperatura(temperatura) {
    return temperatura > 30
        ? "Calor"
        : temperatura >= 20
        ? "Templado"
        : "Frío";
}

// 7️⃣ Switch
function obtenerDiaSemana(dia) {
    switch (dia) {
        case 1: return "Lunes";
        case 2: return "Martes";
        case 3: return "Miércoles";
        case 4: return "Jueves";
        case 5: return "Viernes";
        case 6: return "Sábado";
        case 7: return "Domingo";
        default: return "Día inválido";
    }
}

// 8️⃣ Switch múltiple
function obtenerEstacion(mes) {
    switch (mes) {
        case 12:
        case 1:
        case 2:
            return "Invierno";
        case 3:
        case 4:
        case 5:
            return "Primavera";
        case 6:
        case 7:
        case 8:
            return "Verano";
        case 9:
        case 10:
        case 11:
            return "Otoño";
        default:
            return "Mes inválido";
    }
}

// 9️⃣ Validación múltiple
function validarUsuario(nombre, edad, email) {
    if (
        nombre.length > 0 &&
        edad > 0 &&
        email.includes("@")
    ) {
        return "Usuario válido";
    } else {
        return "Datos inválidos";
    }
}

// 🔟 Lógica Compleja
function calcularDescuento(precio, esCliente) {
    if (precio >= 100 && esCliente) {
        return 20;
    } else if (precio >= 100 || esCliente) {
        return 10;
    } else {
        return 0;
    }
}


// ========================
// Mostrar ejemplos
// ========================

document.getElementById("edad").innerText =
    verificarEdad(20);

document.getElementById("parImpar").innerText =
    verificarParImpar(7);

document.getElementById("calificacion").innerText =
    obtenerCalificacion(85);

document.getElementById("acceso").innerText =
    verificarAcceso(22, true);

document.getElementById("ternarioSimple").innerText =
    esMayorDeEdad(16);

document.getElementById("ternarioAnidado").innerText =
    clasificarTemperatura(25);

document.getElementById("diaSemana").innerText =
    obtenerDiaSemana(3);

document.getElementById("estacion").innerText =
    obtenerEstacion(4);

document.getElementById("validacion").innerText =
    validarUsuario("Juan", 25, "juan@email.com");

document.getElementById("descuento").innerText =
    calcularDescuento(120, true);