// // javascript //
// Day 1 (1.5 hr)

// JS basics: var, let, const

// Data types: string, number, boolean, null, undefined, symbol

// Hands-on: declare variables, check types
var basics = 1
let basics ='1'
     basics =2;
     

const Tbody = document.getElementById("tbody");

// Create a new row
const list = document.createElement('tr');

// Create a new cell
const ulist = document.createElement('td');
ulist.textContent = 'aljasl';  // Add text to the cell

// Append cell to row
list.appendChild(ulist);

// Append row to tbody
Tbody.appendChild(list);

