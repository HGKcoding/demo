var num = 0;
var max = 10;
var intervalId = null;

function incrementNumber() {
  num++;
  if (num == max) {
    clearInterval(intervalId);
    console.log("Done")
  }
}

intervalId = setInterval(incrementNumber, 500)