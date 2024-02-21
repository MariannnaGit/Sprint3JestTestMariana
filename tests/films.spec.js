const movies = require('../src/data');
const {
  getAllDirectors,
  getMoviesFromDirector,
  moviesAverageOfDirector,
  orderAlphabetically,
  orderByYear,
  moviesAverageByCategory,
  hoursToMinutes,
  bestFilmOfYear,
} = require('../src/films');

// Exercise 1
describe('Function "getAllDirectors"', () => {
  it('should be declared', () => {
    expect(typeof getAllDirectors).toBe('function');
  });

  it('should return an array', () => {
    expect(getAllDirectors(movies) instanceof Array).toBe(true);
  });

  it('should return a new array, not update the original one', () => {
    expect(getAllDirectors(movies)).not.toEqual(movies);
  });

  it('should return a new array with the same length as the original one', () => {
    const testArr = [
      {
        title: 'Paths of Glory',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 8.4
      },
      {
        title: 'Django Unchained',
        year: 2012,
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        genre: ['Drama', 'Western'],
        score: 8.4
      }
    ];
    expect(getAllDirectors(testArr)).toEqual([
      'Stanley Kubrick',
      'Quentin Tarantino'
    ]);
  });
});

// Exercise 2
describe('Function "getMoviesFromDirector"', () => {
  it('should be declared', () => {
    expect(typeof getMoviesFromDirector).toBe('function');
  });

  it('should return an array', () => {
    expect(getMoviesFromDirector(movies) instanceof Array).toBe(true);
  });

  it('should return a new array, not update the original one', () => {
    expect(getMoviesFromDirector(movies)).not.toEqual(movies);
  });

  it('should return a new array with the movies from director', () => {
    const testArr = [
      {
        title: 'Paths of Glory',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 8.4
      },
      {
        title: 'Django Unchained',
        year: 2012,
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        genre: ['Drama', 'Western'],
        score: 8.4
      }
    ];
    expect(getMoviesFromDirector(testArr, 'Quentin Tarantino')).toEqual([
      {
        title: 'Django Unchained',
        year: 2012,
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        genre: ['Drama', 'Western'],
        score: 8.4
      }
    ]);
  });

});

// Exercise 3
describe('Function "moviesAverageOfDirector"', () => {
  it('should be declared', () => {
    expect(typeof moviesAverageOfDirector).toBe('function');
  });

  it('should return a number', () => {
    expect(typeof moviesAverageOfDirector(movies, 'Stanley Kubrick')).toBe('number');
  });

  it('should be different from NaN', () => {
    expect(moviesAverageOfDirector(movies, 'Stanley Kubrick')).not.toBeNaN();
  });

  it(' should return the average score of movies selecting only the director films. With 2 decimals! ', () => {
    expect(moviesAverageOfDirector([
      {
        title: 'Paths of Glory',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 8.4
      },
      {
        title: 'Django Unchained',
        year: 2012,
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        genre: ['Drama', 'Western'],
        score: 8.4
      },
      {
        title: 'Pulp Fiction',
        year: 1994,
        director: 'Quentin Tarantino',
        duration: '2h 34min',
        genre: ['Crime', 'Drama'],
        score: 8.9
      }
    ], 'Quentin Tarantino')).toBe(8.65);
  });

});

// Exercise 4
describe('Function "orderAlphabetically"', () => {
  it('should be declared', () => {
    expect(typeof orderAlphabetically).toBe('function');
  });

  it('should return an array', () => {
    expect(typeof orderAlphabetically([])).toBe('object');
  });

  it('should not mutate the original array', () => {
    const arr = [{ title: 'xyz' }, { title: 'abc' }];
    orderAlphabetically(arr);
    expect(arr[0].title).toEqual('xyz');
  });

  it('should only return the title of the movies, each value should be a string', () => {
    expect(typeof orderAlphabetically([{ title: 'aab' }])[0]).toBe('string');
  });

  it('should return all of items when the array passed has fewer than 20 items', () => {
    const moviesArr = [{ title: 'aab' }, { title: 'bab' }, { title: 'acb' }];
    expect(orderAlphabetically(moviesArr)).toHaveLength(3);
  });

  it('should order them alphabetically.', () => {
    const moviesArr = [
      { title: 'aab' },
      { title: 'aaa' },
      { title: 'abc' },
      { title: 'acb' },
      { title: 'abb' }
    ];

    expect(orderAlphabetically(moviesArr)).toEqual([
      'aaa',
      'aab',
      'abb',
      'abc',
      'acb'
    ]);
  });

  it('should return the top 20 after ordering them alphabetically.', () => {
    const moviesArr = [
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aaa' },
      { title: 'bbb' },
      { title: 'anc' },
      { title: 'kns' },
      { title: 'zds' },
      { title: 'pow' },
      { title: 'gda' },
      { title: 'res' },
      { title: 'ter' },
      { title: 'bca' },
      { title: 'ccc' },
      { title: 'bbt' },
      { title: 'qas' },
      { title: 'kmn' },
      { title: 'frt' },
      { title: 'afb' },
      { title: 'agb' },
      { title: 'apo' },
      { title: 'poa' },
      { title: 'cdf' },
      { title: 'sea' },
      { title: 'lom' },
      { title: 'acs' },
      { title: 'qas' },
      { title: 'mns' },
      { title: 'bvc' },
      { title: 'gha' },
      { title: 'lkj' },
      { title: 'era' },
      { title: 'ert' },
      { title: 'tex' },
      { title: 'zas' },
      { title: 'pol' }
    ];

    expect(orderAlphabetically(moviesArr)).toEqual([
      'aaa',
      'aab',
      'acb',
      'acs',
      'afb',
      'agb',
      'anc',
      'apo',
      'bab',
      'bbb',
      'bbt',
      'bca',
      'bvc',
      'ccc',
      'cdf',
      'era',
      'ert',
      'frt',
      'gda',
      'gha'
    ]);
  });
});

// Exercise 5
describe('Function "orderByYear"', () => {
  it('should be declared', () => {
    expect(typeof orderByYear).toBe('function');
  });

  it('should return an array', () => {
    expect(typeof orderByYear(movies)).toBe('object');
  });

  it('should return a new array', () => {
    const arr = [];
    expect(orderByYear(arr)).not.toBe(arr);
  });

  it('should return the element in a single element array', () => {
    expect(orderByYear([{ year: 1982 }])).toEqual([{ year: 1982 }]);
  });

  it('should return the new array in ascending order', () => {
    expect(
      orderByYear([{ year: 2002 }, { year: 1982 }, { year: 1995 }])
    ).toEqual([{ year: 1982 }, { year: 1995 }, { year: 2002 }]);
  });

  it('should order movies with the same year by their title, alphabetically', () => {
    expect(
      orderByYear([
        { title: 'abc', year: 2002 },
        { title: 'bac', year: 1982 },
        { title: 'aab', year: 1982 }
      ])
    ).toEqual([
      { title: 'aab', year: 1982 },
      { title: 'bac', year: 1982 },
      { title: 'abc', year: 2002 }
    ]);
  });
});

// Exercise 6
// YOUR CODE HERE. Test moviesAverageByCategory()
describe('Function "moviesAverageByCategory"', () => {
  it('should be declared', () => {
    expect(typeof moviesAverageByCategory).toBe('function');
  });

  it('should return a number', () => {
    expect(typeof moviesAverageByCategory(movies, 'Thriller')).toBe('number');
  });

  it(' should return the average score of movies selecting only one genre. With 2 decimals! ', () => {
    expect(moviesAverageByCategory([
      {
        title: 'The Dark Knight',
        year: 2008,
        director: 'Christopher Nolan',
        duration: '2h 32min',
        genre: [ 'Action', 'Crime', 'Drama', 'Thriller' ],
        score: 9
      },
      {
        title: 'Inception',
        year: 2010,
        director: 'Christopher Nolan',
        duration: '2h 28min',
        genre: [ 'Action', 'Adventure', 'Sci-Fi', 'Thriller' ],
        score: 8.8
      },
      {
        title: 'Se7en',
        year: 1995,
        director: 'David Fincher',
        duration: '2h 7min',
        genre: [ 'Crime', 'Drama', 'Mystery', 'Thriller' ],
        score: 8.6
      },
      {
        title: 'The Silence of the Lambs',
        year: 1991,
        director: 'Jonathan Demme',
        duration: '1h 58min',
        genre: [ 'Crime', 'Drama', 'Thriller' ],
        score: 8.6
      },
      {
        title: 'The Usual Suspects',
        year: 1995,
        director: 'Bryan Singer',
        duration: '1h 46min',
        genre: [ 'Crime', 'Drama', 'Mystery', 'Thriller' ],
        score: 8.6
      },
      {
        title: 'Léon',
        year: 1988,
        director: 'Luc Besson',
        duration: '1h 50min',
        genre: [ 'Crime', 'Drama', 'Thriller' ],
        score: 8.6
      },
      {
        title: 'Psycho',
        year: 1960,
        director: 'Alfred Hitchcock',
        duration: '1h 49min',
        genre: [ 'Horror', 'Mystery', 'Thriller' ],
        score: 8.5
      },
      {
        title: 'The Departed',
        year: 2006,
        director: 'Martin Scorsese',
        duration: '2h 31min',
        genre: [ 'Crime', 'Drama', 'Thriller' ],
        score: 8.5
      },
      {
        title: 'Rear Window',
        year: 1954,
        director: 'Alfred Hitchcock',
        duration: '1h 52min',
        genre: [ 'Mystery', 'Thriller' ],
        score: 8.5
      },
      {
        title: 'Terminator 2: Judgment Day',
        year: 1991,
        director: 'James Cameron',
        duration: '2h 17min',
        genre: [ 'Action', 'Sci-Fi', 'Thriller' ],
        score: 8.5
      },
      {
        title: 'The Prestige',
        year: 1994,
        director: 'Christopher Nolan',
        duration: '2h 10min',
        genre: [ 'Drama', 'Mystery', 'Sci-Fi', 'Thriller' ],
        score: 8.5
      },
      {
        title: 'Memento',
        year: 2000,
        director: 'Christopher Nolan',
        duration: '1h 53min',
        genre: [ 'Mystery', 'Thriller' ],
        score: 8.5
      },
      {
        title: 'Das Leben der Anderen',
        year: 2006,
        director: 'Florian Henckel von Donnersmarck',
        duration: '2h 17min',
        genre: [ 'Drama', 'Thriller' ],
        score: 8.5
      },
      {
        title: 'Blade Runner 2049',
        year: 2017,
        director: 'Denis Villeneuve',
        duration: '2h 44min',
        genre: [ 'Mystery', 'Sci-Fi', 'Thriller' ],
        score: 8.5
      },
      {
        title: 'The Dark Knight Rises',
        year: 2012,
        director: 'Christopher Nolan',
        duration: '2h 44min',
        genre: [ 'Action', 'Thriller' ],
        score: 8.4
      },
      {
        title: 'Oldeuboi',
        year: 2003,
        director: 'Chan-wook Park',
        duration: '2h',
        genre: [ 'Action', 'Drama', 'Mystery', 'Thriller' ],
        score: 8.4
      },
      {
        title: 'Aliens',
        year: 1986,
        director: 'James Cameron',
        duration: '2h 17min',
        genre: [ 'Action', 'Adventure', 'Sci-Fi', 'Thriller' ],
        score: 8.4
      },
      {
        title: 'Witness for the Prosecution',
        year: 1957,
        director: 'Billy Wilder',
        duration: '1h 56min',
        genre: [ 'Crime', 'Drama', 'Mystery', 'Thriller' ],
        score: 8.4
      },
      {
        title: 'Das Boot',
        year: 1981,
        director: 'Wolfgang Petersen',
        duration: '2h 29min',
        genre: [ 'Adventure', 'Drama', 'Thriller', 'War' ],
        score: 8.4
      },
      {
        title: 'Vertigo',
        year: 2001,
        director: 'Alfred Hitchcock',
        duration: '2h 8min',
        genre: [ 'Mystery', 'Romance', 'Thriller' ],
        score: 8.4
      },
      {
        title: 'North by Northwest',
        year: 1959,
        director: 'Alfred Hitchcock',
        duration: '2h 16min',
        genre: [ 'Action', 'Adventure', 'Mystery', 'Thriller' ],
        score: 8.4
      },
      {
        title: 'Reservoir Dogs',
        year: 1992,
        director: 'Quentin Tarantino',
        duration: '1h 39min',
        genre: [ 'Crime', 'Drama', 'Thriller' ],
        score: 8.3
      },
      {
        title: 'M',
        year: 1931,
        director: 'Fritz Lang',
        duration: '1h 57min',
        genre: [ 'Crime', 'Drama', 'Mystery', 'Thriller' ],
        score: 8.4
      },
      {
        title: 'Double Indemnity',
        year: 1944,
        director: 'Billy Wilder',
        duration: '1h 47min',
        genre: [ 'Crime', 'Drama', 'Film-Noir', 'Mystery', 'Thriller' ],
        score: 8.3
      },
      {
        title: 'Dunkirk',
        year: 2017,
        director: 'Christopher Nolan',
        duration: '1h 46min',
        genre: [ 'Action', 'Drama', 'History', 'Thriller', 'War' ],
        score: 8.3
      },
      {
        title: 'L.A. Confidential',
        year: 1997,
        director: 'Curtis Hanson',
        duration: '2h 18min',
        genre: [ 'Crime', 'Drama', 'Mystery', 'Thriller' ],
        score: 8.3
      },
      {
        title: 'Yôjinbô',
        year: 1961,
        director: 'Akira Kurosawa',
        duration: '1h 50min',
        genre: [ 'Action', 'Drama', 'Thriller' ],
        score: 8.3
      },
      {
        title: 'Batman Begins',
        year: 2005,
        director: 'Christopher Nolan',
        duration: '2h 32min',
        genre: [ 'Action', 'Adventure', 'Thriller' ],
        score: 8.3
      },
      {
        title: 'Die Hard',
        year: 1988,
        director: 'John McTiernan',
        duration: '2h 11min',
        genre: [ 'Action', 'Thriller' ],
        score: 8.2
      },
      {
        title: 'Heat',
        year: 1995,
        director: 'Michael Mann',
        duration: '2h 50min',
        genre: [ 'Action', 'Crime', 'Drama', 'Thriller' ],
        score: 8.2
      },
      {
        title: 'The Third Man',
        year: 1949,
        director: 'Carol Reed',
        duration: '1h 44min',
        genre: [ 'Film-Noir', 'Mystery', 'Thriller' ],
        score: 8.3
      },
      {
        title: 'The Great Escape',
        year: 1963,
        director: 'John Sturges',
        duration: '2h 52min',
        genre: [ 'Adventure', 'Drama', 'History', 'Thriller', 'War' ],
        score: 8.2
      },
      {
        title: 'Chinatown',
        year: 1974,
        director: 'Roman Polanski',
        duration: '2h 10min',
        genre: [ 'Drama', 'Mystery', 'Thriller' ],
        score: 8.2
      },
      {
        title: 'El secreto de sus ojos',
        year: 2009,
        director: 'Juan José Campanella',
        duration: '2h 9min',
        genre: [ 'Drama', 'Mystery', 'Romance', 'Thriller' ],
        score: 8.2
      },
      {
        title: 'On the Waterfront',
        year: 1954,
        director: 'Elia Kazan',
        duration: '1h 48min',
        genre: [ 'Crime', 'Drama', 'Thriller' ],
        score: 8.2
      },
      {
        title: 'Blade Runner',
        year: 1982,
        director: 'Ridley Scott',
        duration: '1h 57min',
        genre: [ 'Sci-Fi', 'Thriller' ],
        score: 8.2
      },
      {
        title: 'V for Vendetta',
        year: 2005,
        director: 'James McTeigue',
        duration: '2h 12min',
        genre: [ 'Action', 'Drama', 'Thriller' ],
        score: 8.2
      },
      {
        title: 'Dial M for Murder',
        year: 1954,
        director: 'Alfred Hitchcock',
        duration: '1h 45min',
        genre: [ 'Crime', 'Film-Noir', 'Thriller' ],
        score: 8.2
      },
      {
        title: 'Fargo',
        year: 1996,
        director: 'Joel Coen',
        duration: '1h 38min',
        genre: [ 'Crime', 'Drama', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'The Sixth Sense',
        year: 1999,
        director: 'M. Night Shyamalan',
        duration: '1h 47min',
        genre: [ 'Drama', 'Mystery', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'No Country for Old Men',
        year: 2007,
        director: 'Ethan Coen',
        duration: '2h 2min',
        genre: [ 'Crime', 'Drama', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'Eskiya',
        year: 1996,
        director: 'Yavuz Turgul',
        duration: '2h 8min',
        genre: [ 'Crime', 'Drama', 'Thriller' ],
        score: 8.4
      },
      {
        title: 'Rebecca',
        year: 1940,
        director: 'Alfred Hitchcock',
        duration: '2h 10min',
        genre: [ 'Drama', 'Mystery', 'Romance', 'Thriller' ],
        score: 8.2
      },
      {
        title: 'Kill Bill: Vol. 1',
        year: 2003,
        director: 'Quentin Tarantino',
        duration: '1h 51min',
        genre: [ 'Action', 'Crime', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'Gone Girl',
        year: 2014,
        director: 'David Fincher',
        duration: '2h 29min',
        genre: [ 'Crime', 'Drama', 'Mystery', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'Shutter Island',
        year: 2010,
        director: 'Martin Scorsese',
        duration: '2h 18min',
        genre: [ 'Mystery', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'Logan',
        year: 2017,
        director: 'James Mangold',
        duration: '2h 17min',
        genre: [ 'Action', 'Drama', 'Sci-Fi', 'Thriller' ],
        score: 8.2
      },
      {
        title: 'Relatos salvajes',
        year: 2014,
        director: 'Damián Szifron',
        duration: '2h 2min',
        genre: [ 'Comedy', 'Drama', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'A Wednesday',
        year: 2008,
        director: 'Neeraj Pandey',
        duration: '1h 44min',
        genre: [ 'Crime', 'Drama', 'Mystery', 'Thriller' ],
        score: 8.3
      },
      {
        title: 'Le salaire de la peur',
        year: 1953,
        director: 'Henri-Georges Clouzot',
        duration: '2h 11min',
        genre: [ 'Adventure', 'Drama', 'Thriller' ],
        score: 8.2
      },
      {
        title: 'Persona',
        year: 1966,
        director: 'Ingmar Bergman',
        duration: '1h 25min',
        genre: [ 'Drama', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'Salinui chueok',
        year: 2003,
        director: 'Joon-ho Bong',
        duration: '2h 11min',
        genre: [ 'Crime', 'Drama', 'Mystery', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'Mad Max: Fury Road',
        year: 2015,
        director: 'George Miller',
        duration: '2h',
        genre: [ 'Action', 'Adventure', 'Sci-Fi', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'Jurassic Park',
        year: 2000,
        director: 'Steven Spielberg',
        duration: '2h 7min',
        genre: [ 'Adventure', 'Sci-Fi', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'Amores perros',
        year: 2000,
        director: 'Alejandro González Iñárritu',
        duration: '2h 34min',
        genre: [ 'Drama', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'Prisoners',
        year: 2013,
        director: 'Denis Villeneuve',
        duration: '2h 33min',
        genre: [ 'Crime', 'Drama', 'Mystery', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'Touch of Evil',
        year: 1958,
        director: 'Orson Welles',
        duration: '1h 35min',
        genre: [ 'Crime', 'Drama', 'Film-Noir', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'Les diaboliques',
        year: 1955,
        director: 'Henri-Georges Clouzot',
        duration: '1h 57min',
        genre: [ 'Crime', 'Drama', 'Horror', 'Mystery', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'Donnie Darko',
        year: 2001,
        director: 'Richard Kelly',
        duration: '1h 53min',
        genre: [ 'Drama', 'Sci-Fi', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'The Bourne Ultimatum',
        year: 2007,
        director: 'Paul Greengrass',
        duration: '1h 55min',
        genre: [ 'Action', 'Mystery', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'Jaws',
        year: 1975,
        director: 'Steven Spielberg',
        duration: '2h 4min',
        genre: [ 'Adventure', 'Drama', 'Thriller' ],
        score: 8
      },
      {
        title: 'Twelve Monkeys',
        year: 1995,
        director: 'Terry Gilliam',
        duration: '2h 9min',
        genre: [ 'Mystery', 'Sci-Fi', 'Thriller' ],
        score: 8
      },
      {
        title: 'Mou gaan dou',
        year: 2002,
        director: 'Wai-Keung Lau',
        duration: '1h 41min',
        genre: [ 'Crime', 'Drama', 'Mystery', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'Sholay',
        year: 1975,
        director: 'Ramesh Sippy',
        duration: '3h 18min',
        genre: [ 'Action', 'Adventure', 'Comedy', 'Drama', 'Musical', 'Thriller' ],
        score: 8.2
      },
      {
        title: 'Ah-ga-ssi',
        year: 2016,
        director: 'Chan-wook Park',
        duration: '2h 24min',
        genre: [ 'Crime', 'Drama', 'Mystery', 'Romance', 'Thriller' ],
        score: 8.1
      },
      {
        title: 'Dog Day Afternoon',
        year: 1975,
        director: 'Sidney Lumet',
        duration: '2h 5min',
        genre: [ 'Biography', 'Crime', 'Drama', 'Thriller' ],
        score: 8
      }
    ], 'Thriller')).toBe(8.28);
  });
});




// Exercise 7
describe('Function "hoursToMinutes"', () => {
  it('should be declared', () => {
    expect(typeof hoursToMinutes).toBe('function');
  });

  it('should return an array', () => {
    expect(hoursToMinutes(movies) instanceof Array).toBe(true);
  });

  it('should return a new array, not update the original one', () => {
    expect(hoursToMinutes(movies)).not.toEqual(movies);
  });

  it('should return an array of movies with duration as a number', () => {
    expect(typeof hoursToMinutes(movies)[0].duration).toBe('number');
  });

  it('should return an array of movies with the correct duration for a 31 minute movie', () => {
    const movieTry = [{ duration: '0h 31min' }];
    expect(hoursToMinutes(movieTry)[0].duration).toBe(31);
  });

  it('should return an array of movies with the correct duration for a 341 minute movie', () => {
    const movieTry = [{ duration: '5h 41min' }];
    expect(hoursToMinutes(movieTry)[0].duration).toBe(341);
  });

  it('should return an array of movies with the correct duration for a 2 hour movie', () => {
    const movieTry = [{ duration: '2h' }];
    expect(hoursToMinutes(movieTry)[0].duration).toBe(120);
  });
});

// Exercise 8
describe('Function "bestFilmOfYear"', () => {
  it('should be declared', () => {
    expect(typeof bestFilmOfYear).toBe('function');
  });

  it('should return an array', () => {
    expect(bestFilmOfYear(movies, 1999) instanceof Array).toBe(true);
  });

  it('should return a new array, not update the original one', () => {
    expect(bestFilmOfYear(movies, 1999)).not.toEqual(movies);
  });

  it('should return the best film of a year, searching in an array', () => {
    const testArr = [
      {
        title: 'Film1',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 6
      },
      {
        title: 'Film2',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 8.4
      },
      {
        title: 'Film3',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 5
      },
    ];
    expect(bestFilmOfYear(testArr, 1957)).toEqual([
      {
        title: 'Film2',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 8.4
      }
    ]);
  });

});
