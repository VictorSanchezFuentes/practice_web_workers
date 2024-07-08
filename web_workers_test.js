
let worker;



const p = new Promise((resolve, reject) =>{
    
    if (typeof(worker) === "object") {
    resolve("result");
  } else {
    reject("error");
  }

});

var intervalId = window.setInterval(() => {
  debugger
  console.log(typeof(worker))
  p.then(message => {
    console.log("vale")
    worker.onmessage = (event) => {
    document.getElementById(message).innerHTML = event.data;
  }})
  .catch(() =>{ 
    console.log("no")
    worker = new Worker("./web_workers.js");
  
  });
  
}, 1000);

intervalId;