const isVisible = (element) => element.getBoundingClientRect().top + 150 < window.innerHeight;

function reveal(){
    const reveals = [...document.getElementsByClassName("reveal")];
    reveals.forEach( element => { if(isVisible(element)) element.classList.add("active") } );
}

window.addEventListener("scroll", reveal);