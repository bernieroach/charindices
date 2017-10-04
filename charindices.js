// countletters find and count the number of characters found in an input for each character in the alphabet


function countIndices(strInput){
  var charIndices = {};
  for(var i=0; i< strInput.length; i++){
    // read each character
        // skip blanks
    if (strInput[i] === " ")
      continue;
    if (charIndices[strInput[i]] === undefined) {
      // if undefined then this is the first time we are collecting for this character
      // so initialize array
      charIndices[strInput[i]] = [i];
    }
    else {
      // we have a count started for this character, add 1
      charIndices[strInput[i]].push(i) ;
    }

  }
  return charIndices;
}

console.log(countIndices(" this is ia s long string with spaces and @#$!%!^%!@#$!@#%!@#$!@#$!@#$"));
