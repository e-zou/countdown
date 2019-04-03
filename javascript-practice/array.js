// Returns object array
let numArray = [1, 2, 3, 4]
function returnObj(arr) {
    let length = arr.length;
    let sentence = "";
    for (i = 0; i < arr.length; i++) {
        sentence += arr[i] + " ";
    }
    return {length: length, sentence: sentence}
}

console.log(returnObj(numArray));

// Takes array of obj and returns array of just names using map function
let people = [
    {name: "Emily", age: 21},
    {name: "Emily", age: 22},
    {name: "Emily", age: 23},
]

let names = people.map(person => {
    return person.name;
});

console.log(names);