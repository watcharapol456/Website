const icon = document.querySelector('#eye')
const passwordEl = document.querySelector('#password')

icon.addEventListener("click",()=>{
    if(icon.classList.contains("fa-eye")){
        icon.classList.replace("fa-eye","fa-eye-slash")
        passwordEl.setAttribute("type","text")
    }else{
        icon.classList.replace("fa-eye-slash","fa-eye")
        passwordEl.setAttribute("type","password")
    }
})