const arr1 = ['1', 'asd', true, 23]
const arr2 = ['1', '1', '1', '1', '1', '1']
const tOrF = (arr) => {
	return arr.every((elem) => elem === arr[0])
}
console.log(tOrF(arr1))
console.log(tOrF(arr2))
