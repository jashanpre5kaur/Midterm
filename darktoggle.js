document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Loaded!");

  // Factorial Calculation
  document
    .getElementById("calculateButton")
    .addEventListener("click", function () {
      let input = document.getElementById("numberInput").value;
      let resultScreen = document.getElementById("resultScreen");

      if (input === "" || isNaN(input) || input < 0) {
        resultScreen.textContent = "Enter a valid positive number.";
        return;
      }

      let number = parseInt(input);
      let result = factorial(number);

      resultScreen.textContent = `${number}! = ${result}`;
    });

  function factorial(num) {
    return num === 0 || num === 1 ? 1 : num * factorial(num - 1);
  }

  // Dark Mode
  document.getElementById("darkMode").addEventListener("click", function () {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "#fff";
  });

  // Light Mode
  document.getElementById("lightMode").addEventListener("click", function () {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  });
});
