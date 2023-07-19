const fs = require("fs")

let file = process.argv[2]

let extractNewLines = () => {
    try {
        fs.readFile(file, "utf8", (err, data) => {
            if (!err){
                let x = data.split("\n")
                let xx = x.length-1
                console.log(xx)
            }
        })
    } catch (error) {
        console.error(error)
    }
}

extractNewLines()