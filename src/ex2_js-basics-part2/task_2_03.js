function elements(arr) {
    var evenNumber = 0;
    var oddNumber = 0;
    var m = 0;
    for (var i = 0; i < arr.length; i++) {
        var x = arr[i] % 2;
        if (x == 0) {
            ++evenNumber
        }
        if (x !== 0) {
            ++oddNumber
        }
        if (arr[i] == 0) {

            ++m;
        }

    }

    console.log('Четных', evenNumber, 'Нечетных', oddNumber, 'Нулевых', m);
}


return elements([1, 2, 5, 6, 7, 8, 0, 10]);