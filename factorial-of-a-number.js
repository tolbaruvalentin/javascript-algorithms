function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i; // 2 * 2 = 4
  }
  return result;
}

console.log(factorial(5)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120

// Big-O = O(n  )
