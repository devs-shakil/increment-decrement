const incrementBtn = document.querySelector('.btn-increment');
const decrementBtn = document.querySelector('.btn-decrement');
const resets = document.querySelector('.btn-reset');
const output = document.querySelector('.output');

function increment(){
    output.innerHTML++;
}
incrementBtn.addEventListener('click',increment);

function decrement(){
    output.innerHTML--;
}
decrementBtn.addEventListener('click', decrement);

function reset_fun(){
    window.location.reload();
}
resets.addEventListener('click',reset_fun);