var input_text = document.getElementById('input_text');
var image = document.querySelector('#image');
var text = document.querySelector('#text');
function generate(){
    if(input_text.value.length == 0){
        text.innerHTML = '*please fill the input field';
        input_text.classList.add('error');
        setTimeout(()=>{
            input_text.classList.remove('error');
        },1000)
    }
    else{
        image.src = ' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= '+input_text.value;
    }
}
function remove_text(){
    text.innerHTML = '';
}