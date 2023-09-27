// JavaScript Document
console.log("hi");

let menubutton = document.querySelector("button");
let nav = document.querySelector("nav");
let closing = document.querySelector("#closebutton")
let vid = document.querySelector("video")

menubutton.onclick = toonMenu;

function toonMenu() {
    nav.classList.add("toonMenu");
}

vid.onclick = pauseVideo;

function pauseVideo() {
    vid.pause();
}


closing.onclick = sluitMenu;

function sluitMenu() {
    nav.classList.remove("toonMenu");
}

