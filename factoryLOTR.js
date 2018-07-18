'use strict';

function createCharacter (name, nickname, race, origin, attack, defense) {
  this.name = name;
  this.nickname = nickname;
  this.race =  race;
  this.origin =  origin;
  this.attack =  attack;
  this.defense =  defense;
}
this.describe = function() {
  console.log(`${name} is a ${race} from ${origin}.`);
};
this.evaluateFight = function(character) {
  console.log(`Your opponent takes ${this.attack - character.defense} damage and you receive ${character.attack > this.defense ? character.attack - this.defense : 0}.`);
};


let characters = [new createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  new createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  new createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3 , 2),
  new createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  new createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)];

console.log(characters);
console.log(characters.describe);
