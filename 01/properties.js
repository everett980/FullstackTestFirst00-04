function setPropertiesOnObjLiteral(obj) {
	obj.x = 7;
	obj.y = 8;
	obj.onePlus = function(addToMe) {
		return addToMe + 1;
	};
}

function setPropertiesOnArrayObj(obj) {
	obj.hello = function() {
		return "Hello!";
	};
	obj['full'] = "stack";
	obj[0] = 5;
	obj.twoTimes = function(doubleMe) {
		return doubleMe * 2;
	};
}

function setPropertiesOnFunctionObj(obj) {
	obj.year = 2015;
	obj.divideByTwo = function(halveMe) {
		return halveMe / 2;
	};
	obj.prototype.helloWorld = function() {
		return "Hello World";
	};
}