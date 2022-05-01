let result = prompt()
result = +result
if (isNaN(result) === true) {
	alert(result + ' - не число.')
} else if (typeof result === 'number') {
	if (result % 2 === 0) {
		alert(result + ' - чётное число.')
	} else {
		alert(result + ' - нечётное число.')
	}
} else {
	alert('Упс, кажется, вы ошиблись.')
}
