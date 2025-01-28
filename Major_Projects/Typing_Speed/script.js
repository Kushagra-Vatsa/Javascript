const typingText = document.querySelector('.typing-text p')
const input = document.querySelector('.wrapper .input-field')
const time = document.querySelector('.time span b')
const mistakes = document.querySelector('.mistake span')
const wpm = document.querySelector('.wpm span')
const cpm = document.querySelector('.cpm span')
const btn = document.querySelector('button');

//set value
let timer;
let maxTime= 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake =0;
let isTyping = false;


function loadParagraph(){
    const paragraph = [
        "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the English alphabet, making it a great practice for typing.",
        "Typing speed tests are a great way to improve your accuracy and efficiency. The more you practice, the faster and more precise your typing becomes.",
        "In the digital age, typing has become an essential skill. From writing emails to coding software, being able to type quickly and correctly is crucial.",
        "A good typing posture includes sitting straight, keeping your wrists elevated, and using all fingers to type. Practicing daily can significantly boost your speed.",
        "Programming requires precise typing skills. Small mistakes in code can lead to major errors. Practicing touch typing can help you write error-free code efficiently.",
        "Some of the fastest typists in the world can reach speeds of over 200 words per minute. However, accuracy is just as important as speed in real-world applications.",
        "Did you know that the first typewriter was invented in 1868? Since then, keyboards have evolved significantly, leading to modern mechanical and membrane keyboards.",
        "Developing muscle memory is key to improving typing speed. With enough practice, your fingers will automatically move to the correct keys without conscious effort.",
        "The world record for the fastest typing speed is over 216 words per minute. While reaching such speeds is rare, consistent practice can help you achieve impressive results.",
        "Typing tests help measure both speed and accuracy. Errors are just as important to track as words per minute, since high accuracy ensures reliable typing."
    ];

const randomIndex = Math.floor(Math.random()*paragraph.length);
typingText.innerHTML='';
for(const char of paragraph[randomIndex]){
console.log(char);
typingText.innerHTML+= `<span>${char}</span>`;
}
typingText.querySelectorAll('span')[0].classList.add('active');
document.addEventListener('keydown',()=>input.focus());
typingText.addEventListener("click",()=>{
    input.focus()})
}

//Handle user input
function initTyping(){
    const char= typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);
    if(charIndex < char.length && timeLeft >0){

        if(!isTyping){
            timer = setInterval(initTime,1000);
            isTyping=true;
        }

        if(char[charIndex].innerText === typedChar){
            char[charIndex].classList.add('correct');
            console.log("correct");
        }
        else{
            mistake++ ;
            char[charIndex].classList.add('incorrect');
            console.log("incorrect");
        }
        charIndex++;
        char[charIndex].classList.add('active');

        mistakes.innerText = mistake;
        cpm.innerText = charIndex- mistake;
    }
    else{
clearInterval(timer);
input.value='';
    }
}

function initTime(){
    if(timeLeft>0){
        timeLeft--;
        time.innerText=timeLeft;
        let wpmVal = Math.round(((charIndex - mistake)/5) /(maxTime - timeLeft)*60);
        wpm.innerText = wpmVal;
    }
    else{
        clearInterval(timer);
    }
}

function reset(){
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    time.innerText= timeLeft;
    input.value='';
    charIndex = 0;
    mistake =0;
    isTyping = false;
    wpm.innerText=0;
    cpm.innerText=0;
    mistakes.innerText=0;
}


input.addEventListener("input",initTyping);
btn.addEventListener("click",reset);
loadParagraph();