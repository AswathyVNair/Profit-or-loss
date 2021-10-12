var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-button");
var outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    showOutput(
      `Hey the loss is ${loss} and the percentage is ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    showOutput(
      `Hey the profit is ${profit} and the percentage is ${profitPercentage}%`
    );
  } else {
    showOutput("No pain no gain and no gain no pain");
  }
}

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stockQuantity.value);
  var curr = Number(currentPrice.value);
  if (
    initialPrice.value &&
    stockQuantity.value &&
    currentPrice.value > 0 &&
    initialPrice.value &&
    stockQuantity.value > 0 &&
    initialPrice.value &&
    currentPrice.value > 0 &&
    stockQuantity.value &&
    currentPrice.value > 0 &&
    initialPrice.value > 0 &&
    stockQuantity.value > 0 &&
    currentPrice.value > 0
  ) {
    calculateProfitAndLoss(ip, qty, curr);
  } else {
    showOutput("Enter positive values in the fields given");
  }
}

function showOutput(message) {
  outputBox.innerText = message;
}

submitBtn.addEventListener("click", submitHandler);
