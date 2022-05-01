const arrKeys = []
const arrValues = []
let fruits = new Map([
	['apple', 'green'],

	['strawberry', 'red'],

	['blueberry', 'blue']
])
for (let i = 0; i < fruits.size; i++) {
	for (let name of fruits.keys()) {
		arrKeys.push(name)
	}
	for (let color of fruits.values()) {
		arrValues.push(color)
	}
	console.log(`Ключ - ${arrKeys[i]}, значение - ${arrValues[i]}`)
}
