function calculatorF() {
    this.result = 0;
}
calculatorF.prototype.add = function(num) {
    this.result += num;
    return this.result;
}

calculatorF.prototype.substract = function(num) {
    this.result -= num;
    return this.result;
}
calculatorF.prototype.divide = function(num) {
    this.result /= num;
    return this.result;
}
calculatorF.prototype.multiply = function(num) {
    this.result *= num;
    return this.result;
}
calculatorF.prototype.reset = function() {
    this.result = 0;
    return this.result;
}
calculatorF.prototype.getResult = function() {
    return this.result;
}

function smartCalc() {
    calculatorF.call(this)

}
smartCalc.prototype = Object.create(calculatorF.prototype);
smartCalc.prototype.constructor = smartCalc;
smartCalc.prototype.getSin = function(x) {
    this.result = Math.sin(x)
    return this.result
}
smartCalc.prototype.getSin = function(x) {
    this.result = Math.sin(x)
    return this.result
}
smartCalc.prototype.getCos = function(x) {
    this.result = Math.cos(this.result)
    return this.result
}
smartCalc.prototype.getSqrt = function(x) {
    this.result = Math.sqrt(x)
    return this.result
}

function finCalc() {
    calculatorF.call(this)

}
finCalc.prototype = Object.create(calculatorF.prototype);
finCalc.prototype.constructor = finCalc;
finCalc.prototype.percent = function(y) {
    this.result = (this.result / 100) * y;
    return this.result
}





var Calculator = new calculatorF();
var smart = new smartCalc();
var fin = new finCalc()



console.log(Calculator.substract(10));
console.log(Calculator.add(20));
console.log(fin.add(10));
console.log(fin.percent(2));
console.log(smart.getSin(1))
console.log(smart.getCos(1))
console.log(smart.getSqrt(4))
console.log(smart.substract(10));