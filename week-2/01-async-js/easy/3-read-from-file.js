// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

fs.readFile('./week-2/01-async-js/easy/sample.txt','utf8', (err,data)=>{            //   The dot (.) at the beginning of a file path is typically used to represent the current working directory. When you include a dot at the start of a path, it indicates that the file path is relative to the current location or working directory.
console.log(data);
})

// for (let i = 0; i < 10000000000; i++) {
      
// }
console.log('hello');