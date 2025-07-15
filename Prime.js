function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (n % 2 === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(12));
console.log(isPrime(13));
console.log(isPrime(8));
