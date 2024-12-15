// //  statement
// //  console.log("This is a Javascript statement");
// //  variables
// //  let fullName ="naomi"; //let
// //  var temperature =30; //var
// //  console.log(temperature);
// //  const pi=3.14; //constant
// //  console.log(pi);
// //  arithmetic operator
// //  let length =10;
// //  let width =15;
// //  console.log(length*width);
// //  let restaurantName = "Naomi's Kitchen";
// //  let orderAmount =5000;
// //  let deliveryfee =1000;
// //  let totalamount = orderAmount+deliveryfee;
// //  console.log(`The total amount of your food from ${restaurantName} is ${totalamount}`)
// //  console.log(typeof deliveryfee);

// //  arithmetic operators exercises: add two numbers and print the result 
// //  let num1 =20;
// //  let num2 =30;
// //  console.log(num1 + num2);//outputs 50
// //  comparison operators exercises: check if a number is greater than another number
// //  let x=5;
// //  let y =7;
// //  console.log(7>5);//outputs true
// //  //boolean variable using the !(not) operator
// //  let isAdmin = true;
// //  console.log(!(isAdmin));//outputs false because of the !(not) operator added 
// //  //tenary operator exercise 
// //  let a =5000;
// //  let b= 2000;
// //  let c =3000;
// //  let total = a+b+c;
// //  console.log(total);
// //  console.log(total > 10000 ? "Over Budget!!" : "Within Budget");
// //  //tenary operator with logical operator 
// //  let score =50;
// //  let result = score>=70?"A" : 
// //       (score >=50 && score<=69 ? "B": "FAIL");//you can nest another condition in a condition 
// //       //the logic is to check the first condition and if it false, it will check the other condition for the next range 
// //  console.log(result);
// //  //reviewing variables
// //  let myName ="Naomi";//string
// //  console.log(myName);//outputs Naomi

// //  let myAge =18;//age
// //  myAge+=5;//calculates how old i will be in 5 years
// //  console.log(myAge);// first outputs 18 then changes to 23

// //  let iLikeCoding = true;//boolean
// //  console.log(iLikeCoding);//outputs true

// //  let favLang = "javascript";//string
// //  console.log(favLang);//outputs javascript

//  //type of
//  let ex1 = "Hello world";
//  console.log(typeof ex1);//outputs string
//  let y = 25;
//  console.log(typeof y);//outputs number
//  let z=true;
//  console.log(typeof z);//outputs boolean
//  let w;
//  console.log(typeof w);//outputs undefined
//  let v = null;
//  console.log(typeof v);//outputs object

//  //What happens when you add a string and a number
//  let a = "10";
//  let b = 5;
//  console.log(a+b);//outputs 105

//  //logical operators
//  let n=12;
//  let result = n>10 && n<20;
//  console.log(result);//outputs true
 
//  let s="hello"
//  let result2 = s != "world";
//  console.log(result2);//outputs true

// let pName = prompt("NAME?");
// console.log(pName);
// let pAge = Number(prompt("AGE?"));
// console.log(pAge);
// let fAge = pAge+=10;
// let pColor = prompt("color?");
// console.log(pColor);
// console.log(`Hi ${pName}! You are ${pAge} years old now,and you'll be ${fAge} in 10 years. Your favorite color is ${pColor}`)

// //  //type conversion
// //  console.log("5" + 3);//ouputs "53"
// // console.log("5" - 3);//outputs 2
// // console.log(true +2);//outputs 3
// // console.log(false + "hello");//falsehello

// // let num = 42;
// // console.log(String(num)); //"42"
// // console.log(num.toString()); //"42"

// // let str ="123"
// // console.log(Number(str)); //123
// // console.log(parseInt("123.45")) //123
// // console.log(parseFloat("123.45")) //123

// // console.log(Boolean(0)); //false (0 is falsy)
// // console.log(Boolean(1)); //true
// // console.log(Boolean("hello")); //true
// // console.log(Boolean("")); //false (empty string is falsy)

// // console.log(Number("hello"))// NaN(NOT A NUMBER)

// // console.log(Number(null)); //0
// // console.log(Number(undefined)); //NaN

// CONDITIONAL STATEMENTS EXERCISES
//else if statements
let number = 0;
if (number > 0){
     console.log("Positive");
}else if(number<0){
     console.log("Negative");
}else {
     console.log("Zero")
}

//tenary operators
let age =70;
console.log(age>=60?"eligible for senior citizen discount":"not eligible for senior citizen discount")

//if else if with logical operators
let grade =50;
if (grade >=90){
     console.log("GRADE A");
}else if(grade <=89 && grade>=80){
     console.log("GRADE B");
}else if(grade<=79 && grade>=70 ){
     console.log("GRADE C");
}else{
     console.log("GRADE F");
}

let number2 = 15;
if (number2>=10 && number2<=20){
     console.log(true);
}
let stringData ="no";
if (stringData == "yes" || stringData == "no"){
     console.log(true);
}

//switch statements 
let day =4;
switch (day){
     case 1:
          console.log("monday")
          break;
     case 2:
          console.log("tuesday")
          break;
     case 3:
          console.log("wednesday")
          break;
     case 4:
          console.log("thursday")
          break;
     case 5:
          console.log("friday")
          break;
     default: 
     console.log("Invalid Day");  
}