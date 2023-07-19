const net = require("net")

let port = process.argv[2]
function time(port) {
    const server = net.createServer((socket) => {
        let date = new Date()
        const year = date.getFullYear()
        console.log(year)
        let month = date.getMonth()+1
        month = month.toString()
        month = month.padStart(2, "0")
        console.log(month)
        let day = date.getDate()
        console.log(day)

        let hours = date.getHours()
        hours = hours.toString()
        hours = hours.padStart(2, "0")
        console.log(hours)
        let minutes = date.getMinutes()
        minutes = minutes.toString()
        minutes = minutes.padStart(2, "0")
        console.log(minutes)
        let mydate =
            year + "-" + month + "-" + day + " " + hours + ":" + minutes
        console.log(mydate)
        socket.write(mydate + "\n")
        socket.end()
    })
    server.listen(port)
}

time(port)