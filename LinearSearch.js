function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([12, 13, 18, 17, -5], 13));
console.log(linearSearch([12, 13, 18, 17, -5], 18));
console.log(linearSearch([12, 13, 18, 17, -5], -13));
