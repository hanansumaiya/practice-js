function function_name() {
  //   console.log("I am sumaiya");
}
for (var i = 0; i < 10; i++) {
  function_name();
}

function addition(a, b) {
  console.log(a + b);
}

// addition(10, 5);
var arr1 = [2, 4, 6, 8];
var arr2 = [4, 8, 9, 1];
var arr3 = [10, 5, 4];
function sumfoArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
}
sumfoArray(arr1);
sumfoArray(arr2);
sumfoArray(arr3);
//////////////////////////////////
setTimeout(function () {
  console.log("i am sumaiya");
}, 5000);
