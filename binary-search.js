/// merge doar pentru sorted array , pentru restul se alege linear search
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndesx = Math.floor((leftIndex + rightIndex) / 2); // folosim Math.floor pentru a da cea mai joasa valoare a numarului
    if (target === arr[middleIndesx]) {
      return middleIndesx;
    }
    if (target < arr[middleIndesx]) {
      rightIndex = middleIndesx - 1;
    } else {
      leftIndex = middleIndesx + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1

// Big-O = O(logn)
