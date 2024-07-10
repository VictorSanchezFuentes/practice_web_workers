let i = {
  number: 0,
  hour: new Date()
};

const now = new Date();

let timedCount = setInterval(() => {
  console.log(i)
  i.number++;
  i.hour= new Date();
  postMessage(i);
}, 500)

timedCount;