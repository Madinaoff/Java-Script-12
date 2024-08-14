// Task 1
function divideNumbers(a, b) {
    return a / b;
}
let result1 = divideNumbers(10, 2);
  console.log("10 / 2 =", result1); 

let result2 = divideNumbers(10, -2);
  console.log("10 / -2 =", result2); 

let result3 = divideNumbers(-10, 2);
  console.log("-10 / 2 =", result3); 

let result4 = divideNumbers(10, 0);
  console.log("10 / 0 =", result4);

//  Task 2
function squareNumber(x) {
    return x * x;
}
let number = 5;
let result = squareNumber(number);
console.log(result);

// Task 3

function sumArray(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
let array = [1, 2, 3, 4, 5];
let result7 = sumArray(array);
console.log(result7); 


// Task 4
function getStringLength(str) {
    return str.length;
}
let exampleString = "Hello, world!"
let length = getStringLength(exampleString);
    console.log(length); 

// Task 5
function getAbsoluteValue(num) {
    return Math.abs(num);
}

let number1 = -7;
let result5 = getAbsoluteValue(number1);
    console.log(result5); 

// Task 6
function getStringLengths(strings) {
    return strings.map(str => str.length);
}

let stringsArray = ["hello", "world", "JavaScript", "is", "fun"];
let lengthsArray = getStringLengths(stringsArray);
console.log(lengthsArray); 

// Task 7
function getMax(a, b) {
    return a > b ? a : b;
}  
let number2 = 80;
let number3 = 100;
let max = getMax(number2, number3);
console.log(max); 

// Task 8
function repeatString(str, times) {
    return str.repeat(times);
}
let string = "Hello";
let repeatCount = 5;
let result6 = repeatString(string, repeatCount);
console.log(result6);

// Task 9
function doubleValues(numbers) {
    return numbers.map(num => num * 2);
}
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
let doubledArray = doubleValues(numbersArray);
console.log(doubledArray); 

// Task 10
function isEven(num) {
    return num % 2 === 0;
}
let number4 = 4;
let result8 = isEven(number4);
console.log(result8); 

number4 = 7;
result8 = isEven(number4);
console.log(result8);

// MEDIUM TASKS
// Task 1
function filterPositiveNumbers(number) {
    return number.filter(num => num > 0);
}
    let numberArray = [-10, 5, 0, 7, -3];
    let positiveNumbers = filterPositiveNumbers(numberArray);
    console.log(positiveNumbers); 

// Task 2
function reverseString(str) {
    return str.split('').reverse().join('');
}
let string1 = "hello";
let reversed = reverseString(string1);
    console.log(reversed); 

// Task 3
function calculateAverage(numbers) {
    if (numbers.length === 0) {
return 0;
    }
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    return sum / numbers.length;
}
let numbersArray1 = [1, 2, 3, 4, 5];
let average = calculateAverage(numbersArray1);
console.log(average);

// Task 4
function sortDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
}
let numbersArray2 = [5, 3, 8, 1, 4];
let sortedArray = sortDescending(numbersArray2);
console.log(sortedArray); 

// Task 5
function factorial(n) {
if (n < 0) {
    return undefined; 
}
if (n === 0 || n === 1) {
    return 1;
}
let result = 1;
for (let i = 2; i <= n; i++) {
    result *= i;
}
    return result;
}
let numberr = 5;
let resultt = factorial(numberr);
console.log(resultt);

// Task 6
function getHighScoringStudents(students) {
    return students
    .filter(student => student.averageScore > 70)
    .map(student => student.name);
} 
    let studentsArray = [
    { name: "John", age: 22, averageScore: 80 },
    { name: "Mark", age: 18, averageScore: 90 },
    { name: "Adel", age: 20, averageScore: 85 },
    { name: "Danil", age: 23, averageScore: 65 },
    { name: "Charlie", age: 19, averageScore: 95 }
];
let highScoringStudents = getHighScoringStudents(studentsArray);
console.log(highScoringStudents);