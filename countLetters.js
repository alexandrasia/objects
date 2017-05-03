function countLetters (words){
  var output = {};
  var noSpaces = words.split(' ').join('').toLowerCase();

//loop through each letter and count how many there are of each

  for (var i = 0; i < noSpaces.length; i++) {
    var letter = noSpaces[i];
    if (output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }

  }
return output;

}

countLetters('Alex is here');