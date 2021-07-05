
const express = require("express");


const app = express();
const http = require("http").createServer(app)
const io = require ("socket.io")(http)



app.use(express.static("public"));
app.get("/",(req, res)=>{

    res.sendFile(__dirname + "/index.html")
})

http.listen(3000, ()=>{
    console.log(`lisning on port 3000`);
})




// socket io


io.on("connection", (socket)=>{
    
    socket.on("message" , (msg)=>{
        
   socket.broadcast.emit("message",msg)        //we can write anything beside message ,,,  brodcast mean it send the massage to the all user instead of himself



    })
})

