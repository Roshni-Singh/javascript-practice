var numbers = [1, 2, 3];
var doubledNumbers = [];

var doubled = numbers.map(function (num) {
    return num * 2;
});

for (var i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

console.log(doubled);
console.log(doubledNumbers);