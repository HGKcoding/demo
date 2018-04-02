var num = 0;
var max = 10;

function incrementNumber() {
  num++;
  if (num < max) {
    setTimeout(incrementNumber, 500);
  } else {
    console.log("Done");
  }
}

setTimeout(incrementNumber, 500);