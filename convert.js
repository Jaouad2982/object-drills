
let words = 'craft block argon meter bells brown croon droop';

function decode(word) {
    const cipher = {
      a: word[1],
      b: word[2],
      c: word[3],
      d: word[4],
    };
    return cipher[word[0]] || ' '; 
  }
  function decodeWords(words) {
    return words
      .split(' ')
      .map(decode)
      .join('');
  }
  console.log(decodeWords(words));

  //using rich's answer for decode