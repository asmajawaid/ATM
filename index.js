// CLI based ATM use typescript Node.js
import inquirer from "inquirer";
let myBlanace = 10000; //dollar
let myPin = 1234;
console.log("Welcome to AGB ATM ");
let answer = await inquirer.prompt([
    {
        name: "userPin",
        message: "Kindly Enter your PIN number:",
        type: "number",
    },
]);
if (answer.userPin === myPin) {
    console.log("your pin code is correct!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select opetion.",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        myBlanace -= amountAns.amount;
        console.log(`"your remaining balance is:" ${myBlanace}`);
        if (myBlanace <= amountAns.amount) {
            console.log("insufficient Balance.");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`"your balance is:"  ${myBlanace}`);
    }
    // else {
    //   console.log("insuficient balance");
    // }
}
else {
    console.log("Incorrect pin number.");
}
