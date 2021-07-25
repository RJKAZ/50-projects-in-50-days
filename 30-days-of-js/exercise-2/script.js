let word = "javascript"

word = "phyton";

console.log(word);
// 1. Declare a variable named challenge and assign it to an intiial value
let challenge = "30 days of JavaScript";
// 2. Print the string on the browser console using console.log
console.log(challenge);
//3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);
// 4. Change all the string characters to capital letters using toUpperCase()method 
console.log(challenge.toUpperCase());
// 5. Change all the string characters to lowercase letters using toLowerCase() method 
console.log(challenge.toLowerCase());
// 6. Cut (slice) out the first word of the string using substr() method
console.log(challenge.substr(3));
// 7.  Slice out the phrase Days of JavaScript from 30 days of JavaScript 
console.log(challenge.slice(3,22));
//8. Check if the string contains a word Script using includes() method 
console.log(challenge.includes('Script'));
//9. Split the string into an array using the split() method 
console.log(challenge.split(" "));
//10. the same as 9
//11. Split tjhe string at the comma and change it an array
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(","));
//12. Change 30 days of JavaScript to 30 days of Phyton using replace()method 
console.log(challenge.replace('JavaScript', "Phyton"));
//13. What is the character index at 15 in 30 Days of Javascript ? (use the charAt() method)
console.log(challenge.charAt(15));
//14. What is the character code of J in '30 Days of JavaScript' using the charCodeAt() method.
console.log(challenge.charCodeAt("J"));
//15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));
//16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));
//17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = "You cannot end a sentence with because because because is a conjunction"
console.log(sentence.indexOf("because"));
//18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf("because"));
//19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search("because"));
//20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let challenge2 = " 30 Days Of JavaScript ";
console.log(challenge2.trim(" "));
//21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("3"));
//22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("t"));
//23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'));
//24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let challenge3 = "30 days of";
console.log(challenge3.concat(" of Javascript"))
//25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(challenge));

//Exercise 2

// 1. use console.log to print out the following statement
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
// 2. the same
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
)

//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal
console.log(typeof "10" === 10); // false
console.log(typeof 10 === 10); // false
console.log(typeof "10" === "10"); // false
// duh, I can't compare the type of of number to its value
console.log(typeof "10" === "string"); // true
console.log(typeof 10 === "number"); //true

//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

console.log(parseFloat('9.8'));
console.log(Math.round(parseFloat('9.8')));

// 5. Check if 'on' is found in both python and jargon
var language = 'phyton';
console.log(language.includes('on'));
var language2 = 'jargon';
console.log(language2.includes('on'));

//6. I hope this course is not full of jargon. Check if jargon is in the sentence.
var sentence2 = " I hope this course is not full of jargon";
console.log(sentence2.includes('jargon'));

//7. generate a random number between 0 and 100 inclusivley
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(getRandomNumber(0, 50));

//8. generate a random number between 50 and 100 inclusivley
console.log(getRandomNumber(50, 100));

//9. generate a random number between 0 and 255 inclusivley
console.log(getRandomNumber(0, 255));