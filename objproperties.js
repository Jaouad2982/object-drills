'use strict';

const myObj = {
  foo : 3,
  bar : 10,
  fum : 'hi',
  quux : 'yay',
  spam : 36,
};

for (let key in myObj) {
  console.log(key, myObj[key]);
}