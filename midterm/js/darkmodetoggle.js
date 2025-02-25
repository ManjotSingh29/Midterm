const darkButton = document.querySelector('button[data-bs-theme-value="dark"]');
const lightButton = document.querySelector(
  'button[data-bs-theme-value="light"]'
);
const resultScreen = document.getElementById("resultScreen");
const enterButton = document.getElementById("enterBtn");
const numberInput = document.getElementById("numberInput");

darkButton.addEventListener("click", () => {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
});

lightButton.addEventListener("click", () => {
  document.body.classList.add("light-mode");
  document.body.classList.remove("dark-mode");
});

enterButton.addEventListener("click", () => {
  const number = parseInt(numberInput.value);
  if (!isNaN(number)) {
    const result = calculateFactorial(number);
    resultScreen.textContent = `${number}! = ${result}`;
  } else {
    resultScreen.textContent = "Please enter a valid number";
  }
});

function calculateFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
