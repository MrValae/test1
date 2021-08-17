const name = 'Daniel'
const age = 36
let hobby = 'programistę'
const msg = 'to jest wiadomość testowa' // inicjalizacja zmiennej

//Template string
console.log(`Cześć, mam na imię ${name} i zaczynam zabawę w ${hobby}`)
//Zwykla metoda z +
console.log('Cześć, mam na imie ' + name + ' i zaczynam zabawe w ' + hobby)

//TYPY DANYCH - Stringi

console.log(msg.toLocaleUpperCase());   //wyplucie wartosci zmiennej w konsoli
console.log(msg.toUpperCase());         //wyplucie wartosci zmiennej w kosnoli

const newMsg = (msg.toLowerCase()) //Przypisanie metody do zmiennej, zmieniającej znaki na małe.
console.log(newMsg); // wyplucie wartosci zmiennej w konsoli

const newUsername = name.charAt(0) // definiowanie nowej zmienne z metodą charAt(0) - dostajemy się do pierwszej litery "D" gdzie numer w nawiasie to index znaczka , liczy się od 0.
console.log(newUsername);  // wyplucie zmiennej newUsername