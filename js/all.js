// Fonction pour redimensionner les images en fonction de la largeur de l'écran
function resizeImages() {
    var images = document.querySelectorAll('.image');
    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      image.style.width = 'auto';
      image.style.height = 'auto';
      
      if (window.innerWidth < 768) {
        image.style.width = '100%';
      } else if (window.innerWidth < 1024) {
        image.style.width = '75%';
      } else {
        image.style.width = '50%';
      }
    }
  }
  
  // Écouter l'événement 'resize' pour redimensionner les images
  window.addEventListener('resize', resizeImages);
  
  // Redimensionner les images au chargement de la page
  resizeImages();
  