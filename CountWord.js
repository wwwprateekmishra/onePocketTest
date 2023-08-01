const fs = require('fs');

const wordsCountInFile = (filename) => {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(err.message);
            return;
        }
        const words = data.trim().split(/\s+/);
        const wordCount = words.length;

        console.log(wordCount);
    });
}
wordsCountInFile('data.txt');
