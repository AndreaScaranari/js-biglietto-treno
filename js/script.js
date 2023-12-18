// * Info che ho già all'inizio
// costo al km
const kmCost = 0.21;

// scontistica 
// - 20% per i minorenni
const underageDiscount = 0.2;
const underagePrice = 1 - underageDiscount;

// - 40% per gli over 65
const elderDiscount = 0.4;
const elderPrice = 1 - elderDiscount;

// * Info da reperire / calcolare
// chiedere quantità chilometri da percorrere
const kmViaggio = parseInt(prompt("Quanti km devi percorrere?", "100"));

// chiedere età al passeggero
const etaPasseggero = parseInt(prompt("Quanti anni hai?", "30"));

// costo per viaggio
let tripCost = kmViaggio * kmCost;

// data validation
// invalid condition
const invalid = isNaN(kmViaggio) || isNaN(etaPasseggero) || kmViaggio <= 0 || etaPasseggero < 0;

// dichiarazione messaggio
let message;

// verifica inserimento valori 
if (invalid) {
    alert("Errore: per procedere al calcolo della tariffa, inserire valori numerici validi.")
} else {
    // applicazione eventuale sconti
    if (etaPasseggero < 18 || etaPasseggero >= 65) {
        etaPasseggero < 18 ? tripCost *= underagePrice : tripCost *= elderPrice;
    }
    
    // predisposizione messaggio
    message = `Gentile cliente, la tariffa del suo biglietto ammonta a <strong>€ ${tripCost.toFixed(2)}</strong>`;

    // Print in page
    document.getElementById("trip-fee").innerHTML = message;
}


