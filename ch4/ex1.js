//Write a range function that takes two arguments: start and end, and returns an array
// containing all the numbers from start up to and including end.
//Next write a sum function that takes an array of numbers and returns the sum of these
// numbers. Run the previous program to see whether it does indeed return 55

function range(start, end, step) {

if (step === undefined) {
  step = 1;
} else {
  step = step;
}
  var allNum = [];
  for (var i = start; i <= end; i += step) {
    allNum.push(i);
  }

  return allNum;
};

console.log(range(1,10,2));

function sum(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

console.log(sum(range(1,10,2)));  
