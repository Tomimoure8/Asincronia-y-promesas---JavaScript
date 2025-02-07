// Ejercicio 1: Uso de setTimeout - Tema: Temporizadores - Consigna: Crea un programa que imprima mensajes con un retraso específico. - Instrucciones:
// 1) Usa setTimeout para imprimir "hola jeje" después de 1 segundo.
// 2) Usa setTimeout para imprimir "mentira, chau" después de 3 segundos.
// Resolución;

// setTimeout (() => {
//     console.log ("Hola jeje");
// }, 1000)
// setTimeout (() => {
//     console.log ("mentira bobo, chau juju");
// }, 2000)

// Ejercicio 2: Uso de setInterval - Tema: Temporizadores repetitivos Consigna: Crea un programa que imprima mensajes repetidamente con un intervalo específico. Instrucciones:
// 1) Usa setInterval para imprimir "hola" y "mensaje adicional" cada 3 segundos.
// 2) Crea una variable llamada contador con el valor 10.
// 3) Usa setInterval para incrementar la variable contador en 1 cada 2 segundos y detener el intervalo cuando contador alcance el valor de 20. Imprime "el contador se frenó" cuando se detenga.
// 4) Usa setInterval para incrementar una variable numero en 1 cada segundo y detener el intervalo cuando numero alcance el valor de 20. Imprime "capichi, te corté las alas bro" cuando se detenga.
// Resolución:

// setInterval (() => {
//     console.log ("hola, ¿como estás?")
// }, 3000)

// let contador = 10;
// let intervalo = setInterval (() => {
//     console.log (contador);
//     contador++
//     if (contador > 20) {
//         clearInterval (intervalo);
//         console.log ("el contador se freno")
//     }
// }, 1000)

// let contador2 = 1;
// let intervalo2 = setInterval (() => {
//     console.log (contador2);
//     contador2++;
//     if (contador2 > 20) {
//         clearInterval (intervalo2);
//         console.log ("capichi, te corté las alas bro");
//     }
// }, 1000)


// Ejercicio 3: setTimeout y clearTimeout - Tema: Temporizador de cuenta regresiva: Crea un temporizador que muestre en la consola los números del 10 al 1, y luego muestre el mensaje "¡Tiempo finalizado!". Utiliza setTimeout para lograr esto. Instrucciones:
// 1) Crea una variable llamada contador y asigna el valor 10
// 2) Crea una función llamada cuentaRegresiva que se encargue de mostrar el valor actual del contador en la consola y luego decrementar el contador en 1.
// 3) Dentro de la función cuentaRegresiva, utiliza una condición if para verificar si el contador es igual a 0. Si es así, muestra el mensaje "¡Tiempo finalizado!" en la consola y detén el temporizador utilizando clearTimeout.
// 4)  Utiliza setTimeout para llamar a la función cuentaRegresiva cada 1000 milisegundos (1 segundo).
// Resolución:

// let contador3 = 10;

// let cuentaRegresiva = setInterval (() => {
//     console.log (contador3);
//     contador3--;
//     if (contador3 <= 0) {
//         clearInterval (cuentaRegresiva);
//         console.log ("¡Tiempo finalizado!");
//     }
// }, 1000);



// Ejercicio 4: Intervalo de tareas - Tema: setInterval y clearInterval: Crea un programa que realice las siguientes tareas en intervalos de tiempo regulares: Muestre el mensaje "Tarea 1 realizada" en la consola cada 3 segundos - Muestre el mensaje "Tarea 2 realizada" en la consola cada 5 segundos - Después de 15 segundos, detén ambos intervalos utilizando clearInterval. Instrucciones:
// 1) Utiliza setInterval para crear dos intervalos de tiempo: uno para la Tarea 1 (3 segundos) y otro para la Tarea 2 (5 segundos).
// 2) Dentro de cada intervalo, muestra el mensaje correspondiente en la consola.
// 3) Crea una variable llamada tiempoTranscurrido y inicialízala en 0.
// 4) Dentro de uno de los intervalos (puedes elegir cualquiera), incrementa tiempoTranscurrido en el intervalo de tiempo correspondiente.
// 5) Utiliza una condición if para verificar si tiempoTranscurrido es igual o mayor a 15 segundos. Si es así, detén ambos intervalos utilizando clearInterval.
// Resolución:
let tiempoTranscurrido = 0
let intervaloTarea1 = setInterval (() => {
    console.log ("Tarea 1 realizada");
    console.log (tiempoTranscurrido);
    tiempoTranscurrido++;
    if (tiempoTranscurrido >= 15) {
        clearInterval(intervaloTarea1);
        clearInterval(intervaloTarea2);
    }
}, 3000)

let intervaloTarea2 = setInterval (() => {
    console.log ("Tarea 2 realizada");
}, 5000)



