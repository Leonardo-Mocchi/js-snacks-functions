/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

const date = new Date();
const hour = date.getHours()
console.log(hour);


// Dichiara la funzione qui.
/**
 * Creates an appropriate greeting to someone
 * @param {*} person the person to greet
 * @param {*} time insert the time of day in hours
 * @returns an appropriate greeting to the person based on the hour
 */
const appropriateGreetings = (person, time) => {
    let greeting;
    if (time >= 4 && time < 13) {
        greeting = "Buongiorno"
    } else if (time >= 13 && time <= 17) {
        greeting = "Buon Pomeriggio"
    } else if (time > 17 && time <= 22) {
        greeting = "Buonasera"
    } else if (time = 23 && time < 4) {
        greeting = "Vai a dormire"
    }
    return greeting + " " + person
}

// Invoca la funzione qui e stampa il risultato in console
console.log(appropriateGreetings(name, hour));




//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.