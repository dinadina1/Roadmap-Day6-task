// Question 2: To find Circle Area and Circumference using class and change color, radius also.

class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get(){
        let str=this.radius.toString();
        let col=this.color.toString();
        return `Circle radius is ${str} and color is ${col}.`
    }
    set changeRadius(modify){
        this.radius=modify.toString();
    }
    set changecolor(modify1){
        this.color=modify1.toString();
    }
    getArea(){  
        const area=3.14 * (this.radius*this.radius);
        return `The Area of Circle is ${area}`;
    }
    getCircumference(){    
        const circumference=2 * 3.14 * (this.radius);
        return `The Circumference of Circle is ${circumference}`
    }
}

const result=new Circle(1.0,"Red");
console.log(`Old ${result.get()}`);

result.changeRadius=2.0;
result.changecolor="Blue";

console.log(`Modified ${result.get()}`);
console.log(result.getArea());
console.log(result.getCircumference());

/*
Result:
-------
Old Circle radius is 1 and color is Red.
Modified Circle radius is 2 and color is Blue.
The Area of Circle is 12.56
The Circumference of Circle is 12.56
*/
