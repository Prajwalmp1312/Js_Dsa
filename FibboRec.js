function FibonacciRecursion(n) {
  if (n < 2) {
    return n;
  }

  return FibonacciRecursion(n - 1) + FibonacciRecursion(n - 2);
}


console.log(FibonacciRecursion(5));
console.log(FibonacciRecursion(9));

