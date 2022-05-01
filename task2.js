const check = (expr) => {
	switch (typeof expr) {
		case 'string':
			console.log(expr + ' - строка.')
			break
		case 'number':
			console.log(expr + ' - число.')
			break
		case 'boolean':
			console.log(expr + ' - логический тип.')
			break
		default:
			console.log('Тип' + expr + 'не определён.')
	}
}
check(1)
check('asd')
check(true)
