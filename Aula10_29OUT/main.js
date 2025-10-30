
console.log("oi gente");

function cifrarAtbash(texto) {
    let alfaMaiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let alfaMinusculo = "abcdefghijklmnopqrstuvwxyz"
    let saida = ""
    for (let i = 0; i < texto.length; i++) {
        //console.log("letra: ",texto[i]);
        let letterIn = texto[i]
        let letterOut = " "
        if (letterIn != " ") {
            let pos = alfaMaiusculo.search(letterIn)
            if (pos != -1) {
                letterOut = alfaMaiusculo[26 - pos - 1]
            } else {
                pos = alfaMinusculo.search(letterIn)
                letterOut = alfaMinusculo[26 - pos - 1]
            }
        }
        //console.log("letraOut: ",letterOut);
        saida = saida + letterOut
    }
    //console.log(saida);    
    return saida
}

let cifrado = cifrarAtbash("Al face")
console.log("cifrado", cifrado);
let decifrado = cifrarAtbash(cifrado)
console.log("decifrado", decifrado);


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

let resp = gerarChavesRSA_Didaticas(13,17)
console.log(resp);
