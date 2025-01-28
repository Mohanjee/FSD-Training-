// Asyncronous functions 

// --> two - methods
// 1) setTimeOut(cbf,delay-time)
// 2) setInterval(cbf,delay-time)
// present inside window object

// window.setTimeout(() =>{
//     console.log("I am settimeout");
// },5000)

// window.setInterval(() => {
//     console.log("I am setInterval");
// },3000)


// function main(m,n){
//     setTimeout(()=>{
//     for(let i=m;i<=n;i++){
//         console.log(i);
//     }
// },5000)

// }
// main(5,"20a")
// function sample(){
//     console.log("no's printed")
// }
// sample()
// promise 
// --> used to look after the async function
// --> is an object.

// 3 - phase 
//1) pending phase  - either promise will be resolved or reject 
// 2) resolve/fulfill phase - resolve when async fun is successfull ==> .then(cbf)
// 3) reject phase - when async fun is not successfull ==> .catch(cbf)


// Syntax
// new Promise((resolve,reject) => {
    // --- async fun--- 
// }).then(cbf)
// .catch(cbf)

function main(m,n){
    new Promise((resolve,reject) =>{
            setTimeout(() =>{
            if(isNaN(m) || isNaN(n)) {
                return reject();
            }
        
            for(let i=m;i<=n;i++) {
                console.log(i);
            }
            return resolve();
        },5000)
  }).then(() => console.log("Promise Resolved"))
  .then(() => console.log(10*10))
  .catch(() => console.log("Promise Rejected"))
}

main(10,"20")

 function sample(){
    console.log("no's printed")
}

sample()

// async and await keyword