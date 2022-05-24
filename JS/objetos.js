const persona = {
    nombre: "Alejandro",
            "lugar de residencia": "Madrid"
};
console.log(persona.nombre);
console.log(["lugar de residencia"]);

const x = {
    peras:3,
    fresas:20,
    contar:function(){
            console.log(this.peras + this.fresas)
    }
};
const objeto1 = {
    nombre:"Alejandro",
    mostrarNombre(){
        console.log(this.nombre);
    }
}
objeto1.mostrarNombre();
console.log(objeto1.nombre);

const banco =  {
    Gestor:"A",
    Cliente:"B",
    Mensaje:"C",
    Transferencia:"D",
    mostrarPeticion(){
        console.log( "Hola señor " + this.Cliente + " La transferencia será realizada por el gestor " + this.Gestor);
    }
}
banco.mostrarPeticion();
