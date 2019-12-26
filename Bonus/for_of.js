//For of travels all the elements of an iterable object

// An array 
let numbers = [3,4,5];

for(number of numbers){
    console.log(number);
}
// The arguments of a function
function greetEveryone() {
    for(name of arguments){
        console.log("Helo " + name);
    }
}

console.log(greetEveryone("Jaskier", "Geralt", "Ciri"));

// A string
let str = "Yennefer";

for (letter of str ){
    console.log(letter);
}