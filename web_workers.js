let i = 0;

let timedCount = setInterval(() => {
  console.log(i)
  i ++;
  postMessage(i);
}, 500)

timedCount;