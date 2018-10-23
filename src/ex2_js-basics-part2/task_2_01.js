function stringOrNumber(x) {
    var result = typeof(x);
    if (result == "string") {
        res = 'это строка';
    }
    if (result == "number") {
        res = 'это число';
    }
    return res
};

console.log(stringOrNumber(5))