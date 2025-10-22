<img src="/assets/teste.svg" width="100%">

# AULA 09 - 22/10

--- 

# Vetores (Arrays)

Em JavaScript, vetores (ou arrays) são estruturas de dados que armazenam coleções de valores em uma única variável. Eles são como listas ordenadas, onde cada item tem um índice numérico que começa em 0, permitindo fácil acesso e manipulação dos dados. Cada elemento pode ser de qualquer tipo de dado (número, string, objeto, etc.), e os vetores têm métodos integrados para realizar diversas operações.  

~~~js
let v = [] // Cria um vetor vazio
let v2 = [ 10, 22, 13, 14 ]

console.log(v2[2]) // imprime o valor 13
~~~

# Funções em Javascript

As funções em JavaScript são blocos de código reutilizáveis que permitem agrupar instruções e executá-las quando necessário. Elas desempenham um papel crucial na criação de código modular, organizado e eficiente. 

Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

# Declaração básica de uma função Javascript

A definição (declaração) da função consiste no uso da palavra chave ```function```, seguida por:

* ```IDENTIFICADOR```: Nome da Função.
* ```ARGUMENTOS``` variáveis que recebem os valores passados na chamada da função. São descritos dentro dos parênteses e separados por vírgulas.
* ```BLOCO_DE_COMANDOS``` sequência de comandos a serem executados. São descritos entre chaves { }.

~~~js
function IDENTIFICADOR(ARGUMENTOS) {
  //BLOCO_DE_COMANDOS
  comando1()
  comando2()
  ...
  comandoN()
} 
~~~

A declaração ```return VALOR```, quando existir, especifica parar a execução do bloco de comandos devolvendo o ```VALOR``` especificado.

~~~js
function fatorial(num) {
  let fat = 1
  for(let i=1; i<=num; i++) {
    fat = fat * i
  }
  return fat
}
~~~

# O que são funções que devolvem objetos?

~~~js
let user = newUser('Ana', 20)
~~~

Isso lembra um método construtor?

# Funções anônimas

Funções também podem ser criadas por uma expressão de função sem indicar um identificador. Essa função é conhecida como uma **'função anônima'**. Neste caso, a função pode ser armazenada em uma variável ou ser passada como parâmetro para outra função.

~~~js
let raizQuadrada = function (numero) {
  return numero * numero;
};
let x = raizQuadrada(4); //x recebe o valor 16
~~~

Passando a função para outra função

~~~js
function raizCubica(f, numero) {
  return f(numero) * numero;
};
let x = raizCubica(raizQuadrada, 3); //x recebe o valor 27
~~~

# Arrow functions 

As **arrow functions** foram introduzidas no ES6 como uma maneira mais curta e simples de escrever funções. Elas eliminam a necessidade da palavra-chave ```function``` e têm uma sintaxe mais enxuta:

~~~js
const raizQuadrada = (numero) => numero * numero;
~~~

ou

~~~js
const fatorial = (num) => {
  let fat = 1
  for(let i=1; i<=num; i++) {
    fat = fat * i
  }
  return fat
}
~~~

# Funções Callback

As funções de **callback** em JavaScript são funções passadas como argumentos para outras funções. Elas são executadas após a conclusão de uma operação, permitindo um fluxo de trabalho assíncrono. Isso é crucial em operações que dependem de tempo, como solicitações de rede ou eventos de usuário.

## Fetch

https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

> https://geek-jokes.sameerkumar.website/api?format=json

## SetInterval e SetTimeout

* SetInterval: chama uma função a cada período de tempo https://www.w3schools.com/jsref/met_win_setinterval.asp
* SetTimeout: chama uma função uma vez após um período de tempo https://www.w3schools.com/jsref/met_win_settimeout.asp
