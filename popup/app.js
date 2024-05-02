const openbtn = document.querySelector('.open-btn')
const closebtn = document.querySelector('.close-btn')
const modalContainer = document.querySelector('.modal-container')

openbtn.addEventListener("click",()=>{
    modalContainer.classList.add("show")
})
closebtn.addEventListener("click",()=>{
    modalContainer.classList.remove("show")
})
const openbtn1 = document.querySelector('.open-btn1')
const closebtn1 = document.querySelector('.close-btn1')
const modalContainer1 = document.querySelector('.modal-container1')

openbtn1.addEventListener("click",()=>{
    modalContainer1.classList.add("show")
})
closebtn1.addEventListener("click",()=>{
    modalContainer1.classList.remove("show")
})