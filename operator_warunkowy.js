//wartość ? TRUE : FALSE
const z = 230
const newZ = z < 20 ? `${z} < 20` : `${z} >= 20`
console.log(newZ)

const isLoggedIn = false
function loggedIn() {
	console.log('Użytkownik jest zalogowany ')
}
function loggedOut() {
	console.log('Użytkownik jest wylogowany')
}
isLoggedIn ? loggedIn() : loggedOut()
// ----------------------------------------------
const x = 50,
	y = 30
if (x > y) {
	console.log(`${x} jest większe niz ${y}`)
}
