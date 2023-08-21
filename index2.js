//const colors = ["red", "green", "blue", "alpha"];

//console.log(colors.length);

//for (let index = 0; index < colors.length; index++) {
/// CODE
//console.log(colors[index]);
//console.log("index", index);
//}

//for (let index = 0; index < Array.length; index++) {
/// CODE
//console.log(colors[index]);
//console.log("index", index);
//}

let num = 0;

const countNB = document.querySelector(".count-NB");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");

const onCountClick = (n) => {
  num = num + n;
  countNB.innerText = num;
};

minusBtn.addEventListener("click", () => onCountClick(-1));
plusBtn.addEventListener("click", () => onCountClick(1));

//minusBtn.addEventListener("click", () => {
// console.log("MINUS BTN CLICK");
// countNB.innerText = "-1";
//});

//plusBtn.addEventListener("click", () => {
//console.log("PLUS BTN CLICK");
//countNB.innerText = "1";
//});
