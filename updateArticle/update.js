
let accueilBtn = document.querySelector(".accueil-link");
let blogBtn = document.querySelector("header span");

accueilBtn.onclick = function () {
    location.href = "../main/index.html";
}

blogBtn.onclick = function () {
    location.href = "../main/index.html";
}

let auteur = document.getElementById("auteur");
let image = document.getElementById("image");
let categorie = document.getElementById("categorie");
let titre = document.getElementById("titre");
let text = document.getElementById("article");
let sauv = document.querySelector(".sauv");
let annu = document.querySelector(".annu");
//
let confirmDiv = document.querySelector(".confirm");
let confiBtn = document.querySelector(".conf1");
let annuBtn = document.querySelector(".annu1");


let articles = JSON.parse(window.localStorage.getItem("articles"));

for (let i = 0; i < articles.length; i++) {
    if (articles[i].ModiBtn === "Clicked") {
        showArticleDetails(i);
        // Click sur Sauvgarder
        sauv.addEventListener("click", function () {
            articles[i].ModiBtn = "Not Clicked";
            articles[i].auteur = auteur.value;
            articles[i].image = image.value;
            articles[i].categorie = categorie.value;
            articles[i].titre = titre.value;
            articles[i].text = text.value;
            window.localStorage.setItem("articles", JSON.stringify(articles));
            location.href = "../main/index.html";
        })
        annu.addEventListener("click", function () {
            let blackDiv = document.getElementsByClassName("black")[0];
            let container = document.getElementsByClassName("container")[0];
            confirmDiv.style.display = "flex";
            blackDiv.style.backgroundColor = "#000000ab";
            container.style.position = "relative";
            container.style.zIndex = -1;
            // Rester sur les modification
            annuBtn.onclick = function () {
                blackDiv.style.backgroundColor = "transparent";
                confirmDiv.style.display = "none";
                container.style.position = "relative";
                container.style.zIndex = 1;
            }
            //Confirmer l'annulation
            confiBtn.addEventListener("click", function () {
                articles[i].ModiBtn = "Not Clicked";
                window.localStorage.setItem("articles", JSON.stringify(articles));
                location.href = "../main/index.html";
            });
        })

        // Click sur Annuler
    }
}

function updateArticle(i) {
    articles[i].auteur = auteur.value;
    articles[i].image = image.value;
    articles[i].categorie = categorie.value;
    articles[i].titre = titre.value;
    articles[i].text = text.value;
    window.localStorage.setItem("articles", JSON.stringify(articles));
    location.href = "../main/index.html";
}

function showArticleDetails(i) {
    auteur.value = articles[i].auteur;
    image.value = articles[i].image;
    categorie.value = articles[i].categorie;
    titre.value = articles[i].titre;
    text.value = articles[i].text;
}