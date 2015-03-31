//Write two functions, reverseArray and reverseArrayInPlace. THe first, reverseArray
// takes an array as an argument and produces a new array that has the same elements
// in the inverse order. The second, reverseArrayInPlace, does that the reverse method
// does: it modifies the array given as argument in order to reverse its elements. 
//Neither may use the standard reverse method

function reverseArray(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result = array.pop() + result;
    return result;
  }

};

console.log(reverseArray([1,2,3]));
