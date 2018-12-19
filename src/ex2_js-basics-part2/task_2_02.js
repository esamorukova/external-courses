var arr1 = [1, 2, 3, 4];

function arrElements(arr) {
    var result2 = arr.length;
    for (var i = 0; i < result2; i++) {
        var result = arr[i];
        console.log(result);
    }


    console.log('Колличество элементов =', result2);
}
return arrElements(arr1);