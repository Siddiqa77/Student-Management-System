#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"
import { exitCode } from "process";

console.log(chalk.rgb(242, 22, 2)("\n\tWelcome to School Management System\t\n"));
let studentDetail=[];
let condition=true;
while(condition) {
    let studentName= await inquirer.prompt([
        {
// Student name

          name:"Name",
          message:chalk.rgb(134, 7, 237)("Enter Student Name"),
          type:"input"

        }
    ])
    
//  5 digit automated generated student unique ID

    const studentID=Math.floor(10000 + Math.random() * 9000);
        
        console.log(chalk.rgb(240, 24, 211)(`student "${studentName.Name}" added with ID ${studentID}`));

//  Choose your course

let courses=await inquirer.prompt([
    {

name:"course",
message:chalk.rgb(66, 7, 55)("Choose Your Course"),
type:"list",
choices: [
    "Phython",
    "Web Development",
    "C++",
    "Php",
    "Rect.js",
    "JavaScript",
    "Web 3.0 "
]
    }
])
 // Add more course if you want to add

let addmorecourse=await inquirer.prompt([
    {
        name:"morecourse",
        message:chalk.rgb(9, 227, 118)("Do you Want to add any other course?"),
        type:"list",
        choices:["Yes","No"]
        
    }
])
let morecourse
// condition for "YES"
if(addmorecourse.morecourse === "Yes"){

   morecourse =await inquirer.prompt([
        {
        name:"newcourse",
        message:chalk.rgb(66, 7, 55)("Enter course do you like"),
        type:"input",
    
        }
    ])
    console.log(chalk.rgb(201, 8, 147)("You added new course!"));

    // Condition for "NO"

}else{
    console.log(chalk.rgb(250, 7, 112)(` No new course added! `));

}
 
//your balance

let yourBalance=20000;
let balance= await inquirer.prompt({

//what you want, view balance or payment

    name:"Balance",
    message:chalk.rgb(66, 7, 55)("Enter what do you want?"),
    type:"list",
    choices:["ViewBalance" , "PayFee",]
});
let viewBalance;
let payAmount;


//if view balance..

if(balance.Balance === "ViewBalance"){
   viewBalance = yourBalance
    console.log(chalk.rgb(176, 250, 7)(`Your Balance is "${yourBalance}"`))

   //  for pay fee.. 

}else if(balance.Balance === "PayFee"){

    let amountans=await inquirer.prompt({

        name:"amount",
        message:chalk.rgb(66, 7, 55)("Enter your amount"),
        type:"number",
    });


    //payment process..

    payAmount = amountans.amount;

    if(payAmount < yourBalance){

        yourBalance -= payAmount;
        console.log(chalk.rgb(176, 250, 7)("Your current balance is:" + yourBalance))

    }else if(amountans.amount > yourBalance){
        console.log(chalk.redBright("\n\tYour payment is unable because you have insufficient balance $ " +  yourBalance ))
    }
}
//  add new stds..

 let addstd=await inquirer.prompt({

    name:"newstudent",
    message:chalk.rgb(9, 227, 118)("Want to add New student?"),
    type:"confirm",
    default: false
 })
condition= addstd.newstudent


 if(!condition){

    console.log(chalk.rgb(130, 30, 21)("Complete Process!"))
}
// Student overall status...

console.log(chalk.rgb(176, 250, 7)("\n Student status! "))
console.log(chalk.rgb(250, 7, 112)("*  Name:" , studentName.Name))
console.log(chalk.rgb(250, 7, 112)("*  ID:" , studentID))
console.log(chalk.rgb(250, 7, 112)("*  Course:", courses.course));
console.log(chalk.rgb(250, 7, 112)("*  Paid Amount:", payAmount));



    if (morecourse) {
console.log(chalk.rgb(176, 250, 7)("*  Additional Course:" , morecourse.newcourse));


   if(viewBalance) {
console.log(chalk.rgb(176, 250, 7)("*  Your Balance:" , viewBalance))
   };

  if (payAmount){
console.log("*  Payment Amount:" , payAmount)

  }

    }
}
class SchoolManagementSystem {
    //  school management system process
//  void is the return type is helpful for indicating the intention of a function
    exit(): void {
        
        console.log(chalk.rgb(235, 166, 19)("\n\tNow you Exiting from School Management System...\t"));
        process.exit(0); // Exit the Node.js process with a success status code
    }
}

const mySchoolSystem = new SchoolManagementSystem();

// call  exit method
mySchoolSystem.exit();

