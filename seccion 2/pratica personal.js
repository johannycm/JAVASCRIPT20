// Ejercicio 1: Generar un número aleatorio
// Pista: Utiliza Math.random() para generar un número decimal y Math.floor() para redondearlo.

let numeroAleatorio = Math.Ramdon();
console.log("Número decimal aleatorio:", numeroAleatorio);

numeroAleatorio = numeroAleatorio * 100;
console.log("Número escalado al rango 0-100:", numeroAleatorio);

numeroAleatorio =  Math.floor(numeroAleatorio)
console.log("Número redondeado hacia abajo:", numeroAleatorio);

numeroAleatorio = numeroAleatorio + 1;
console.log("Número ajustado al rango 1-100:", numeroAleatorio);

// Ejercicio 2: Contar hasta 10
// Pista: Usa un bucle for para iterar desde 1 hasta 10 e imprime los números.

  for (let i = 1; i <= 10; i++)
    {console.log(i);
    }

// Ejercicio 3: Comprobar si un número es par o impar
// Pista: Usa el operador % para comprobar si el número es divisible por 2.

    let numero = prompt ("Ingresa un numero");
    numero = parseInt(numero);
    if (numero % 2 === 0) { alert(numero + " es par."); }
    else { alert(numero + " es impar."); }

// Ejercicio 4: Convertir una cadena a minúsculas
// Pista: Usa el método .toLowerCase() en la cadena.

    let string = "SOy un string DE TEXto"
    let stringMinusculas = string.toLowerCase();
    console.log(stringMinusculas)


// Ejercicio 5: Contar vocales en una cadena
// Pista: Crea un bucle que recorra cada carácter de la cadena y comprueba si es una vocal.


// Ejercicio 6: Juego de adivinar un número entre 1 y 50
// Pista: Genera un número aleatorio y usa un bucle while para pedir al usuario que adivine hasta que acierte o se rinda.