let i = 0;

let timedCount = () =>  {
  i ++;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount;