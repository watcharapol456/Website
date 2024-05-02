const messages=[
    "สวัสดีตอนเช้า",
    "Hello World",
    "Good Morning",
    "ราตรีสวัสดิ์",
    "Good Night",
    "MooNoi",
    "Watcharapol"
]
const btn = document.querySelector('.btn')
const container = document.querySelector('.container')


function randomMessage(){
    return (messages[Math.floor(Math.random()*messages.length)])
}


btn.addEventListener("click",()=>createNotification())

function createNotification(){
    const noti  = document.createElement("div")
    noti.classList.add("notification")
    noti.innerText=randomMessage()
    container.appendChild(noti)
    setTimeout(() => {
        noti.remove()
    }, 3000);
}
