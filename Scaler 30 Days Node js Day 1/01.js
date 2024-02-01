// The require() function is an integral part of the CommonJS module system, which is used in Node. js for managing dependencies and modularizing code.
const fs = require('fs');

function readFileContent(filePath) {
    fs.readFile(filePath, function (err, data) {
        if (err) {
            console.log("Error", err.message);
        } else {
            console.log(data.toString());
        }
    });
}

// Running The Code:
readFileContent('test-files/file1.txt');
