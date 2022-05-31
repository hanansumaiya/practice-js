var obj = {
  x: 10,
  y: 15,
  z: 20,
};

console.log(obj);
console.log("dot notation : " + obj.x);
var pro = "z";
console.log("array notation : " + obj[pro]);
obj.m = 25;
console.log(obj);
// delete obj.z;

///////////// object traversing <=== in operator ===>
for (var i in obj) {
  console.log(i);
  console.log(i + " : " + obj[i]);
}
// console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj)); //array hoia jai  [ [ 'x', 10 ], [ 'y', 15 ], [ 'z', 20 ], [ 'm', 25 ] ]
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
