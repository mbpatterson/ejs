//Write a function countBs that takes a string as its only argument and returns a
// number that indicates how many uppercase "B" characters are in the string
//Next, write a function called countChar that behaves like countBs, except it takes a
// second argument that indicates the character that is to be counted


function countBs(string) {
  var length = string.length;
  var result = 0;
  for (i = 0; i < length; i++) {
    if (string.charAt(i) === "B") {
      result += 1;
    }
  }
  return result;
};

console.log(countBs("BBC"));

function countChar(string, letter) {
  var length = string.length;
  var result = 0;
  for (i = 0; i < length; i++) {
    if (string.charAt(i) === letter) {
      result += 1;
    }
  }
  return result;
};

console.log(countChar("kakkerlak", "k"));
