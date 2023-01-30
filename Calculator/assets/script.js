(function(){
    let screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');


    buttons.forEach((button)=> {
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;

        })
    })

 
    equal.addEventListener('click', function(){
        if(screen.value === ""){
            screen.value = "";
        }else{
            // let ans = eval(`${screen.value}`);
            let ans = eval((screen.value).toString());
            screen.value = ans;
        }
    })

    clear.addEventListener('click', function(){
        screen.value = "";
    })






})()