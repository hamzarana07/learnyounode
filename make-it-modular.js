const mymodule = require("./mymodule")


const dir = process.argv[2]
let ext = process.argv[3]

mymodule(dir, ext)