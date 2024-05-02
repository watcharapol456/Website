const counters = document.querySelectorAll('.counter')
counters.forEach(counter=>{
    counter.innerText='0'
    const upDateCounter=()=>{
        const target = +counter.getAttribute("data-target")
        const start =+counter.innerHTML
        const increment = target/200
        if(start<target){
            counter.innerText = `${Math.ceil(start+increment)}`
            setTimeout(upDateCounter,1)
        }else{
            counter.innerText=target
        }
    }
    upDateCounter()
})