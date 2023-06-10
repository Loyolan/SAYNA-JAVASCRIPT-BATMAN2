/**
 * || SCROLL PROGRESSIVE
  */
// Récupération des boutons Batman
const batmanUpButton = document.getElementById("batman-up-button");
const batmanDownButton = document.getElementById("batman-down-button");

// Gestionnaire d'événement de clic pour le bouton Batman vers le haut
batmanUpButton.addEventListener("click", () => {
  // Récupération de la section précédente
  const scrollOptions = {
    top: 0,
    behavior: "smooth" 
  };

  // Ajustez la vitesse de défilement en modifiant la durée en millisecondes
  scrollOptions.duration = 50000;

  window.scrollTo(scrollOptions);
});

// Gestionnaire d'événement de clic pour le bouton Batman vers le bas
batmanDownButton.addEventListener("click", () => {
  // Récupération de la section suivante
  const scrollOptions = {
    top: document.body.scrollHeight,
    behavior: "smooth" // ou "auto" pour un défilement instantané
  };

  // Ajustez la vitesse de défilement en modifiant la durée en millisecondes
  scrollOptions.duration = 50000;

  window.scrollTo(scrollOptions);
});

/**
 *  || APPARITION PROSSIVE 
 */