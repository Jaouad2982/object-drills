'use strict';

let people = [
  {name : 'Rand',
    jobTitle : 'musician'},
  {name : 'Brook',
    jobTitle : 'server'},
  {name : 'Jacob',
    jobTitle : 'quartermaster'},
  {name : 'Gary',
    jobTitle : 'retired'}];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name, people[i].jobTitle);
}