const http = require("http");

const url = process.argv[2]

let get = (url)=>{
    http.get(url, (response)=>{
        let data = "";
        response.setEncoding("utf-8");
        response.on("data", (chunk)=>{
            data += chunk+"\n";
        })
        response.on("end", ()=>{
            if (data === ""){
                console.log("No data")
            }else{
                console.log(data)
            }
        })
        response.on("error", (error)=>{
            console.error(error)
        })
    })
}

get(url)