let nome;
let idade;


console.log(typeof idade);
console.log(typeof nome);
//Tipo = undefined pois iniciei as variáveis mas não atribuí nenhum valor a elas, ainda.

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof idade);
console.log(typeof nome);
//Tipo = string, agora as variáveis foram definidas através do que foi digitado no prompt.

console.log("Olá",nome, "você tem",idade,"anos.");