//generate random id for individual jokes
function randomId() {
  return Math.floor(Math.random() * 999999999 + 1).toFixed(0);
}

//jokes
const jokes = {
  colorId: randomId(),
  right1: "Line One",
  line2: "Line Two",
  hsl: { h: 0, s: 0, l: 0 },
  name: "Black",
};
console.log(jokes);
