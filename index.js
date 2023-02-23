'use strict';

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    return a / b;
}
function multiply(a, b) {
    return a * b;
}
var math = {
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply
};

var print = console.log;
var ans = math.add(5, 6);
print(ans);
ans = math.subtract(ans, 4);
print(ans);
ans = math.multiply(ans, 10);
print(ans);
ans = math.divide(ans, 2);
print(ans);
