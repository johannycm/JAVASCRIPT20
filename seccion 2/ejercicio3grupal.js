//Metodos de array
frutas = ["Manzana", "Pera", "Uva", "Sandia"];
//Longitud del array
console.log(frutas.length);
//Agregar un elemento al final del array
frutas.push("Mango");
//Agregar un elemento al inicio del array
frutas.unshift("Fresa");
//Eliminar el ultimo elemento del array
frutas.pop();
//Eliminar el primer elemento del array
frutas.shift();
//Eliminar un elemento en una posicion especifica
frutas.splice(1, 1);
//Eliminar un elemento en una posicion especifica y agregar un nuevo elemento
frutas.splice(1, 1, "Uva");
//Concatenar dos arrays
var frutas2 = ["Pera", "Kiwi"];
frutas = frutas.concat(frutas2);
console.log(frutas);
// [Manzana, Uva, Sandia, Pera, Kiwi]
//Ordenar un array
console.log(frutas.sort());
//[Kiwi, Manzana, Pera, Sandia, Uva]
//Invertir un array
console.log(frutas.reverse());
//[Uva, Sandia, Pera, Manzana, Kiwi]
//Buscar un elemento en un array (devuelve la posicion)
console.log(frutas.indexOf("Uva"));
//Buscar un elemento en un array (devuelve true o false)
console.log(frutas.includes("Uva"));
//cortar un array
console.log(frutas.slice(1, 3));
// [Sandia, Pera] (no incluye el ultimo elemento)

//Curiosidad, los strings tambien pueden ser tratados como arrays
var texto = "Hola, soy un texto";
console.log(texto[4]);

//Callback
// Es una función que se pasa como argumento a otra función

function calcular_descuento(precio, descuento){
  return precio - (precio * descuento);
}

function comprar(producto = "", precio = 0,  funcioncita){
  if(producto === "manzana"){
    return funcioncita(precio, 0.1);
  } else {
    return precio;
  }
}

console.log(comprar("manzana", 100, calcular_descuento));

//[Kiwi, Manzana, Pera, Sandia, Uva]
//filtrar un array
console.log(frutas.filter(
  (fruta) => fruta.length > 4)
);
//otro ejemplo de filter
console.log(frutas.filter(
  fruta => fruta.includes("a")
));

/*
  Ejercicios de metodos de arrays
  -1. Crea una función que reciba un array de numeros y devuelva la suma de todos los numeros.
  -2. Crea una función que reciba un array de numeros y devuelva el promedio de todos los numeros.
  -3. Crea una función que reciba un array de numeros y devuelva el numero mayor.
  -4. Crea una función que reciba un array de numeros y devuelva el numero menor.
  5. Crea una función que reciba un array de numeros y devuelva un array con los numeros pares.
  6. Crea una función que reciba un array de numeros y devuelva un array con los numeros impares.
  -7. Crea una función que reciba un array de ciudades y devuelva un array con las ciudades que empiezan con la letra "M".
  8. Crea una función que reciba un array de nombres y verifique si el nombre "Juan" se encuentra en el array y devuelva su posicion.
*/

// ejercicio 1

function sumar(numeros){
  return numeros.reduce((suma, numero) => suma + numero, 0);
}

var numeros = [1,2,3,4,5];
console.log(sumar(numeros));

// ejercicio 2

function sumarnum(number) {
  return number.reduce((suma, number) => suma + number, 0) / number.length;
}

var number = [1,2,3,4,5,8];
console.log(sumarnum(number))

// ejercicio 3

  function mayor(numeros) {
    return numeros.sort((a, b) => b - a) [0];
  }

  var numeros = [1,2,3,4,6,9];
  console.log(mayor(numeros))


  // ejercicio 4

  function mayor(numeros) {
    return numeros.sort((a, b) => a - b) [0];
  }

  var numeros = [1,2,3,4,6,9];
  console.log(mayor(numeros))


// ejercicio 5

function numerospares(numeros){
  return numeros.filter(numeros => numeros % 2 === 0);
}

var numeros = [1,2,3,4,6,9];
console.log(numerospares(numeros))

// ejercicio 6

function numerospares(numeros){
  return numeros.filter(numeros => numeros % 2 !== 0);
}

var numeros = [1,2,3,4,6,9];
console.log(numerospares(numeros))

// ejercicio 7

ciudades = ["Margarita", "Aragua de Barcelona", "Madrid", "Barcelona", "Monaco"];
function ciudades_M(ciudades) {
  return ciudades.filter(ciudad => ciudad.startsWith('M'));
}
filtro_ciudades = ciudades_M(ciudades);
console.log(filtro_ciudades);

//Ejercicio 8

function verificarPosicionJuan(nombres) {
  if (nombres.includes("Juan")) {
    let posicion = nombres.indexOf("Juan");
    return posicion;
  } else {
    return 'El nombre "Juan" no se encuentra en el array';
  }
}

const nombres = ["Antonia", "Sebastian", "Juan", "Jose", "Johanny"];
console.log(verificarPosicionJuan(nombres));