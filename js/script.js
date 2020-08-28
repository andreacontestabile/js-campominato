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


var quanteBombe = 10;
var intMin = 1;
var intMax = 10;

function genNumInt(num, min, max) {

  var listaNum = [];

    for (var i = 1; i < num + 1; i++) {

      var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

      while (listaNum.includes(randomNum)) {
        var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      }

      listaNum.push(randomNum);

    }

  return listaNum;

}

var numeri = genNumInt(quanteBombe, intMin, intMax);
console.log(numeri);
