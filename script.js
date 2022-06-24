let $ = (w) => document.querySelector(w);
let print = (p) => console.log(p);

function hoverButtons(){
    $("#main-text").style.marginLeft = "calc(3.5rem + 3vh)";
}

function hoverButtonsRevert(){
    $("#main-text").style.marginLeft = "calc(3rem + 3vh)";
}