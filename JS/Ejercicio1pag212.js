// Ejercicio 1

let numeros = [0,1,2,3,4,5];
for (let i = 0;i < numeros.length; i++) {
    console.log (numeros[i]);
}
for (let numero of numeros) {
    console.log(numero);    
}

// Ejercicio 2

let colores = ["azul","rojo","verde"];
for (let color of colores) {
    console.log(color);
}

// Ejercicio 3

let colores3=[];
for(let color of colores){
    colores3.push(color);
}

// Ejercicio 4

let elementos1 = ["Mar","Rio","Sol"];
let elementos2 = ["Sol","Rio","Mar"];
let contador=0;
let repeticiones = [];
for (let element1 of elementos1) {
    for (let element2 of elementos2) {
        if (element1 == element2) {
            contador++;
            repeticiones.push(element1);
        }
    }
    
}
console.log("El número de palabras repetidas es " + contador);
console.log("Estos son:"+ repeticiones)

// Ejercicio 5

let fruta = ["manzana","pera","naranja","plátano","mandarina"];
let fruta2 = fruta.slice(1,4);
console.log(fruta2);