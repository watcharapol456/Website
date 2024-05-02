const openbtn = document.querySelector('.startgame')
const closebtn = document.querySelector('.close')
const closehowtobtn = document.querySelector('.close-howto')
const container1 = document.querySelector('.container-box')
const container2 = document.querySelector('.container-box2')
const howto = document.querySelector('.howto-container')
const nextbtn = document.querySelector('.next-box')

const btnchoice1 = document.querySelector('.btnchoice1')
const btnchoice2 = document.querySelector('.btnchoice2')
const showans1 = document.querySelector('.fa1')
const showans2 = document.querySelector('.fa2')

const nextbox2 = document.querySelector('.next-box2')
const choicescetion = document.querySelector('.choice')
let score =0;
const gonxet2 = document.querySelector(".next-box2") 
let countdown; 

//----------------------- ข้อ2 -------------------------------
const btnchoices1 = document.querySelector(".btn2-1")
const btnchoices2 = document.querySelector(".btn2-2")
const answers1 =document.querySelector('.fa2-1')
const answers2 =document.querySelector('.fa2-2')
const choicescetion2 = document.querySelector('.choice2')
const container3 = document.querySelector('.container-box3')
const gonxet3 = document.querySelector('.next-box3')
// -----------------------------------ข้อ 3----------------------------------------

const btnchoices11 = document.querySelector(".btn3-1")
const btnchoices22 = document.querySelector(".btn3-2")
const answer1 =document.querySelector('.fa3-1')
const answer2 =document.querySelector('.fa3-2')
const choicescetion3 = document.querySelector('.choice3')
const container4 = document.querySelector('.contanier-score')
const gonxet4 = document.querySelector('.next-box4')


const btnchoices114 = document.querySelector(".btn4-1")
const btnchoices224 = document.querySelector(".btn4-2")
const answer14 =document.querySelector('.fa4-1')
const answer24 =document.querySelector('.fa4-2')
const choicescetion4 = document.querySelector('.choice4')
const container5 = document.querySelector('.container-box4')
const gonxet5 = document.querySelector('.next-box5')



// ---------------------------------- คะแนน ----------------------------------------------
const result = document.querySelector('.result')

// ฟังก์ชั่นเพิ่มคะแนน
function addScore() {
    score++;
    updateScoreDisplay(); 
}
const low = document.querySelector(".low")
const bad = document.querySelector(".bad")
const good = document.querySelector(".good")
const verygood = document.querySelector(".verygood")
const zero = document.querySelector(".emoji-sad")
const f = document.querySelector(".face")
const el = document.querySelector(".eyebrow-left")
const er = document.querySelector(".eyebrow-right")
const eyl = document.querySelector(".eye-left")
const eyr = document.querySelector(".eye-right")
const ms = document.querySelector(".mouth-sad")
function updateScoreDisplay() {
   
    
    if (score == 0){
        result.textContent = "ปรับปรุง"
        low.classList.remove("pulse")
        bad.classList.remove("pulse")
        good.classList.remove("pulse")
        verygood.classList.remove("pulse")
        zero.classList.add("emoji-sad")
        f.classList.add("face")
        el.classList.add("eyebrow-left")
        er.classList.add("eyebrow-right")
        eyl.classList.add("eye-left")
        eyr.classList.add("eye-right")
        ms.classList.add("mouth-sad")

    }
    if (score > 0){
        zero.classList.remove("emoji-sad")
        f.classList.remove("face")
        el.classList.remove("eyebrow-left")
        er.classList.remove("eyebrow-right")
        eyl.classList.remove("eye-left")
        eyr.classList.remove("eye-right")
        ms.classList.remove("mouth-sad")
    }
    if (score == 1){
        result.textContent = "พอใช้"
        bad.classList.add("pulse")
        good.classList.remove("pulse")
        verygood.classList.remove("pulse")
    }
    if (score == 2){
        result.textContent = "เยี่ยม"
        bad.classList.add("pulse")
        good.classList.add("pulse")
        verygood.classList.remove("pulse")
    }
    if (score == 3){
        result.textContent = "ดี"
        bad.classList.add("pulse")
        good.classList.add("pulse")
        verygood.classList.add("pulse")
    }
    if (score == 4){
        result.textContent = "ดีมาก"
        low.classList.add("pulse")
        bad.classList.add("pulse")
        good.classList.add("pulse")
        verygood.classList.add("pulse")
    }
}

window.onload = function() {
    updateScoreDisplay(); 
};
function resetScore() {
    score = 0;
    updateScoreDisplay(); 
}
const end = document.querySelector('.end')
openbtn.addEventListener("click",()=>{
    howto.classList.add("show-howto")
    btnchoice1.classList.remove("answer")
    btnchoice2.classList.remove("answer")
    choicescetion.classList.remove("answersection")
    resetScore()

})
closehowtobtn.addEventListener("click",()=>{
    howto.classList.remove("show-howto")
    container1.classList.remove("show")
    container2.classList.remove("show-box2")
    showans1.classList.add("hidefa")
    showans2.classList.add("hidefa")
    gonxet2.classList.add("op0")
    resetScore()
})

// เฉลย


btnchoice1.addEventListener("click",()=>{
   showans1.classList.add("x2")
   showans1.classList.remove("hidefa")
   showans2.classList.add("x3")
   showans2.classList.remove("hidefa")
   btnchoice1.classList.add("answer")
   choicescetion.classList.add("answersection")
   clearInterval(countdown); 
   gonxet2.classList.remove("op0")
   
   
})

btnchoice2.addEventListener("click",()=>{
   showans1.classList.add("x2")
   showans1.classList.remove("hidefa")
   showans2.classList.add("x3")
   showans2.classList.remove("hidefa")
   btnchoice2.classList.add("answer")
   choicescetion.classList.add("answersection")
   clearInterval(countdown); 
   gonxet2.classList.remove("op0")
   addScore()
})



function startCountdown() {
    var seconds = 16; 
    var timerDisplay = document.querySelector(".timer");
     countdown = setInterval(function() {
        seconds--;
        timerDisplay.textContent = ("0" + (seconds % 60)).slice(-2);
        if (seconds <= 0) {
            clearInterval(countdown); 
            timerDisplay.textContent = "00"; 
            choicescetion.classList.add("answersection")
            gonxet2.classList.remove("op0")
            
        }
    }, 1000); 
}

//----------------------- ข้อ2 -------------------------------


btnchoices1.addEventListener("click",()=>{
    answers1.classList.add("x3")
    answers1.classList.remove("hidefa")
    answers2.classList.add("x1")
    answers2.classList.remove("hidefa")
    btnchoices1.classList.add("answer")
    choicescetion2.classList.add("answersection")
    clearInterval(timerdown); 
    addScore()
    gonxet3.classList.remove("op0")
    gonxet3.classList.add("next-box4")
})
btnchoices2.addEventListener("click",()=>{
    answers1.classList.add("x3")
    answers1.classList.remove("hidefa")
    answers2.classList.add("x1")
    answers2.classList.remove("hidefa")
    btnchoices2.classList.add("answer")
    choicescetion2.classList.add("answersection")
    gonxet3.classList.remove("op0")
    gonxet3.classList.add("next-box4")
    clearInterval(timerdown);

})




let timerdown
function startCountdown2() {
    var time = 16; 
    var timerDisplay2 = document.querySelector(".timer2");
    timerdown = setInterval(function() {
        time--;
        timerDisplay2.textContent = ("0" + (time % 60)).slice(-2);
        if (time <= 0) {
            clearInterval(timerdown); 
            timerDisplay2.textContent = "00"; 
            choicescetion2.classList.add("answersection")
            gonxet3.classList.remove("op0")
            gonxet3.classList.add("next-box4")
            
        }
    }, 1000);
}
let countdown1
function startCountdown3() {
    var second = 16; 
    var timerDis = document.querySelector(".timer3");
     countdown1 = setInterval(function() {
        second--;
        timerDis.textContent = ("0" + (second % 60)).slice(-2);
        if (second <= 0) {
            clearInterval(countdown1); 
            timerDis.textContent = "00"; 
            choicescetion3.classList.add("answersection")
            gonxet4.classList.remove("op0")
        }
    }, 1000); 
}
let countdown2
function startCountdown4() {
    var second = 16; 
    var timerDis1 = document.querySelector(".timer4");
     countdown2 = setInterval(function() {
        second--;
        timerDis1.textContent = ("0" + (second % 60)).slice(-2);
        if (second <= 0) {
            clearInterval(countdown2); 
            timerDis1.textContent = "00"; 
            choicescetion4.classList.add("answersection")
            gonxet5.classList.remove("op0")
        }
    }, 1000); 
}


// -----------------------------------ข้อ 3----------------------------------------
btnchoices11.addEventListener("click",()=>{
    answer1.classList.add("x1")
    answer1.classList.remove("hidefa")
    answer2.classList.add("x3")
    answer2.classList.remove("hidefa")
    btnchoices1.classList.add("answer")
    choicescetion3.classList.add("answersection")
    clearInterval(countdown1); 
    
    gonxet4.classList.remove("op0")
})
btnchoices22.addEventListener("click",()=>{
    answer1.classList.add("x1")
    answer1.classList.remove("hidefa")
    answer2.classList.add("x3")
    answer2.classList.remove("hidefa")
    btnchoices2.classList.add("answer")
    choicescetion3.classList.add("answersection")
    addScore()
    gonxet4.classList.remove("op0")
    clearInterval(countdown1);

})



end.addEventListener("click",()=>{
    container4.classList.remove("show-box4")
})


btnchoices114.addEventListener("click",()=>{
    answer14.classList.add("x2")
    answer14.classList.remove("hidefa")
    answer24.classList.add("x3")
    answer24.classList.remove("hidefa")
    btnchoices114.classList.add("answer")
    choicescetion4.classList.add("answersection")
    clearInterval(countdown2); 
    
    gonxet5.classList.remove("op0")
})
btnchoices224.addEventListener("click",()=>{
    answer14.classList.add("x2")
    answer14.classList.remove("hidefa")
    answer24.classList.add("x3")
    answer24.classList.remove("hidefa")
    btnchoices224.classList.add("answer")
    choicescetion4.classList.add("answersection")
    addScore()
    gonxet5.classList.remove("op0")
    clearInterval(countdown2);

})


// ปุ่มต่อไป
nextbtn.addEventListener("click",()=>{
    howto.classList.remove("show-howto")
    container1.classList.add("show")
    showans1.classList.add("hidefa")
    showans2.classList.add("hidefa")
    gonxet2.classList.add("op0")
    choicescetion.classList.remove("answersection")


})

nextbox2.addEventListener("click",()=>{
    container1.classList.remove("show")
    container2.classList.add("show-box2")
    answers1.classList.add("hidefa")
    answers2.classList.add("hidefa")
    btnchoices1.classList.remove("answer")
    btnchoices2.classList.remove("answer")
    gonxet3.classList.add("op0")
    choicescetion2.classList.remove("answersection")
})

gonxet3.addEventListener("click",()=>{
    container2.classList.remove("show-box2")
    container3.classList.add("show-box3")
    answer1.classList.add("hidefa")
    answer2.classList.add("hidefa")
    btnchoices11.classList.remove("answer")
    btnchoices22.classList.remove("answer")
    gonxet4.classList.add("op0")
    choicescetion3.classList.remove("answersection")
})

gonxet4.addEventListener("click",()=>{
    container3.classList.remove("show-box3")
    container5.classList.add("show-box5")
  
})
gonxet5.addEventListener("click",()=>{
    container5.classList.remove("show-box5")
    container4.classList.add("show-box4")
    answer14.classList.add("hidefa")
    answer24.classList.add("hidefa")
    btnchoices114.classList.remove("answer")
    btnchoices224.classList.remove("answer")
    gonxet5.classList.add("op0")
    choicescetion4.classList.remove("answersection")
})