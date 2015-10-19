var RPNCalculator = function() {
	this.stack = new Array();
}

RPNCalculator.prototype.value = function() {
	return this.stack[this.stack.length - 1];
};

RPNCalculator.prototype.push = function(pushMe) {
	this.stack.push(pushMe);
}

RPNCalculator.prototype.plus = function() {
	if(this.stack.length >= 2) {
		var temp1 = this.stack.pop();
		var temp2 = this.stack.pop();
		var temp3 = temp1+temp2;
		this.stack.push(temp3);
	} else {
		throw "rpnCalculator is empty";
	}
}

RPNCalculator.prototype.minus = function() {
	if(this.stack.length >= 2) {
		var temp1 = this.stack.pop();
		var temp2 = this.stack.pop();
		var temp3 = temp2-temp1;
		this.stack.push(temp3);
	} else {
		throw "rpnCalculator is empty";	
	}
}

RPNCalculator.prototype.divide = function() {
	if(this.stack.length >= 2) {
		var temp1 = this.stack.pop();
		var temp2 = this.stack.pop();
		var temp3 = temp2/temp1;
		this.stack.push(temp3);
	} else {
		throw "rpnCalculator is empty";
	}
}

RPNCalculator.prototype.times = function() {
	if(this.stack.length >= 2) {
		var temp1 = this.stack.pop();
		var temp2 = this.stack.pop();
		var temp3 = temp1*temp2;
		this.stack.push(temp3);
	} else {
		throw "rpnCalculator is empty";
	}
}