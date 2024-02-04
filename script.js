// Question No 1: To print Movie title,studio and rating(if no rating print PG as default)

class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      // Set rating to "PG" by default if not provided
      this.rating = rating || "PG";
    }
  
    // Class method to get movies with rating "PG"
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
  
  // Create an instance of Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG­13");
  
  console.log(` Title: ${casinoRoyale.title}\n Studio: ${casinoRoyale.studio}\n Rating: ${casinoRoyale.rating}`);
  
  // Example array of Movie instances
  const moviesArray = [
    new Movie("Leo", "Seven screen studio", "PG"),
    new Movie("Jai Bhim", "2D Entertainment", "R"),
    new Movie("Jailer", "Sun Pictures", "PG"),
    new Movie("Fighter", "Betterfly Films", "G"),
  ];
  
  // Use the getPG class method to get movies with rating "PG"
  const pgMoviesArray = Movie.getPG(moviesArray);
  
  // Output details of PG-rated movies
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
