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
 *  || APPARITION PROGRESSIVE WITH ANIMATION FADE IN 
 */
// Récupérez tous les éléments avec la classe "fade-slide"
const fadeSlideElements = document.querySelectorAll('.fade-in');

// Fonction pour vérifier si un élément est visible à l'écran
function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Fonction pour gérer le défilement et l'apparition progressive des éléments avec un effet de slide
function handleScrollFadeSlide() {
  fadeSlideElements.forEach((element) => {
    if (isElementVisible(element)) {
      element.style.opacity = '1';
      element.style.visibility = 'visible';
      element.style.transform = 'translateX(0)';
    }
  });
}

// Ajoutez un gestionnaire d'événement de défilement pour appeler la fonction handleScrollFadeSlide
window.addEventListener('scroll', handleScrollFadeSlide);

// Appelez la fonction handleScrollFadeSlide une fois au chargement initial pour afficher les éléments initialement visibles
handleScrollFadeSlide();

// APPARITION PROGRESSIVE WITH ZOOM ANIMATION
// Récupérez toutes les images avec la classe "fade-zoom"
const fadeZoomImages = document.querySelectorAll('.fade-zoom');

// Fonction pour vérifier si une image est visible à l'écran
function isImageVisible(image) {
  const rect = image.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Fonction pour gérer le défilement et l'apparition progressive des images avec un effet de zoom
function handleScrollFadeZoom() {
  fadeZoomImages.forEach((image) => {
    if (isImageVisible(image)) {
      image.style.opacity = '1';
      image.style.visibility = 'visible';
      image.style.transform = 'scale(1)'; // Réinitialise l'échelle pour activer l'effet de zoom
    }
  });
}

// Ajoutez un gestionnaire d'événement de défilement pour appeler la fonction handleScrollFadeZoom
window.addEventListener('scroll', handleScrollFadeZoom);

// Appelez la fonction handleScrollFadeZoom une fois au chargement initial pour afficher les images initialement visibles
handleScrollFadeZoom();