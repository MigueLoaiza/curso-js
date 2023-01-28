import { pi, Personal } from "./constantes.js";


console.log("modulos en js");


console.log(pi);

let usuario = new Personal("Miguel", 23);
console.log(usuario);

let ejercicio = "Hola mundo mi nombre es miguel";

console.log(ejercicio.length);

let contar = (texto)=>{
    console.log(texto.slice(0,4));
}

contar(ejercicio);