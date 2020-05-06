// This is for the lotto six numbers
function lottoQuickPick() {
	var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53];
  var number;
  var random=[];
  for (number=1; number<=6; ++number) {
    var i = Math.floor((Math.random() * (53-number)) + 1);
    random.push(array[i]);
    array[i] = array[53-number];
    }
    var sixNumbers = "";
    for (i = 0; i < 6; i++)
    {
      sixNumbers += random[i] + " ";
    }
    document.getElementById("outputLotto").innerHTML = sixNumbers;
}
// This is for the Powerball five numbers
function powerballQuickPick() {
	var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69];
  var number;
  var random=[];
  for (number=1; number<=5; ++number) {
    var i = Math.floor((Math.random() * (69-number)) + 1);
    random.push(array[i]);
    array[i] = array[69-number];
    }
    var fiveNumbers = "";
    for (i = 0; i < 5; i++)
    {
      fiveNumbers += random[i] + " ";
    }
    document.getElementById("outputPW").innerHTML = fiveNumbers;
}
// This is for the Powerball single Powerball number
function powerballNumber () {
	var randomNumber = Math.random () * 26;
	var roundedNumber = Math.ceil(randomNumber);
	document.getElementById("outputPWN").innerHTML = roundedNumber;
}
