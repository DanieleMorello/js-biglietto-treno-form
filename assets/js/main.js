/*
  Descrizione:
scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà 
calcolare il prezzo totale del biglietto di viaggio, secondo
le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al
km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica 
ma usando esclusivamente due input e un bottone 
(non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in 
console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e 
funzionante allora realizzeremo un form in pagina in cui
l’utente potrà inserire i dati e visualizzare il calcolo 
finale con il prezzo.
Il riepilogo dei dati inseriti e l'output del prezzo finale,
andranno quindi stampati in pagina (il prezzo dovrà essere
formattato con massimo due decimali, per indicare i 
centesimi sul prezzo).
Nota:
Se non vi sentite particolarmente creativi, in allegato
uno screenshot che potrebbe essere un’implementazione da 
seguire per il secondo milestone.
Potete scegliere di implementare una soluzione 
completamente diversa oppure simile, ma in ogni caso 
cercate di farla vostra.
*/

/*
STRUMENTI:
-const/let
-addEventListener
-if/else

*/

// Selezionare il bottone che genera il biglietto e salvarlo in una variabile
const generateBtn = document.getElementById('generate');
//console.log(generateBtn);

generateBtn.addEventListener('click', function() {
  console.log('CLICK');

  // Selezionare e salvare il valore del primo input in una variabile
  const km = document.getElementById("meter").value;
  console.log('Distanza: ', km);

  // Selezionare e salvare il valore del primo input in una variabile
const userAge = document.getElementById("age").value;
console.log('Età: ', km);

const priceForKm = 0.21;
let ticketPrice = km * priceForKm;
console.log('Prezzo intero: ', ticketPrice);
let discount = 0;
if(userAge < 18) {
  discount = 0.2;
} else if (userAge > 65) {
  discount = 0.4;
}
console.log('Discount: ', discount);

const discountAmount = ticketPrice * discount;
console.log('Discount amount: ', discountAmount);

ticketPrice = ticketPrice - discountAmount;

console.log('Discounted price: ', ticketPrice);
});




