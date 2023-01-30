
const display = document.querySelector('.display');
const wrap = document.querySelectorAll('.item');

console.log(typeof (wrap));

let result  = wrap.forEach(element => {
    element.addEventListener('click', ()=> {
       let bgcolor =  window.getComputedStyle(element).backgroundColor;

       display.style.backgroundColor = bgcolor;
    })
});
