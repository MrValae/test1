//Metody na tablicach
const numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers)

// unshift - dodaje elementy na pczatku tablicy

numbers.unshift(100, 200, 'abcd')
console.log(numbers)

// shift - usuwa elementy z indeksem 0

numbers.shift()
console.log(numbers)

const colors = ['red', 'green', 'blue']
console.log(colors)

// push - dodaje elementy na końcu tablicy
// pop  - usuwa ostatni element tablicy

colors.push('gold', 123)
console.log(colors)

colors.pop()
console.log(colors)
