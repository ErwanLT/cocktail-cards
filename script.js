// Données des cocktails
const cocktails = [
    {
        nom: "Mojito",
        image: "img/mojito.png",
        ingredients: [
            "Rhum",
            "Menthe",
            "Citron vert",
            "Sucre",
            "Eau gazeuse"
        ],
        recette: [
            "Piler la menthe avec le sucre et le citron",
            "Ajouter le rhum",
            "Compléter avec l'eau gazeuse",
            "Mélanger délicatement et servir frais"
        ]
    },
    {
        nom: "Daïquiri",
        image: "daiquiri.jpg",
        ingredients: [
            "Rhum",
            "Jus de citron vert",
            "Sucre"
        ],
        recette: [
            "Verser tous les ingrédients dans un shaker",
            "Ajouter de la glace",
            "Shaker vigoureusement",
            "Servir bien frais"
        ]
    },
    {
        nom: "Bloody Mary",
        image: "bloodymary.jpg",
        ingredients: [
            "Vodka",
            "Jus de tomate",
            "Citron",
            "Épices"
        ],
        recette: [
            "Verser les ingrédients dans un verre rempli de glace",
            "Mélanger délicatement",
            "Ajuster l'assaisonnement",
            "Servir frais"
        ]
    }
];

// 🔤 Tri alphabétique
cocktails.sort((a, b) =>
    a.nom.localeCompare(b.nom, 'fr', { sensitivity: 'base' })
);

const grid = document.querySelector('.grid');

// 🏗️ Génération des cartes
cocktails.forEach(cocktail => {

    const card = document.createElement('div');
    card.classList.add('card');

    // 🧾 Liste ingrédients
    const ingredientsList = cocktail.ingredients
        .map(ing => `<li>${ing}</li>`)
        .join('');

    // 📖 Liste étapes recette
    const recetteSteps = cocktail.recette
        .map(step => `<li>${step}</li>`)
        .join('');

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <img src="${cocktail.image}" alt="${cocktail.nom}">
                <h2>${cocktail.nom}</h2>
            </div>
            <div class="card-back">
                <h3>Ingrédients</h3>
                <ul>${ingredientsList}</ul>
                <h3>Recette</h3>
                <ol>${recetteSteps}</ol>
            </div>
        </div>
    `;

    // 🎴 Interaction : une seule carte ouverte
    card.addEventListener('click', () => {

        document.querySelectorAll('.card.flipped').forEach(c => {
            if (c !== card) {
                c.classList.remove('flipped');
            }
        });

        card.classList.toggle('flipped');
    });

    grid.appendChild(card);
});