function foo(a, b) {
  if (a === 0 && b === 0) {
    return NaN; // Correctly handle the case where both a and b are 0
  } else if (b === 0) {
    return Infinity; //Handle the case when b is 0, and a is not 0
  }
  return a / b;
}

console.log(foo(1, 0)); // Infinity
console.log(foo(0, 0)); // NaN
console.log(foo(0, 1)); // 0