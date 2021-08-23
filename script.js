const name = 'Daniel'
const age = 36
let hobby = 'programistę'
const msg = 'to jest wiadomość testowa' // inicjalizacja zmiennej

//Template string
console.log(`Cześć, mam na imię ${name} i zaczynam zabawę w ${hobby}`)
//Zwykla metoda z +
console.log('Cześć, mam na imie ' + name + ' i zaczynam zabawe w ' + hobby)

//TYPY DANYCH - Stringi

console.log(msg.toLocaleUpperCase()) //wyplucie wartosci zmiennej w konsoli
console.log(msg.toUpperCase()) //wyplucie wartosci zmiennej w kosnoli

const newMsg = msg.toLowerCase() //Przypisanie metody do zmiennej, zmieniającej znaki na małe.
console.log(newMsg) // wyplucie wartosci zmiennej w konsoli

const newUsername = name.charAt(0) // definiowanie nowej zmienne z metodą charAt(0) - dostajemy się do pierwszej litery "D" gdzie numer w nawiasie to index znaczka , liczy się od 0.
console.log(newUsername) // wyplucie zmiennej newUsernameń

const num1 = 13412.4324
console.log(num1.toFixed(2))
const num2 = '134.24'
console.log(parseInt(num2)) //zamienia stringa na integer //

/* ! Te wartosci zawsze zwracaja false
    false
    undefined - nieokreslone, zwracane przez JS
    null - zazwyczaj przypisujemy sami jesli chcemy przypisac nicosc
    0
    NaN
    "" - pusty string
    */

if (-1) {
	console.log('TRUE')
} else {
	console.log('FALSE')
}

// ####################################
//Typy złożone
const colors = ['red', 'green', 'blue']
console.log(colors)

function test() {
	console.log('czesc jestem w funkcji!')
}
test()

// % ++ --
const modulo = 15 % 3 //reszta z dzielnia/ do sprawdzanai czy to wartosc pazysta czy nie parzysta
console.log(modulo)

let x = 10
let y = 5
console.log(x)
x += y //to jest to samo co x = x + y
console.log(x)
console.log(x + y)

console.log(10 == '10')
console.log(10 === '10')
console.log('10' === '10')
// == porownuje zawartosc
// == porownuje zawartosc ora TYP
// != sprawdza czy to co po lewej rozni sie zawartoscia od tego co po prawej
// !== sprawdza czy to co po lewej rozni sie zawartoscią ORAZ typem  od tego co po prawej

console.log(10 > 5)

//Operatory logiczne
//      && - i
//      || - lub
//       ! - zaprzeczenie
//      && - zwraca TRUE tylko i wyłącznie wtedy, kieyd wszystkie warunki sa prawdziwe
//      || - zwraca FALSE tylko i wylacznie wtedy kiedy wszystkie warunki sa fałszywe

if (false || false) {
	console.log('UP')
} else {
	console.log('DOWN')
}

let number = '10'
const newNumber = (number += 10)
console.log(newNumber)
console.log(number.lastIndexOf(0))
