const mainTitle = document.querySelector('#title');
let currentValue = 0;

const d = document.querySelector('#decrement');
const r = document.querySelector('#reset');
const i = document.querySelector('#increment');

d.addEventListener ("click", () =>{
    currentValue -= 1
    mainTitle.textContent = currentValue;
})

r.addEventListener ("click", () =>{
 currentValue = 0
 mainTitle.textContent = currentValue;
})

i.addEventListener("click", () =>{
    currentValue += 1
    mainTitle.textContent = currentValue;
})