//Binary Search Recursive Method
function recursiveBinarySearch(arr, x, low, high){
     if (low == high) {
          return true; 
     }else {
          mid = (low + high) / 2
     }
      if (x == arr[mid]) {
          return mid
     } else if (x >= arr[mid]) {
     return recursiveBinarySearch(arr, x, mid + 1)
 } else {
     return recursiveBinarySearch(arr, x, mid -1)
 }
}

const array = [3, 4, 5, 6, 7, 8, 9]
console.log (recursiveBinarySearch(array, 6))
