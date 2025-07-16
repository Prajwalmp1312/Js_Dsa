function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    } else if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}
const sortedArray = [12, 13, 18, 17, -5].sort((a, b) => a - b);

console.log(sortedArray);


console.log(binarySearch(sortedArray, 13));
console.log(binarySearch(sortedArray, 17));
// console.log(binarySearch([12, 13, 18, 17, -5], -13));
