/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
/**
 * Says hi :)
 * @param {*} name the person to greet
 * @returns a greeting to someone
 */
let sayHi = name => console.log("Hi, " + name);

// Invoca la funzione qui e stampa il risultato in console
sayHi(userName)


//Risultato atteso se si passa 'Mario': // ciao Mario
