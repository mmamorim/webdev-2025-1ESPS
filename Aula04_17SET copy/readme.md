<img src="/assets/teste.svg" width="100%">

# AULA 04 - 10/09

--- 

# Desvios condicionais 

## 📌 O que são desvios condicionais?
Desvios condicionais permitem que um programa **tome decisões** de acordo com uma condição lógica.  
Em JavaScript, usamos principalmente as estruturas `if`, `else if`, `else` e o operador ternário.

---

## Estrutura `if`
Executa um bloco de código **somente se a condição for verdadeira**.

~~~js
let idade = 20;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}
~~~


## Estrutura `if...else`

Permite executar um bloco de código se a condição for verdadeira e outro se for falsa.

~~~js
let idade = 16;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
~~~

## Estrutura `if...else if...else`

Usada quando há mais de uma condição a ser testada.

~~~js
let nota = 7;

if (nota >= 9) {
  console.log("Excelente!");
} else if (nota >= 6) {
  console.log("Aprovado.");
} else {
  console.log("Reprovado.");
}
~~~

## Operador ternário `(? :)`

Forma compacta do `if...else`.

Sintaxe:
~~~js
condicao ? valorSeVerdadeiro : valorSeFalso;
~~~

Exemplo:

~~~js
let idade = 20;
let mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(mensagem);
~~~

## Estrutura switch

Boa alternativa ao `if...else if` quando temos muitas comparações de igualdade.


~~~js
let cor = "verde";

switch (cor) {
  case "vermelho":
    console.log("Pare!");
    break;
  case "amarelo":
    console.log("Atenção!");
    break;
  case "verde":
    console.log("Siga!");
    break;
  default:
    console.log("Cor inválida.");
}
~~~