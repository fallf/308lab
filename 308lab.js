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
    console.log('---------------refactory---------------')
    let title = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
    const splitRows = title.split("\n");
    console.log(splitRows);
console.log('----------Expanding Functionality--------')
    let data = []; // This will hold all the rows of data
    let headers = []; // This will hold the headers

    // Check if there are rows
    if (splitRows.length > 0) {
        // Process the first row as headers
        headers = splitRows[0].split(","); // Split the header row into columns
        data.push(headers); // Add headers to the data array

        // Process the remaining rows as data
        for (let i = 1; i < splitRows.length; i++) {
            let rowData = splitRows[i].split(","); // Split the current row into columns
            data.push(rowData); // Add this row of data to the data array
        
        }
    }

    // Remove the headers from the data array
    data.shift(); // Remove the first row (the headers)


    // Now, `data` contains only the rows of data
    console.log(data);
    // Create an empty array to store the objects
let result = [];

// Iterate through each row of data
for (let i = 0; i < data.length; i++) {
    // Create an object for the current row
    let row = data[i]; // Get the current row
    let obj = {
        id: row[0],
        name: row[1],
        occupation: row[2],
        age: row[3]
    };
    
    // Add the object to the result array
    result.push(obj);
}

// Log the result array of objects
console.log(result);