// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Variabili collegate all'HTML
var bottonePali = document.getElementById('bottone_pali')
var risultatoPali = document.getElementById('risultato_pali')

// Aggiungo Event Listener al bottone
bottonePali.addEventListener('click',
  function () {
    // Eseguo reset in caso di re-click
    risultatoPali.innerHTML = ""
    // Chiedo la parola all'utente ed eseguo funzione relativa
    var parolaUtente = prompt("Digita una parola")
    var palindroma = paroPali(parolaUtente)
    // Eseguo condizioni e mostro esito verifica
    if (palindroma) {
      alert("La parola è palindroma")
      risultatoPali.innerHTML = "La parola \"" + parolaUtente + "\" è palindroma!"
    } else {
      alert("La parola non è palindroma")
      risultatoPali.innerHTML = "La parola \"" + parolaUtente + "\" non è palindroma!"
    }
  }
)

// Funzione per verifica palindromità
function paroPali(arg1) {
  // Condizione iniziale
  var palindroma = false;
  // Divido la parola data dall'utente in singole lettere presenti in un array
  var parolaSplit = arg1.split("")
  // Inverto le lettere nell'array
  var parolaInversa = parolaSplit.reverse();
  // Ricongiungo le singole lettere in una parola
  var parolaInversaStringa = parolaInversa.join("")
  // In caso di uguaglianza con parola iniziale cambio la condizione da falsa a vera
  if (arg1 === parolaInversaStringa) {
    palindroma = true;
  }
  return palindroma;
}
// -----------------------------------------------------------------------------
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Variabili collegate all'HTML
var bottoneDispari = document.getElementById('bottone_dispari')
var risultatoDispari = document.getElementById('risultato_dispari')
// Aggiungo Event Listener al bottone
bottoneDispari.addEventListener('click',
  function () {
    // Eseguo reset in caso di re-click
    risultatoDispari.innerHTML = ""
    // Chiedo pari o dispari all'utente
    var sceltaUtente = prompt("Scegli pari o dispari?")
    console.log(sceltaUtente)
    // Eseguo filtro 1
    while ((sceltaUtente !="pari") && (sceltaUtente !="dispari")) {
      sceltaUtente = prompt("Valore immesso errato, scegli pari o dispari?")
    }
    // Chiedo un numero da 1 a 5 all'utente
    var numeroUtente = parseInt(prompt("Adesso scegli un numero da 1 a 5"))
    // Eseguo filtro 2
    while ((numeroUtente <1) || (numeroUtente >5) || isNaN(numeroUtente)) {
      numeroUtente = parseInt(prompt("Valore immesso errato, scegli un numero da 1 a 5"))
    }
    // Imposto condizione in base alla scelta
    var pariUtente = false
    if (sceltaUtente === "pari") {
      pariUtente = true;
    }
    console.log(sceltaUtente)
    // Calcolo numero random per il Pc
    var numeroPc = numeroRandom()
    // Funzione che esegue somma tra il numero dell'utente e il numero del Pc e ritorna come risultato di parità un valore booleano
    var pariVerdetto = pariDispari(numeroUtente,numeroPc)
    // Eseguo condizioni e mostro esito verifica
    if (pariVerdetto === pariUtente) {
      alert("Che c*** hai vinto!!!")
      risultatoDispari.innerHTML = "Hai scelto " + sceltaUtente + " e " + numeroUtente + ", mentre il Pc ha scelto " + numeroPc + ", la somma è " + (numeroUtente+numeroPc) +", quindi hai vinto!"
    } else {
      alert("Hai perso BWHAHAHAHAHAHAHAHHAAH!!!")
      risultatoDispari.innerHTML = "Hai scelto " + sceltaUtente + " e " + numeroUtente + ", mentre il Pc ha scelto " + numeroPc + ", la somma è " + (numeroUtente+numeroPc) +", quindi hai perso!"
    }
  }
)

// Funzione per calcolare numero random da 1 a 5
function numeroRandom() {
  valoreRandom = Math.floor(Math.random() * 5) + 1;
  return valoreRandom;
}
// Funzione che somma 2 numeri e ritorna come risultato di parità un valore booleano
function pariDispari(num1,num2) {
  var pariVerdetto = false;
  var somma = num1 + num2;
  if (somma % 2 === 0 ) {
    pariVerdetto = true;
  }
  return pariVerdetto;
}
