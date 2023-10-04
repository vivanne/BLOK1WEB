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

// Bron: Morda, Damon(n.v.t). Codepen; CodePen Home Load More Items from an List. https://codepen.io/dmorda/pen/AqVEXr.

$(document).ready(function(){

    var list = $(".list li");
    var numToShow = 3;
    var button = $("#next");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
      button.show();
    }
    list.slice(0, numToShow).show();

    button.click(function(){
        var showing = list.filter(':visible').length;
        list.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list.filter(':visible').length;
        if (nowShowing >= numInList) {
          button.hide();
        }
    });

});