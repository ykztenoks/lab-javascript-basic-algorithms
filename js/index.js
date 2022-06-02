// Iteration 1: Names and Input

// --------------------------------
var hack1 = "spc só pa contrariar kk rsrs";
// --------------------------------

const hacker1 = "Daniel";

const hacker2 = "Skonetzky";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const otherName1 = "Pernambucano";
const otherName2 = "Junin";

const oneMoreName1 = "caraioo";
const oneMoreName2 = "juninho";

function printLongest(name1, name2) {
  if (name1.length > name2.length) {
    return `The driver has the longest name, it has ${name1.length} characters`;
  } else if (name1.length < name2.length) {
    return `The navigator has the longest name, it has ${name2.length} characters`;
  } else {
    return `Wow you both have equally long names, ${name1.length} characters!`;
  }
}

console.log(printLongest(hacker1, hacker2));
console.log(printLongest(otherName1, otherName2));
console.log(printLongest(oneMoreName1, oneMoreName2));

// Iteration 3.1: Loops

function printCapLetters(name) {
  let letters = [];
  for (let i = 0; i < name.length; i++) {
    letters.push(name[i]);
  }
  return letters.join(" ").toUpperCase();
}

console.log(printCapLetters(hacker1));

/// Iteration 3.2

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(hacker2));

// Iteration 3.3

function lexicoSomething(user1, user2) {
  const nameArr = [user1, user2];
  nameArr.sort();
  if (nameArr[0] === nameArr[1]) {
    return `What!? You both have the same name?`;
  }
  if (nameArr[0] === user1 && nameArr[1] === user2) {
    return `The driver's name goes first`;
  }
  if (nameArr[0] === user2) {
    return `Yo, the navigator goes first definitely`;
  }
}
console.log(lexicoSomething(hacker2, hacker1));
