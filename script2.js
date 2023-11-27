//Question 3 : Write a "Person" class to hold all the details.

class Person{
    constructor(name,age,qualification,nationality,college,occupation){
    this.name=name;
    this.age=age;
    this.qualification=qualification;
    this.nationality=nationality;
    this.college=college;
    this.occupation=occupation;
}
getname(){
    return `Hii I'm ${this.name}. I have done my ${this.qualification} degree in ${this.college} and I am also ${this.nationality} citizen. My age is ${this.age} and currently i am a ${this.occupation}.`;
}
}
var p = new Person("Dinakaran","22","BCA","Indian","Indo-American College","student");
console.log(p.getname());

