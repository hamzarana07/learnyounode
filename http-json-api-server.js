const http = require("http")

let port = 8000

const server = http.createServer((req,res)=>{
    
})
server.listen(port, ()=>{
    console.log(`Server is listening on http://localhost:${port}`)
})