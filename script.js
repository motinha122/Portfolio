const $ = (w) => document.querySelector(w);
const print = (...p) => console.log(...p);

document.addEventListener("mousemove", (e) =>{

    const percent = 1 - (e.clientX / window.innerWidth) - 0.5;
    const translate = percent * 10;

    $("main").style.transform = `translateX(${translate}px)`;
    $("h1").style.transform = `translateX(${percent * 6}px)`;
    $("h2").style.transform = `translateX(${percent * 6}px)`;
    $("h3").style.transform = `translateX(${percent * 6}px)`;
})
