// Ejercicio 1: Uso de setTimeout - Tema: Temporizadores - Consigna: Crea un programa que imprima mensajes con un retraso específico. - Instrucciones:
// 1) Usa setTimeout para imprimir "hola jeje" después de 1 segundo.
// 2) Usa setTimeout para imprimir "mentira, chau" después de 3 segundos.
// Resolución;

setTimeout (() => {
    console.log ("Hola jeje");
}, 1000)
setTimeout (() => {
    console.log ("mentira bobo, chau juju");
}, 2000)

// Ejercicio 2: Uso de setInterval - Tema: Temporizadores repetitivos Consigna: Crea un programa que imprima mensajes repetidamente con un intervalo específico. Instrucciones:
// 1) Usa setInterval para imprimir "hola" y "mensaje adicional" cada 3 segundos.
// 2) Crea una variable llamada contador con el valor 10.
// 3) Usa setInterval para incrementar la variable contador en 1 cada 2 segundos y detener el intervalo cuando contador alcance el valor de 20. Imprime "el contador se frenó" cuando se detenga.
// 4) Usa setInterval para incrementar una variable numero en 1 cada segundo y detener el intervalo cuando numero alcance el valor de 20. Imprime "capichi, te corté las alas bro" cuando se detenga.
// Resolución:

setInterval (() => {
    console.log ("hola, ¿como estás?")
}, 3000)

let contador = 10;
let intervalo = setInterval (() => {
    console.log (contador);
    contador++
    if (contador > 20) {
        clearInterval (intervalo);
        console.log ("el contador se freno")
    }
}, 1000)

let contador2 = 1;
let intervalo2 = setInterval (() => {
    console.log (contador2);
    contador2++;
    if (contador2 > 20) {
        clearInterval (intervalo2);
        console.log ("capichi, te corté las alas bro");
    }
}, 1000)

