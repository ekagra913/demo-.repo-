let rand = Math.random();
let first, second, third;
// first number genrate
if (rand < 0.33) {
  first = "crazy";
} else if (rand < 0.66 && rand >= 0.33) {
  first = "tommy";
} else {
  first = "jerry";
}
// second number genrate
rand = Math.random();
if (rand < 0.33) {
  second = "chota";
} else if (rand < 0.66 && rand >= 0.33) {
  second = "bheem ";
} else {
  second = "raju";
}
// third number genrate
rand = Math.random();
if (rand < 0.33) {
  third = "dholu";
} else if (rand < 0.66 && rand >= 0.33) {
  third = "bholu ";
} else {
  third = "kalia ";
}
console.log(`${first} ${second} ${third}`);
