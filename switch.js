const expr = 'piątek'
switch (expr) {
	case 'poniedziałek':
		console.log('Dziś jest poniedziałek.')
		break
	case 'wtorek':
		console.log('Dziś jest wtorek')
		break
	case 'środa':
		console.log('Dziś jest środa')
		break
	case 'czwartek':
		console.log('Dziś jest czwartek')
		break
	case 'piątek':
		console.log('Dziś jest piątek')
		break
	default:
		console.log(`Sorry, nie podałeś żadnego dnia tygodnia${expr}.`)
}
