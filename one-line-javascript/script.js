// https://javascript.plainenglish.io/27-essential-one-line-javascript-functions-used-by-developers-daily-2cda9826700e

// 1. Cop to Clipboard - a useful one-line JavaScript functon which can be used to easily copy any text to the clipboard.

const copyToClipboard = (text) => navigator.clipboard.writeText(text);

copyToClipboard('This String is copied to the Clipboard');

//________________________________________________________________________________________________________________

// 2. Get a Random number in a specific range - get an essential JavaScript function to generate a random number between a specific range of numbers.
// You provide a min and max value as arguments and the one line function returns a random number from the given range

const randomNumberRange = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumberRange());
console.log(randomNumberRange(100, 200));

//________________________________________________________________________________________________________________

// 3. Convert RGB to Hex - a Useful function which converts the RGB to HEX Code

const rgbToHex = (r, g, b) =>
  '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

console.log(rgbToHex(0, 51, 255));

//________________________________________________________________________________________________________________

// 4. Scroll to the Page Top - function to automatically scroll to the top of the web page

const goToTop = () => window.scrollTo(0, 0);

goToTop();

//________________________________________________________________________________________________________________

// 5. Find the number of gap days between two dates - this function is useful when you are working with calander/dates in JavaScript

const dayDif = (date1, date2) =>
  Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86500000);

console.log(dayDif(new Date('2020-10-21'), new Date('2021-10-22')));

//________________________________________________________________________________________________________________

// 6. Generate Random Hex Colors - self explanitory, simple function to generate hex colors at random

const randomHex = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`;

console.log(randomHex());

//________________________________________________________________________________________________________________

// 7. Check if Provided Day is a Weekday - with this function you can check if the date you pass as the argument is either a weekday or weekend day

const isWeekday = (date) => date.getDay() % 6 !== 0;
console.log(isWeekday(new Date(2021, 0, 16)));

// not gonna lie, I have no idea how this code is working, no clue what the 0 in new date is supposed to represent

//________________________________________________________________________________________________________________

// 8. Convert Temperature from Fahrenheit to Celsius and vice verse (self explanatory)

const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

console.log(celsiusToFahrenheit(15));
console.log(fahrenheitToCelsius(70));

//________________________________________________________________________________________________________________

// 9. Check if a User is on an Apple device

const isAppleDevice = /Mac|iPad|iPhone|iPad/.test(navigator.platform);
console.log(isAppleDevice);

//________________________________________________________________________________________________________________

// 10. Get the time from a date

const timeFromDate = (date) => date.toTimeString().slice(0, 8);

console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));
