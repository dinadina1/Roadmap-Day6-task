// Question No 1: To print Movie title,studio and rating(if no rating print PG as default)

class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating || "PG";
    }
  
    static getPG(movies) {
      const pgMovies = [];
      for (const movie of movies) {
        if (movie.rating === "PG") {
          pgMovies.push(movie);
        }
      }
      return pgMovies;
    }
  }
  
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG­13");
  console.log(` Title: ${casinoRoyale.title}\n Studio: ${casinoRoyale.studio}\n Rating: ${casinoRoyale.rating}`);
  
  const moviesArray = [
    new Movie("Leo", "Seven screen studio", "PG"),
    new Movie("Jai Bhim", "2D Entertainment", "R"),
    new Movie("Jailer", "Sun Pictures", "PG"),
    new Movie("Fighter", "Betterfly Films", "G"),
  ];
  
  const pgMoviesArray = Movie.getPG(moviesArray);
  
  console.log("\nPG-rated movies:");
  for (const movie of pgMoviesArray) {
    console.log(` Title: ${movie.title}\n Studio: ${movie.studio}\n Rating: ${movie.rating}`);
  }

/*
Result :
-------
Title: Casino Royale
 Studio: Eon Productions
 Rating: PG­13

PG-rated movies:
 Title: Leo
 Studio: Seven screen studio
 Rating: PG
 Title: Jailer
 Studio: Sun Pictures
 Rating: PG
  */
