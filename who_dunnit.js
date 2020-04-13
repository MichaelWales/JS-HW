// Episode
// Guess -
// Reasoning -
// Correction -

// // Episode 1
// // Guess - Miss Scarlet
// // Reasoning - It's pretty obvious here. The murderer is set initially and not
// // changed.
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);


// // Episode 2
// // Guess - Mrs. Peacock
// // Reasoning - The murderer is set as Plum, then changed halfway through.
// // Correction - Didn't remember that const can't be changed!
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// // Episode 3
// // Guess - Mrs. Peacock
// // Reasoning - The murderer is stored in a let and changed in the declareMurderer
// // const.
// // Correction - Not sure I understand this one.
// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// // Episode 4
// // Guess - Miss Scarlet, Prof. Plum & Mrs. Peacock
// // Reasoning - Suspect 1 & 2 aren't being changed. Suspect 3 is being
// // reassigned to Colonel Mustard
// // Correction - I don't think I really understand this homework. I thought
// // there was only meant to be one output for each? V. Frustrating.
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);


// // Episode 5
// // Guess - Miss Scarlet in the Kitchen with the Revolver
// // Reasoning - The murderer and place isn't changing. The weapon is changed.
// // Correction -
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);


// Episode 6
// Guess -
// Reasoning -
// Correction - 
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
