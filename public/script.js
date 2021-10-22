// const stocks = document.querySelectorAll(".stocks");
// const differences = document.querySelectorAll(".differences");

// for (let i = 0; i < stocks.length; i++) {
//   const stock = stocks[i];
//   for (const difference of differences) {
//     if (difference.textContent > 0) {
//       stock.classList.add("green");
//     } else {
//       stock.classList.add("red");
//     }
//   }
// }
const stocks = document.querySelectorAll(".stocks");

for (let i = 0; i < stocks.length; i++) {
  const stock = stocks[i];
  const difference = stock.querySelector(".differences").textContent;
  console.log(difference);
  if (parseInt(difference) > 0) {
    stock.classList.add("green");
  } else if (parseInt(difference) < 0) {
    stock.classList.add("red");
  }
}

// for (let i = 0; i < stocks.length; i++) {
//   const stock = stocks[i];

//   for (let i = 0; i < differences.length; i++) {
//     const difference = differences[i];
//     if (parseInt(difference.textContent) > 0) {
//       stock.classList.add("green");
//     }
//     if (parseInt(difference.textContent) < 0) {
//       stock.classList.add("red");
//     }
//   }
// }
