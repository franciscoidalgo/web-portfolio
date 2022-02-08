const isVisible = (element) => element.getBoundingClientRect().top < window.innerHeight

function reveal(){
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if(isVisible(element)){
            element.classList.add("active");
        }
    });
    
}

window.addEventListener("load", reveal);
window.addEventListener("scroll", reveal);