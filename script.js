// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected = "SELECT"; // set default value to "SELECT" to help with input conditionals and user error

// Add a row
function addR() {
    let table = document.getElementById("grid");
    let row = table.insertRow(numRows);
    for (let i = 0; i <= numCols; i++) {
        row.insertCell(i);
    }
    numRows++;
}

// Add a column
function addC() {
    var table = document.getElementById("grid");
    if(numRows === 0){
        addR();
    } else {
        for (let i = 0; i < numRows; i++) {
            var row = table.rows[i];
            row.insertCell(numCols);
        }
        numCols++;
    }
}

// Remove a row
function removeR() {
    let table = document.getElementById("grid");
    table.deleteRow(-1);
    numRows--;
}

// Remove a column
function removeC() {
    let table = document.getElementById("grid");
    if (numCols > 0) {
        for (let i = 0; i < numRows; i++) {
            let row = table.rows[i];
            if (row.cells.length > 0) { 
                row.deleteCell(-1);
            }
        }
        numCols--; 
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}

// add function for coloring the clicked cell
//var cells = document.querySelectorAll()



// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    let allCells = document.getElementById("grid").getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = "white";
    }
}