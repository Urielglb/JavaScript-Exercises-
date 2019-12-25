//To handle multiple promises we use the all method in  the Promise object
// I'm going to create 2 promises and a normal function, let's see how we can call the normal function after the 2 promises are finished with their execution using all method
let p1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,500,"Hello world");
});

let p2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,600,"Hello again world");
});

let greet = ()=> console.log("Hello folks");

Promise.all([p1,p2])
    .then((results)=>{
    greet();
})
    .catch(()=>{
        console.log("I have failed");
    })
