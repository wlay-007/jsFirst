const inputText = document.querySelector('#textInput');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
let message = '';

inputText.addEventListener('input', ()=>{
    console.log(inputText.value);
    // text.innerText = inputText.value;
    message = inputText.value;
})
button.addEventListener('click', ()=>{
    if(message == ''){
        text.innerHTML = `i love you ${message}`;
    }
    else {
        text.innerHTML = `i love you, ${message}`;
    }
})
