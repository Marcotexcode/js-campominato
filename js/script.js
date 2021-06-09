


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



// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri 
// casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50




var difficolta = parseInt(prompt('scegli la difficolta tra 0 , 1 , 2'));

document.getElementById('diff').innerHTML = 'Hai scelto difficolta: ' + difficolta;

switch (difficolta) {
    case 0:
        while(numComputer.length < 16){
            // Generare 16 numeri casuali da 1 a 100
            var numeroRandom = randomNumber(1,100);
        
            if(!numComputer.includes(numeroRandom)){
                numComputer.push(numeroRandom);
            }
        }
        break;
        
    case 1:
        while(numComputer.length < 16){
            // Generare 16 numeri casuali da 1 a 80
            var numeroRandom = randomNumber(1,80);
        
            if(!numComputer.includes(numeroRandom)){
                numComputer.push(numeroRandom);
            }
        }
        break;

    case 2:
        while(numComputer.length < 16){
            // Generare 16 numeri casuali da 1 a 50
            var numeroRandom = randomNumber(1,50);
        
            if(!numComputer.includes(numeroRandom)){
                numComputer.push(numeroRandom);
            }
        }
        break;

    default:
        break;
}

console.log(numComputer);
document.getElementById('numComputer').innerHTML = 'Il computer ha scelto: ' + numComputer;

// 2- Chiedere all utente di inserire 84 volte un numero compreso tra 1 e 100 
// non puo inserire lo stesso numero

// tot numeri inseriti dall utente
var totNumUtente = [];


// Inserire numeri compresi da 1 a 100 84 volte
for (var i = 0; totNumUtente.length < 100 - 16; i ++) { 

    var numUtente = parseInt(prompt("inserici numero da 1 a 100 senza ripetizioni"));

// Comprendere i numeri da 1 a 100 non oltre
    if ( numUtente > 100 || numUtente < 1){

        alert('numero non valido ');

// non puo inserire lo stesso numero
    }else if (totNumUtente.includes(numUtente)) {

        alert('numero gia inserito');

    }else if(numComputer.includes(numUtente)) {

// 3- Controllare se il numero dell utente e presente nei numeri generati dall computer se e si allora la partita termina altrimenti continua
        alert('partita termintata');
        document.getElementById('numUtente').innerHTML = 'i numeri che hai scelto sono : ' + totNumUtente;
        break; 
    }else {

// 4- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
        risultato  =  totNumUtente.length + 1;
        totNumUtente.push(numUtente);

    }

}



// 4- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
var risultato;
console.log('Il tuo punteggio e: ' + risultato);
document.getElementById('punteggio').innerHTML = 'Il tuo punteggio e: ' + risultato;










//FUNZIONI

// Funzione per numeri casuali
function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}






