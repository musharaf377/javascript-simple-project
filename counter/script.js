
let counter = document.querySelector('.counter-num');
let counterTitle = document.querySelector('.counter-title');

let count = 0;


setInterval(()=> {

    if(count < 100)
    {

        count++;
        counter.innerText=count;
    }

},100);


setTimeout(()=> {

    counterTitle.innerText = "Count complete";

},11000)