/*

var numbers = [10,20,30];
var sum = 0;

var total = numbers.reduce(function(sum,number) {
  return sum + number;
}, 0);

console.log(total);


var primaryColors = [
  {color: 'red' },
  {color: 'yellow'},
  {color: 'blue'}
];

primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);

  return previous;
}, []);


function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {
    if (previous < 0) { return previous;} //checks to make sure it's balanced so far
    if (char === "(") { return ++previous;}
    if (char === ")") { return --previous;}
    return previous;
  }, 0);

}

var balanced = balancedParens(")(");

console.log(balanced);



var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(prev, trip) {
    return prev + trip.distance;
}, 0);

console.log(totalDistance);



var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(finalValue, currentValue, index) {
    // ind 3
    // currentValue === { type: 'sitting' }
    // finalValue === { sitting: 2, standing: 1 }
    
    if(currentValue.type === 'sitting') {
        finalValue.sitting = finalValue.sitting + 1;
    } else if(currentValue.type === 'standing') {
        finalValue.standing = finalValue.standing + 1;
    }
    
    
    return finalValue;
}, { sitting: 0, standing: 0 })

console.log(deskTypes);


var a = 1;
var b = a++;

console.log(b);
console.log(a);



var numbers = [1, 2, 3, 4, 5];

var summed = numbers.reduce(function (finalSum, currentNum) {
    var nextNum = finalSum += currentNum;

    return nextNum;
}, 0);

console.log(summed);

*/

