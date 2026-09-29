"use strict";

// DONNÉES ET CHARGEMENT FOURNIS : cette partie n'est pas évaluée.
// Source : https://fakestoreapi.noksha.dev/api/products
// Capture du 28/09/2026. Prix affichés en euros par convention d'exercice.
// Garder le mode décidé par l'enseignant, identique pour toute la classe.
const MODE_DONNEES = "capture"; // alternative enseignant : "reseau"
const PRODUITS_CAPTURE = [
  {
    "_id": 1,
    "title": "Long sleeve Jacket",
    "price": 150,
    "category": "women",
    "image": "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg"
  },
  {
    "_id": 2,
    "title": "Jacket with wollen hat",
    "price": 65,
    "category": "women",
    "image": "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg"
  },
  {
    "_id": 3,
    "title": "Compact fashion t-shirt",
    "price": 55.99,
    "category": "women",
    "image": "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg"
  },
  {
    "_id": 4,
    "title": "Blue jins",
    "price": 50,
    "category": "women",
    "image": "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg"
  },
  {
    "_id": 5,
    "title": "Skirts with full setup",
    "price": 695,
    "category": "women",
    "image": "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg"
  },
  {
    "_id": 6,
    "title": "Yellow Hoody",
    "price": 180,
    "category": "men",
    "image": "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg"
  }
];

let produits = [];

// VOTRE TRAVAIL COMMENCE ICI.
function demarrer() {

  // Le tableau produits contient maintenant les six produits.
  // Construisez le catalogue et initialisez l'affichage du panier.
  const zoneProduits = document.querySelector(".products");

  for (let i = 0; i < produits.length; i++) {
    const carte = document.createElement("div");
    const titre = document.createElement("p");
    const categorie = document.createElement("p");
    const prix = document.createElement("p");
    const image = document.createElement("img");
    const bouton = document.createElement("button");

    titre.textContent = produits[i].title;
    categorie.textContent = produits[i].category;
    prix.textContent = produits[i].price.toFixed(2) + " €";
    image.src = produits[i].image;
    image.alt = produits[i].title;
    bouton.textContent = "Ajouter au panier";

    bouton.addEventListener("click", () => {
      addToCard(produits[i]);
    });

    carte.appendChild(image);
    carte.appendChild(titre);
    carte.appendChild(categorie);
    carte.appendChild(prix);
    carte.appendChild(bouton);

    zoneProduits.appendChild(carte);
  }
}

// Ajoutez vos variables et vos fonctions ici.

let panier = [];

produits = PRODUITS_CAPTURE;

demarrer();

const toggleSideBar = () => {
  const panier = document.querySelector('.panier');
  const sideBar = document.querySelector('.sidebar');

  panier.addEventListener('click', () => {
    sideBar.classList.toggle('w-[600px]');
  });
};

toggleSideBar();


const addToCard = (produit) => {
  let trouve = false;

  for (let i = 0; i < panier.length; i++) {
    if (panier[i]._id === produit._id) {
      panier[i].quantite = panier[i].quantite + 1;
      trouve = true;
    }
  }

  if (trouve === false) {
    panier.push({
      _id: produit._id,
      title: produit.title,
      price: produit.price,
      quantite: 1
    });
  }

  displaySideBar();
};


const displaySideBar = () => {
  const sideBar = document.querySelector('.sidebar');
  const compteur = document.querySelector('.counter');

  let total = 0;
  let nombreArticles = 0;

  sideBar.replaceChildren();

  for (let i = 0; i < panier.length; i++) {
    const titre = document.createElement("p");
    const prix = document.createElement("p");
    const quantite = document.createElement("p");
    const sousTotal = document.createElement("p");

    titre.textContent = panier[i].title;
    prix.textContent = panier[i].price.toFixed(2) + " €";
    quantite.textContent = "Quantité : " + panier[i].quantite;
    sousTotal.textContent = "Sous-total : " + (panier[i].price * panier[i].quantite).toFixed(2) + " €";

    total = total + panier[i].price * panier[i].quantite;
    nombreArticles = nombreArticles + panier[i].quantite;

    sideBar.appendChild(titre);
    sideBar.appendChild(prix);
    sideBar.appendChild(quantite);
    sideBar.appendChild(sousTotal);
  }

  compteur.textContent = nombreArticles;

  const totalAffichage = document.createElement("p");

  totalAffichage.textContent = "Total : " + total.toFixed(2) + " €";

  sideBar.appendChild(totalAffichage);
};


const deleteArticle = () => {
 
};