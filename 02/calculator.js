var createCalculator = function() {
	var returnMe = {};
	returnMe.myValue = 0;
	returnMe.value = function() {
			return this.myValue;
		};
	returnMe.add = function(addValue) {
		this.myValue += addValue;
	};
	returnMe.subtract = function(minusValue) {
		this.myValue -= minusValue;
	}
	return returnMe;
}