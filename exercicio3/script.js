let a = 10
let b = 25

let auxiliar;

auxiliar = b;
b = a;
a = auxiliar;

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10