let i = 0;

let timedCount = () =>  {
  console.log(i)
  i ++;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount;