
let addBtn = document.querySelector(".ajout-link");
let modiBtn = document.querySelector(".modiBtn");

addBtn.onclick = function () {
    location.href = "../addArticle/add.html";
}

modiBtn.onclick = function () {
    location.href = "../updateArticle/update.html"
}