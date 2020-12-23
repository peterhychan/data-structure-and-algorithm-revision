function swap(a,b, array){
	let temp
	temp = array[a]
	array[a] = array[b]
	array[b] = temp
}

function insertionSort(array) {
  // Write your code here.
	for(let i = 0; i<array.length; i++){
		j = i
		while(j> 0 && array[j]<array[j-1]){
			swap(j, j-1, array)
			j--
		}
	}
	return array
}

insertionSort([23,22,12,11,3,123])
