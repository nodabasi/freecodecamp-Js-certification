const punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function palindrome(str) {
  const withoutPunctuation = str
    .split("")
    .filter(function (letter) {
      return punctuation.indexOf(letter) === -1;
    })
    .join("");
  const cleanStr = withoutPunctuation.replace(/\s/g, "");
  const letter = cleanStr.toUpperCase();
  const reverse = letter.split("").reverse().join("");
  if (letter === reverse) {
    return true;
  } else if (letter !== reverse) {
    return false;
  }
}

palindrome("eye");
