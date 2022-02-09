const CURRENT_NUMBER_WRAPPER = document.getElementById('currentNumber');
let currentNumber = 0;

function increment(){
    if(currentNumber<10){
        currentNumber++;
    }
    CURRENT_NUMBER_WRAPPER.innerHTML = currentNumber;
}

function decrement(){
    if(currentNumber>-10){
        currentNumber--;
    }
    CURRENT_NUMBER_WRAPPER.innerHTML = currentNumber;
}