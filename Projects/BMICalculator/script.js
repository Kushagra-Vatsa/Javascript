const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseFloat(document.querySelector('#weight').value);
    const results=document.querySelector('#results')
    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML="Please give a valid Height"
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML="Please give a valid Weight"
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`
        let meaning = "";
        if (bmi < 18.6) {
            meaning = "You are Under Weight.";
        } else if (bmi > 24.9) {
            meaning = "You are Over Weight.";
        } else {
            meaning = "You are in a Healthy Range.";
        }
        results.innerHTML = `<span>Your BMI is ${bmi}. ${meaning}</span>`;
    }
});