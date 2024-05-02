const container = document.querySelector(".container")
const row = 4
const colums = 9
function randomNumber(){
    return Math.floor(Math.random()*500)
}
for(let i=0;i<row*colums;i++){
    const url = `https://source.unsplash.com/random/${randomNumber()}`
    const imageEl = document.createElement("img")
    imageEl.src=url
    container.appendChild(imageEl)
}

