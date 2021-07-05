const socket = io();

let name;
let textarea = document.querySelector("#textarea");
let messageArea = document.querySelector(".message__area")
do{
    name = prompt("enter your name")
}
while(!name)

textarea.addEventListener("keyup" , (e)=>{

   
   if(e.key === "Enter"){
       sendMessage(e.target.value)
    }
})

function sendMessage(message)
{
let msg = {
    user: name,
    message : message.trim()
}
 // append
appendMessage(msg, "outgoing")

textarea.value="";
scrollToBottom()



//send to server

socket.emit("message", msg) //massage is basically a name we can defne any name


}

function appendMessage(msg, type)
{
    let mainDiv = document.createElement("div");
    let className = type;
    mainDiv.classList.add(className,"message")



    let markUp =`
    
    <h4>${msg.user}</h4>
    <p> ${msg.message}<p>

    `
    mainDiv.innerHTML=markUp;
    messageArea.appendChild(mainDiv)

}


// recieve messages

socket.on("message", (msg)=>{

    appendMessage(msg,"incoming")
    scrollToBottom()
})



function scrollToBottom() {
    
messageArea.scrollTop =messageArea.scrollHeight

}
