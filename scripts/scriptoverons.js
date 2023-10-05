// JavaScript Document
console.log("hoi");

const loadMoreBtn = document.querySelector("section:nth-of-type(2) > button");
const loadMoreList = document.querySelector("section:nth-of-type(2) > ul");

loadMoreBtn.onclick = loadMore; 

function loadMore() {
    const loadMoreItems = loadMoreList.querySelectorAll(".hide");

    loadMoreBtn.classList.add("loading");
    loadMoreBtn.textContent = "loading...";

    setTimeout( () => {
        loadMoreBtn.classList.remove("loading");
        loadMoreBtn.textContent = "Load more";
        for (let i = 0; i < 5; i++) {
            loadMoreItems[i].classList.remove("hide");
        }
    }, 2000);

    
}