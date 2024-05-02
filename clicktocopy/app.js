const coupon = document.querySelector(".coupon")
const btncopy = document.querySelector(".btn")

btncopy.addEventListener("click",(e)=>{
    coupon.select()
    coupon.setSelectionRange(0,999999)
    navigator.clipboard.writeText(coupon.value)
    btncopy.textContent="คัดลอกคูปองแล้ว !!!"
    setTimeout(()=>{
        btncopy.textContent="คัดลอก"
    },3000)
})
