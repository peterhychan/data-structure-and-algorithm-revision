function findThreeLargestNumbers(array) {
	let ans = [null, null, null]
	for(let elem of array){
		updateAns(ans, elem)
	}
	return ans
}

function updateAns(ans, num){
	if(ans[2]===null || num  > ans[2]){
		shiftAndUpdate(ans, num ,2)
	}else if(ans[1] ===null|| num>ans[1]){
		shiftAndUpdate(ans,num,1)
	}else if(ans[0]===null || num>ans[0]){
		shiftAndUpdate(ans,num,0)
	}
}

function shiftAndUpdate(arr, num, ind){
	for(let i = 0 ; i<=ind; i++){
		if(i=== ind){
			arr[i]= num
		}else{
			arr[i] = arr[i+1]
		}
	}
}

findThreeLargestNumbers([1,231,212,-321,-3,12,2121])