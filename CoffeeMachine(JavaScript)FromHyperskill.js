// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

let waterSupply = 400;
let milkSupply = 540;
let coffeeSupply = 120;
let mugsSupply = 9;
let money = 550;

function showState() {
    console.log("The coffee machine has:");
    console.log(waterSupply + " ml of water");
    console.log(milkSupply + " ml of milk");
    console.log(coffeeSupply + " g of coffee beans");
    console.log(mugsSupply + " disposable cups");
    console.log("$" + money + " of money");
    console.log("");
    menu();
}

function menu() {
    console.log("Write action (buy, fill, take, remaining, exit):");
    let userInput = input();

    switch (userInput) {
        case "buy":
            buy();
            break;

        case "fill":
            insertResources();
            break;

        case "take":
            withdrawProfit();
            break;

        case "remaining":
            showState();
            break;

        case "exit":
            break;
    }
}

function insertResources() {
    console.log("Write how many ml of water you want to add:");
    waterSupply += Number(input());
    console.log("Write how many ml of milk you want to add:");
    milkSupply += Number(input());
    console.log("Write how many grams of coffee beans you want to add:");
    coffeeSupply += Number(input());
    console.log("Write how many disposable cups you want to add:");
    mugsSupply += Number(input());
    console.log("");
    menu();
}

function withdrawProfit() {
    console.log("I gave you $" + money);
    money = 0;
    console.log("");
    menu();
}

function buy() {
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
    let userCoffee = Number(input());

    switch (userCoffee) {
        case 1:
            if (waterSupply >= 250 && coffeeSupply >= 16) {
                waterSupply -= 250;
                coffeeSupply -= 16;
                mugsSupply -= 1;
                money += 4;
                console.log("I have enough resources, making you a coffee!");
                tip();
            } else {
                console.log("Not enough resources!");
                console.log("");
            }
            break;

        case 2:
            if (waterSupply >= 350 && milkSupply >= 75 && coffeeSupply >= 20) {
                waterSupply -= 350;
                milkSupply -= 75;
                coffeeSupply -= 20;
                mugsSupply -= 1;
                money += 7;
                console.log("I have enough resources, making you a coffee!");
                tip();
            } else {
                console.log("Not enough resources!");
                console.log("");
            }
            break;

        case 3:
            if (waterSupply >= 200 && milkSupply >= 100 && coffeeSupply >= 12) {
                waterSupply -= 200;
                milkSupply -= 100;
                coffeeSupply -= 12;
                mugsSupply -= 1;
                money += 6;
                console.log("I have enough resources, making you a coffee!");
                tip();
            } else {
                console.log("Not enough resources!");
                console.log("");
            }
            break;
    }
    menu();
}

function tip() {
    console.log("Please, write an amount you want to tip:");
    let tip = Number(input());
    money += tip;
    console.log("Thanks for your tip!");
    menu();
}

menu();