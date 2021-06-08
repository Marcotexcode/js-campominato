


// Il computer deve generare 16 numeri casuali tra 1 e 100. 
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. 
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. 
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri 
// casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50





// 1- Generare 16 numeri casuali tra 1 e 100
// I numeri non possono essere duplicati.
var numComputer = [];


// Generare 16 numeri casuali da 1 a 100
while(numComputer.length < 16){

    var numeroRandom = randomNumber(1,100);

    if(!numComputer.includes(numeroRandom)){
        numComputer.push(numeroRandom);
    }
}

console.log(numComputer);



// 2- Chiedere all utente di inserire 84 volte un numero compreso tra 1 e 100 
// non puo inserire lo stesso numero

// tot numeri inseriti dall utente
var totNumUtente = [];

// Inserire numeri compresi da 1 a 100 84 volte
for (var i = 0; totNumUtente.length < 10; i ++) {

    var numUtente = totNumUtente.push(prompt("inserici numero da 1 a 100 "));
}

// Comprendere i numeri da 1 a 100 non oltre
if ( numUtente >100) {
    numUtente = false;
}else {
    numUtente = true;

}


console.log(totNumUtente);







//FUNZIONI

// Funzione per numeri casuali
function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}