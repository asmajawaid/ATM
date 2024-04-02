import inquirer from "inquirer";
// interface anstype {
//   userId: String;
//   userPin: number;
//   accountType: string;
//   transactionType: string;
//   withdrawMethod: number;
//   amount: number;
// }
let myBalance = 10000; //Dollar
let myPin = 1234;

let answer = await inquirer.prompt([
  // {
  //   name: "userId",
  //   message: "KIndly Enter your Id:",
  //   type: "input",
  // },
  {
    name: "userPin",
    message: "Kindly Enter your PIN number:",
    type: "number",
  },
  {
    name: "accountType",
    message: "Select your your account Type:",
    type: "list",
    choices: ["current", "saving"],
  },
  {
    name: "transactionType",
    message: "Select your your Transaction Type:",
    type: "list",
    choices: ["fast cash", "withdraw"],
    when(answer) {
      return answer.accountType;
    },
  },
  {
    name: "withdrawMethod",
    message: "Select your your amount:",
    type: "list",
    choices: ["1000", "3000", "4000", "5000"],
    when(answer) {
      return answer.transactionTypeType == "fast cash";
    },
  },
  {
    name: "amount",
    message: "Kindly Enter your amount:",
    type: "number",
    when(answer) {
      return answer.transactionType == "withdraw";
    },
  },
]);

// if(answer.userpin===myPin){
//      console.log("your pin code is correct!!!");
// }
// else{
//     console.log("Incorrect pin number.");
// }
if (answer.userId && answer.pin) {
  const balance = Math.floor(Math.random() * 100000);
  console.log(balance);
  const enteredAmount = answer.amount;
  if (balance >= enteredAmount) {
    const remainingBalance = balance - enteredAmount;
    console.log(`"your remaining balance is", ${remainingBalance}`);
  } else {
    console.log("insuficient balance");
  }
}
