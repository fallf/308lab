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
    const splitRows = title.split("\n");
    console.log(splitRows);

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
// Part 3 Result: Array of Objects
let dataArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
];
console.log(dataArray);

// Remove the last element
dataArray.pop();

// Insert object at index 1
dataArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add new object to the end
dataArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log("Data after modifications:");
console.log(dataArray);

// Calculate the average age
let totalAge = 0;
dataArray.forEach(obj => totalAge += parseInt(obj.age)); // Convert age to integer and add to total
let averageAge = totalAge / dataArray.length;

console.log("Average Age:", averageAge);

// Convert back to CSV but why when it
headers = Object.keys(dataArray[0]).join(","); // Reuse the headers variable here
let rows = dataArray.map(obj => Object.values(obj).join(",")).join("\n");
let csvData = headers + "\n" + rows;

console.log("CSV Format:");
console.log(csvData);