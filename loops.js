for (let i = 1; i <= 10; i++) {
  console.log(i);
}
/*=====================================*/
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
/*=====================================*/
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
/*=====================================*/
for (let index = 0; index <= 10; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}
/*=====================================*/
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);
/*=====================================*/
const array = [1, 2, 3, 4, 5];
let max = array[0];

for (let i = 1; i < arr.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log(max);
/*=====================================*/
let min = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}
console.log(min);
/*=====================================*/
let avg_arr = [1, 2, 3, 4, 5];
let sum_1 = 0;
for (let x = 0; x <= avg_arr.length; x++) {
  sum_1 = sum_1 + x;
}
console.log("The avg is :", sum_1 / avg_arr.length);
/*=====================================*/
const num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(`The factorial of ${num} is:`, factorial);
/*=====================================*/
const num_f = 10;
let fib1 = 0;
let fib2 = 1;
console.log("The Fibonacci sequence up to", num_f, "is:");
console.log(fib1);
console.log(fib2);
for (let i = 2; i <= num_f; i++) {
  let fib = fib1 + fib2;
  fib1 = fib2;
  fib2 = fib;
  if (fib <= num_f) {
    console.log(fib);
  }
}
/*=====================================*/
const num_2 = 20;
let primes = [];

for (let i = 2; i <= num_2; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(i);
  }
}

console.log("The prime numbers up to", num_2, "are:", primes.join(" "));
/*=====================================*/
const num_3 = 5;
for (let i = 1; i <= 10; i++) {
  let result = num_3 * i;
  console.log(num_3, "x", i, "=", result);
}
/*=====================================*/
const ara = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < ara.length; i++) {
  for (let j = 0; j < ara[i].length; j++) {
    console.log(ara[i][j]);
  }
}
/*=====================================*/
let araa = [1, 2, 3, 4, 5];
for (let i = araa.length - 1; i >= 0; i--) {
  console.log(araa[i]);
}
/*=====================================*/
let start = 2;
let end = 4;
const list = [1, 2, 3, 4, 5];
for (start; start <= end; start++) {
  console.log(list[start]);
}
/*=====================================*/
const list_1 = [1, 2, 3, 4, 5];
for (let i = 0; i < list_1.length; i = i + 2) {
  console.log(list_1[i]);
}
/*=====================================*/
let num_check = 2;
let checker = false;
const list_2 = [1, 2, 3, 4, 5];
for (let i = 0; i < list_2.length; i++) {
  if (list_2[i] == num_check) {
    console.log("Num :", num_check, "in The Array at index :", i);
  }
}
/*=====================================*/
let num_frq = 1;
let frequency = 0;
let list_3 = [1, 1, 3, 1, 5, 5, 7, 2, 1, 6, 1, 9];
for (let i = 0; i < list_3.length; i++) {
  if (list_3[i] == num_frq) {
    frequency++;
  }
}
console.log("The frequency of number", num_frq, "in the array is :", frequency);
/*=====================================*/
