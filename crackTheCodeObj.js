'use strict';

let input =  'craft block argon meter bells brown croon droop';

const cipher = {
  a : 2,
  b : 3,
  c : 4,
  d : 5,
};

let decode = function(word) {
  let firstChar = word[0];
  let position = cipher[firstChar];
  if (word[position - 1] === undefined) {
    return ' ';
  } else {
    return word[position - 1];
  }
};

function decodedWords(input) {
  let newArray = input.split(' ');
  decode(newArray);
  let decoded = '';
  for (let i = 0; i < newArray.length; i++) {
    return decoded += decode(newArray[i]);
  }
};

decodedWords(input);


// let val = '';

// function decodedWords(val) {
//   let word = '';
//   let decoded = '';
//   let words = val.split(' ');
//   words.reduce(decode(acc, word), '');
// }

// decodedWords('plank dogma apple frodo binge');