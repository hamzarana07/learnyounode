const fs = require("fs")
const http = require("http")

const path = process.argv[3]
const port = process.argv[2]

const server = http.createServer((req,res)=>{
    const readStream = fs.createReadStream(path)
    readStream.pipe(res)
    
})
server.listen(port, ()=>{
    console.log(`Server listening on http://localhost:${port}`)
})