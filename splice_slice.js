const numbers = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

const numbers2 = numbers.slice(0,2)
console.log(numbers2)
const numbers3 = numbers.slice(-3)
console.log(numbers3)

const randomStuff = colors.splice(-2) // wycinamy 2 ostatnie, #metoda destrukcyjna
console.log(colors);
console.log(randomStuff)
 
const newCars=cars.splice(2,4  ,'test') //( odkąd się zaczyna , ile chcemy wyciąć )
console.log(cars);
console.log(newCars);
