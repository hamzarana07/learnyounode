const fs = require("fs")

let file = process.argv[2]

let extractNewLines = ()=>{
    let myFile = fs.readFileSync(file, "utf8")
    splitIt = myFile.split("\n")
    return splitIt.length-1
}

console.log(extractNewLines())