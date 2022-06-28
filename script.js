const $ = (w) => document.querySelector(w);
const print = (...p) => console.log(...p);
const text = $("main");

document.addEventListener("mousemove", (e) =>{
    
    const percent = 1 - (e.clientX / window.innerWidth) - 0.5;
    const translate = percent*15;
    print(percent,translate);
    text.style.transform = `translateX(${translate}px)`;
})

