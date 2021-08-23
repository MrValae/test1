// Moja opcja //
// const x = 166
// let message1 = 'x > 100'
// let message2 = 'x jest średniakiem'
// let message3 = 'x jest mały'
// if (x >= 100) {
// 	console.log(message1.toLocaleUpperCase())
// } else if (x <= 30) {
// 	console.log(message3.toLocaleUpperCase())
// } else {
// 	console.log(message2.toLocaleUpperCase())
// }

const x = 6
let message
if (x >= 100) {
	message = 'x >= 100 '
} else if (x < 100 && x > 30) {
	message = 'x jest średniakiem'
} else {
	message = 'x jest mały'
}
console.log(message.toUpperCase())
