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
    return `Hii I'm ${this.name}. 
I have done my ${this.qualification} degree in ${this.college} and I am also ${this.nationality} citizen.
My age is ${this.age} and currently i am a ${this.occupation}.`;
}
}
let person_det = new Person("Dinakaran","22","BCA","Indian","Indo-American College","student");
console.log(person_det.getname());

/*
Result:
-------
Hii I'm Dinakaran. 
I have done my BCA degree in Indo-American College and I am also Indian citizen.
My age is 22 and currently i am a student.
*/
