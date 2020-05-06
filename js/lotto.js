// This is for the lotto six numbers
function lottoQuickPick() {
	function getRandomInt(minimum, maximum) {
		min = Math.ceil(minimum);
		max = Math.floor(maximum);
		return Math.floor(Math.random() * (max - min)) + min;
	}
	var lotto = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54];
	var luckyNumbers = [];
	for(var i = 0; i < 6; i++) {
		var random = getRandomInt(0, lotto.length);
		luckyNumbers.push(lotto[random]);
		lotto.splice(random, 1);
	}
	document.getElementById("outputLotto").innerHTML = luckyNumbers;
}

// This is for the Powerball five numbers
function powerballQuickPick() {
	function getRandomInt(minimum, maximum) {
		min = Math.ceil(minimum);
		max = Math.floor(maximum);
		return Math.floor(Math.random() * (max - min)) + min;
	}
	var powerball = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70];
	var luckyNumbers = [];
	for(var i = 0; i < 5; i++) {
		var random = getRandomInt(0, powerball.length);
		luckyNumbers.push(powerball[random]);
		powerball.splice(random, 1);
	}
	document.getElementById("outputPW").innerHTML = luckyNumbers;
}

// This is for the Powerball single Powerball number
function powerballNumber () {
	var randomNumber = Math.random () * 26;
	var roundedNumber = Math.ceil(randomNumber);
	document.getElementById("outputPWN").innerHTML = roundedNumber;
}
