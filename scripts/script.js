// JavaScript Document
console.log("hi");

let menuButton = document.querySelector("header > button");
let nav = document.querySelector("nav");
let video = document.querySelector("video");
let videobutton = document.querySelector("section:nth-of-type(1) > button");


// Bron: Code van Ananda/ChatGPT.
videobutton.onclick = videopause;

function videopause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

menuButton.onclick = toonMenu;

function toonMenu() {
    nav.classList.toggle("open");
    menuButton.classList.toggle("open");
}
