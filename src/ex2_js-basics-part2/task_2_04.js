function trueOrFalse(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
                return 'false'
            }
        }


    }
    return "true"
}
console.log(trueOrFalse([1, 1, 1, 1, 1, 1]))