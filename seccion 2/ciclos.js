//Ciclos (Loops)
/*
  Los ciclos nos permiten repetir un bloque de codigo
  mientras se cumpla una condicion
*/

let carros = ["Toyota", "Nissan", "Chevrolet", "Ford"];
//For
for(let i = 0; i < carros.length; i++){
  console.log(carros[i]);
}

//While
let i = 0;
while(i < carros.length){
  console.log(carros[i]);
  if(i === 3){
    break;
  }
  i++;
}

//Do while
let j = 0;
do {
  console.log(carros[j]);
  j++;
} while(j < 0);

//For of (Especial para recorrer arrays)
for(let carro of carros){
  console.log(carro);
}

let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 20
}

//For in (Especial para recorrer objetos)
for(let propiedad in persona){
  console.log(persona[propiedad]);
}

let comidas = [
  ["Hamburguesa", "Pizza", "Tacos"],
  ["Sushi", "Ramen", "Gyoza"],
  ["Pasta", "Lasagna", "Ravioli"]
];

for(let comida of comidas){
  for(let platillo of comida){
    console.log(platillo);
  }
}

let compra = [
  {
    producto: "Manzana",
    precio: 1.5,
    tipos: ["Golden", "Red", "Green"],
    cantidad: 10
  },
  {
    producto: "Pera",
    precio: 2.5,
    tipos: ["Bartlett", "Anjou", "Bosc"],
    cantidad: 5
  }
]

/*
  Ejercicios de ciclos
  1. Crea un ciclo que imprima los numeros del 1 al 100.
  2. Crea un ciclo que permita imprimir cada uno de los valores de la variable compra.
  3. Crea un ciclo que imprima los numeros pares del 0 al 100 de dos en dos. (2, 6, 10, 14, 18, ...)
  4. Realiza el ejercicio de Fibonacci utilizando un ciclo. (Debes imprimir solo los primeros 15 valores)
*/


for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}