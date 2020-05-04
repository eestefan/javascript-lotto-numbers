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
	var randomNumberPB = Math.random () * 26;
	var roundedNumberPB = Math.ceil(randomNumberPB);
	document.getElementById("outputPWN").innerHTML = roundedNumberPB;
}

// attempt 1 - works but seems too complicated and unnecessary
// function powerballNumber() {
// 	var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
//   var number;
//   var random=[];
//   for (number=1; number<=1; ++number) {
//     var i = Math.floor((Math.random() * (27-number)) + 1);
//     random.push(array[i]);
//     array[i] = array[27-number];
//     }
//     var oneNumber = "";
//     for (i = 0; i < 1; i++)
//     {
//       oneNumber += random[i] + " ";
//     }
//     document.getElementById("powerballNumber").innerHTML = oneNumber;
// }

// Attempt 3 - not working
// var powerballNumber = randomRange (1,26)
//
// function randomRange (myMin, myMax) {
// 	return Math.floor((Math.random() * (max - min + 1)) + min;
// 	document.getElementById("powerballNumber").innerHTML = powerballNumber;
// }

// attept 2 - not working
// function powerballNumber () {
// 	var powerballNumber = Math.floor((Math.random() * (27));
// 	document.getElementById("powerballNumber").innerHTML = powerballNumber;
// }

// function getRandomInt(min, max) {
//  min = Math.ceil(min);
//  max = Math.floor(max);
//  return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function powerballNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// 	document.getElementById("powerballNumber").innerHTML = ();
// }
