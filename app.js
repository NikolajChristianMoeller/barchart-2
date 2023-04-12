"use strict";

window.addEventListener("load", start);

const data = [10, 31, 31, 25, 21, 16, 9, 15, 19, 5, 12, 10, 5, 32, 21, 15, 15, 11, 8, 27, 28, 25, 20, 20, 25, 19, 13, 8, 11, 30, 32, 4, 12, 16, 3, 2, 1, 18, 19, 20]


function start() {
    console.log("Javascript kører");
    displayAllBars();
    
}

function displayAllBars() {
    const bars = document.querySelectorAll(".bar");

    
    for (let i=0; i<40; i++) {
        const firstBar = bars[i];
        let h = (data[i] / 32) * 100;
        firstBar.style.height = `${h}px`;
    }

    

}