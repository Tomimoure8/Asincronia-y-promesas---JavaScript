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
// let tiempoTranscurrido = 0
// let intervaloTarea1 = setInterval (() => {
//     console.log ("Tarea 1 realizada");
//     console.log (tiempoTranscurrido);
//     tiempoTranscurrido++;
//     if (tiempoTranscurrido >= 15) {
//         clearInterval(intervaloTarea1);
//         clearInterval(intervaloTarea2);
//     }
// }, 3000)

// let intervaloTarea2 = setInterval (() => {
//     console.log ("Tarea 2 realizada");
// }, 5000)


// Ejercicio 5: Uso de Promesas - Tema: Manejo de promesas - Consigna: Crea funciones que utilicen promesas para resolver o rechazar con base en una condición. Instrucciones:
// 1) Crea una función llamada eventoFuturo que reciba un parámetro res y retorne una promesa. La promesa debe resolverse con el mensaje "promesa resuelta" si res es true, y rechazarse con el mensaje "promesa rechazada" si res es false.
// 2) Crea una función llamada resultado que reciba un parámetro salvado y retorne una promesa. La promesa debe resolverse con el mensaje "El paciente ha sido operado exitosamente" si salvado es true, y rechazarse con el mensaje "el paciente ha fallecido" si salvado es false.


let eventoFuturo = (res) => {
    return new Promise ((resolve, reject) => {
        if (res === true) {
            setTimeout (() => {
                resolve (console.log ("promesa resuelta"));
            }, 3000)  
        }
        else {
            let contador = 0
            let intervaloLocal = setInterval (() => {
                if (contador <= 10) {
                    console.log ("contador:" +contador)
                    contador++
                }
                else {
                    clearInterval (intervaloLocal);
                    reject (console.log ("promesa rechazada"))
                }
            }, 2000)
        }
    }, 3000)
}

console.log (eventoFuturo(false));


// Ejercicio 6: Bucle con setInterval y clearInterval - Tema: Temporizadores y bucles - Consigna: Crea un bucle que se ejecute con un intervalo específico y se detenga cuando se cumpla una condición. Instrucciones:
// 1) Crea una variable llamada numeroInicial con el valor 1.
// 2) Usa setInterval para incrementar la variable numeroInicial en 1 cada segundo.
// 3) Detén el intervalo cuando numeroInicial alcance el valor de 20 e imprime "fin".

// let numeroInicial = 1;

// let intervaloNumero = setInterval (() => {
//     console.log (numeroInicial);
//     numeroInicial++

//     if (numeroInicial >= 21) {
//         clearInterval (intervaloNumero);
//         let intervalo2 = setTimeout (() => {
//             console.log ("fin");
//         }, 1000) 
//     }
// }, 1000);

// Ejercicio 7: Repaso de Temporizadores y Promesas - Tema: Combinación de conceptos - Consigna: Crea programas que combinen el uso de setTimeout, setInterval y promesas. Instrucciones:
// 1) Usa setTimeout para imprimir "hola" después de 4 segundos.
// 2) Usa setInterval para imprimir "miguel golpea primero" y "robby se defiende" cada 3 segundos, y luego usa clearInterval para detenerlo.
// 3) Crea una variable patada con el valor 1. Usa setInterval para incrementar patada en 1 cada segundo. Detén el intervalo cuando patada alcance el valor de 5 e imprime "finalizaste con las patadas".
// 4) Crea una función taekwonDo que reciba un parámetro ok y retorne una promesa. La promesa debe resolverse con el mensaje "patada exitosa" si ok es true, y rechazarse con el mensaje "¡patada fallada!" si ok es false. Usa setTimeout dentro de la promesa para simular un retraso de 2 segundos antes de resolver o rechazar.


// Ejercicio 8: Promesas con kickbooxing - Tema: Promesas - Consigna: Crea una función que devuelva una promesa basada en una condición. Instrucciones:
// 1) Crea una función llamada kickbooxing que reciba un parámetro success.
// 2) La función debe retornar una promesa que, después de 2 segundos, se resuelva con el mensaje "¡Golpe exitoso!" si success es true, o se rechace con el mensaje "Golpe fallido" si success es false.
// 3) Usa la función y maneja la promesa con .then y .catch para imprimir los mensajes correspondientes.


// Ejercicio 9: Promesas con boxeo - Tema: Promesas - Consigna: Crea una función que devuelva una promesa basada en una condición. Instrucciones:
// 1) Crea una función llamada boxeo que reciba un parámetro exito.
// 2) La función debe retornar una promesa que, después de 2 segundos, se resuelva con el mensaje "upperCut exitoso" si exito es true, o se rechace con el mensaje "knockout" si exito es false.
// 3) Usa la función y maneja la promesa con .then y .catch para imprimir los mensajes correspondientes.

// Ejercicio 10: Promesas con karate - Tema: Promesas - Consigna: Crea una función que devuelva una promesa basada en una condición. Instrucciones:
// 1) Crea una función llamada karate que reciba un parámetro success.
// 2) La función debe retornar una promesa que, después de 2 segundos, se resuelva con el mensaje "Patada alta exitosa" si success es true, o se rechace con el mensaje "patada alta fallida" si success es false.
// 3) Usa la función y maneja la promesa con .then y .catch para imprimir los mensajes correspondientes.


// Ejercicio 11: Temporizadores con setTimeout, setInterval y clearInterval - Tema: Temporizadores - Consigna: Crea temporizadores que se ejecuten con intervalos específicos y se detengan al cumplir una condición. Instrucciones:
// 1) Crea una variable llamada contador con el valor 1.
// 2) Usa setInterval para incrementar contador en 1 cada 2 segundos y detener el intervalo cuando contador alcance el valor de 10.
// 3) Crea una variable llamada contador2 con el valor 10.
// 4) Usa setInterval para incrementar contador2 en 1 cada segundo y detener el intervalo cuando contador2 alcance el valor de 20.


//Ejercicio 12: Promesas con solicitudDeAmistad - Tema: Promesas - Consigna: Crea una función que devuelva una promesa basada en una condición. Instrucciones:
// 1) Crea una función llamada solicitudDeAmistad que reciba un parámetro success.
// 2) La función debe retornar una promesa que, después de 2 segundos, se resuelva con el mensaje "Solicitud de amistad aceptada" si success es true, o se rechace con el mensaje "Solicitud de amistad rechazada" si success es false.
// 3) Usa la función y maneja la promesa con .then y .catch para imprimir los mensajes correspondientes.


//Ejercicio 13: Promesas con futbol - Tema: Promesas - Consigna: Crea una función que devuelva una promesa basada en una condición. Instrucciones:
// 1) Crea una función llamada futbol que reciba un parámetro success.
// 2) La función debe retornar una promesa que, después de 2 segundos, se resuelva con el mensaje "gol" si success es true, o se rechace con el mensaje "gol fallido" si success es false.
// 3) Usa la función y maneja la promesa con .then y .catch para imprimir los mensajes correspondientes.


//Ejercicio 14: Promesas con truco - Tema: Promesas - Consigna: Crea una función que devuelva una promesa basada en una condición. Instrucciones:
// 1) Crea una función llamada truco que reciba un parámetro success.
// 2) La función debe retornar una promesa que, después de 1 segundo, se resuelva con el mensaje "quiero vale 4" si success es true, o se rechace con el mensaje "no quiero" si success es false.
// 3) Usa la función y maneja la promesa con .then y .catch para imprimir los mensajes correspondientes.


//Ejercicio 15: Promesas con sekaitaikai - Tema: Promesas - Consigna: Crea una función que devuelva una promesa basada en una condición. Instrucciones:
// 1) Crea una función llamada sekaitaikai que reciba un parámetro success.
// 2) La función debe retornar una promesa que, después de 1 segundo, se resuelva con el mensaje "Miguel wins" si success es true, o se rechace con el mensaje "Robby wins" si success es false.
// 3) Usa la función y maneja la promesa con .then y .catch para imprimir los mensajes correspondientes.

// Mini-desafío: Escribe una función que simule hacer un pedido en línea y devuelve una promesa que se resuelve después de 3 segundos con el mensaje "Pedido completado".

// let pedidosYa = new Promise((resolve, reject) => {
//     resolve (console.log ("pedido completado"));
// }, 3000)

