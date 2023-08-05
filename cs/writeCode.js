/* 
1) Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

For example:

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

Then 

List out the time complexity =====================>   O(n^2)
List out the space complexity =====================>   O(1)
*/

let array1 = [21, 33, 6, 5, 0, -9, 0];
function addsToZero(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return true;
      }
    }
  }
  return false;
}
console.log(addsToZero(array1));

/*
2) Unique Characters
Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

For example:

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False

List out the time complexity =====================>   O(n)
List out the space complexity =====================>   O(n)
*/
function hasUniqueChars(word) {
  let uniqueChars = {};
  for (let i = 0; i < word.length; i++) {
    if (uniqueChars[word[i]]) {
      return false;
    }
    uniqueChars[word[i]] = true;
  }
  return true;
}

console.log(hasUniqueChars("Bob"));

/*
3) Pangram Sentence
A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

Write a function to check a sentence to see if it is a pangram or not.

For example:

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False


List out the time complexity =====================>   O(n)
List out the space complexity =====================>   O(1)
*/
let checkForPangram = (word) => word === word.split("").reverse().join("");

/*
4) Longest Word
Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

For example:

findLongestWord(["hi", "hello"]);
// -> 5

List out the time complexity =====================>   O(n)
List out the space complexity =====================>   O(1)
*/

function findLongestWord(arr) {
  let len = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > len) {
      len = arr[i].length;
    }
  }
  return len;
}

console.log(findLongestWord(["hi", "hello"]));
