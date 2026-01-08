// ESERCIZIO 1

/*let vowels = ["a", "e", "i", "o", "u"];
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


//ESERCIZIO 3

/*let name = nome.split("");
  //let surname = cognome.split("");
  //let lettMaiusc = [];

  for (let i = 0; i < name.length; i--) {
    let letter = name[i];
    //console.log(letter);
    let capstone = letter.charAt(0).toUpperCase(0) + letter.slice(1);
    console.log(capstone);
  }
  let str = name === surname;
  console.log(str);
  return capstone;
}*/
/*let letters = nome.split("");
  let lettMaiusc = [];

  for (let i = 0; i < letters.length; i--) {
    //let letter = letters[i];
    let letter = letters[i];
    let capstone = letter.charAt(0).toUpperCase(0) + letter.slice(1);
    //console.log(capstone);
    lettMaiusc.push(capstone);
    console.log(lettMaiusc);
  }
}*/
/*function iniziali(nome, cognome) {
  //let letters = nome.split(" ");
  //let letters2 = cognome.split("");
  let str = nome.concat(cognome);
  let result = str.split("");
  //console.log(letters);
  //console.log(letters2);
  console.log(str);
  console.log(result);

  for (let i = 0; i < result.length; i++) {
    let letter = result[i];
    let cap = letter.slice(0);
    //console.log(cap);
    let capstone = cap.charAt(0).toUpperCase();
    console.log(capstone);
  }
}
for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    let cap = letter.slice(0);
    //console.log(cap);
    let capstone = cap.charAt(0).toUpperCase();
    console.log(capstone);
  }
  // return capstone;
}*/

/* ESERCIZIO 4 - Palindromo */
/*function isPalindromo(str) {
  let palindromo = true;

  for (let i = 0; i < str.length; i++) {
    let letterDx = str[i];
    console.log(letterDx);
  }
  for (let i = 0; i < str.length; i--) {
    let letterSx = str[i];
  }
  if (letterDx === letterSX) {
  }
  return palindromo;
}*/

/* ESERCIZIO 5 - Rimuovi duplicati */
/*function rimuoviDuplicati(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    console.log(arr);
  }
  if (elemento === elemento2) {
    return newArray.slice();
  } else {
    return newArray.push(arr);
  }
}*/
