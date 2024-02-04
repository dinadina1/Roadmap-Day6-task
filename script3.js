// Question No 4 : write a class to calculate the uber price.

class Uberprice{
    constructor(pickup,destination,km){
        this.pickup=pickup;
        this.destination=destination;
        this.km=km;
    }
    getFare(){
        let basefare=50,perkm=10;
        let min=20;
        let fare;
        if(this.km<min){
            fare=this.km*perkm;
        }
        else{
            fare=(this.km*perkm)+basefare;
        }
        return `Hello! Your ride starts from ${this.pickup} to ${this.destination} and your Ride fare is Rs.${fare}`;
    }
}
const uberfare=new Uberprice("Tambaram","Guindy",40);
console.log(uberfare.getFare());

/*
Result:
------
Hello! Your ride starts from Tambaram to Guindy and your Ride fare is Rs.450
*/