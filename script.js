console.log("===== PART 1: VARIABLES =====");

// Q1
var num1 = 10;
num1 = 20;
console.log(num1);

// Q2
var num2 = 30;
var num2 = 50;
console.log(num2);

// Q3
let num3 = 100;
num3 = 200;
console.log(num3);

// Q4
const age = 27;
console.log(age);

// Q5
console.log("var, let and const are valid declarations.");

// Q6
var name = "Zeion praveen";
let studentAge = 27;
const city = "Salem";

console.log(name);
console.log(studentAge);
console.log(city);


console.log("===== PART 2: PRINTING AND DATA TYPES =====");

// Q7
let userName = prompt("Enter your name:");
alert(userName);

// Q8
let userAge = prompt("Enter your age:");
console.log(userAge);

// Q9
let answer = confirm("Do you know JavaScript?");
console.log(answer);

// Q10
let str = "Hello";
let num = 100;
let isActive = true;
let emptyValue;

console.log(str, typeof str);
console.log(num, typeof num);
console.log(isActive, typeof isActive);
console.log(emptyValue, typeof emptyValue);

// Q11
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// Q12
let items = {
    fruits: ["Apple", "Mango", "Banana"],
    electronics: ["Laptop", "Mobile", "TV"],
    vegetable: "Carrot"
};

console.log(items.fruits);
console.log(items.electronics);
console.log(items.vegetable);


console.log("===== PART 3: ARITHMETIC OPERATORS =====");

// Q13
let a = 15;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Q14
console.log(27 % 5);

// Q15
console.log(3 ** 4);

// Q16
let inc = 10;
console.log(++inc);

// Q17
let dec = 10;
console.log(--dec);

// Q18
let x = 5;
let y = x++;

console.log(x);
console.log(y);


console.log("===== PART 4: INCREMENT AND DECREMENT =====");

// Q19
let a19 = 4;
console.log(a19++);
console.log(a19);

// Q20
let a20 = 4;
console.log(++a20);
console.log(a20);

// Q21
let a21 = 8;
let b21 = a21++;

console.log(a21);
console.log(b21);

// Q22
let a22 = 8;
let b22 = ++a22;

console.log(a22);
console.log(b22);

// Q23
let a23 = 6;
let b23 = a23--;

console.log(a23);
console.log(b23);

// Q24
let a24 = 6;
let b24 = --a24;

console.log(a24);
console.log(b24);

// Q25
let a25 = 2;
a25++;
a25++;
console.log(a25);

// Q26
let a26 = 10;
--a26;
--a26;
console.log(a26);

// Q27
let b27 = 3;
b27 = b27++;
console.log(b27);

// Q28
let c28 = 4;
let d28 = c28++;

console.log("c:", c28);
console.log("d:", d28);

// Q29
let e29 = 5;
let f29 = --e29;

console.log("e:", e29);
console.log("f:", f29);

// Q30
let a30 = 5;
let b30 = a30++;
let c30 = ++a30;

console.log(a30);
console.log(b30);
console.log(c30);