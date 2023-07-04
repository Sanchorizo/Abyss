var images = document.getElementsByClassName('image');
var audio = document.getElementById('audio');

// Ajouter les gestionnaires d'événements de clic à chaque image
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', createAudioHandler(i + 1));
}

// Fonction pour créer les gestionnaires d'événements de clic
function createAudioHandler(imageNumber) {
  return function() {
    var audioSource = 'sound/audio' + imageNumber + '.mp3';
    audio.src = audioSource;
    audio.play();
  };
}