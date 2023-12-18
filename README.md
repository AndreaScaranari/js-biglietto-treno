# Calcolo del prezzo del biglietto del treno
### cartella/repo js-biglietto-treno

Il programma dovrà chiedere all'utente il **numero di chilometri che vuole percorrere** e l'**età del passeggero**.

Sulla base di queste informazioni dovrà calcolare il **prezzo totale del viaggio**, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

### Step ragionamento

1. chiedere n chilometri da percorrere e creare variabile
2. chiedere età passeggero
3. calcolare tariffa
4. calcolare lo sconto da applicare alla tariffa
5. mostrare tariffa in forma umana