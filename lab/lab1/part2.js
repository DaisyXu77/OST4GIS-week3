/* =====================
# Lab 1, Part 2 — Functions as Values
Functions can be passed as values to other functions. Each exercise here builds on that theme.
===================== */

/* =====================
Instructions: Write a function that *always* returns the number 1.
===================== */

var justOne = function(whatever) {return 1;};

console.log('justOne success:', justOne() === 1);

/* =====================
Instructions: Write a function that returns true if a number is even.
===================== */

var isEven = function(num) {return num%2===0;};

console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/* =====================
Instructions: Write a function that *always* returns false.
              Use functions "justOne" and "isEven" somehow in the definition.
===================== */

var justFalse = function(whatever2) {return isEven(justOne(whatever2));};

console.log('justFalse success:', justFalse() === false);

/* =====================
Instructions: Write a function that takes a boolean value and returns its opposite.
===================== */

var not = function(trueorfalse) {
  if (trueorfalse==true){return false;
  }else{return true;}
};

console.log('not success:', not(false) === true);

/* =====================
Instructions: Write a function that returns true if a number is odd
              Use functions "isEven" and "not" somehow in the definition.
===================== */

var isOdd = function(num) {return not(isEven(num));};

console.log('isOdd success:', isOdd(4) === false);

/* =====================
Instructions: Write a function that takes a list of numbers and returns a list with only numbers above 10
===================== */

var filterOutLessThan10 = function(list) {
  newlist = [];
  for(i=0;i<list.length;i++){
    if (list[i]>10){newlist.push(list[i]);}
  }
  return newlist;
};
console.log(filterOutLessThan10([4, 11]));
var Equal = _.isEqual(filterOutLessThan10([4, 11]),[11]);

console.log('filterOutLessThan10 success:', Equal);

/* =====================
Stretch goal
Instructions: Let's bring it all together. Write a function that filters a list with a predicate you provide. It takes:
              1. a list of values (to be filtered)
              2. a function that takes a value and returns true (to keep a number) or false (to toss it out)
===================== */

var filter = function(array, func) {
  newlist = [];
  for(j=0;j<array.length;j++){
    if (func(array[j])==true){
      newlist.push(array[j]);}
  }
  return newlist;
};

console.log('filter success:', _.isEqual(filter([4, 11], isOdd),[11]));
