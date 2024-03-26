import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin number",
    type: "number",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("Correct pin code");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["Withdraw", "Check Balance"],
    },
  ]);
  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number", 
      },    ]);
      if (amountAns.amount<=10000){console.log(myBalance -= amountAns.amount);
        
      } else if(amountAns.amount>=10000) {console.log("Please select valid number");
      }
    ;

  }
} else {
  console.log("Incorrect pin code");
}
