// objetos 

let persona={
    nombre:'Byron',
    apellido:'Realpe',
    edad:28,
    estadoCivil:'soltero',
    estatura:1.70,
    tieneHijos:true,
    hijos:[{
        nombre:'Luis'
    },{
        nombre:'Paula'
    },{

    }]
}

console.log(persona);
document.getElementById('output').innerText=JSON.stringify(persona.edad);
//stringify sirve cuando quiero ver todo el objeto si es solo un dato no necesito

let automovil=new Object();
automovil.motor=2.0;
automovil.marca='chevrolet';
automovil.capacidad=5;
automovil.tipoGasolina='super';
automovil.modelo;

console.log(automovil);

let carros=[];

//crea un objeto con las propiedades precio color y memoria 
//y asignarle a una variable computadora

let computadora={
    precio:1000,
    color:'negro',
    memoria: '2000Gb',
}

/**
 * 1. Crea un objeto llamado Persona usando un constructor y dale las siguientes
propiedades: nombre, apellido y edad.
2. Crea dos instancias del objeto
a. Primera instancia p1 : “Michael”, “Jordan”, 49.
b. Segunda instancia p2 : “Lara”, “bili”, 74.

 */

let persona1= new Object({
    firstname: 'Alvaro',
    lastname:'Quisilema',
    age:30
});

let persona2= new Object({
    firstname: 'Mijael',
    lastname:'Medrano',
    age:30
});

function persona(firstname, lastname,age){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
}

let Pers1=new persona('Michael','Valdivieso',36)
let Pers2=new persona('Edwin','Chavez',76)

console.log(Pers1);
console.log(Pers2);