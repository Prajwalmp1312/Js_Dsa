function FactoRecursion(n) {
  if (n === 0) {
    return 1;
  }

  return n * FactoRecursion(n - 1);
}
console.log(FactoRecursion(5));
console.log(FactoRecursion(3));
