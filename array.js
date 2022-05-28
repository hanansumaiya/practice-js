// 1......
var vowel = ["a", "e", "i", "o", "u"];
// console.log(vowel);
vowel[5] = "A";
vowel[15] = "S";
// console.log(vowel);
// console.log(vowel.length);

// console.log(vowel.indexOf("e"));
// console.log(vowel[2]);
// ............2
var arr1 = [2, 4, 6, 8, 10, 12, 14, 16, 18];
var sum = 0;
for (var i = 0; i < arr1.length; i++) {
  arr1[i] = arr1[i] + 2;
  sum = sum + arr1[i];
}
// console.log(arr);
// console.log("Sumetion " + sum);
///////////////////////////////
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 5, 8, 4, 2, 6];
var evenSum = 0;
var oddSum = 0;
for (var j = 0; j < arr2.length; j++) {
  if (arr2[j] % 2 == 0) {
    evenSum = evenSum + arr2[j];
  } else if (arr2[j] % 2 == 1) {
    oddSum = oddSum + arr2[j];
  }
}
console.log("evenSum = " + evenSum);
console.log("oddSum = " + oddSum);
