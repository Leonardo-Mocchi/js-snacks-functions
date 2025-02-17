/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Creates an Array that displays only the first characters of your starting array
 * @param {*} arr insert you array here
 * @returns a simple array with only the initial characters of yours
 */
const firstLetter = arr => {
    let initialLetters = []
    for (let i = 0; i < arr.length; i++) {
        initialLetters.push(arr[i].charAt(0))
    }
    return initialLetters
}

// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetter(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]