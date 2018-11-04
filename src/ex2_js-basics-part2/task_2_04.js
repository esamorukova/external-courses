function trueOrFalse(arr) {


    for (var i = 1; i < arr.length; i++) {
        {
            if (arr[i] !== arr[0]) {
                return 'false'
            }
        }


    }
    return "true"
}
console.log(trueOrFalse([1, 1, 1, 5, 1, 1]))
