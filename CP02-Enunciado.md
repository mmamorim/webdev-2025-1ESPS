<img src="/assets/teste.svg" width="100%">

# Web Development 2025/2

| Checkpoint | 5 | ```CURSO:``` | ENGENHARIA DE SOFTWARE |
|---|---|---|---|
| ```DISCIPLINA:``` | WEB DEVELOPMENT | ```PROFESSOR:``` | Marcelo Amorim |


# ✨💰 O Desafio das Moedas 

---

# ✨ Desafio: Criptografia Clássica em JavaScript

## Objetivo

Implementar quatro das cifras mais importantes da história da criptografia para consolidar o domínio sobre **funções, laços de repetição (`for`), arrays, manipulação de strings (ASCII) e aritmética modular (`%`)** em JavaScript.

## Requisitos Gerais

1.  **Funções Puras:** Todas as funções devem usar apenas os recursos disponíveis no javascript puro, sem usar bibliotecas externas.
2.  **Alfabeto:** Considere apenas as 26 letras do alfabeto inglês (A-Z, a-z).
3.  **Tratamento de Não-Letras:** Espaços, números e pontuações devem ser mantidos inalterados no texto cifrado.
4.  **Caixa (Case):** O *case* (maiúsculo/minúsculo) das letras deve ser preservado.

---

## Parte 1: Cifra Atbash (O Desafio do Mapeamento Oposto)

A Cifra Atbash é a mais simples das cifras de substituição, sendo **recíproca** (a codificação é a mesma que a decodificação): A $\leftrightarrow$ Z, B $\leftrightarrow$ Y, C $\leftrightarrow$ X, etc.

### Função a Implementar:

~~~js
function cifrarAtbash(mensagem) {
    // Sua lógica de codificação Atbash aqui
}
~~~

---

## Parte 2: Cifra de César (O Desafio do Deslocamento Fixo)

A Cifra de César desloca cada letra por um número fixo de posições (a chave).

### Função a Implementar:

~~~js
function cifrarCesar(mensagem, chave) {
    // Sua lógica de César aqui
}
~~~

Fórmula Essencial (Deslocamento Circular):

$$\text{Novo Índice} = (\text{Índice Original} + \text{Chave}) \pmod{26}$$

---

## Parte 3: Cifra de Vigenère (O Desafio da Chave Variável e Cíclica)

A Cifra de Vigenère usa uma palavraChave para aplicar múltiplos deslocamentos da Cifra de César, de forma cíclica.

### Função a Implementar:
~~~js
function cifrarVigenere(mensagem, palavraChave, modo = 'codificar') {
    // Sua lógica de Vigenère aqui.
    // Use 'modo' para diferenciar codificação (+) de decodificação (-).
}
~~~

Dica Essencial: Você precisará de dois índices no seu laço: um para a mensagem e um índice separado (e modular) para a chave. O índice da chave só deve avançar se o caractere da mensagem for uma letra.

---

### Parte 4: Criptografia RSA (O Desafio da Chave Pública/Privada)

O RSA é um sistema de chave assimétrica. Implementaremos o algoritmo focando na lógica matemática, usando chaves didáticas pequenas.

#### O Contexto Essencial (Confidencialidade)
Neste desafio, você simulará a comunicação segura:

**Cifragem:** O remetente usa a Chave Pública (E, N) do destinatário.

**Decifragem:** O destinatário usa sua Chave Privada (D, N) secreta para ler a mensagem.

#### Geração de Chaves (Função Fornecida)
Utilize a seguinte função para gerar o par de chaves que você usará nas funções de cifragem e decifragem.

~~~js
/* * FUNÇÃO FORNECIDA - NÃO É NECESSÁRIO MODIFICAR. */
function gerarChavesRSA_Didaticas(p, q) {
    if (p <= 1 || q <= 1) return null; 
    
    const N = p * q;
    const phi_N = (p - 1) * (q - 1);
    
    let E = 3;
    while (E < phi_N) {
        // Encontrar o primeiro E que é coprimo de phi_N
        if ((phi_N % E !== 0) && ((p - 1) % E !== 0) && ((q - 1) % E !== 0)) {
             // Otimização: A verificação (p-1)%E e (q-1)%E não é rigorosamente a do RSA, 
             // mas é didática e evita fatores óbvios para primos pequenos.
            break;
        }
        E++;
    }

    let D = 1;
    while (D < phi_N) {
        // Encontrar D tal que (D * E) % phi_N === 1
        if ((D * E) % phi_N === 1) {
            break;
        }
        D++;
    }
    
    return {
        publica: { E, N }, // Use E e N para CIFRAR
        privada: { D, N }  // Use D e N para DECIFRAR
    };
}
~~~

#### Funções a Implementar:

1. Codificação (Usando a Chave Pública do Destinatário)

~~~js
/**
 * Cifra a mensagem usando a chave pública (E, N).
 * @param {string} mensagem - O texto a ser cifrado.
 * @param {number} E - Expoente Público.
 * @param {number} N - Módulo.
 * @returns {number[]} Array de números (os códigos cifrados).
 */
function cifrarRSA_Didatico(mensagem, E, N) {
    // Implemente a lógica de iteração e a fórmula x^E mod N.
}
~~~

#### Fórmula de Cifragem: (Para cada código ASCII/Unicode x)

$$\text{Cifrado} = x^E \pmod{N}$$

2. Decodificação (Usando a Chave Privada do Destinatário)

~~~js
/**
 * Decifra o array de números usando a chave privada (D, N).
 * @param {number[]} mensagemCifrada - Array de números cifrados.
 * @param {number} D - Expoente Privado.
 * @param {number} N - Módulo.
 * @returns {string} A string original.
 */
function decifrarRSA_Didatico(mensagemCifrada, D, N) {
    // Implemente a lógica de iteração e a fórmula C^D mod N.
}
~~~

Fórmula de Decifragem: (Para cada número cifrado C)

$$\text{Original} = C^D \pmod{N}$$

#### Teste de Validação Final

Execute os testes a seguir para garantir que todas as suas funções estão corretas:

~~~js
// Atbash:

console.log(cifrarAtbash("OlaMundo")); 
// Esperado: "OñzPfmwl" (Nota: pode variar dependendo da sua implementação de caracteres especiais/ASCII)

// César:

console.log(cifrarCesar("criptografia", 3)); // Esperado: "fulswrjudiia"
console.log(cifrarCesar("fulswrjudiia", -3)); // Esperado: "criptografia"

// Vigenère:

const chaveV = "CHAVE";
const codificadoV = cifrarVigenere("Enigma!", chaveV, 'codificar'); 
console.log(codificadoV); // Ex: "Gñlgnx!"
console.log(cifrarVigenere(codificadoV, chaveV, 'decodificar')); // Esperado: "Enigma!"
RSA (Obriga a usar todas as funções):

const PRIMO_1 = 17;
const PRIMO_2 = 19;
const CHAVES = gerarChavesRSA_Didaticas(PRIMO_1, PRIMO_2); 

const textoOriginal = "OLA"; 

// 1. Cifrar com a Chave Pública
const cifrado = cifrarRSA_Didatico(textoOriginal, CHAVES.publica.E, CHAVES.publica.N);
console.log("RSA Cifrado:", cifrado); // Array de números

// 2. Decifrar com a Chave Privada
const decifrado = decifrarRSA_Didatico(cifrado, CHAVES.privada.D, CHAVES.privada.N);
console.log("RSA Decifrado:", decifrado); // Esperado: "OLA"
~~~

---

# ENTREGA: 

1. Entregar o link do github do repositório do projeto
2. O repositório do github deverá conter os códigos em javascript e arquivo ```readme.md```. IMPORTANTE: **Informar todos os integrantes do grupo (RA e NOME COMPLETO) no readme.md**.  
3. O Checkpoint poderá ser realizado em grupo de até 4 integrantes.
4. A entrega deverá ser feita por apenas um integrante do grupo.

> QUE A FORÇA DO JAVASCRIPT ESTEJA COM TODOS!
