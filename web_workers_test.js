
let worker;



const p = new Promise((resolve, reject) =>{
    
    if (typeof(worker) === "object") {
    resolve("result");
  } else {
    reject("error");
  }

});

var intervalId = () => {

  
  // p.then(message => {
  //   console.log(message);
  //   worker.onmessage = (event) => {
  //   document.getElementById(message).innerHTML = event.data;
  // }})
  // .catch(() =>{ 
  //   console.log("no")
  //   worker = new Worker("./web_workers.js");
  
  // });
  let message = "result";
  console.log("result")

  if (typeof(worker) === "object") {

  } else {
        worker = new Worker("./web_workers.js");

  }
  
};


// intervalId;
debugger
if (typeof(worker) === "object") {

} else {
      worker = new Worker("./web_workers.js");

}


worker.onmessage = (event) => {
  document.getElementById("result").innerHTML = event.data
  console.log("entra")
};


console.log(typeof(worker))