// ============================================
// ESERCIZI ARRAY E STRINGHE - PRATICA INTENSIVA
// ============================================

/* ESERCIZIO 1 - Conta le vocali */
/*function contaVocali(str) {
  // considerare la stringa come un array di lettere
  // devo fare un ciclo per sapere quante lettere ci sono
  // devo ritornare il numero di lettere
 

  let vowels = ["a", "e", "i", "o", "u"];
  let consonants = ["b", "c", "d", "f", "g", "h", "l", "m", "n", "p", "q", "r", "s", "t", "v", "z", "j", "k", "w", "x", "y"];
  console.log(vowels);
  let words = str.split("");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.includes(vowels)) {
      console.log(str);
    }
  }
}*/

/*const words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    result.push(words);
  }
  return result;
}*/

/*function upperFirst(str) {
  const words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(capitalizedWord);
  }
  return result.join(" ");
}

console.log(contaVocali("ciao")); // 3
console.log(contaVocali("programmazione")); // 6*/

/* ESERCIZIO 2 - Raddoppia numeri */
function raddoppiaNumeri(arr) {
  let risultato = [];

  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    let doppio = number * 2;
    risultato.push(doppio);
  }

  return risultato;
}

console.log(raddoppiaNumeri([1, 2, 3]));
console.log(raddoppiaNumeri([5, 10]));

/* ESERCIZIO 3 - Iniziali */
function iniziali(nome, cognome) {
  let name = nome[0];
  let surname = cognome[0];

  let cap = name.toUpperCase();
  let cap2 = surname.toUpperCase();

  let str = cap + "." + cap2 + ".";

  return str;
}

console.log(iniziali("mario", "rossi")); // "M.R."
console.log(iniziali("luca", "bianchi")); // "L.B."

/* ESERCIZIO 4 - Palindromo */
function isPalindromo(str) {
  // scrivi qui
}
console.log(isPalindromo("anna")); // true
console.log(isPalindromo("radar")); // true
console.log(isPalindromo("ciao")); // false

/* ESERCIZIO 5 - Rimuovi duplicati */
function rimuoviDuplicati(arr) {
  // scrivi qui
}
console.log(rimuoviDuplicati([1, 2, 2, 3, 3, 3, 4])); // [1, 2, 3, 4]
console.log(rimuoviDuplicati(["a", "b", "a", "c"])); // ["a", "b", "c"]

/* ESERCIZIO 6 - Censura parole */
function censura(frase, parolaDaCensurare) {
  // scrivi qui
}
console.log(censura("ciao mario come stai", "mario")); // "ciao ***** come stai"
console.log(censura("il gatto è bello", "gatto")); // "il ***** è bello"

/* ESERCIZIO 7 - Ordina per lunghezza */
function ordinaPerLunghezza(arr) {
  // scrivi qui
}
console.log(ordinaPerLunghezza(["ciao", "a", "mondo", "ok"])); // ["a", "ok", "ciao", "mondo"]

/* ESERCIZIO 8 - Conta parole */
function contaParole(frase) {
  // scrivi qui
}
console.log(contaParole("ciao ciao mondo")); // {ciao: 2, mondo: 1}

/* ESERCIZIO 9 - Alterna maiuscole/minuscole */
function alternaCase(str) {
  // scrivi qui
}
console.log(alternaCase("ciao")); // "CiAo"
console.log(alternaCase("javascript")); // "JaVaScRiPt"

/* ESERCIZIO 10 - FizzBuzz array */
function fizzBuzzArray(n) {
  // scrivi qui
}
console.log(fizzBuzzArray(15));
// [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

/* ESERCIZIO 11 - Somma array */
function sommaArray(arr) {
  // scrivi qui
}
console.log(sommaArray([1, 2, 3, 4])); // 10
console.log(sommaArray([10, 20, 30])); // 60

/* ESERCIZIO 12 - Trova il più lungo */
function parolaPiuLunga(arr) {
  // scrivi qui
}
console.log(parolaPiuLunga(["gatto", "cane", "elefante", "topo"])); // "elefante"

/* ESERCIZIO 13 - Ripeti carattere */
function ripeti(str, n) {
  // scrivi qui
}
console.log(ripeti("a", 5)); // "aaaaa"
console.log(ripeti("ciao", 3)); // "ciaociaociao"

/* ESERCIZIO 14 - Primi N numeri pari */
function numeriPari(n) {
  // scrivi qui
}
console.log(numeriPari(5)); // [2, 4, 6, 8, 10]
console.log(numeriPari(3)); // [2, 4, 6]

/* ESERCIZIO 15 - Rimuovi spazi */
function rimuoviSpazi(str) {
  // scrivi qui
}
console.log(rimuoviSpazi("ciao mondo")); // "ciaomondo"
console.log(rimuoviSpazi("hello world test")); // "helloworldtest"

/* ESERCIZIO 16 - Media array */
function mediaArray(arr) {
  // scrivi qui
}
console.log(mediaArray([10, 20, 30])); // 20
console.log(mediaArray([5, 10, 15, 20])); // 12.5

/* ESERCIZIO 17 - Inverti parole */
function invertiParole(frase) {
  // scrivi qui
}
console.log(invertiParole("ciao mondo")); // "mondo ciao"
console.log(invertiParole("uno due tre")); // "tre due uno"

/* ESERCIZIO 18 - Carattere più frequente */
function caratterePiuFrequente(str) {
  // scrivi qui
}
console.log(caratterePiuFrequente("hello")); // "l"
console.log(caratterePiuFrequente("javascript")); // "a"

/* ESERCIZIO 19 - Array di quadrati */
function arrayQuadrati(n) {
  // scrivi qui
}
console.log(arrayQuadrati(5)); // [1, 4, 9, 16, 25]
console.log(arrayQuadrati(3)); // [1, 4, 9]

/* ESERCIZIO 20 - Sostituisci carattere */
function sostituisci(str, vecchio, nuovo) {
  // scrivi qui
}
console.log(sostituisci("hello world", "o", "0")); // "hell0 w0rld"
console.log(sostituisci("banana", "a", "o")); // "bonono"
