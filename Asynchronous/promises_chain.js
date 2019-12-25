// We chain promises when we need to start one after other one is finished
function calculation() {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,400,5);
    })
}

function secondCalculation(number) {
    console.log(number);
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,200,"Second promise")
    })
}

calculation()
    .then(secondCalculation)
    .then(console.log);