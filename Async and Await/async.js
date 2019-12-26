// How to work with async functions
// async functions always returns a promise

async function add(n1,n2) {
    return n1+n2;
}

let result = add(5,6);//result is a promise
console.log(result);
result.then((resolve)=>{
    console.log(resolve);
})