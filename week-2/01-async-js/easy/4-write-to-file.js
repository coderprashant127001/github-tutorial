// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
const data = `     You can pass as many arguments       as you need to the callback function, but it's important to ensure that the firs
t argument is always reserved fo        r the error object, i         f applicable, to maintain consistency w      ith Node.js error handling conventions.`;

fs.writeFile('./week-2/01-async-js/easy/sample.txt', data, 'utf8', (err) => {
    console.log('wrote in file successfully \n');
})

fs.readFile('./week-2/01-async-js/easy/sample.txt', 'utf8', (err,data) => {
    console.log(data);
})

// fs.writeFile() takes four parameters:
// The file path (filePath)
// The data to be written (data)
// The encoding (optional, 'utf8' in this example)
// A callback function that will be called once the write operation is completed or an error occurs. The callback function receives an error
//  object (err) if an error occurred during the write operation.

