// Await waits for a promise to be resolved to execute some code
// It's only valid in async functions

(async function(){
    let result = await new Promise((resolve,reject)=>{
        setTimeout(resolve,400,5);
    });

    let secondResult = await new Promise((resolve,reject)=>{
        setTimeout(resolve,400,20);
    });

    console.log(result + secondResult);// We dont have to use .then because await alredy gives the value back
})();
// Example using fetch 
const fetch = require('node-fetch');

async function showCharacterInfo(id){
    try{
    let auxResponse = await fetch('https://rickandmortyapi.com/api/character/'+id);
    let  response = await auxResponse.json();
    console.log(response);
    }catch(err){
        console.log(err);
    }
}
//Since we dont use the .then and .catch anymore because await gives the value of the promise we use try catch blocks for any possible mistake 

showCharacterInfo(1);
