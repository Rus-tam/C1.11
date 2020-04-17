const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reload = document.querySelector('.reload');

let countSec = 0;
let countMin = 0;

const updateText = () =>{ 
  minutes.value = (0 + String(countMin)).slice(-2);
  seconds.value = (0 + String(countSec)).slice(-2);
}
updateText();

const countDown = () => { 
  let total = countSec + countMin * 60;
  timeinterval = setTimeout(countDown, 1000);
  if (total <= 0) {
    clearInterval(timeinterval);
    timer.style.display = 'none';
    message.innerHTML = '<p>I am done...</p>'
  }
  if(countSec > 0) {
    countSec = countSec - 1;
  } else{
    countSec = 59;
    countMin = countMin - 1;
  } 
  updateText();
}

plus.onclick = function() {
  countSec = countSec + 1;
  if (countSec == 60) {
    countSec = 0;
    countMin = countMin + 1;
  }
  updateText()
}

minus.onclick = function() {
  if (countSec != 0) {
    countSec = countSec - 1;
  } else {
    countMin = countMin - 1;
    countSec = 59;
  }

  if (countMin < 0) {
    countMin = 0;
    countSec = 0;
  }
  updateText()
}

start.onclick = function() {
  if (countSec != 0 || countMin != 0) {
    countDown();
  }
}

stop.onclick = function() {
  clearTimeout(timeinterval);
}

reload.onclick = function() {
  location.reload();
}




//countDown();
