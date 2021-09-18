// It will generate random number for given parameters.
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// get two random values for two dices.
var dice1 = getRndInteger(1, 6);
var dice2 = getRndInteger(1, 6);

// update the dices.
document
  .querySelectorAll("img")[0]
  .setAttribute("src", `images/dice${dice1}.png`);
document
  .querySelectorAll("img")[1]
  .setAttribute("src", `images/dice${dice2}.png`);

// update the winner player.
document.querySelector("h1").textContent =
  dice1 == dice2 ? "Its Draw" : `🚩Player ${dice1 > dice2 ? 1 : 2} win!`;
