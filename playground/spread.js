// function add(a,b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Victory'];
// var final = [...groupB, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

var greet = function(name, age) {
  console.log("Hi " + name + ", you are " + age);
}

greet(...person);
greet(...personTwo);


var names = ['Mike', 'Ben'];
var final = [...names, 'Andrew'];

final.forEach(function(name) {
  console.log("Hi " + name);
});
