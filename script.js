let allCocktails = [];

async function loadCocktails() {
    try {
        const response = await fetch('cocktails.json');
        allCocktails = await response.json();

        // 🔤 Tri alphabétique initial
        allCocktails.sort((a, b) =>
            a.nom.localeCompare(b.nom, 'fr', { sensitivity: 'base' })
        );

        displayCocktails(allCocktails);
        setupSearch();
        setupTheme();
        setupPrint();

    } catch (error) {
        console.error('Erreur lors du chargement des cocktails:', error);
    }
}

function setupPrint() {
    const printBtn = document.getElementById('print-btn');
    printBtn.addEventListener('click', () => {
        window.print();
    });
}

function setupTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('.icon');
    
    // Charger le thème sauvegardé
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        icon.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        icon.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

function displayCocktails(cocktails) {
    const grid = document.querySelector('.grid');
    const template = document.getElementById('card-template');
    
    // Vider la grille
    grid.innerHTML = '';

    if (cocktails.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; font-style: italic; color: var(--text-muted);">Aucun cocktail ne correspond à votre recherche...</p>';
        return;
    }

    cocktails.forEach(cocktail => {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector('.card');

        // Remplir le recto
        const img = clone.querySelector('img');
        img.src = cocktail.image;
        img.alt = cocktail.nom;
        // Gestion erreur image
        img.onerror = () => img.src = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400&auto=format&fit=crop';
        
        clone.querySelector('h2').textContent = cocktail.nom;

        // Remplir le verso : Ingrédients
        const ingredientsList = clone.querySelector('.card-back ul');
        cocktail.ingredients.forEach(ing => {
            const li = document.createElement('li');
            li.textContent = ing;
            ingredientsList.appendChild(li);
        });

        // Remplir le verso : Recette
        const recipeList = clone.querySelector('.card-back ol');
        cocktail.recette.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            recipeList.appendChild(li);
        });

        // Interaction : retournement
        card.addEventListener('click', () => {
            document.querySelectorAll('.card.flipped').forEach(c => {
                if (c !== card) c.classList.remove('flipped');
            });
            card.classList.toggle('flipped');
        });

        grid.appendChild(clone);
    });
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        
        const filtered = allCocktails.filter(cocktail => {
            const nameMatch = cocktail.nom.toLowerCase().includes(term);
            const ingredientMatch = cocktail.ingredients.some(ing => 
                ing.toLowerCase().includes(term)
            );
            return nameMatch || ingredientMatch;
        });

        displayCocktails(filtered);
    });
}

loadCocktails();
