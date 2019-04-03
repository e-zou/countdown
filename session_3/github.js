/*
Exercise for Countdown C session 3. See git_exercise.txt for details
*/

const personOne = favoriteFoods => { // define opening and closing of the function
  // for (let i = 0; i < favoriteFoods.length; i++) {
  //   console.log(i);
  // }
  favoriteFoods.map(
    food => (console.log(food)) // food represents each element in array; this food is a parameter
  )
};

const personTwo = favoriteMovies => {
  // for (let i = 0; i < favoriteMovies.length; i++) {
  //   console.log(i);
  // }
  favoriteMovies.map(
    movie => (console.log(movie)) // food represents each element in array; this food is a parameter
  )
};

/*you can opt out of this third function if you only have two partners*/
const personThree = favoriteAnimals => {
  // for (let i = 0; i < favoriteAnimals.length; i++) {
  //   console.log(i);
  // }
  favoriteAnimals.map(
    animal => (console.log(animal)) // food represents each element in array; this food is a parameter
  )
};

/*
What does this variable syntax do?
*/
const favoriteFoods = ['pizza', 'Roots bowls', 'noodles'],
  favoriteMovies = ['Little Miss Sunshine', 'Harry Potter'],
  favoriteAnimals = ['penguins', 'wolf', 'bunny'];

const iceBreaker = () => {
  personOne
  personTwo
  personThree
};

/*this calls iceBreaker, which will call all of your functions*/
iceBreaker();
