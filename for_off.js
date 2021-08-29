// const array1 = ['a', 'b', 'c'];

// for (const element of array1) {
//   console.log(element);
// }

// // expected output: "a"
// // expected output: "b"
// // expected output: "c"

// LIczby w tablicy podzielić przez 5
//wypisac
const numbers = [5, 8, 10, 23, 48, 60] //tablica z liczbami

for (const number of numbers) {
	// "const" musi być zawsze bo zmienna musi zostać zadeklarowana //
	console.log(number / 5) //wypisujemy wynik dzielenia zmiennej "dzielenie" przez 5
}
console.log('-------------')

for (const number of numbers) { //wypisuje wszystkie liczby z tablicy spełniające warunek
	if (number % 2 == 0) {
		console.log(`%cLiczba ${number} jest parzysta`, 'background-color: gold; color:black')
	} else console.log(`%cLiczba ${number} jest nieparzysta`, 'background-color: red; color:white);
}
