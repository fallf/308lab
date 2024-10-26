// let splitRows = title.split("\n");
// let tableElement = [];
// let columnHeaders = splitRows[0].split(",");
// let numberOfColumns = columnHeaders.length;
// let count = 0;
// console.log(splitRows);
// for (let element of splitRows) {
//     let cell = element.split(",");
//     tableElement[count] = cell;
//     count++;
// }
// console.log("Number of columns:", numberOfColumns);
// console.log(tableElement);

let title = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let splitRows = title.split("\n");
console.log(splitRows);

let data = []; // This will hold all the rows of data
let headers = []; // This will hold the headers



// Assume splitRows is already defined, containing the split CSV data
splitRows.forEach((row, index) => {
    if (index === 0) {
        // If it's the first row, set the headers
        headers = row.split(","); // Split the header row into columns
        data.push(headers); // Add headers to the data array
    } else {
        // For other rows, split the data and add it to the data array
        let rowData = row.split(","); // Split the current row into columns
        data.push(rowData); // Add this row of data to the data array
    }
});

// After populating the data array, remove the header row
data.shift(); // This will remove the first row (the headers)

// Now, `data` contains only the rows of data
console.log(data);