let numberElement = document.getElementById("number");
let currentNumber = 0;

function updateNumber(newNumber) {
  numberElement.classList.add("blur");

  setTimeout(() => {
    currentNumber = newNumber;
    numberElement.textContent = currentNumber;
    numberElement.classList.remove("blur");
  }, 300); // Match the duration of the CSS transition
}

document.getElementById("increment").addEventListener("click", () => {
  updateNumber(currentNumber + 1);
});

document.getElementById("decrement").addEventListener("click", () => {
  updateNumber(currentNumber - 1);
});
