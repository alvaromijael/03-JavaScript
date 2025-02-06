let myArray =["rojo","verde","azul"];
console.log(myArray);

let arrayMixto=[9,'hola mundo',true, NaN, undefined]
console.log(arrayMixto);

let emptyArray=[];
console.log(emptyArray);

let myNewArray=[];
for (let i = 0; i < 10; i++) {
    myNewArray[i]=i+1;
    
}
console.log(myNewArray[4]);

let array1=['a','b','c','d'];
let array2=['e','f','g','h'];

let array3=array1.concat(array2);
console.log(array3);

let arrayJoin= new Array('hola','mi','nombre','es','Alvaro')
let myString =arrayJoin.join("");
console.log(arrayJoin);
console.log(myString);

//pop quita el ultimo elemento del array y lo almacena en otra variable
let arr1=[1,2,3,4,5,6,7,8,9];
let stringPop=arr1.pop();
console.log(arr1)
console.log(stringPop)

//push para insertar un elemento en la ultima posicion del array

let arr2=[1,2,3,4,5,6,7,8];
arr2.push(9);
console.log(arr2);

//reversar un array
arr2.reverse();
console.log(arr2);

//ordenar un array
arr2.sort();
console.log(arr2);

let arr3=['Carlos','Maria','Gustavo','Vero','Mateo'];
arr3.sort();
console.log(arr3);

//Eliminar el primer elemento del array

arr2.shift();
console.log(arr2);

//Saber el indice de un elemento del array 
console.log(arr2.indexOf(7));


//borrar un elemento en especifico, lo de alado de position es cuantos elementos borrar a partir de esa posicion

let position=arr2.indexOf(7);
arr2.splice(position,1);
console.log(arr2);

//para agregar elementos, splice primero posicion, luego cuantos y tercero el que voy a agregar

arr2.splice(0,0,1);
console.log(arr2);

//ejercicio
const monts=['jan','march','april','june','june']
console.log(monts);
monts.pop()
console.log(monts);
monts.push('febr','may','jul','ago','sept','oct','nov','dec');
console.log(monts);
monts.sort();
console.log(monts);
