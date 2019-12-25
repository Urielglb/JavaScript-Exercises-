/**
 * Callback example for JavaScript from my course, using request from npm intaller
 */

const request = require('request');
/**
 * Request is an asynchronous method  and recives as second argument a callback , after the petition is done JS must leave a message on the Messages-Tail 
 * to execute the function that we are giving to the request method
 */
 request('http://google.com',()=>{
     console.log("Google petition finished")
 });

 /**
  * To show in a better way that this code is asynchronous im going to write another message after the petition and see what happens when
  * the program is runned
  */

  console.log("¡Hello there!");