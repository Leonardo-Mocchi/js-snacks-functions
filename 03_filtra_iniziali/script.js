/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const char2FilterFor = "a"

// Dichiara la funzione qui.

/**
 * Filters an array to display a second one that contains only values that begin with a character of your choice
 * @param {*} array insert your array here
 * @param {*} char your chosen character to filter for
 * @returns an array with values that only BEGIN with your selected character
 */
let filter4FirstCharacter = (array, char) => {
    let filteredForChar = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0).toUpperCase() === char.toUpperCase()) {
            filteredForChar.push(array[i])
        }
    }
    return filteredForChar
}

// Invoca la funzione qui e stampa il risultato in console

console.log(filter4FirstCharacter(names, char2FilterFor));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]