<img src="/assets/teste.svg" width="100%">

# AULA 02 - 03/09

--- 

# Conhecendo Javascript 

### 🎮 **Vamos Aprender JavaScript com o Jogo dos Palitinhos?**

Que tal aprender **JavaScript** de um jeito divertido? 
Nesta aula, vamos criar o clássico **jogo dos palitinhos**, onde cada jogador mostra de 0 a 3 dedos e tenta adivinhar o total.

Enquanto programamos o jogo, você vai aprender conceitos importantes de **variáveis, funções, condicionais e interação com o usuário**, tudo de forma prática e divertida. 

Prepare-se para codar, testar sua sorte e se divertir ao mesmo tempo! 😄


# O Jogo dos Palitinhos

Você já brincou de **jogo dos palitinhos**? Aquele clássico em que cada um mostra dedos e tenta adivinhar o total? Pois é, ele é mais antigo do que parece! 😄

O jogo tem raízes em brincadeiras de contagem e sorte de várias culturas, lá do Japão, China e até na Europa medieval. No começo, usava-se palitos de verdade, gravetos ou varetas, mas com o tempo, os **dedos** tomaram o lugar dos palitinhos — muito mais prático e fácil de jogar em qualquer lugar.

Apesar de parecer só sorte, tem gente que tenta **estratégia e observação**. Jogadores experientes olham os padrões dos adversários e variam suas apostas para tentar acertar mais vezes. 🎯

Hoje, ele continua sendo uma ótima forma de decidir quem começa um jogo, quem vai pagar a conta, ou simplesmente dar boas risadas com os amigos. Então, se topar com alguém mostrando dedos, já sabe: é hora de testar sua intuição e sorte! ✌️

## Como Jogar o Jogo dos Palitinhos (0 a 3 palitos)

O jogo dos palitinhos é super simples e divertido. Aqui vai um guia para iniciantes usando **0 a 3 palitos** (ou dedos):

### Regras Básicas

1. **Cada jogador escolhe quantos palitos mostrar**: 0, 1, 2 ou 3 dedos.
2. **Todos mostram os palitos ao mesmo tempo**.
3. **Todos tentam adivinhar o total de palitos mostrados**. Por exemplo, se você acha que a soma será 4, você diz “4”.
4. **Quem acertar o total ganha a rodada**. Se ninguém acertar, ninguém ganha e a rodada pode ser repetida.

### Dicas Rápidas

- Preste atenção aos adversários — às vezes eles têm padrões na escolha dos palitos.
- Misture suas próprias escolhas para não ser previsível.
- Divirta-se! O objetivo é se divertir, testar a intuição e rir bastante com os amigos. 😄

### Exemplo de Rodada

- Jogadores escondem palitos em uma das mãos.
- Quantos palitos temos no total?
- Jogador 1 aposta 2, jogador 2 aposta 3.
- Jogador 1 mostra 2 palitos.
- Jogador 2 mostra 1 palito.  
  
- **Total de palitos mostrados = 3** → Jogador 2 acertou e vence a rodada.


# Vamos tentar programa o jogo dos palitos em Javascript?

### Um HTML como ponto de partida

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo dos Palitinhos</title>
    <style>
        .box {
            margin: 10px;
            padding: 10px;
            border: 1px solid black;
            border-radius: 10px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Jogo dos Palitinhos</h1>
    <table>
        <tr>
            <td class="box">
                <h2>EU</h2>
                <h3>
                    Palitos: <span id="qtdeEu">3</span>
                </h3>
                <button>Jogar</button>
            </td>
            <td class="box">
                <h2>Computador</h2>
                <h3>
                    Palitos: <span id="qtdeComp">3</span>
                </h3>
                <button>Jogar</button>
            </td>
        </tr>
    </table>

    <script>

    </script>
</body>
</html>
~~~


### `console.log` em JavaScript

Em **JavaScript**, `console.log` é usado para **mostrar informações no console** do navegador ou do ambiente de execução. É muito útil para **testar código, depurar erros e acompanhar valores** de variáveis.

##### Exemplo:

~~~js
let nome = "João";
console.log("Olá, " + nome); // Exibe: Olá, João
~~~

### Strings em JavaScript

Em **JavaScript**, uma **string** é um **conjunto de caracteres**, usado para representar textos. Você pode criar strings usando:

- **Aspas duplas `" "`**  
- **Aspas simples `' '`**  
- **Crases `` ` ` `` (template literals)**

### Diferenças

- **Duplas ou simples**: funcionam de forma semelhante, mas permitem usar uma dentro da outra sem precisar de escape.  
~~~js
  let frase1 = "Ele disse 'Olá!'";
  let frase2 = 'Ela respondeu "Oi!"';
~~~

Crases (template literals): permitem interpolação de variáveis e quebras de linha facilmente.

~~~js
let nome = "João";
let mensagem = `Olá, ${nome}!`
~~~

### Variáveis em JavaScript

Em **JavaScript**, uma variável é um **espaço na memória** usado para armazenar dados, como números, textos ou valores lógicos (verdadeiro/falso).  

Você pode criar variáveis de três formas principais:

- **`var`** – forma antiga, permite redeclarar e reatribuir valores.
- **`let`** – moderna, permite reatribuir valores, mas não redeclarar no mesmo escopo.
- **`const`** – constante, não pode ser reatribuída após a inicialização.

##### Exemplo:

~~~js
let idade = 25;       // pode mudar depois
const nome = "João";  // não muda
var cidade = "SP";    // antiga forma, menos usada
~~~

### Funções em JavaScript

Em **JavaScript**, uma função é um **bloco de código reutilizável** que executa uma tarefa específica. Você pode **passar informações** para a função (parâmetros) e **receber resultados** (retorno).

##### Exemplo:

~~~js
function saudacao(nome) {
  return `Olá, ${nome}!`;
}
let texto = saudacao("Maria")
console.log(texto); // Olá, Maria!
~~~

### Condicional `if...else` em JavaScript

O **`if...else`** permite que seu código **tome decisões** com base em condições.  
Se a condição for verdadeira, um bloco de código é executado; se for falsa, outro bloco pode ser executado.

##### Exemplo:

~~~js
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade!");
} else {
  console.log("Você é menor de idade!");
}
~~~

### `Math.random()` em JavaScript

Em **JavaScript**, `Math.random()` é usado para gerar um **número aleatório** entre 0 (inclusive) e 1 (exclusivo). É muito útil para criar sorteios, jogos e simulações.

##### Exemplo:

~~~js
let numero = Math.random();
console.log(numero); // Ex.: 0.837462934
~~~

Se quiser gerar um número inteiro dentro de um intervalo, você pode combinar com `Math.floor()`:

~~~js
// Número inteiro entre 0 e 3
let palitos = Math.floor(Math.random() * 4);
console.log(palitos);
~~~