 
 // Promises example for JavaScript from my course, using request-promise from npm intaller
 // Promises are also asynchronous

const rp = require('request-promise');

 // We only give the request-promise method an argumet and over the result of the function we use the then and catch method, this means that the
 // result of executing rp is an object, an promise type object.
 // Then recieves a function that will be executed if the promise was fullfiled without any mistakes.
 // Catch recives a funtion that will be executed if the promise had mistakes 
 // 
 rp('http://google.com')
 .then((html)=>{
    console.log("Petition finished");
 }).catch((err)=>{
    console.log(err);
    console.log("Sorry something went wrong"); 
 });

// Create promises 
// To create promises we use the constructor new Promise that will recieve a function called executor, this executor will have two parameters resolve and reject (the parameters are functions)
// Resolve will be called when the asynchronous operation was succesfull and it recives as argument the result that we want to sent from the asynchronous petition
// Reject will be called when the asynchronous operation wasn't succesfull and it must recieve a new error
// When promises are created the asynchronous operation must be executed inside the executor

const request = require('request-promise');

function read(url) {
    return new Promise((resolve,reject)=>{
        request(url,(err,response)=>{
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        })
    });
}

read('http://google.com')
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    })

