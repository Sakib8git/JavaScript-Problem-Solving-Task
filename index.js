//! Problem 1: Reverse a String
const srt = "hello";
const reverseSrt = srt.split("").reverse().join("");
console.log(reverseSrt);

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

//! Problem 4: Find the Maximum Number
const numSet = [5, 1, 9, 30];
const maxNum = Math.max(...numSet);
console.log(maxNum);

//! Problem 5: Remove Duplicates from an Array
const numArray = [1, 2, 2, 3, 4, 4];

let newArray = [];
for (let num of numArray) {
  if (!newArray.includes(num)) {
    newArray.push(num);
  }
}
console.log(newArray);

// ! Problem 6: Sum of All Numbers in an Array
const numArray2 = [1, 2, 3, 4];
let sumOfNums = 0;
for (let num of numArray2) {
  sumOfNums = sumOfNums + num;
}
console.log(sumOfNums);

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

//! Problem 8: Capitalize First Letter of Each Word
const words = "hello world sakib";
const splitWord = words.split(" ");
// console.log(splitWord);
const capWord = splitWord.map((word) => {
  //   console.log(word);
  return word.charAt(0).toUpperCase() + word.slice(1);
});
const newWword = capWord.join(" ");
console.log(newWword);

// ! Problem 9: Find the Factorial of a Number
const num = 5;
let facValue = 1;
for (let i = num; i > 0; i--) {
  facValue = facValue * i;
}
console.log(facValue);

// ! Problem 10: PingPong Challenge
// Array
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

// funtion
function pingpong() {
  for (let num = 1; num <= 20; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("pingpong");
    } else if (num % 3 === 0) {
      console.log("ping");
    } else if (num % 5 === 0) {
      console.log("pong");
    } else {
      console.log(num);
    }
  }
}
pingpong();
