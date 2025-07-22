// ! ------------DAY 1----------------------
// the swith statement

const day = "monday";

switch (day) {
  case "monday":
    console.log("plan course structure");
    break;
  case "tuesday":
    console.log("prepare videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code");
    break;
  case "friday":
    console.log("go to granny's house");
    break;
  case "saturday":
    console.log("brother's house");
    break;
  case "sunday":
    console.log("to to church");
  default:
    console.log("not a valid day");
}

if (day === "monday") {
  console.log("its monday");
} else if (day === "tuesday") {
  console.log("its tuesday");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code");
} else {
  console.log("valid date pls");
}

/* 
  statement AND expression
//* expression is a piece of code that produces a value
  3+4 ; 1991; true&& false && true
//* a statement does not produce a value more. Like a big piece of code  
  if else statement, switch statement

  
*/

function movieTicker(age, day) {
  let isFree;
  let price;
  if (age < 5 || age > 60) {
    isFree = true;
    price = "on the house";
    console.log("thicket price :" + price);

    return;
  } else {
    isFree = false;
  }

  switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      price = age < 18 ? 6 : 8;
      // price=age<18 && 6 || age>18 && 8
      break;
    case "sunday":
    case "saturday":
      price = 10;
      break;
    default:
      console.log("invalid date");
      return;
  }

  console.log("thicket price $" + price);

  console.log(isFree);
}

movieTicker(62, "monday");

// ! day 2

function calculator(a = 0, opp = "+", b = 0) {
  if (isNaN(a) || isNaN(b)) {
    console.log("enter a valid number");
    return;
  }

  let result;
  switch (opp) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = Math.floor(a / b);
      break;
    default:
      console.log("enter a valid opprator");
  }
  console.log(result);
}

calculator();

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
console.log(checkPasswordStrength("abcdef"));
console.log(checkPasswordStrength("abc123"));
console.log(checkPasswordStrength("abc123@!"));

function divideCheck(num) {
  console.log(num);

  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  }
  return num;
}

const fizzBuzzTwist = function (n) {
  if (n < 1 || n > 100) return "invalid number";
  let data;
  // let dividebyTree=
  for (let i = 1; i <= n; i++) {
    data = divideCheck(i);
    console.log(data);
  }
};

console.log(fizzBuzzTwist(15));

const students = [
  { name: "Ada", score: 80 },
  { name: "Ben", score: 45 },
  { name: "Cynthia", score: 60 },
  { name: "Daniel", score: 59 },
];
function passedStudent(arr) {
  const x = arr
    .filter((pass, i) => pass.score >= 60)
    .map((name, i) => name.name);
  console.log(x);
}

passedStudent(students);

// day 4

const words = ["apple", "banana", "apple", "orange", "banana", "grape"];

const findDuplicates = function (words) {
  console.log(words);
  let a = [];
  let b = [];
  let val = "";
  for (let k of words) {
    !a.includes(k) ? a.push(k) : b.push(k);
  }
  return b;
};

findDuplicates(words);

// day 5
const nums = [3, 5, 7, 2];

const sum = nums.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(sum);

const info = {
  name: "christian",
  job: "software dev",
  age: 21,
  hobbies: ["dance", "sing", "code"],
};
info["school"] = "Unilag";
info.address = "princewell";
info;
console.log(info.name);
console.log(info["name"]);

//
const numbers = [3, 12, 7, 5, 18, 6];

function findMax(num) {
  return num.reduce((acc, val) => {
    return val > acc ? val : acc;
  }, num[0]);
}

console.log(findMax(numbers));
console.log(findMax([-4, -9, -1, -3]));

//
const countWords = function (word) {
  return word.reduce((acc, val) => {
    console.log(val);
    acc[val] = !acc[val] ? 1 : acc[val] + 1;
    return acc;
  }, {});
};
const wordsArr = ["apple", "banana", "apple", "orange", "banana", "apple"];

console.log(countWords(wordsArr));

//
//! Next up, want to try counting how many times each letter appears in a single string?
function countLetters(letter) {
  const letarr = [...letter];
  return letarr.reduce((acc, val) => {
    acc[val] = !acc[val] ? 1 : acc[val] + 1;
    return acc;
  }, {});
}
console.log(countLetters("hello"));

//

function createStudent(name, age, score) {
  return {
    name,
    age,
    score,
    average:
      score.reduce((acc, val) => {
        return acc + val;
      }, 0) / score.length,
  };
}

console.log(createStudent("Ada", 19, [80, 90, 100]));

// day 6

const student = {
  name: "Ada",
  scores: [80, 90, 100],
  getAverage() {
    this.average =
      this.scores.reduce((acc, val) => {
        return acc + val;
      }, 0) / this.scores.length;
    return this.average.toFixed(1);
  },
};

console.log(student.getAverage());
console.log(student);

// day i don't know
const stud = [
  { name: "Ada", scores: [80, 90, 100] },
  { name: "Ben", scores: [60, 65, 70] },
  { name: "Cynthia", scores: [88, 92, 95] },
];

function generateLeaderboard(stud) {
  return stud.reduce((acc, val, i) => {
    const a = {};
    const ave = val.scores.reduce((ac, v) => ac + v, 0);

    a["name"] = val.name;
    a["average"] = val.scores.reduce((ac, v) => ac + v, 0);
    acc.push(a);

    return acc;
  }, []);
}

const val = stud.map((student) => {
  const total = student.scores.reduce((acc, score) => acc + score, 0);
  const average = +(total / student.scores.length).toFixed(1);

  return { name: student.name, average };
});

console.log(generateLeaderboard(stud));

const studen = [
  { name: "Ada", average: 90 },
  { name: "Ben", average: 75 },
  { name: "Chika", average: 58 },
  { name: "Dapo", average: 81 },
  { name: "Emeka", average: 62 },
];

const v = studen.reduce((acc, val) => {
  acc["A"] = acc["A"] || [];
  acc["B"] = acc["B"] || [];
  acc["C"] = acc["C"] || [];

  if (val.average > 80) {
    console.log(val.name);

    acc["A"].push(val.name);
  }
  if (val.average > 60 && val.average < 80) {
    acc["B"].push(val.name);
  } else {
    acc["C"].push(val.name);
  }
  return acc;
}, {});

console.log(v);
// algorigthm to remove duplicates
function removeDuplicates(arr) {
  console.log(arr);
  const countNum = {};

  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    countNum[arr[i]] = countNum[arr[i]] ? countNum[arr[i]] + 1 : 1;
  }
  console.log(countNum);
  const val = [];
  arr.forEach((element) => {
    console.log(val.length);
    if (!val.includes(element)) {
      val.push(element);
    }
    console.log(element);
  });
  console.log(val);
}

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

// ---------------------------------------------------------------
// ---------------------------------------------------------------
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates(["1", "2", "2", "3", "4", "4", "5"]));

// function removeDuplicates(arr) {
//   console.log(arr);
//   const v=arr.filter((val,i)=>i=== arr.indexOf(val))
//   console.log(v);
// }

//! day 7
// note u can loop throuh an obj with the for in loop 
function mostFrequent(arr) {
  const count = arr.reduce((acc, val) => {
    // loop through and count the values
    acc[val] = !acc[val] ? 1 : acc[val] + 1;
    return acc;
  }, {});

  const obj = Object.entries(count);
  let track = 0;
  const [filteredVal] = obj.filter((val, i) => {
    const [a, b] = val;
    if (b > track) {
      track = b;
    }
    
    return track === b;
  }).reverse()[0];
  console.log("ans",filteredVal);
  
  return filteredVal;
}

// mostFrequent([1, 2, 2, 3, 3, 3, 4])
// ➞ 3

// mostFrequent(['a', 'b', 'a', 'a', 'c', 'b'])
console.log(mostFrequent(['a', 'b', 'a', 'a', 'c', 'b']));
console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));

// ➞ 'a

// day 8
function groupWords(val){
  const track={}
  val.forEach((v)=>{
    
    const eachWord=v[0]
    track[eachWord]=track[eachWord]||[]
    if(v.startsWith(eachWord)){
      track[eachWord].push(v)
    }
  })
  console.log(track);
}

groupWords(["apple", "banana", "avocado", "blueberry", "cherry"]);

// day 9
// ! my version 
// i should have concatinated tack word
function reverseWords(word){
  const splitWord=word.split(" ");
  const rev=[]
  for(let w of splitWord){
    let concat=""
    for (let i=w.length;i>0;i--){
      const index=i-1;
      concat+=w[index]
      // index===0?rev.push(w[index]," "):rev.push(w[index])   
    }
    rev.push(concat)
    
  }
  return `"${rev.join(" ")}"`;
}
console.log(reverseWords("hello world"));