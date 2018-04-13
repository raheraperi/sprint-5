// Looping a triangle 
let number = "#";
while (number <= "#######") {
  console.log(number);
  number += "#";
}

// Fizz Buzz
for (let number = 1; number <= 100; number++) {
    let output = "";
    if (number % 3 == 0) output += "Fizz";
    if (number % 5 == 0) output += "Buzz";
    console.log(output || number);
  }

//Chessboard
var size = 8; 

var board = ""; 

for (var y = 0; y < size; y++){
  for (var x = 0; x < size; x++){
    if ((x+y) % 2 == 0)
      board += " ";
  	else 
      board += "#"; 
}
board += "\n";
}
console.log(board); 