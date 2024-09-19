const body = document.querySelector("body");

body.addEventListener("touchmove", (event)=>{
    
    const xpos = event.offsetX;
    const ypos = event.offsetY;
    const poo = document.createElement("span");
    body.append(poo);
    poo.style.left = xpos + "px";
    poo.style.bottom = ypos + "px";
    const size = Math.random()*100;
    poo.style.height = size + "px";
    poo.style.width = size + "px";
    setTimeout(() => {
        poo.remove();
    }, 2000);
})
