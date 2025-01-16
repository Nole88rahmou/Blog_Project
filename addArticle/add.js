
let accueilBtn = document.querySelector(".accueil-link");
let blogBtn = document.querySelector("header span");
let saveBtn = document.querySelector(".sauv");


// Tableau qui contiens tous les articles a partir de localStorage
let articles = JSON.parse(window.localStorage.getItem("articles")) || [];

// Selecteurs des inputs 
let auteur = document.getElementById("auteur");
let img = document.getElementById("image");
let categorie = document.getElementById("categorie");
let titre = document.getElementById("titre");
let article = document.getElementById("article");

accueilBtn.onclick = function () {
    location.href = "../main/index.html";
}

blogBtn.onclick = function () {
    location.href = "../main/index.html";
}

saveBtn.onclick = function () {
    if ((auteur.value !== "") && (image.value !== "") && (categorie.value !== "") && (titre.value !== "") && (article.value !== "")) {
        let newArticle = {
            'auteur': auteur.value,
            'image': image.value,
            "categorie": categorie.value,
            'titre': titre.value,
            'text': article.value,
            'ModiBtn': `Not Clicked`,
        }
        articles.push(newArticle)
        localStorage.setItem('articles', JSON.stringify(articles))
        auteur.value = "";
        image.value = "";
        categorie.value = "";
        titre.value = "";
        article.value = "";
        location.href = "../main/index.html";
    }
}