console.log("Hello world!");

// chiedere quantità chilometri da percorrere
const kmViaggio = parseInt(prompt("Quanti km devi percorrere?", "20"));
console.log(kmViaggio);

// chiedere età al passeggero
const etaPasseggero = parseInt(prompt("Quanti anni hai?", "30"));
console.log(etaPasseggero);

// calcolare tariffa
// 1. costo al km
const kmCost = 0.21;
// 2. costo per viaggio
let tripCost = kmViaggio * kmCost;
console.log(tripCost);