const fs = require("fs")
const path = require("path")

const dir = process.argv[2]
let ext = process.argv[3]

let myFunc = (dir, ext, callback)=>{
    
    fs.readdir(dir, (err, data)=>{
        if (!err){
            const filteredFiles = data.forEach((file)=>{
                if (path.extname(file) ===  "." + ext){
                    console.log(file)
                    return file
                    
                }
            });
            callback(null, filteredFiles)

        } else{
            return callback(err)
        }
    })
}


module.exports = myFunc