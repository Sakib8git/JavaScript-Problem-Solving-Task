

//! Problem 2: Count Vowels in a String
const word = "programming";
const vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;
for (let letter of word) {
  for (let vowel of vowels) {
    if (letter.toLowerCase() === vowel) {
      vowelCount++;
    }
  }
}
console.log(vowelCount);

//! Problem 3: Check for Palindrome
const input = "hello";
const reverseInput = input.split("").reverse().join("");
// console.log(reverseInput);

if (input === reverseInput) {
  console.log(true);
} else {
  console.log(false);
}

//! Problem 5: Remove Duplicates from an Array
const numArray = [1, 2, 2, 3, 4, 4];

let newArray = [];
for (let num of numArray) {
  if (!newArray.includes(num)) {
    newArray.push(num);
  }
}
console.log(newArray);

// !Problem 7: Find Even Numbers in an Array
const numArray3 = [1, 2, 3, 4, 5, 6];
let evenNum = [];
for (let num of numArray3) {
  //   console.log(num % 2);
  if (num % 2 == 0) {
    evenNum.push(num);
  }
}
console.log(evenNum);

// ! Problem 10: PingPong Challenge
const numArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
const pingArray = [];
for (let num of numArray4) {
  // console.log(num % 3);
  if (num % 3 === 0 && num % 5 === 0) {
    pingArray.push("pingpong");
  } else if (num % 3 === 0) {
    pingArray.push("ping");
  } else if (num % 5 === 0) {
    pingArray.push("pong");
  } else {
    pingArray.push(num);
  }
}
console.log(pingArray);