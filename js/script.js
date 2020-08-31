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


// 0. Inizializziamo delle variabili relative al numero di bombe presenti e al range dei numeri
var bombe = 1;
var intMin = 1;
var intMax;

/* BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50 */

do {
  var diff = prompt("Scegli la difficoltà del gioco (0: Normale, 1: Difficile, 2: Molto difficile)");
} while (diff < 0 || diff > 2)

switch (diff) {
  case 1:
    intMax = 80;
    break;
  case 2:
    intMax = 50;
    break;
  default:
    intMax = 100;
}

// 1. Creiamo una funzione per generare un certo numero di numeri casuali,
// compresi tra un valore minimo e uno massimo

function genNumInt(num, min, max) {

  var listaNum = [];

    for (var i = 1; i <= num; i++) {

      do {
        var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (listaNum.includes(randomNum));

      listaNum.push(randomNum);
    }

  return listaNum;
}

// Chiamiamo la funzione e salviamo l'array risultante in una variabile
var numeri = genNumInt(bombe, intMin, intMax);
console.log(numeri);

// 2. Chiediamo all'utente (intMax - bombe) volte di inserire un numero alla volta, compreso tra intMin e intMax

// Creiamo un array vuoto che conterrà i numeri scritti dall'utente
var listaNumUtente = [];
// Creiamo una variabile per tracciare se l'utente ha perso
var utenteHaPerso = false;
// Chiediamo per (intMax - bombe) volte di inserire un numero (interrompiamo il ciclo se l'utente ha perso)
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
