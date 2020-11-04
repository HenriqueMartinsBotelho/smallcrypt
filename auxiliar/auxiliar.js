// This function recieves a string and tranforme it in an array of numbers
// such as: a = 1, b = 2, c = 3 ... z = 26 and if the number is not in a valid
// interval (97 e 122) it keeps the char code.
function pureText(string) {
  array = [];
  for (char of string) {
    code = char.charCodeAt();
    if (code >= 97 && code <= 122) {
      array.push(code - 97);
    } else {
      array.push(code);
    }
  }
  return array;
}

// This function verify if a char code is in the interval 0 - 26
function validInterval(c) {
  if (c >= 0 && c <= 26) {
    return true;
  } else {
    return false;
  }
}

module.exports.pureText = pureText;
module.exports.validInterval = validInterval;
