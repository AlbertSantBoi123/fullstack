// const sumar = (x,y) => {
//     return x+y;
// };
// const restar = (x,y) => {
//     return x-y;
// };
// const multiplicar = (x,y) => {
//     return x*y;
// };
// const dividir = (x,y) => {
//     return x/y;
// };


const sumar =(x,y,callback) => callback (x+y);
const restar =(x,y,callback) => callback (x-y);
const multiplicar =(x,y,callback) => callback (x*y);
const dividir =(x,y,callback) => callback (x/y);

// const callback=(resultado) =>{
//     console.log(resultado)
// }

sumar(1,9,(resultado) => {setTimeout(() => {
    console.log(resultado);
    }, 1000)
});
restar(8,7,(resultado) => {setTimeout(() => {
    console.log(resultado);
    }, 2000)
});
multiplicar(3,10,(resultado) => {setTimeout(() => {
    console.log(resultado);
    }, 3000)
});
dividir(15,5,(resultado) => {setTimeout(() => {
    console.log(resultado);
    }, 4000)
});