const $ = (w) => document.querySelector(w);
const print = (...p) => console.log(...p);

const linesQuantity = window.innerHeight / 44
const numberLines = Math.round(linesQuantity)

for(let i = 0; i <=numberLines ; i++){
    const line = document.createElement('img');
    line.alt = "pattern"
    if(i % 2 == 0){
        line.classList.add("even");
        line.src = "./images/pattline.png";
    }else{
        line.src = "./images/pattline2.png";
    }
    $(".pattern").appendChild(line);
}

const lineClass = document.querySelectorAll(".pattern img")

document.addEventListener("mousemove", (e) =>{

    const percent = 1 - (e.clientX / window.innerWidth) - 0.5;
    const translate = percent * 10;
    
    lineClass.forEach(line => {
        if (line.classList.contains("even")){
            line.style.transform = `translateX(${percent * 4}px)`;
        } else {
            line.style.transform = `translateX(${-percent * 4}px)`;
        }
    });

    $("main").style.transform = `translateX(${translate}px)`;
    $("h1").style.transform = `translateX(${percent * 6}px)`;
    $("h2").style.transform = `translateX(${percent * 6}px)`;
    $("h3").style.transform = `translateX(${percent * 6}px)`;
})
