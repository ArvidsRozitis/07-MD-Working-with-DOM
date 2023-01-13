// Tikkai vienā vietā bija jāpievieno Tips
//----------------------button1

const button1 = document.querySelector(".js-btn1")
const square1 = document.querySelector(".js-square1")

button1.addEventListener('click', () => {
    square1.classList.toggle('square--yelow')        
})

//----------------------button2

const button2 = document.querySelector(".js-btn2")
const square2 = document.querySelector(".js-square2")
const square2Text = document.querySelector(".js-square2-text")

button2.addEventListener('click', () => {
    if (square2Text.textContent === 'fail') {
        square2Text.textContent = 'success'
    } else {
        square2Text.textContent ='fail'
    }       
})

//----------------------button3

const button3 = document.querySelector(".js-btn3")
const square3 = document.querySelector(".js-square3")

button3.addEventListener('click', () => {
    square3.classList.add('square--invisible')        
})

//----------------------button4

const button4 = document.querySelector(".js-btn4")
const square4 = document.querySelector(".js-square4")

button4.addEventListener('click', () => {
    square4.classList.toggle('square--invisible')        
})

//----------------------button5

const button5 = document.querySelector(".js-btn5")
const square5 = document.querySelector(".js-square5")

const stylesForRandom: string[] = [
    'square square--aqua-blue js-square5',
    'square square--violet js-square5',
    'square square square--red js-square5',
    'square square--green js-square5',
    'square square--yelow js-square5']

button5.addEventListener('click', () => {
    square5.className = stylesForRandom[Math.floor(Math.random() * 4)];        
})

//----------------------button6 (openAi) +me + need some more iprovements, i van to reset count

const button6 = document.querySelector(".js-btn6");
const square6 = document.querySelector(".js-square6")
const square6Text = document.querySelector(".js-square6-text");

button6.addEventListener('click', () => {
    let count = 0;
    if (count !== 10) {
        button6.setAttribute('disabled','disabled');
    }

    const intervalId = setInterval(() => {
        count++;
        square6Text.textContent = count.toString();
        if (count === 10) {
            clearInterval(intervalId);
            button6.removeAttribute('disabled')
        }
    }, 2000);
});

//----------------------button7

const button7 = document.querySelector(".js-btn7");
const section = document.querySelector(".js-section");
const body = document.querySelector(".js-body");

button7.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
})

//----------------------hover on 5 kaut kas dažreiz lago

const square5Text = document.querySelector(".js-square5-text");

square5.addEventListener('mouseenter', () => {
    let countOver = 0;    

    const intervalId = setInterval(() => {
        countOver++;
        square5Text.textContent = countOver.toString();
        if (countOver === 10) {
            clearInterval(intervalId);
        }
    }, 500);
    square5.addEventListener("mouseout", () => {
        clearInterval(intervalId);
        countOver = 0;
        square5Text.innerHTML = countOver.toString();
      });
})

//----------------------input in real time (atratu stack overflow)

const inputField = document.querySelector(".js-input-field");
const inputLog = document.querySelector(".js-input-log");

const inputHandler = function(e: any) {
    inputLog.innerHTML = e.target.value;
  }

inputField.addEventListener('input', inputHandler);
inputField.addEventListener('propertychange', inputHandler);
