let stm = document.querySelector("#statement");
let accept = document.querySelector("#accept");
let decline = document.querySelector("#decline");

accept.onclick = () =>{
    stm.innerHTML = "Now you are friend."
    accept.innerHTML = `<i class="fa-solid fa-check"></i>`;
    decline.innerHTML = "decline";
}

decline.onclick = () =>{
    stm.innerHTML = "you reject friend request."
    decline.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    accept.innerHTML = "accept";
}