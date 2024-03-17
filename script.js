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
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    let table = document.getElementById("grid");
    table.deleteRow(-1);
    numRows--;
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}

// add function for coloring the clicked cell
//var cells = document.querySelectorAll()

// Fill all uncolored cells
function fillU(){
    if (colorSelected != "SELECT") {
        let allCells = document.getElementById("grid").getElementsByTagName("td");
        for (let i = 0; i < allCells.length; i++) {
            if (allCells[i].style.backgroundColor == "") {
                allCells[i].style.backgroundColor = colorSelected;
            }
        }
    }
    else {
        alert("Please select a color first!");
    }
    
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}