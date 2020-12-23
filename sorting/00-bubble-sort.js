function bubbleSort(array) {
  // Write your code here.
	let temp
	for(let i = 0 ; i <array.length ;i++){
		for(let j = 0; j<array.length ; j++){
			if(array[i]<array[j]){
				temp = array[i]
				array[i] = array[j]
				array[j] = temp
			}
		}
	}
	return array
}

bubbleSort([23,22,12,11,3,123])
