export default function social() {
    return (
        <h1 id='send'>social</h1> // delete the id 
    )
}

var messages=document.getElementById("messages")
var textbox=document.getElementById("textbox")
var send=document.getElementById("send")


send.addEventListener("click", function(){ 
    var newMessage=document.createElement
    newMessage.innerHTML=textbox.value // text in textbox
    messages.appendChild(newMessage);
    textbox.value = "";

    <script src="social.js"></script>

});



