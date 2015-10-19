var repeat = function(repeatMe, num) {
	var returnMe = "";
	for(; num; num--) {
		returnMe+=repeatMe;
	}
	return returnMe;
};

var sum = function(sumMe) {
	var returnMe = 0;
	for(var i = 0; i<sumMe.length; i++) {
		returnMe += sumMe[i];
	}
	return returnMe;
};

var gridGenerator = function(num) {
	var returnMe = "";
	for(var i = 0; i<num; i++) {
		for(var j = 0; j<num; j++) {
			if((i+j)%2) {
				returnMe+=" ";
			} else {
				returnMe+="#";
			}
		}
		returnMe+="\n";
	}
	return returnMe;
}

var largestTriplet = function(num) {
	for(var c = num; c; c--) {
		for(var b = c - 1; b; b--) {
			for(var a = 1; a <= b; a++) {
				if(a*a + b*b === c*c) {
				 	var returnMe = new Array();
				 	returnMe[0] = a;
				 	returnMe[1] = b;
				 	returnMe[2] = c;
				 	return returnMe;
				}
			}
		}
	}
}

var join = function(joinThese, separators) {
	var returnMe = "";
	for(var i = 0; i<joinThese.length; i++) {
		returnMe+=joinThese[i];
		if(i !== joinThese.length-1) {
			if(separators!==undefined) {
				returnMe+=separators;
			}
		}
	}
	return returnMe;
}

var paramify = function(myObj) {
	var returnMe = new Array();
	for(var key in myObj) {
		if(Object.prototype.hasOwnProperty.call(myObj, key)) {
			var temp = key+"="+myObj[key];
			returnMe.push(temp);
		}
	}
	//if mergeSort worked, I would just do the commented out lines...
	//but then I found out javascript has a built in sort!
	//returnMe2 = mergeSort(returnMe);
	//return join(returnMe2,"&");
	returnMe.sort();
	return join(returnMe,"&");
}

//mergeSort breaks testem...
//the formatting changes in safari
//the number of tested specs changes to 21/21
// var mergeSort = function(sortMe) {
// 	if(sortMe.length < 2) {
// 		return sortMe;
// 	}
// 	var middle = Math.floor(sortMe.length/2);
// 	var left = sortMe.slice(0,middle);
// 	var right = sortMe.slice(middle);

// 	return merge(mergeSort(left), mergeSort(right));
// }

// var merge = function(left, right) {
// 	var returnMe = [];
// 	leftIndex = 0;
// 	rightIndex = 0;
// 	while(leftIndex<left.length && rightIndex<right.length) {
// 		if(left[leftIndex] < right[rightIndex]) {
// 			returnMe.push(left[leftIndex]);
// 		} else {
// 			returnMe.push(right[rightIndex]);
// 		}
// 	}
// 	return returnMe.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

