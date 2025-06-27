// ! ------------DAY 1----------------------
// the swith statement

const day="monday";

switch(day){
  case "monday":
    console.log("plan course structure")
    break;
  case "tuesday":
    console.log("prepare videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code");
    break
  case "friday":
    console.log("go to granny's house");
    break
  case "saturday":
    console.log("brother's house");
    break;
  case "sunday":
    console.log("to to church");
  default:
    console.log("not a valid day");
    
}


if(day==="monday"){
  console.log("its monday");
}
else if(day==="tuesday"){
  console.log("its tuesday");
}
else if(day==="wednesday" || day==="thursday"){
  console.log("write code");
  
}
else{
  console.log("valid date pls");
  
}

/* 
  statement AND expression
//* expression is a piece of code that produces a value
  3+4 ; 1991; true&& false && true
//* a statement does not produce a value more. Like a big piece of code  
  if else statement, switch statement

  
*/

function movieTicker(age,day){
  
  let isFree;
  let price;
  if(age<5||age>60){
    isFree=true
    price="on the house"
      console.log("thicket price :"+price);

    return 
  }else{
    isFree=false
  }

  switch (day){
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      price=age<18 ? 6 : 8
      // price=age<18 && 6 || age>18 && 8
      break
    case "sunday":
    case "saturday":      
      price=10;
      break;
    default:
      console.log("invalid date");
      return
  }

  console.log("thicket price $"+price);
  
  console.log(isFree);
  
}

movieTicker(62,"monday")  

// ! day 2

function calculator(a=0,opp="+",b=0){
  if(isNaN(a)||isNaN(b)){
    console.log("enter a valid number");
    return 
  }

  let result;
  switch (opp){
    case "+":
      result=a+b;
      break
    case "-":
      result=a-b;
      break
    case "*":
      result=a*b;
      break
    case "/":
      result=Math.floor(a/b)
      break
    default:
      console.log("enter a valid opprator");
       
  }
  console.log(result);
  
} 

calculator()

console.log(isNaN(1));

//  day 3 // ! learing functions
/* fundamental building blocks, it is a piece of code that can be reused over and over again  */
function checkPasswordStrength(password) {
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[^a-zA-Z0-9]/.test(password);

  if (password.length < 6) {
    return "Too short";
  }

  if (hasLetters && hasNumbers && hasSymbols) {
    return "Strong";
  } else if (hasLetters && hasNumbers) {
    return "Medium";
  } else if (hasLetters || hasNumbers) {
    return "Weak";
  }

  return "Very weak"; // e.g. symbols only
}

console.log(checkPasswordStrength("abc"));
console.log(checkPasswordStrength("abcdef")  );
console.log(checkPasswordStrength("abc123") );
console.log(checkPasswordStrength("abc123@!")  );


function divideCheck(num){
  console.log(num);
  
  if(num%3===0 && num%5===0){
    return "fizzBuzz"
  }
  else if(num%3===0){
    return "Fizz"
  }
  else if(num%5===0){
    return "Buzz"
  }
  return num
}
 
const fizzBuzzTwist=function(n){
  if(n<1||n>100) return "invalid number"
  let data
  // let dividebyTree=
  for(let i=1;i<=n;i++){
    data= divideCheck(i);
    console.log(data);
  }

}
   

console.log(fizzBuzzTwist(15));

const students = [
  { name: "Ada", score: 80 },
  { name: "Ben", score: 45 },
  { name: "Cynthia", score: 60 },
  { name: "Daniel", score: 59 },
];
function passedStudent(arr){
  const x=arr.filter((pass,i)=>pass.score>=60).map((name,i)=>name.name)
  console.log(x);
  
}



passedStudent(students)

// day 4 

const words = ["apple", "banana", "apple", "orange", "banana", "grape"];

const findDuplicates= function(words){
  console.log(words);
  let a=[]
  let b=[]
  let val=""
  for (let k of words){
    !a.includes(k)?a.push(k):b.push(k)    
  }
  return b
}

findDuplicates(words)

// day 5
const nums = [3, 5, 7, 2];

const sum=nums.reduce((acc,val)=>{
  return acc+val
},0)

console.log(sum);


const info={
  name:"christian",
  job:"software dev",
  age:21,
  hobbies:["dance","sing","code"]
}
info["school"]="Unilag"
info.address="princewell"
info
console.log(info.name);
console.log(info["name"]);


// 
const numbers = [3, 12, 7, 5, 18, 6];

function findMax(num){
 return num.reduce((acc,val)=>{
    return val>acc?val:acc
 },num[0])
}

console.log(findMax(numbers));
console.log(findMax([-4, -9, -1, -3]));    

// 
const countWords =function(word){
  return word.reduce((acc,val)=>{
    console.log(val);
    acc[val]= !acc[val]? 1: acc[val]+1
    return acc
  },{})
}
const wordsArr = ["apple", "banana", "apple", "orange", "banana", "apple"];

console.log(countWords(wordsArr));

//
//! Next up, want to try counting how many times each letter appears in a single string?
function countLetters(letter){
  const letarr=[...letter]
  return letarr.reduce((acc,val)=>{    
    acc[val]=!acc[val]?1:acc[val]+1
    return acc
  },{})
  
}
console.log(countLetters("hello"));
