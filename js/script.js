/* CAMPO MINATO
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta,
sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati,
la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato”
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio,
cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

// 1. Creiamo una funzione per generare un certo numero di numeri casuali,
// compresi tra un valore minimo e uno massimo


var bombe = 1;
var intMin = 1;
var intMax = 5;

function genNumInt(num, min, max) {

  var listaNum = [];

    for (var i = 1; i <= num; i++) {

      var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

      do {

        var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

      } while (listaNum.includes(randomNum));

      listaNum.push(randomNum);

    }

  return listaNum;

}


var numeri = genNumInt(bombe, intMin, intMax);
console.log(numeri);

// 2. Chiediamo all'utente (intMax - bombe) volte di inserire un numero alla volta, compreso tra intMin e intMax

// Creiamo un array vuoto che conterrà i numeri scritti dall'utente
var listaNumUtente = [];
// Creiamo una variabile per tracciare se l'utente ha perso
var utenteHaPerso = false;
// Chiediamo per (intMax - bombe) volte di inserire un numero
for (var i = 1; (i <= (intMax - bombe)) && (utenteHaPerso == false); i++) {
  do {

    var numUtente = parseInt(prompt("Inserisci un numero tra " + intMin + " e " + intMax));

  } while (listaNumUtente.includes(numUtente) || isNaN(numUtente) || numUtente < intMin || numUtente > intMax);
// Se il numero è incluso nell'array dei numeri "bomba", l'utente ha perso
  if (numeri.includes(numUtente)) {

    utenteHaPerso = true;
// Altrimenti, aggiungiamo il numero nell'array dei numeri utente
  } else {

    listaNumUtente.push(numUtente);

  }

}

console.log(listaNumUtente);

//3. Alla fine del gioco, mostriamo all'utente il suo punteggio, in base al risultato
if (utenteHaPerso == true) {
  alert("Hai perso! Il tuo punteggio è: " + listaNumUtente.length);
} else {
  alert("Hai VINTO! Il tuo punteggio è: " + listaNumUtente.length);
}
