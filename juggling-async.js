const http = require("http")

urlx = process.argv.slice(2);

let juggle = (urlx) => {
    const reponses = [];
    urlx.forEach((url, index) => {
        setTimeout(()=>{
            http.get(url, (response) => {
                let data = ""
    
                response.setEncoding("utf8")
                response.on("data", (chunk) => {
                    data += chunk
    
                })
                response.on("end", () => {
                    if (data !== "") {
                        console.log(data)
                    }
                })
                response.on("error", (error) => {
                    console.error(error)
                })
            })
        },2000)
    })
}

juggle(urlx)
