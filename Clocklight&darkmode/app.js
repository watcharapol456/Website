const timeEl = document.querySelector(".time")
const btnToggle = document.querySelector(".toggle")
function setTime(){
    let time = new Date()
    let hours = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    timeEl.innerHTML=`${hours} : ${min <10 ? `0${min}`: min } : ${sec <10 ? `0${sec}`: sec}`
}
btnToggle.addEventListener("click",(e)=>{
    let html = document.querySelector('html')
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML="โหมดกลางคืน"
    }else{
        e.target.innerHTML="โหมดกลางวัน"
        html.classList.add("dark")
    }
})
setTime()
setInterval(setTime,1000)


