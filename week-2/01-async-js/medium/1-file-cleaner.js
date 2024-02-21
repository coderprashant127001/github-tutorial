// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require('fs');

fs.readFile('./week-2/01-async-js/easy/sample.txt', 'utf8', (err,data) => {
    let d = data;
    console.log(data);
    let ans = data.trim().replace(/\s+/g, ' ');
    console.log(ans);
})



// WITHOUT REGULAR EXPRESSION
// function removeExtraSpaces(text) {
//     // Split the text into an array of words
//     const words = text.split(' ');
//     console.log(words);
//     // Filter out empty strings and join the words back together with a single space
//     const cleanedText = words.filter(word => word !== '').join(' ');

//     return cleanedText;
// }

// // Example usage:
// const textWithExtraSpaces = "   This   is   an   example      with    extra   spaces.   ";
// const cleanedText = removeExtraSpaces(textWithExtraSpaces);
// console.log(cleanedText); // Output: "This is an example with extra spaces."
