'use strict';

let input =  'craft block argon meter bells brown croon droop';



// let decode= function(word) {
//   let firstChar = word[0];
//   if (firstChar === 'a') {
//     return word[1];
//   } else if (firstChar === 'b') {
//     return word[2];
//   } else if (firstChar === 'c') {
//     return word[3];
//   } else if (firstChar === 'd') {
//     return word[4];
//   } else {
//     return ' ';
//   }
// };

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

let decodedWords = function(input) {
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