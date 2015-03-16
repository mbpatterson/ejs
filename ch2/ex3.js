//Write a program that creates a string that represents an 8x8 grid, using newline characters
// to separate lines. At each position of the grid there is either a space or a "#" character.
// These characters should form a chess board

var chess = "";
var size = 8;
for (var i = 0; i < size; i++) {
  chess += "# ";
};

console.log(chess);
