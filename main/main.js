let main = document.querySelector("main");
let addBtn = document.querySelector(".ajout-link");
let modiBtn = document.querySelector(".modiBtn");
let deleteBtn = document.querySelector(".suppBtn");
let articlesDiv = document.querySelector(".articles");
let categoriesDiv = document.querySelector(".categories");


addBtn.onclick = function () {
    location.href = "../addArticle/add.html";
}

// Update Article
modiBtn.onclick = function () {
    location.href = "../updateArticle/update.html";
}


// Add Article
let articles = JSON.parse(localStorage.getItem("articles"));

for (let i = 0; i < articles?.length; i++) {
    let article = document.createElement("div");
    article.classList.add("article");
    //
    article.classList.add(`${articles[i].categorie}`);
    article.innerHTML = `
    <img src="${articles[i].image}" alt="profile-photo">
    <p class="auteur">${articles[i].auteur}</p>
    <p class="date"> ${articles[i].titre} - mercredi 20 avril 2020 </p>
    <p class="article-text">
    ${articles[i].text}
    </p>
    `;
    // Delete Article
    let blackDiv = document.querySelector(".black");
    let container = document.querySelector(".container");
    let confirmDeleteDiv = document.querySelector(".confirm-delete");
    let confirmDeleteBtn = document.querySelector(".conf");
    let annuleDeleteBtn = document.querySelector(".annu");
    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.classList.add("suppBtn");

    deleteBtn.addEventListener("click", function () {
        confirmDeleteDiv.style.display = "flex";
        container.style.zIndex = -1;
        blackDiv.style.backgroundColor = "#000000ab";
        // Cas d'annulation de suppression
        annuleDeleteBtn.onclick = function () {
            confirmDeleteDiv.style.display = "none";
            container.style.zIndex = 1;
            blackDiv.style.backgroundColor = "transparent";
        }
        // Cas de confirmation de suppression
        confirmDeleteBtn.onclick = function () {
            confirmDeleteDiv.style.display = "none";
            container.style.zIndex = 1;
            blackDiv.style.backgroundColor = "transparent";
            article.remove();
            articles.splice(i, 1);
            window.localStorage.removeItem("articles");
            window.localStorage.setItem("articles", JSON.stringify(articles));
            // Mise a jour des categrories au niveau de categorieDiv
            categoriesDiv.textContent = "";
            createCategorie();
        }
    });

    // Button Modifier un Article
    let modifierBtn = document.createElement("span");
    modifierBtn.textContent = "Modifier";
    modifierBtn.classList.add("modiBtn");

    let btnsDiv = document.createElement("div");
    btnsDiv.classList.add("btns");
    //
    btnsDiv.appendChild(deleteBtn);
    btnsDiv.appendChild(modifierBtn);
    article.appendChild(btnsDiv);
    articlesDiv.appendChild(article);

    modifierBtn.addEventListener("click", function (e) {
        location.href = "../updateArticle/update.html";
        articles[i].ModiBtn = "Clicked";
        window.localStorage.setItem("articles", JSON.stringify(articles));
        console.log(articles);
    })
}

//=====================================

createCategorie();

// Ajout des categories dans le div concerner
function createCategorie() {
    let categories = []
    for (let i = 0; i < articles?.length; i++) {
        categories.push(articles[i].categorie)
    }
    const counts = {};
    categories.forEach(cate => {
        counts[cate] = (counts[cate] || 0) + 1;
    });
    let spans;
    for (const cate in counts) {
        let categorie = document.createElement("span");
        categorie.innerHTML = `${cate} (<p style = "display: inline; font-weight: 700"> ${counts[cate]} </p>)`;
        categoriesDiv.appendChild(categorie);
        ;
    }
    spans = document.querySelectorAll(".categories span")
    // Add ClickEvent To Categorie
    spans?.forEach(span => span.addEventListener("click", function (e) {
        spans.forEach(span => span.classList.remove("categorieClick"));
        e.currentTarget.classList.add("categorieClick");

        // //Affichage des Articles Selon la categorie selectionner
        let articles = document.querySelectorAll(".article");
        for (let j = 0; j < articles.length; j++) {
            articles[j].style.display = "block";
        }
        for (let i = 0; i < articles.length; i++) {
            if (!articles[i].classList.contains(`${e.currentTarget.textContent.split(" ")[0]}`)) {
                articles[i].style.display = "none";
            }
        }
    }
    ))
}

//============================================================================
// Affichage selon l'ordre chronologique
let options = document.querySelector("select");

options.addEventListener("change", function () {
    if (options.value === "Les plus recents") {
        articlesDiv.innerHTML = "";
        // Affichage sur Ordre Decroissant
        for (let i = 0; i < articles?.length; i++) {
            let article = document.createElement("div");
            article.classList.add("article");
            //
            article.classList.add(`${articles[i].categorie}`);
            article.innerHTML = `
            <img src="${articles[i].image}" alt="profile-photo">
            <p class="auteur">${articles[i].auteur}</p>
            <p class="date"> ${articles[i].titre} - mercredi 20 avril 2020 </p>
            <p class="article-text">
            ${articles[i].text}
            </p>
            `;
            // Delete Article
            let blackDiv = document.querySelector(".black");
            let container = document.querySelector(".container");
            let confirmDeleteDiv = document.querySelector(".confirm-delete");
            let confirmDeleteBtn = document.querySelector(".conf");
            let annuleDeleteBtn = document.querySelector(".annu");
            let deleteBtn = document.createElement("span");
            deleteBtn.textContent = "Supprimer";
            deleteBtn.classList.add("suppBtn");

            deleteBtn.addEventListener("click", function () {
                confirmDeleteDiv.style.display = "flex";
                container.style.zIndex = -1;
                blackDiv.style.backgroundColor = "#000000ab";
                // Cas d'annulation de suppression
                annuleDeleteBtn.onclick = function () {
                    confirmDeleteDiv.style.display = "none";
                    container.style.zIndex = 1;
                    blackDiv.style.backgroundColor = "transparent";
                }
                // Cas de confirmation de suppression
                confirmDeleteBtn.onclick = function () {
                    confirmDeleteDiv.style.display = "none";
                    container.style.zIndex = 1;
                    blackDiv.style.backgroundColor = "transparent";
                    article.remove();
                    articles.splice(i, 1);
                    window.localStorage.removeItem("articles");
                    window.localStorage.setItem("articles", JSON.stringify(articles));
                    // Mise a jour des categrories au niveau de categorieDiv
                    // categoriesDiv.textContent = "";
                    // createCategorie();
                    // // Supprimer la class de clickCategorie
                    // document.querySelectorAll(".categories span").forEach(span => {
                    //     span.classList.remove("categorieClick")
                    // })
                }
            });

            // Button Modifier un Article
            let modifierBtn = document.createElement("span");
            modifierBtn.textContent = "Modifier";
            modifierBtn.classList.add("modiBtn");

            let btnsDiv = document.createElement("div");
            btnsDiv.classList.add("btns");
            //
            btnsDiv.appendChild(deleteBtn);
            btnsDiv.appendChild(modifierBtn);
            article.appendChild(btnsDiv);
            articlesDiv.appendChild(article);

            modifierBtn.addEventListener("click", function (e) {
                location.href = "../updateArticle/update.html";
                articles[i].ModiBtn = "Clicked";
                window.localStorage.setItem("articles", JSON.stringify(articles));
                console.log(articles);
            })
        }
        categoriesDiv.innerHTML = "";
        createCategorie();
    } else if (options.value === "Les plus anciens") {
        // Affichage sur Ordre Croissant
        articlesDiv.innerHTML = "";
        for (let i = articles?.length - 1; i >= 0; i--) {
            let article = document.createElement("div");
            article.classList.add("article");
            //
            article.classList.add(`${articles[i].categorie}`);
            article.innerHTML = `
            <img src="${articles[i].image}" alt="profile-photo">
            <p class="auteur">${articles[i].auteur}</p>
            <p class="date"> ${articles[i].titre} - mercredi 20 avril 2020 </p>
            <p class="article-text">
            ${articles[i].text}
            </p>
            `;
            // Delete Article
            let blackDiv = document.querySelector(".black");
            let container = document.querySelector(".container");
            let confirmDeleteDiv = document.querySelector(".confirm-delete");
            let confirmDeleteBtn = document.querySelector(".conf");
            let annuleDeleteBtn = document.querySelector(".annu");
            let deleteBtn = document.createElement("span");
            deleteBtn.textContent = "Supprimer";
            deleteBtn.classList.add("suppBtn");

            deleteBtn.addEventListener("click", function () {
                confirmDeleteDiv.style.display = "flex";
                container.style.zIndex = -1;
                blackDiv.style.backgroundColor = "#000000ab";
                // Cas d'annulation de suppression
                annuleDeleteBtn.onclick = function () {
                    confirmDeleteDiv.style.display = "none";
                    container.style.zIndex = 1;
                    blackDiv.style.backgroundColor = "transparent";
                }
                // Cas de confirmation de suppression
                confirmDeleteBtn.onclick = function () {
                    confirmDeleteDiv.style.display = "none";
                    container.style.zIndex = 1;
                    blackDiv.style.backgroundColor = "transparent";
                    article.remove();
                    articles.splice(i, 1);
                    window.localStorage.removeItem("articles");
                    window.localStorage.setItem("articles", JSON.stringify(articles));
                    // Mise a jour des categrories au niveau de categorieDiv
                    categoriesDiv.textContent = "";
                    // createCategorie();
                    // // Supprimer la class de clickCategorie
                    // document.querySelectorAll(".categories span").forEach(span => {
                    //     span.classList.remove("categorieClick")
                    // })
                }
            });

            // Button Modifier un Article
            let modifierBtn = document.createElement("span");
            modifierBtn.textContent = "Modifier";
            modifierBtn.classList.add("modiBtn");

            let btnsDiv = document.createElement("div");
            btnsDiv.classList.add("btns");
            //
            btnsDiv.appendChild(deleteBtn);
            btnsDiv.appendChild(modifierBtn);
            article.appendChild(btnsDiv);
            articlesDiv.appendChild(article);

            modifierBtn.addEventListener("click", function (e) {
                location.href = "../updateArticle/update.html";
                articles[i].ModiBtn = "Clicked";
                window.localStorage.setItem("articles", JSON.stringify(articles));
            })
        }
        categoriesDiv.innerHTML = "";
        createCategorie();
    }
})



