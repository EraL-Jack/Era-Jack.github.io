let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const min3Btn = document.getElementById('min3-btn');
const add3Btn = document.getElementById('add3-btn');
const resetBtn = document.querySelector('#reset');

// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    if(counter > 10){
        counter = 10;
    }
    counterValue.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    if(counter < 0){
        counter = 0;
    }
    counterValue.innerHTML = counter;
});

// To reset the counter to zero
resetBtn.addEventListener('click', reset);

min3Btn.addEventListener('click', () => {
    counter -= 3;
    if(counter < 0){
        counter = 0;
    }
    counterValue.innerHTML = counter;
});

add3Btn.addEventListener('click', () => {
    counter += 3;
    if(counter > 10){
        counter = 10;
    }
    counterValue.innerHTML = counter;
});

function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}
