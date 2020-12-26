//O(n)
function productSum(array, multi = 1){
	let sum =0
	for(const element of array){
		if(typeof element ==="object"){
			sum+=productSum(element, multi+1)
		}else{
			sum+=element
		}
	}
	return sum*multi
}

productSum([1,21,[12,3,12], [123,1,[12,[123,2,23]]]])