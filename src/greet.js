const [_executionPath, _filePath, ...userArgs] = process.argv;

if (userArgs.length === 0) {
    console.log("Hello, stranger!");
}

const userPhrase = userArgs.join(" ");

console.log(`Hello ${userPhrase}`);
