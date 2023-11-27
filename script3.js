// Question No 4 : write a class to calculate the uber price.

class Uberprice{
    constructor(pickup,destination,km){
        this.pickup=pickup;
        this.destination=destination;
        this.km=km;
    }
    get(){
        var basefare=50,perkm=10;
        var min=40;
        var fare;
        if(this.km<min){
            fare=this.km*perkm;
        }
        else{
            fare=(this.km*perkm)+basefare;
        }
        return `Hello! Your ride starts from ${this.pickup} to ${this.destination} and your Ride fare is Rs.${fare}`;
    }
}
var uberfare=new Uberprice("Tambaram","Guindy",40);
console.log(uberfare.get());