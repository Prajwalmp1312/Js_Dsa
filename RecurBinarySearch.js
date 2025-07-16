function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);
  if (target === arr[mid]) {
    return mid;
  }

  if (target < arr[mid]) {
    return search(arr, target, left, mid - 1);
  } else {
    return search(arr, target, mid + 1, right);
  }
}

const sortedArray = [12, 13, 18, 17, -5].sort((a, b) => a - b);
console.log(sortedArray);


console.log(recursiveBinarySearch(sortedArray, 17));
console.log(recursiveBinarySearch(sortedArray, -5));
