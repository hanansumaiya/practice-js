// var i = 0;
// var sum = 0;
// while (i <= 100) {
//   sum = sum + i;
//   console.log(sum);

//   i++;
// }
// var rand = Math.floor(Math.random() * 10);
// if (rand == 9) {
//   console.log("Arif uz zaman");
// } else {
//   console.log("your number is " + rand);
// }
var isRunning = true;
while (isRunning) {
  var rand = Math.floor(Math.random() * 10);
  if (rand == 9) {
    console.log("Arif uz zaman");
    isRunning = false;
  } else {
    console.log("your number is " + rand);
  }
}
