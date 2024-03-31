#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "What you want to do?",
      type: "list",
      choices: ["Withdraw", "Check Balance"],
    },
  ]);
  console.log(operationAns);

  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);

    if (amountAns.amount >= myBalance) {
      console.log("Enter Valid Amount");
      console.log("Please Enter amount under your Balance");
    } else if (amountAns.amount <= myBalance) {
      console.log((myBalance -= amountAns.amount));
      console.log("Your remaining amount is: " + myBalance);
    }
  } else {
    console.log("Your current balance is: " + myBalance);
  }
} else {
  console.log("Incorrect pin code");
}
