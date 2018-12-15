 function Shape() {

 }


 Shape.prototype.getType = function() {
     return "Это "
 }
 this.getPerimeter = function() {
     return "";
 }


 function Triangle(a, b, c) {

     this.a = a;
     this.b = b;
     this.c = c;
 }
 Triangle.prototype = Object.create(Shape.prototype);;
 Triangle.prototype.constructor = Triangle;
 Triangle.prototype.getType = function() {
     return 'Это Triangle'
 }
 Triangle.prototype.getPerimeter = function() {
     return "Периметр = " + (this.a + this.b + this.c);
 }

 function Square(a, b, c, d) {

     this.a = a;
     this.b = b;
     this.c = c;
     this.d = d;
 }
 Square.prototype = Object.create(Shape.prototype);
 Square.prototype.constructor = Square;
 Square.prototype.getType = function() {
     return 'Это Square'
 }
 Square.prototype.getPerimeter = function() {
     return "Периметр = " + (this.a + this.b + this.c + this.d);
 }

 function Trapezium(a, b, c, d) {

     this.a = a;
     this.b = b;
     this.c = c;
     this.d = d;
 }
 Trapezium.prototype = Object.create(Square.prototype);
 Trapezium.prototype.constructor = Trapezium;
 Trapezium.prototype.getType = function() {
     return 'Это Trapezium'
 }
 Trapezium.prototype.getPerimeter = function() {
     return "Периметр = " + (this.a + this.b + this.c + this.d);
 }
 var triang = new Triangle(4, 6, 7);
 var squar = new Square(1, 2, 3, 4);
 var trap = new Trapezium(2, 3, 4, 5)

 console.log(triang.getType());
 console.log(triang.getPerimeter());
 console.log(squar.getType());
 console.log(squar.getPerimeter());
 console.log(trap.getType());
 console.log(trap.getPerimeter());