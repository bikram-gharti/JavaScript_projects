let display = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let buttons_array = Array.from(buttons);
let string = '';

buttons_array.forEach( btn =>{
    btn.onclick = (e)=>{
        if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;
        }else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            display.value = string;
        }else if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }else{
            string += e.target.innerHTML;
            display.value = string;
        }
    }
})