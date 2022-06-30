/***** ACTIVIDAD => JavaScript2: Teniendo un arreglo de números enteros,
                                 encuentre el resultado de la suma de los elementos del arreglo ******/

console.clear();

// Programa que realiza la suma de números de un arreglo
console.log("\n Programa que realiza la suma de los elementos de un arreglo.")
                                 
// Bloque que ayuda input un valor dado por el usuario
            "use strict";
            const ps = require("prompt-sync");
            const prompt = ps();
                                 
let tamArreglo = Number(prompt("De qué tamaño, deseas el arreglo: "));
                                 
                                 
var temp1=0;
var temp2=0;
                                 
for(a=0;a<tamArreglo;a++){
    temp1 = Number(prompt(`Dame el elemento ${a} del arreglo: `));
    temp2 = temp2 + temp1;
}
                                 
console.log(`La suma de los elementos del arreglo es: ${temp2}`); 
                                 
                                 
                                 /*   NOTA: El código de abajo, era una versión anterior donde no se le pide al usuario los elementos del arreglo   */
                                 
                                 /*
                                 var temp=0;   // variable temporal  
                                 
                                 const anum = [
                                     1,
                                     2,
                                     3,
                                     4,
                                     5,
                                 ]
                                 
                                 for(var i=0;i<anum.length;i++){
                                     temp = temp + anum[i];
                                     
                                 }
                                 
                                 console.log(`La suma de los elementos del arreglo es: ` + temp);
                                 
                                 */
                                 
                                 
                                 /*  Bloque muestra que me ayudo a saber como meter información de input
                                 "use strict";
                                 const ps = require("prompt-sync");
                                 const prompt = ps();
                                 
                                 let name = prompt("Enter your name: ");
                                 console.log(`Hello ${name}`);
                                 */
                                 