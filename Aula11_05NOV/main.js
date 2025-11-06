
//console.log("Oi gente");

function fazAlgo(coisa) {
    console.log("faz algo",coisa);
    return "oi "+coisa
}

let demoraMuito = function() {
    for(let i=0; i<10000000000; i++) {

    }
}

function misterio(algo) {
    console.log("mistério...");
    algo()
}

//misterio(function() {
//    console.log("anonima");
//})
//
//misterio(() => {
//    console.log("arrow function");
//})

let qtde = 0

function bomDia() {
    console.log("Bom dia!",qtde);
    qtde++
}

setTimeout(() => {
    qtde = qtde + 50
    console.log("Eu somei 50 a mais")
},5000)

let elem = document.getElementById("contador")

setInterval(() => {
    qtde++
    elem.innerText = qtde
},1000)

//demoraMuito()
console.log("terminou");



//let resp = fazAlgo(56)
//console.log("resp",resp);
//resp = fazAlgo("oi")
//console.log("resp",resp);
//resp = fazAlgo(true)
//console.log("resp",resp);

//let f = fazAlgo
//console.log(f);
//f(55)
//fazOutraCoisa("ABC")