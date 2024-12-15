 //statement
 console.log("This is a Javascript statement");
 //variables
 let fullName ="naomi"; //let
 var temperature =30; //var
 console.log(temperature);
 const pi=3.14; //constant
 console.log(pi);
 //arithmetic operator
 let length =10;
 let width =15;
 console.log(length*width);
 let restaurantName = "Naomi's Kitchen";
 let orderAmount =5000;
 let deliveryfee =1000;
 let totalamount = orderAmount+deliveryfee;
 console.log(`The total amount of your food from ${restaurantName} is ${totalamount}`)
 console.log(typeof deliveryfee);

 //arithmetic operators exercises: add two numbers and print the result 
 let num1 =20;
 let num2 =30;
 console.log(num1 + num2);//outputs 50
 //comparison operators exercises: check if a number is greater than another number
 let x=5;
 let y =7;
 console.log(7>5);//outputs true
 //boolean variable using the !(not) operator
 let isAdmin = true;
 console.log(!(isAdmin));//outputs false because of the !(not) operator added 
 //tenary operator exercise 
 let a =5000;
 let b= 2000;
 let c =3000;
 let total = a+b+c;
 console.log(total);
 console.log(total > 10000 ? "Over Budget!!" : "Within Budget");
 //tenary operator with logical operator 
 let score =50;
 let result = score>=70?"A" : 
      (score >=50 && score<=69 ? "B": "FAIL");//you can nest another condition in a condition 
      //the logic is to check the first condition and if it false, it will check the other condition for the next range 
 console.log(result);