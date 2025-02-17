/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/**
 * Counts the vowels in a string
 * @param {*} str your string
 * @returns a number that represents the number of vowels in your string
 */
const vowelCount = str => {
    let vowelNum = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            vowelNum += 1
        }
    }
    return vowelNum
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vowelCount(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)