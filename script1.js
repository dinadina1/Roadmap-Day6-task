// Question 2: To find Circle Area and Circumference using class

class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get(){
        var str=this.radius.toString();
        var col=this.color.toString();
        // var radius=str.toString();
        return `Circle radius is ${str} and color is ${col}.`
    }
    set changeradius(modify){
        this.radius=modify;
    }
    set changecolor(modify1){
        this.color=modify1;
    }
    getArea(){  
        var area=3.14*(this.radius*this.radius);
        return `The Area of Circle is ${area}`;
    }
    getcircum(){    
        var circum=2*3.14*(this.radius);
        return `The Circumference of Circle is ${circum}`
    }
    
}
var result=new Circle(1.0,"Red");
console.log(`Old ${result.get()}`);
result.changeradius=2.0;
result.changecolor="Blue";
console.log(`Modified ${result.get()}`);
console.log(result.getArea());
console.log(result.getcircum());
