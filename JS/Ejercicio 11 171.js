let numero = prompt("Escribe un número aquí");
for (let i = numero; i >= 0; i--) {
    document.write( i + ", ");
    if (i==0) {
        document.write( i );
    } else {
        document.write( i + ", ")
    }
    
}