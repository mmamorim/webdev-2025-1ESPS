
console.log("oi gente");

function cifrarAtbash(texto) {
    let alfaMaiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let saida = ""
    for(let i=0; i<texto.length; i++) {
        //console.log("letra: ",texto[i]);
        let letterIn = texto[i]
        let pos = alfaMaiusculo.search(letterIn)
        let letterOut = alfaMaiusculo[26-pos-1]           
        //console.log("letraOut: ",letterOut);
        saida = saida + letterOut
    }
    //console.log(saida);    
    return saida
}

let cifrado = cifrarAtbash("ALFACE")
console.log("cifrado",cifrado);
