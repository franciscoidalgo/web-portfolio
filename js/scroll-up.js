scrollUpButton = document.getElementById("scroll-up");

function showButton(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpButton.style.opacity = 1;
    }else{
        scrollUpButton.style.opacity = 0;
    }
}

function goTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", showButton);
scrollUpButton.addEventListener("click", goTop);