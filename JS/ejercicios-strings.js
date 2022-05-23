let ejercicio3 = "zyx L abc a xyz";
let existeABC = ejercicio3.indexOf("abc");
if ((ejercicio3.indexOf("abc") != -1) && (ejercicio3.indexOf("abc") !=0) && (ejercicio3.lastIndexOf("abc") != ejercicio3.length-3)){
    document.write("Existe ABC dentro del string");
} else {
    document.write("Existe ABC al principio o al final");
}
// Se podría hacer con slice del 1 al lenght -2

let stringPos = "Haaaa buenas";
let pos = 3;
if ((stringPos.charAt(pos) == stringPos.charAt(pos-1)) && (stringPos.charAt(pos)==stringPos.charAt(pos+1))) {
    document.write("La letra anterior o posterior es igual");
}
else {
    document.write("No son iguales las letras anterior y posterior")
}

let text = "Texto a borrar";
text = text.slice(0,-1);
document.write(text);