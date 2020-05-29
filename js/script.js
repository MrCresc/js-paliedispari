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
