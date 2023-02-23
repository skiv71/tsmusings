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

var ans = math.add(5, 6);
var print = function () { return console.log(ans); };
print();
ans = math.subtract(ans, 4);
print();
ans = math.multiply(ans, 10);
print();
ans = math.divide(ans, 2);
print();
