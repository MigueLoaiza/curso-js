/*const numeros=[1,2,3,4,5,6,7,8,9,10];

    for(let i=0; i<numeros.length; i++){
        if(i % 2 === 1){
            continue;
        }else
        console.log(numeros[i]);
    }
/////////////////////////////////////////

let sumadora = (a,b)=>{resultado=a+b;console.log("la suma es", resultado)};
sumadora(8,9);

/////////////////////////////////////

function Perro(raza, nombre){
this.raza = raza;
this.nombre =nombre;

}

Perro.prototype.ladrar = function(){
console.log("guuuua guaaaau");
}

const chihuahua = new Perro("labrador","beetovhen"),
kiara = new Perro("Pequeña", "Kiara");

console.log(chihuahua);
console.log(kiara);

chihuahua.ladrar();
kiara.ladrar();
*/

class Humano {
constructor(nombre,apellido){
this.nombre = nombre;
this.apellido = apellido;

    }

    nombres(){
console.log("Me llamo juan");
    }

}


class Americano extends Humano{

    constructor(nombre,apellido,edad,genero){
    super(nombre,apellido);

    this.email = null;
    this.edad = edad;
    this.genero = genero;

}
sonar(){
    console.log("hola amigo");
    }

static caminar(){
    console.log("hola yo camino y puedo correr");
    }

get getaemail(){
    return this.email;
}

set setemail(email){
this.email = email;

    }

}

const mexicano = new Americano ("miguel", "Herrera Loaiza", 23, "Masculino");

console.log(mexicano);

mexicano.setemail="miguel@";

console.log(mexicano.getaemail);
//console.log('Mi nombre es', $nombre, 'soy', $genero, 'y tengo', $edad, 'años');

// console.log(document);
// console.dir(document);

// const fecha = new Date();
// console.log(fecha); 

// console.log( null || "hola amigo");

let cadena= "Hola, tengo 5 hermanos";

let expReg= /[]/ig;
console.log(expReg.test(cadena));