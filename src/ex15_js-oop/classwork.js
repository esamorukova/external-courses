function Shape(type) {
    this.type = type;
}
Shape.prototype.getType = function() {
    return "Это " + this.type;
}
Shape.prototype.getPerimeter = function() {
    return "";
}

function Triangle(a, b, c) {
    Shape.call(this, "Triangle")
    this.a = a;
    this.b = b;
    this.c = c;
    


}
Triangle.prototype = Object.create(Shape.prototype);;
Triangle.prototype.constructor = Triangle;


Triangle.prototype.getPerimeter = function() {
    this.perimeter = (this.a + this.b + this.c);
    return this.perimeter;
}


function Square(a) {
    Shape.call(this, "Square")
    this.a = a;
   
    
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.getPerimeter = function() {
    this.perimeter = (this.a *4);
    return this.perimeter;
}

function Trapezium(a, b, c, d) {
     Shape.call(this, "Trapezium")
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
   
}
Trapezium.prototype = Object.create(Square.prototype);
Trapezium.prototype.constructor = Trapezium;
Trapezium.prototype.getPerimeter = function() {
    this.perimeter = (this.a + this.b + this.c + this.d);
    return this.perimeter;
}
var triang = new Triangle(4, 6, 7);
var squar = new Square(4);
var trap = new Trapezium(2, 3, 4, 5)
console.log(triang.getType());
console.log('Периметр =' + triang.getPerimeter());
console.log(squar.getType());
console.log('Периметр =' + squar.getPerimeter());
console.log(trap.getType());
console.log('Периметр =' + trap.getPerimeter());
