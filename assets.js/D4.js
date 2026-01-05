/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
}

console.log(area(5, 5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(a, b) {
  if (a === b) {
    return (a + b) * 3;
  }
  return a + b;
}

console.log(crazySum(8, 7));
console.log(crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(a, b) {
  let diff1 = a - b;
  let diffAssoluta1 = Math.abs(diff1);
  if (diffAssoluta1 > 19) {
    return diffAssoluta1 * 3;
  }
  return diffAssoluta1;
}

console.log(crazyDiff(55, 21));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  if (n > 20 && n <= 100) {
    return console.log("true, it's an integer number");
  } else {
    return console.log("false, it's NOT an integer number");
  }
}

boundary(8);
boundary(50);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*function epify(str) {
  if (str.substring(0, 7) === "EPICODE") {
    return str;
  } else {
    return "EPICODE " + str;
  }
}*/

function epify(str) {
  if (str.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE " + str;
  }
}

console.log(epify("Ciao Mondo"));
console.log(epify("EPICODE è bello"));
//console.log(epify(5));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
  if (n % 3 === 0 || n % 7 === 0) {
    return console.log("il numero è un multiplo di 3 o di 7");
  } else {
    return console.log("prova un altro numero");
  }
}

check3and7(12);
check3and7(65);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//devo cambiare la posizione delle lettere
//la stringa è un insieme di caratteri, quindi deve essere trattato come un array
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("gelato"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {
  const words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(capitalizedWord);
  }
  return result.join(" ");
}

console.log(upperFirst("ciao a tutti belli e brutti"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
  return str.slice(1, -1);
}

console.log(cutString("ciao"));
console.log(cutString("epicode"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    let random = Math.floor(Math.random() * 11);
    array.push(random);
  }
  return array;
}

console.log(giveMeRandom(5));
