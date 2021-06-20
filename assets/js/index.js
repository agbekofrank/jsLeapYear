let main = document.querySelector(".main");
let p = document.querySelector("p");
// main.insertAdjacentHTML("afterbegin", "<h1>Leap Year Finder</>");

let button = document.getElementById("button");
button.addEventListener("click", (e) => {
  let year = document.querySelector("input").value;
  let validYr = year >= 1 && year <= 9999 ? true : false;
  let isLeap = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

  p.innerText =
    isLeap && validYr
      ? `${year} is a leap year ! `
      : `${year} is NOT a leap year ! `;

  e.preventDefault();
});
