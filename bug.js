function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // This will cause the bug
  }
  return a / b;
}

console.log(foo(1, 0)); // Infinity
console.log(foo(0, 0)); // 0
console.log(foo(0, 1)); // NaN