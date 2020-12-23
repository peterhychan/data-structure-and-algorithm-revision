function swap(a,b, array){
	let temp
	temp = array[a]
	array[a] = array[b]
	array[b] = temp
}

function selectionSort(array) {
  // Write your code here.
	// O(n^2)
	let currentIndex = 0
	while (currentIndex < array.length -1){
		let smallestIndex = currentIndex
		for(let i =currentIndex; i<array.length; i++){
			if(array[smallestIndex]> array[i]){
				smallestIndex = i
			}	
		}
		swap(currentIndex, smallestIndex, array)
		currentIndex++
	}
	return array
}

selectionSort([23,22,12,11,3,123])
