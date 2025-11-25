 // javascript //

// Control flow: if-else, switch

// Loops: for, while, for...of, for...in

// Hands-on: loop over arrays & objects

// switch  => 

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 }
];

 let length = users.length;
 console.log(length)
while (length<=3){
    console.log("name")  
    break
}
let text = "";
let i = 0;
 
do {
  text += i + "<br>";
 console.log(text) 
  i++;
}
while (i < 5);


let num = 5;

switch(num){
  case 1:console.log("kasie ho");
    break;
  case 2:
  console.log("hallo");
    break;
  case 3:
  console.log("hi!!");
    break;
  default: console.log("out")
}

