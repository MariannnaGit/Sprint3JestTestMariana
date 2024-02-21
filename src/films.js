// Exercise 1: Get the array of all directors.
const movies = require('../src/data');
function getAllDirectors(movies) {
  const result =  movies.map((movie) => (
   movie.director
  ))
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
let isDirector = movies.filter(movie => 
 movie.director === director)
 return isDirector
}
let director = 'Robert Zemeckis'
let isDirector = movies.filter(movie => 
    movie.director === director)
// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let sum = isDirector.reduce(function (allMovies, movie) {
    return (allMovies + movie.score) 
  }, 0)
  console.log(sum / isDirector.length)
  console.log(isDirector)
  let average = (sum / isDirector.length).toFixed(2)
  return Number(average)
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) { 

movies.sort(function(a, b){
    if (a.title > b.title) {
        return -1
    }
    if (a.title < b.title) {
        return 1;
    }
    return 0;
  })
  
  let onlyTitles = movies.map(movie => {
    return movie.title})
  
 onlyTitles.sort(function(a, b){
      if (a < b) {
          return -1
      }
      if (a > b) {
          return 1;
      }
      return 0;
    })
  let onlyTwenty = []
    if (onlyTitles.length <= 20) {
      for (x=0; x < onlyTitles.length; x++){
        onlyTwenty.push(onlyTitles[x])
        }
    }
    if (onlyTitles.length > 20) {
      for (y=0; y < 20; y++){
        onlyTwenty.push(onlyTitles[y])
        }
    }
  console.log('--> este' ,onlyTwenty)

    return onlyTwenty
    }




// Exercise 5: Order by year, ascending
function orderByYear(movies) {
let moviesOrdered = [...movies]
moviesOrdered.sort(function(a, b){
    if (a.year < b.year) {
        return -1
    }
    if (a.year > b.year) {
        return 1;
    }
    if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()){
      return -1
    }
    if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()){
      return -1
    }
    return 0;
})
return moviesOrdered
}



// Exercise 6: Calculate the average of the movies in a category
const genre = 'Thriller'
function moviesAverageByCategory(movies) {
    let isThriller = movies.filter((movie) => movie.genre.includes(genre)
    )
    console.log('...is Thriller veamos',  isThriller)
    let genreSum = isThriller.reduce(function (allMovies, movie) {
      return allMovies + movie.score 
    }, 0)
    let average = genreSum / isThriller.length
    console.log('...AveragewithGenSum', average.toFixed(2))
    console.log('--GenSum', genreSum)

    return Number(average.toFixed(2))
  }

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
