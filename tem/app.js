const celcius = document.getElementById("celcius")
const fahrenheit = document.getElementById("fahrenheit")
const kelvin = document.getElementById("kelvin")
const temInputs = document.querySelectorAll("input")

temInputs.forEach(input =>{
    input.addEventListener("input",(e)=>{
        let temValue = parseInt(e.target.value)
        let inputName = e.target.name
        console.log("input = ", temValue,"unit= ",inputName)

        if(e.target.value === ""){
            celcius.value=null
            fahrenheit.value=null
            kelvin.value=null
            return
        }
        if(inputName === "celcius"){
            //c -> f
            let fahrenheitValue = temValue *1.8 +32
            fahrenheit.value = fahrenheitValue.toFixed(2)
            //c->k
            let kelvinvalue = temValue +273
            kelvin.value = kelvinvalue.toFixed(2)
        }
        if(inputName === "fahrenheit"){
            let celciusValue = (temValue-32)/1.8
            celcius.value = celciusValue.toFixed(2)
            let kelvinvalue = (temValue-32)/1.8+273
            kelvin.value=kelvinvalue.toFixed(2)
        }
        if(inputName=== "kelvin"){
            let celciusValue = temValue-273
            celcius.value = celciusValue.toFixed(2)
            let fahrenheitValue = (temValue-273)*1.8+32
            fahrenheit.value = fahrenheitValue.toFixed(2)
        }
    })
})