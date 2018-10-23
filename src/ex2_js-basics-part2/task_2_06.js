function p(x) {
    if (x < 1000) {
        for (var i = 2; i < x; i++) {
            if (x % i == 0) {
                return "Число составное"
            } else {
                return 'Число простое'
            }
        }
    } else {
        return 'Неверные данные'
    }
}
console.log(p(19))