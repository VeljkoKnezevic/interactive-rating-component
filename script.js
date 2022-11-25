const numbers = document.querySelectorAll(".number");
const button = document.querySelector("button");
const numTotal = document.querySelector(".num-total");
const ratingCard = document.querySelector(".rating-card");
const thanksCard = document.querySelector(".thanks-card");
let value;

numbers.forEach(number => {
  number.addEventListener("click", (e) => {
    let checkedElement = document.querySelector(".checked");
    if(checkedElement) {
      checkedElement.classList.remove("checked");
    }

    e.target.classList.add("checked");
    value = e.target.textContent;
})
})


button.addEventListener("click", () => {
  ratingCard.style.display = "none";
  thanksCard.style.display = "grid";

  numTotal.textContent = value;
})