au = module.require("./auxiliar/auxiliar");

function caesar(option, message, key) {
  encryptedNumbers = [];
  encryptedString = "";
  decryptedString = "";
  let cipher = null;
  let pure = null;
  let cifra = au.pureText(message);
  if (option === "encrypt") {
    for (char of cifra) {
      if (au.validInterval(char)) {
        cipher = (char + key) % 26;
        encryptedString += String.fromCharCode(cipher + 97);
      } else {
        encryptedString += String.fromCharCode(char);
      }
    }
    return encryptedString;
  } else if (option === "decrypt") {
    for (char of cifra) {
      if (au.validInterval(char)) {
        pure = (char - key + 26) % 26;
        decryptedString += String.fromCharCode(pure + 97);
      } else {
        decryptedString += String.fromCharCode(char);
      }
    }
    return decryptedString;
  } else {
    console.log(
      "Invalid first parameter <option> for caesar method. The valid options are: encrypt or decrypt"
    );
  }
}

module.exports.caesar = caesar;
