const result = document.getElementById("result")
const listItem = []
const filter = document.getElementById("filter")
async function getData(){
    const url = "https://restcountries.com/v2/all"
    const response = await fetch(url)
    const item = await response.json()
    result.innerHTML=""
    item.forEach(data => {
        const li = document.createElement("li")
        listItem.push(li)
        li.innerHTML=`
        <img src ="${data.flag}">
        <div class="info">
            <h4>${data.name}</h4>
            <p>${formatNumber(data.population)}</p>
        </div>
        `
        result.appendChild(li)
    });
}
function formatNumber(num) {

    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

}
getData()

filter.addEventListener("input",(e)=>{
    const search = e.target.value.toLowerCase()
    listItem.forEach(item=>{
        if(item.innerText.toLowerCase().includes(search)){
            item.classList.remove("hide")
        }else{
            item.classList.add("hide")
        }
    })
})

