# 🍸 Cartes de Cocktails

Une application web élégante et interactive pour consulter des recettes de cocktails classiques, avec une fonctionnalité unique d'exportation pour impression au format cartes à jouer.

## ✨ Fonctionnalités

- **Interactivité :** 25 fiches de cocktails interactives qui se retournent au clic pour révéler ingrédients et instructions.
- **Design Premium :** Une interface soignée avec deux ambiances :
  - ☀️ **Mode Clair :** Inspiré des menus de bars d'hôtels prestigieux sur papier crème.
  - 🌙 **Mode Sombre :** Une ambiance "Lounge / Speakeasy" feutrée avec accents dorés.
- **Recherche Dynamique :** Filtrage instantané par nom de cocktail ou par ingrédient.
- **🃏 Mode Impression (Unique) :** Exportation des cartes au format standard **Poker (63.5mm x 88.9mm)** avec traits de coupe et lignes de pliage pour créer votre propre jeu de cartes physique.

## 🚀 Utilisation

1.  Ouvrez `CocktailCards.html` dans votre navigateur.
2.  Utilisez la barre de recherche pour trouver vos cocktails préférés.
3.  Basculez entre le mode clair et sombre via l'icône en haut à droite.
4.  Cliquez sur l'icône 🖨️ en haut à gauche pour générer les planches d'impression.

## 🃏 Guide de fabrication des cartes physiques

Pour obtenir un résultat professionnel :
1.  **Filtrage :** Filtrez les cocktails souhaités à l'écran (ou laissez tout afficher).
2.  **Impression :** Utilisez du papier cartonné (type Bristol, 200g minimum).
3.  **Découpage :** Suivez les lignes noires continues entourant chaque duo Recto/Verso.
4.  **Montage :** Pliez la carte sur la ligne pointillée centrale et collez les deux faces ensemble.

## 🛠️ Structure du Projet

- `CocktailCards.html` : Structure de l'application et template des cartes.
- `style.css` : Design complet, animations et règles d'impression millimétrées.
- `script.js` : Logique de chargement, filtrage, gestion du thème et impression.
- `cocktails.json` : Base de données des 25 cocktails (nom, ingrédients, recettes).
- `img/` : Répertoire pour vos illustrations minimalistes.

## 🎨 Personnalisation

Le projet est conçu pour être facilement extensible. Pour ajouter vos propres cocktails, il suffit d'éditer le fichier `cocktails.json` en suivant la structure existante. Pour les images, placez vos fichiers dans le dossier `img/` et mettez à jour le chemin dans le JSON.

---
*Projet réalisé avec passion pour les amateurs de mixologie.* 🥂
