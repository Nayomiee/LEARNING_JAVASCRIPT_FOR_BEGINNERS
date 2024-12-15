# Learning JavaScript 
<p style="font-size:26px;">
I decided to  self learn and i will be documenting the notes here. JavaScript is used for interactivity on the web. It is a high-level, dynamic, and interpreted programming language that is primarily used. It can serve the client-side and server side using NODEJS. You can include JavaScript in an HTML file using the inline, internal and external methods. 
</p>


## IMPORTANT DETAILS TO KEEP IN MIND 
<ul style="font-size:26px;">
<li> Semicolons are optional but recommended for better readability and to avoid errors.</li>
<li> Variables are case sensitive. JavaScript is case sensitive. Examples: **firstName** is not the same as **Firstname**</li>
<li> Statements-JavaScript instructions are called statements and are executed one by one </li>
</ul>


## TOPICS IN JAVASCRIPT 
### SYNTAX AND COMMENTS 
<ul style="font-size:26px;">
<li> // is used for single line comments</li>
<li>/**/ is used for multi line comments</li>
</ul>

### VARIABLES AND DATA TYPES
 <p style="font-size:24px;">Variables are containers that store data values. Declaring a variable is done using the <strong>let</strong>(modern way), <strong>const</strong>, and <strong>var</strong>(old way) keywords. </p>
<ul style="font-size: 26px;">
    <li><strong>var</strong> is not recommended anymore because of it's issues with scope.</li>
    <li><strong>let</strong> allows reassigning and it is block scoped(exists only within the {} where it's declared).</li>
    <li><strong>const</strong> cannot be reassigned and it is block-scoped. It is used for variables that should not be changed.</li>
</ul>
<ul style="font-size: 26px;"><strong>RULES FOR NAMING VARIABLES</strong>
    <li>Must start with a letter,underscore_,or dollar sign$</li>
    <li> Cannot start with a number.</li>
    <li>Must not use reserved keywords(var,if,let..etc)</li>
    <li>Must not use spaces.</li>
    <li>Must not use special characters except underscore and dollar sign.</li>
    <li>Must be a valid identifier.</li>
</ul>

<p style="font-size: 26px; font-weight: 800;">DATA TYPES</p>
<p style="font-size: 24px; font-weight: 800; font-style:italic;">CATEGORIES OF DATA TYPES</p>

<p style="font-size: 20px; font-weight: 500;">PRIMITIVE DATA TYPES</p>

<ul style="font-size: 18px;">
    <li>String: text enclosed in "",'',``</li>
    <li>Number: includes integers and floating point numbers(10,18.5)</li>
    <li>Boolean: true or false</li>
    <li>Null: represents the absence of any object value</li>
    <li>Symbol: a unique and immutable primitive value</li>
    <li>BigInt: Used for very large integers</li>
</ul>

```javascript
let firstName ="naomi";(string)
let age = 25;(number)
let isAdmin = true;(boolean)
let name ="null";(null)
let uniqueID = Symbol("id");
let veryLargeNumber = 9007199254740991n;(BigInt)
```
<p style="font-size: 20px; font-weight: 500;">NON-PRIMITIVE DATA TYPES</p>
<ul style="font-size: 18px;">
<li>Object: collection of key-value pairs</li>
<li>Array: collection of values in a specific order</li>
<li>Functions: reusable blocks of code</li>
</ul>

```javascript
let person = {
    name:"naomi",
    age:25
    };(object)
let colors = ["red","blue","green"];(array)
function greet(){
    return "hello";
}
console.log(greet());(function)
```
<h2>OPERATORS</h2>
<p style="font-size: 22px;">Operators are symbols or keywords  used to perform operations on variables and values(operands). There are several types of operators in JavaScript.<strong>TYPES OF OPERATORS:</strong></p>
 <p><strong>ARITHMETIC OPERATORS</strong>- Used for mathematical calculations</p>
 

<table style="border-collapse: collapse;">
    <thead>
        <tr style="border: 1px solid black;">
            <th style="border: 1px solid black;">Operator</th>
            <th style="border: 1px solid black;">Description</th>
            <th style="border: 1px solid black;">Example</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">+</td>
            <td style="border: 1px solid black;">Addition</td>
            <td style="border: 1px solid black;">5+3=8</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">-</td>
            <td style="border: 1px solid black;">Subtraction</td>
            <td style="border: 1px solid black;">5-3=2</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">*</td>
            <td style="border: 1px solid black;">Multiplication</td>
            <td style="border: 1px solid black;">5*3=15</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">/</td>
            <td style="border: 1px solid black;">Division</td>
            <td style="border: 1px solid black;">15/3=5</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">%</td>
            <td style="border: 1px solid black;">Remainder</td>
            <td style="border: 1px solid black;">5%2=1</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">**</td>
            <td style="border: 1px solid black;">Exponential</td>
            <td style="border: 1px solid black;">5**2=25</td>
        </tr>
    </tbody>
</table>

**EXAMPLE**
``` javascript
let a = 5;
let b = 3;
console.log(a+b); //8
console.log(a-b); //2
console.log(a*b); //15
console.log(a/b); //1.6666666666666667
console.log(a%b); //2
console.log(a**b); //25
```
<p><strong>ASSIGNMENT OPERATORS</strong>- Used to assign values to variables</p>
<table style="border-collapse: collapse;">
    <thead>
        <tr style="border: 1px solid black;">
            <th style="border: 1px solid black;">Operator</th>
            <th style="border: 1px solid black;">Description</th>
            <th style="border: 1px solid black;">Example</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">=</td>
            <td style="border: 1px solid black;">Assign</td>
            <td style="border: 1px solid black;">x=5</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">+=</td>
            <td style="border: 1px solid black;">add and assign</td>
            <td style="border: 1px solid black;">x+=5</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">-=</td>
            <td style="border: 1px solid black;">subtract and assign</td>
            <td style="border: 1px solid black;">x-=5</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">/=</td>
            <td style="border: 1px solid black;">Division and assign</td>
            <td style="border: 1px solid black;">x/=5</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">%=</td>
            <td style="border: 1px solid black;">Remainder and assign</td>
            <td style="border: 1px solid black;">x%=5</td>
        </tr>
    </tbody>
</table>


```javascript
let x = 10;
x += 5; // x = x + 5
console.log(x); //15
```

- **COMPARISON OPERATORS** -used to compare variables returning a boolean 

|OPERATOR|DESCRIPTION|EXAMPLE|
|:------:|:---------:|:------:|
| == | Equal to | 5 == '5' (true) |
|=== | Strictly equal to | 5 === '5' (false) |
| != | Not equal to | 5 != '5' (false) |
| !== | Strictly not equal to | 5 !== '5' (true) |
| > | Greater than | 5 > 3 (true) |
| < | Less than | 5 < 3 (false) |
| >= | Greater than or equal to | 5 >= 3 (true) |
| <= | Less than or equal to | 5 <= 3 (false) |

```javascript
console.log(5 == '5'); // true
console.log(5 === '5'); // false
```

- **LOGICAL OPERATORS** - Used to combine or negate conditions

|OPERATOR|DESCRIPTION|EXAMPLE|
|:------:|:---------:|:------:|
| && | Logical *and* | 5 > 3 && 3 > 1 (true)|
| \| \| | Logical *or* | 5 > 3 \| \| 3 > 1 (true)|
| ! | Logical *not* | !(5 > 3) (false) |

```javascript
let age =18;
console.log(age >13 && age < 65); // true(AND)
console.log(age > 20 || age < 18); // false(OR)
console.log(!(age === 18)); //false(NOT)
```

- **INCREMENT AND DECREMENT OPERATORS** - Used to increment or decrement a variable by 1


     |OPERATOR|DESCRIPTION|EXAMPLE
     |:------:|:---------:|:------:|
     |++|INCREMENT|X++ or ++X|
     | -- | DECREMENT | X-- or --X |

     ```JAVASCRIPT
     let x = 5;
     console.log(x++); // 6
     console.log(++x); // 6
     ```
- **TERNARY OPERATOR** - Used to simplify if-else statements

  SYNTAX - condition ? value_if_true : value_if_false
  ```JAVASCRIPT
  let age = 18;
  let message = age >= 18 ? "You are an adult" : "You are a minor";
  console.log(message); // You are an adult
  ```
- **TYPE OPERATORS** - Used to check or change data types

   |OPERATOR|DESCRIPTION|EXAMPLE|
   |:-------:|:---------:|:-------:|
   |typeOf|returns the data type|typeOf "Naomi" = string|
   |instanceOf|checks if an object belongs to a class|arr instanceOf Array|

   ```javascript
   let firstName = "naomi"
   console.log(typeOf firstName)//string
   ```

##### TYPE CONVERSION - TO CHANGE FROM ONE DATA TYPE TO ANOTHER
- **IMPLICIT CONVERSION** - JS automatically converts data types
- **EXPLICIT CONVERSION** - Manually convert data types using specifi methods

```javascript
console.log("5" + 3); //ouputs "53"
console.log("5" - 3); //ouputs "2"
console.log(true +2); //outputs 3(true changes to 1)
console.log(false + "hello"); //falsehello(flase changes from boolean to string)
```

###### EXPLICIT CONVERSION
- CONVERSION TO STRING - String() or .toString()
```javascript
let num =42;
console.log(String(num)); //"42"
console.log(num.toString()); //"42"
```

- CONVERTING TO NUMBER - parseInt() or parseFloat() or Number()
```javascript
let str ="123"
console.log(Number(str)); //123
console.log(parseInt("123.45")) //123
console.log(parseFloat("123.45")) //123
```
- COVERTING TO BOOLEAN - Boolean()
```javascript
console.log(Boolean(0)); //false (0 is falsy)
console.log(Boolean(1)); //true
console.log(Boolean("hello")); //true
console.log(Boolean("")); //false (empty string is falsy)
```

###### EDGE CASES
- Strings can be converted to numbers 
```javascript
console.log(Number("hello")); // NaN(NOT A NUMBER)
```
- NULL converts to 0 when converting to a number
```javascript 
console.log(Number(null)); //0
```
- Undefined converts to Nan
```javascript
console.log(Number(undefined)); //NaN
```

## CONDITIONAL STATEMENTS - Makes decisions based on certain conditions. executes code blocks whether a condition is true or false

#### if Statement
<strong>Syntax: </strong>

```javascript
if (condition){
    //code to be executed
}else{
    //code to be executed if the condition isn't met
}
```

<strong>Example:</strong>

```javascript
let age =18; //declares and assigns a varialble
if (age >= 18){
    console.log("You are old enough"); //executes if age is greater than or equal to 18
}else{
    console.log("You are too young");
}
```
#### if-else if Statement - for multiple conditions to check 
<strong>Syntax</strong>

```javascript
if (condition1){
    //code if condition 1 is true
}else if(condition2){
    //code if condition 2 is true
}else{
    //code if none is true
}
```

<strong>Example:</strong>

```javascript
let score =75;
if (score>=90){
    console.log("a");
}else if(score>=75){
    console.log("b");
}else if(score >= 50){
    console.log("c");
}else{
    console.log("f");
}
```

#### Ternary Operator - Used to simplify if-else statements
<strong>SYNTAX:</strong>
  
  ```javascript
  condition ? value_if_true : value_if_false
  ```
<strong>EXAMPLE:</strong>

  ```JAVASCRIPT
  let age = 18;
  let message = age >= 18 ? "You are an adult" : "You are a minor";
  console.log(message); // You are an adult
  ```

#### switch Statement
<strong>SYNTAX:</strong>

```javascript
switch (expression){
    case value1:
        //code if expression === value1
        break;
    case value2:
        // code if expression === value2
        break;
    default:
        //code if no match    
}
```
<strong>EXAMPLE:</strong>

```javascript
let day=3;
switch(day){
    case 1: 
       console.log("Monday");
       break;
    case 2: 
       console.log("Tuesday");
       break;
    case 3: 
       console.log("Wednesday");
       break;
    default:
        console.log("Invalid day");
}
```

#### LOGICAL OPERATORS IN CONDITIONS
- AND ( && )
- OR ( || )
- NOT ( ! )

<strong>EXAMPLE:</strong>

```javascript
let age = 20;
let hasID = true;

if (age>=18 && hasID){
    console.log("You can enter")
}
if (age <18 || !hasID){
    console.log("You cannot enter")
}
```










