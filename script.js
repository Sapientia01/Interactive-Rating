const submit = document.querySelector(".submit");
let rateBtns = document.querySelectorAll(".rateNum");
const rateBtn1 = document.querySelector(".rateNum1");
const rateBtn2 = document.querySelector(".rateNum2");
const rateBtn3 = document.querySelector(".rateNum3");
const rateBtn4 = document.querySelector(".rateNum4");
const rateBtn5 = document.querySelector(".rateNum5");
const ratted = document.querySelector(".ratted");
const rating = document.querySelector(".rating");
const thankU = document.querySelector(".thank-you");
let rates = [rateBtn1, rateBtn2, rateBtn3, rateBtn4, rateBtn5];

let rateNum = 0;

rateBtns.forEach((rateBtn) => {
  rateBtn.addEventListener("click", () => {
    rateNum = rateBtn.dataset.rate;
    submit.classList.add("active");
    activate(rateNum);
  });
});

function activate(rateNum) {
  for (i = 0; i < 5; i++) {
    let rateBtn = rates[i];
    rateBtn.classList.remove("active");
  }
  for (i = 0; i < rateNum; i++) {
    let rateBtn = rates[i];
    rateBtn.classList.toggle("active");
  }
}

submit.addEventListener("click", () => {
  if (rateNum > 0) {
    ratted.textContent = `You selected ${rateNum} out of 5`;
    rating.classList.toggle("active");
    thankU.classList.toggle("active");
  }
});
