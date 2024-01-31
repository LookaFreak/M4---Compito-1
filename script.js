// 1. Crea una funzione che controlli due numeri interi . ritorna true se uno dei due è 50 o se la sommadei due è 50.
function check50(a,b) {
    if (a === 50 || b === 50 || a + b === 50) {
        return true;
    }
    return false;
}

console.log(check50 (25,25));
// 2. Crea una funzione che rimuo va il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata
function rimuoviStringa(str,pos) {
    if (pos < 0 || pos >= str.length) {
        return str;
    }
    const newStr = str.substring(0, pos) + str.substring (pos + 1);
    return newStr;
}

console.log(rimuoviStringa("ciao", 2));
// 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 e tra 70 e 100. Ritorna true se rispecchiano queste condizioni, altrimenti ritorna "false"
function numeriRange(num1, num2) {
    if (num1 >= 40 && num1 <= 60 && num2 >= 70 && num2 <= 100) {
        return true;
    } else {
        return false;
    }
}

console.log(numeriRange(42,95));
// 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con Los o new, altrimenti ritorna false
function cityName(name) {
    if (name.startsWith("Los") || name.startsWith("New")) {
        return name;
    } else {
        return false;
    }
}

console.log(cityName("Palermo"));
console.log(cityName("New York"));
// 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un Array. L'array deve esserepassato come parametro.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let arr = [1,2,3,4,5];
let sum = sumArray(arr);
console.log(sum);

// 6. Crea una funzione checontrolli che un array non contenga i numeri 1 o 3. Se non li contiene , ritorni true, altrimenti ritorna false
function no1or3(arr) {
    for (let i = 0; i <arr.length; i++) {
        if (arr[i] === 1 || arr[i] === 3) {
           return false; 
        }
    }
    return true;
}

console.log(no1or3([1,2,4,5,6]));
console.log(no1or3([4,5,6,7,8]));
// 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° => ritorna acuto
// Angolo ottuso: trA I 90° E I 180° gradi => ritorna ottuso
// Angolo retto: 90° => ritorna retto
// angolo Piatto: 180° => ritorna piatto 
function tipoAngolo(gradi) {
    if(gradi < 90) {
        return "acuto";
    } else if (gradi >= 90 && gradi <= 180 ) {
        return "ottuso"
    } else if (gradi === 90) {
        return "retto";
    } else {
        return "piatto";
    }
}
 console.log(tipoAngolo(120));

// 8. Crea una funzione che crei un acronimo a partire da una frase. Es " Fabbrica Italiana Automobili Torino" deve ritornare "FIAT"
function createAcronym(phrase) {
    const words = phrase.split(" ");
    const firstLetters = words.map(word => word.charAt(0).toUpperCase());
    const acronym = firstLetters.join("");
    return acronym;
  }
  
console.log(createAcronym("Federazione Italia  Giuoco Calcio"));

// NOTA: tutti gli esercizi devono essere svolti usando le funzioni

// 1. Partendo da una stringa(passata come parametro), ritorna il carattere più usato nella stringa stessa 
function mostFrequentChar(str) {
    let charFrequencies = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!charFrequencies[char]) {
            charFrequencies[char] = 1;
        } else {
            charFrequencies[char]++;
        }
    }
    let maxFrequency = 0;
    let mostFrequentChar = null;
    for (let char in charFrequencies) {
        if (charFrequencies[char] > maxFrequency) {
            maxFrequency = charFrequencies[char];
            mostFrequentChar = char;
        }
    }
    return mostFrequentChar;
}

console.log(mostFrequentChar("mi sono innamorato di dio"));
// 2. Controlla che due stringhe passate come parametri siano gli anagrammi l'una dell'altra . ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna "true", altrimenti ritorna "false"
function areAnagrams(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    return str1.split("").sort().join("") === str2.split("").sort().join("");
  }
  


  console.log(areAnagrams("listen", "silent")); // true
  console.log(areAnagrams("table", "bateau")); // false
  
// 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
// Per esempio, partendo da "cartine" e ["carenti", "incerta", "espatrio"], il valore ritornato deve essere["carenti", "incerta"].
 function anagrammi(parola, anagrammiPossi) {
    const parolaLower = parola.toLowerCase();
    const anagrammiLower = anagrammiPossi.map(anagramma => anagramma.toLowerCase());
    const risultato = [];
    for (let i = 0; i < anagrammiLower.length; i++) {
        const anagramma = anagrammiLower[i];
        if (parolaLower.includes(anagramma)) {
            risultato.push(anagramma)
        }
    }
    return risultato;
 }

 const parola = "cartine";
 const anagrammiPossi = ["carenti", "incerta", "espatrio"];
 const risultato = anagrammi(parola, anagrammiPossi);
 console.log(risultato);
// 4. Partendo da una stringa passata come parametro, ritorna "true" se la stringa è palindroma o "false" se non lo è.
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
  }
  
  console.log(isPalindrome("osso")); 
     
// 5. Partendo da un numero intero ( dai parametri) ritorna un numero che contenga le stesse cancelAnimationFrame, ma in ordine contrario. 
// es. 189 => 981
function invertiNumero(n) {
    const digits = n.toString().split('');
    digits.reverse();
    return digits.join('');
  }
  
  console.log(invertiNumero(142)); 
  

// 6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una "scala" creata con il carattere "#" e avente X scalini. 
// es. 
// X = 2
// "#"
// "##"
// X = 3
// "#"
// "##"
// "###"
function scale(x) {
    for (let i = 1; i <= x; i++) {
      console.log("#".repeat(i));
    }
   }
scale(3);   

// 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. es "Ciao" => "oaiC"
function reverseString(str) {
    return str.split("").reverse().join("");
  }

  console.log(reverseString("ciao"));
// 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
// Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
// array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]
function divideArray(arr, y) {
    const result = [];
    for (let i = 0; i < arr.length; i += y) {
      result.push(arr.slice(i, i + y));
    }
    return result;
  }
  console.log(divideArray([1, 2, 3, 4], 2)); 
  console.log(divideArray([1, 2, 3, 4, 5], 4)); 
  
// 9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.
// Es.
// X = 3
// ' # '
// ' ### '
// '#####'

function piramide(x) {
    for (let i = 0; i < x; i++) {
      for (let j = 0; j <= i; j++) {
        console.log("#");
      }
      console.log("\n");
    }
  }
  
  piramide(3);
// 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
// Es. N = 2
// [[1, 2],[4, 3]]
// N = 3
// [[1, 2, 3],[8, 9, 4],[7, 6, 5]]
// N = 4
// [[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]

function spiralMatrix(N) {
    let matrix = [];
    for (let i = 0; i < N; i++) {
      matrix[i] = [];
      for (let j = 0; j < N; j++) {
        matrix[i][j] = (i + j) % 2 === 0 ? 1 : 0;
      }
    }
    return matrix;
   }
   
   spiralMatrix(3);