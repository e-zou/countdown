/*
Exercise for Countdown C session 3. See git_exercise.txt for details
*/

const favoriteFoods = ['pizza', 'Roots bowls', 'noodles'],
  favoriteMovies = ['Little Miss Sunshine', 'Harry Potter'],
  favoriteAnimals = ['penguins', 'wolf', 'bunny'];

let personOne = favoriteFoods.map(food => {
  console.log(food);
  return food;
})

let personTwo = favoriteMovies.map(movie => {
  console.log(movie);
  return movie;
})

let personThree = favoriteAnimals.map(animal => {
  console.log(animal);
  return animal;
})

/*
What does this variable syntax do?
*/

const iceBreaker = () => {
  console.log(personOne);
  console.log(personTwo);
  console.log(personThree);
};

/*this calls iceBreaker, which will call all of your functions*/
iceBreaker();
