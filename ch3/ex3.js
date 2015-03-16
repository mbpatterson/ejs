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
