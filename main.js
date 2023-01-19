let counter = 500;
let tickSpeed = 1000;
let upgradeCost = 10;
let counterUpgradeCost = 50;
let counterUpgradeAmount = 1;
let tickUpgradeCounter = 10;
let tickUpgradeButton = document.getElementById("tick-upgrade-button");
let counterUpgradeButton = document.getElementById("counter-upgrade-button");
let saveButton = document.getElementById("save-button");
let loadButton = document.getElementById("load-button");

window.onload = function() {

function tick() {
  counter += counterUpgradeAmount;
  document.getElementById("counter").innerHTML = counter;
  setTimeout(tick, tickSpeed);
}

// Function to handle tick upgrade button clicks
function tickUpgrade() {
  if (counter >= upgradeCost && tickUpgradeCounter > 0) {
    counter -= upgradeCost;
    upgradeCost = Math.ceil(upgradeCost * 1.5);
    tickSpeed = tickSpeed / 2;
    tickSpeed = Math.ceil(tickSpeed);

    /* if (tickSpeed % 2 !== 0 && tickSpeed != 2) {
      tickSpeed++;
    } */

    if (tickSpeed < 1) {
        tickSpeed = 1;
    }
    tickUpgradeCounter--;
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("tick-time").innerHTML = "Tick Speed: " + tickSpeed + " ms";
    document.getElementById("upgrade-cost").innerHTML = upgradeCost;
    document.getElementById("upgrade-counter").innerHTML = tickUpgradeCounter;
    if (tickSpeed <= 1) {
      tickUpgradeButton.disabled = true;
      tickUpgradeButton.style.opacity = 0.5;
    }
  }
}

// Function to handle counter upgrade button clicks
function counterUpgrade() {
  if (counter >= counterUpgradeCost) {
    counter -= counterUpgradeCost;
    counterUpgradeCost = Math.ceil(counterUpgradeCost * 1.5);
    counterUpgradeAmount++;
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("counter-upgrade-cost").innerHTML = counterUpgradeCost;
    document.getElementById("current-counter-upgrade").innerHTML = counterUpgradeAmount;
  }
}

// Function to save the game
function saveGame() {
  localStorage.setItem("counter", counter);
  localStorage.setItem("tickSpeed", tickSpeed);
  localStorage.setItem("upgradeCost", upgradeCost);
  localStorage.setItem("counterUpgradeCost", counterUpgradeCost);
  localStorage.setItem("counterUpgradeAmount", counterUpgradeAmount);
  localStorage.setItem("tickUpgradeCounter", tickUpgradeCounter);
  console.log("Game saved.");
}

// Function to load the game
function loadGame() {
  counter = parseInt(localStorage.getItem("counter"));
  tickSpeed = parseInt(localStorage.getItem("tickSpeed"));
  upgradeCost = parseInt(localStorage.getItem("upgradeCost"));
  counterUpgradeCost = parseInt(localStorage.getItem("counterUpgradeCost"));
  counterUpgradeAmount = parseInt(localStorage.getItem("counterUpgradeAmount"));
  tickUpgradeCounter = parseInt(localStorage.getItem("tickUpgradeCounter"));
  console.log("Game loaded.");
  document.getElementById("counter").innerHTML = counter;
  document.getElementById("tick-time").innerHTML = tickSpeed + "ms";
  document.getElementById("upgrade-cost").innerHTML = upgradeCost;
  document.getElementById("counter-upgrade-cost").innerHTML = counterUpgradeCost;
  document.getElementById("current-counter-upgrade").innerHTML = counterUpgradeAmount;
  document.getElementById("upgrade-counter").innerHTML = tickUpgradeCounter;
  if (tickSpeed <= 1) {
    tickUpgradeButton.disabled = true;
    tickUpgradeButton.style.opacity = 0.5;
  } else {
    tickUpgradeButton.style.opacity = 1;
  }
}
tickUpgradeButton.addEventListener("click", tickUpgrade);
counterUpgradeButton.addEventListener("click", counterUpgrade);

saveButton.addEventListener("click", saveGame);
loadButton.addEventListener("click", loadGame);

// Start the tick function
tick();
}
