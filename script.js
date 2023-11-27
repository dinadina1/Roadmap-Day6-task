// Question No 1: To print Movie title,studio and rating(if no rating print PG as default)

class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    get(){
        var rate;
        if(this.rating==null){
            rate="PG";
        }
        else{
            rate="PG-13";
        }
        return `The ${this.title} movie was maked in ${this.studio} with rating ${rate}.`;
    }
}
var result=new Movie("Casino Royale","Eon Productions","Not suitable for children");
console.log(result.get());