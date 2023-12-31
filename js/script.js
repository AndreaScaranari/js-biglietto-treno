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

// dichiarazione prezzo finale
let finalPrice = tripCost;

// dichiarazione messaggio
let message;

// supporto messaggio finale
let messagePercentage;
let finalDiscount;


// verifica inserimento valori 
if (invalid) {
    alert("Errore: per procedere al calcolo della tariffa, inserire valori numerici validi.")
} else {
    // editing messaggio
    if (etaPasseggero < 18 || etaPasseggero >= 65) {
        if (etaPasseggero < 18) {
            finalPrice = tripCost * underagePrice;
            messagePercentage = "20%";
            finalDiscount = tripCost * underageDiscount;
        } else {
            finalPrice = tripCost * elderPrice;
            messagePercentage = "40%";
            finalDiscount = tripCost * elderDiscount;
        }
    }
    
    // messaggio finale
    message = `Gentile cliente, la tariffa del suo biglietto ammonta a <strong>€ ${finalPrice.toFixed(2)}</strong>`;
    
    if (etaPasseggero < 18 || etaPasseggero >= 65) {
    message += `; è stato applicato uno sconto del <strong>${messagePercentage}</strong>, pari a <strong>€ ${finalDiscount.toFixed(2)}</strong>`;
    }

    // Print in page
    document.getElementById("trip-fee").innerHTML = message;
}


