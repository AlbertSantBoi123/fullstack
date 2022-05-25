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
sumar(1,2,(resultado) => {
    console.log(resultado)
});
restar(8,2,(resultado) => {
    console.log(resultado)
});
multiplicar(3,9,(resultado) => {
    console.log(resultado)
});
dividir(10,5,(resultado) => {
    console.log(resultado)
});