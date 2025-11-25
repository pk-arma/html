// // javascript //
// Day 1 (1.5 hr)
// JS basics: var, let, const

// Data types: string, number, boolean, null, undefined, symbol

// Hands-on: declare variables, check types
// var basics = 1
// let basics ='1'
//      basics =2;
     
 const DL= [
    {
      "term": "HTML",
      "description": "A markup language for creating web pages."
    },
    {
      "term": "CSS",
      "description": "A style sheet language for designing web pages."
    },
    {
      "term": "JavaScript",
      "description": "A programming language for web development."
    }
  ]

const Tbody = document.getElementById("tbody");

// Create a new row
console.log("hello rendering")
let list = document.createElement('tr');
     DL.map((item)=>{
          const ulist = document.createElement('td');
          console.log("item.term;",item.term)
          ulist.textContent = item.description;  // Add text to the cell
// Append cell to row
         list.appendChild(ulist);
     })
// Create a new cell
console.log("list",list)

// ulist.textContent = 'aljasl';  // Add text to the cell

// // Append cell to row
// list.appendChild(ulist);

// Append row to tbody
Tbody.appendChild(list);

