//Binary Search Iterative Method 
function iterativeBinarySearch(arr, x) {
    let low = 0
    let high = arr.length - 1
    while (low <= high){
        let mid = (low + high)/2
        if (x == arr[mid]) {
            return mid
        } else if (x > arr[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
        }   
    }
}

const array = [3, 4, 5, 6, 7, 8, 9]
console.log(iterativeBinarySearch(array, 8))