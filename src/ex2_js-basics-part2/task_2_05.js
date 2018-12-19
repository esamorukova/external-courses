function maxElement(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
console.log(maxElement([1, 5, 4, 74, 6]))