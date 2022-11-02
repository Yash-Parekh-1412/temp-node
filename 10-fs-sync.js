const { readFileSync , writeFileSync} = require("fs");

const first = readFileSync('./content/first.txt')

writeFileSync('./content/result-sync.txt', `here is the result: ${first}`) 