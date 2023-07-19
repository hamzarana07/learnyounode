const fs = require("fs")
const path = require("path")

const dir = process.argv[2]
let ext = process.argv[3]

let myFunc = ()=>{
    
    fs.readdir(dir, (err, data)=>{
        if (!err){
            data.forEach((file)=>{
                if (path.extname(file) ===  "." + ext){
                    console.log(file)
                    return file
                }
                
            });
        }
    })
}

myFunc()