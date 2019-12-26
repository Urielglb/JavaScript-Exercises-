// This operator helps us to a bunch of things, here I will give some examples

// Using the elements from an array as function arguments
let numbers = [2,5,6];

function add(n1,n2,n3){
    return n1+n2+n3;
}

let result = add(...numbers);
console.log(result);

// Combine 2 arrays 

let words = ["Hello","There"];
let fusion  = [...numbers,...words];
console.log(fusion)

// Combine two objects

let object = {
    key : 3
}

let objectTwo ={
    secondKey : 5
}

let objectFusion = {
    ...object,
    ...objectTwo
}

console.log(objectFusion);