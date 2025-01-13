const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let setInterval_ID;
const startChangingColor=function (){
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
    if(!setInterval_ID){
        setInterval_ID=setInterval(changeBgColor,1000)
    }
};
const stopChangingColor=function (){
    clearInterval(setInterval_ID);
    setInterval_ID=null;
};

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
