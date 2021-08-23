const pass = '2u3df323473'

if (pass.length > 10 && pass.includes('!')) {
	console.log('Masz rewalecyjne hasło i masz wykrzyknik w haśle ')
} else if (pass.length > 10) {
	console.log('Masz dobre hasło ale nie masz wykrzyknika w haśle')
} else {
	console.log('Masz za krótkie hasło')
}
