/*

var names = [
  'Alexandria',
  'Matthew',
  'Joe'
];

var num1 = names.every(function(name) {
  return name.length > 4;
});

var num2 = names.some(function(name) {
  return name.length > 4;
});

console.log(num1,num2);
console.log(num2);

*/


function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    return this.value.length > 0;
}

var username = new Field("2cool");
var password = new Field("my_password");
var birthday = new Field("04/04/1995");

var fields = [username, password, birthday];

var isFormValid = fields.every(function (field1) {
    return field1.validate();
});

console.log(isFormValid);