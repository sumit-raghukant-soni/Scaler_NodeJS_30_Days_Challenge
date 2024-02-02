const fs = require('fs/promises');  // Use fs.promises for promise-based API
async function writeToFile(filePath, content) {
    try {
        await fs.writeFile(filePath, content);
        return filePath;
    } catch (err) {
        return err.message;
    }
}

async function run() {
    const result1 = await writeToFile('test-files/output1.txt', 'Sample content.');
    console.log(`Output: Data written to ${result1}\n`);

    const result2 = await writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
    console.log(`Error writing to file: ${result2} \n`);
}

run();
