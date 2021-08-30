const numbers = [1, 2, 3, 4, 5]

// function multiplay(x) {
// 	return x * 2
// }
// const newNumbers = numbers.map(multiplay)
// console.log(numbers)
// console.log(newNumbers)

// numbers.push(6, 7, 8)

const abc = ['a', 'b', 'c']
const newAbc = numbers.concat(6, 7, 8, true, abc) //łączy tablica
// console.log(newAbc);
// console.log(numbers);

console.log(abc)
console.log(...abc)

const drinks = ['pepsi', 'woda', 'wino']
const meals = ['schabowy', 'kebab', 'zupa']
const menu = [...drinks, ...meals] //spread pozwala łączyć tablica ale też rozbija tablica że możemy mieć dostęp do każdej właściwości
const menu2 = drinks.concat(meals)
console.log(menu2)
