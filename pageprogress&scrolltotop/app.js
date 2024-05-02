const progress = document.querySelector('.progress')
window.onscroll=()=>scrollProgress()

function scrollProgress(){
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop =document.documentElement.scrollTop
    const scrollPrecentage = (scrollTop/pageHeight)*100
    
    
    progress.style.visibility="visible"
    progress.style.width=scrollPrecentage+"%"
}

const btntop = document.querySelector('.top')
const rootEl = document.documentElement

document.addEventListener("scroll",showBtn)

function showBtn(){
    const scrolltotal = rootEl.scrollHeight - rootEl.clientHeight
    if(rootEl.scrollTop/scrolltotal>0.3){
        btntop.classList.add("show-top")
    }else{
        btntop.classList.remove("show-top")
    }
}
btntop.addEventListener("click",scrollTotop)

function scrollTotop(){
    rootEl.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
