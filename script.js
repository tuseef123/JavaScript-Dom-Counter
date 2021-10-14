let count = 0;
let decrease = document.querySelector(".decrease");
let increase = document.querySelector(".increase");
let reset = document.querySelector(".reset");

let countValue = document.querySelector("#value");

decrease.addEventListener("click", () => {
  count--;
  changeColor(count);
  //   console.log(count);
  countValue.innerHTML = count;
});

increase.addEventListener("click", () => {
  count++;
  changeColor(count);
  //   console.log(count);
  countValue.innerHTML = count;
});
reset.addEventListener("click", () => {
  count = 0;
  changeColor(count);
  //   console.log(count);
  countValue.innerHTML = count;
});

const changeColor = (count) => {
  if (count > 0) {
    countValue.style.color = "green";
  } else if (count < 0) {
    countValue.style.color = "red";
  } else {
    countValue.style.color = "hsl(205, 86%, 17%)";
  }
};
