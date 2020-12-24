function helper(array, target, left, right){
	while(left<=right){
		let midPoint = Math.floor((left+right)/2)
		let potentialTarget = array[midPoint]
		if(target === potentialTarget){
			return midPoint
		}else if(target <potentialTarget){
			right = midPoint-1
		}else{
			left = midPoint+1
		}
	}
	return -1
}
function binarySearch(array, target) {
  // Write your code here.
  // Only works if the array is sorted
  // O(log N)
	return helper(array, target, 0, array.length-1)
}


binarySearch([1,2,3,4,33,45,67],45)
