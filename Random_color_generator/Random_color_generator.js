function getColor(){
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomColor = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomColor;
    document.getElementById("color_code").innerHTML = randomColor;
}

// event call
let btn = document.getElementById('btn');
btn.onclick = ()=>{
    getColor();
}

// initial call
getColor();

