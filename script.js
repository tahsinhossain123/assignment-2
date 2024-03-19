// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected = "SELECT"; // set default value to "SELECT" to help with input conditionals and user error

// Add a row and increment the total number of columns
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

// Remove a row and decrement the total number of rows
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

// Set global variable for selected color as the value of drop down menu
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}

// add function for coloring the clicked cell 
document.getElementById("grid").addEventListener('click', function(event) {
    const cell = event.target;
    if (cell.tagName === 'TD') { 
        if (colorSelected !== "SELECT") {
            cell.style.backgroundColor = colorSelected;
        } else {
            alert("Please select a color first!");
        }
    }
});

// Fill all uncolored cells. Added conditional to check for user error.
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
function fillAll() { 
    if (colorSelected === "SELECT") {
        alert("Please select a color first!");
        return;
    }

    let allCells = document.getElementById("grid").getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells. Finds all table data elements and sets their color to empty
function clearAll(){
    let allCells = document.getElementById("grid").getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = "";
    }
}