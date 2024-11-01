// Sélectionner tous les boutons et configurer les sons
const pads = document.querySelectorAll('.pad');

// Dictionnaire des boucles avec des sons pré-enregistrés
const sounds = {
    loop1: new Audio('sounds/6-01 Backing Sample.WAV'),
    loop2: new Audio('sounds/6-02 Backing Sample.WAV'),
    loop3: new Audio('sounds/6-03 Backing Sample.WAV'),
    loop4: new Audio('sounds/6-04 Backing Sample.WAV'),
    loop5: new Audio('sounds/6-05 Backing Sample.WAV'),
    loop6: new Audio('sounds/6-06 Backing Sample.WAV'),
    loop7: new Audio('sounds/6-07 Backing Sample.WAV'),
    loop8: new Audio('sounds/6-08 Backing Sample.WAV'),
    loop9: new Audio('sounds/6-09 Backing Sample.WAV'),
    loop10: new Audio('sounds/6-10 Backing Sample.WAV'),
    loop11: new Audio('sounds/6-11 Backing Sample.WAV'),
    loop12: new Audio('sounds/6-12 Backing Sample.WAV'),
    loop13: new Audio('sounds/6-13 Backing Sample.WAV'),
    loop14: new Audio('sounds/6-14 Backing Sample.WAV'),
    loop15: new Audio('sounds/6-15 Backing Sample.WAV'),
    loop16: new Audio('sounds/6-16 Backing Sample.WAV')
};

// Au chargement de la page, vérifier si chaque son est chargé correctement
document.addEventListener('DOMContentLoaded', () => {
    pads.forEach(pad => {
        const soundName = pad.getAttribute('data-sound');
        const sound = sounds[soundName];

        // Vérification de la disponibilité du fichier son
        if (!sound.src || sound.src === "") {
            pad.classList.add('empty'); // Ajoute la classe .empty si aucun son n'est associé
        }
    });
});

// Fonction pour jouer ou arrêter le son
pads.forEach(pad => {
    pad.addEventListener('click', () => {
        const soundName = pad.getAttribute('data-sound');
        const sound = sounds[soundName];

        // Si le son est disponible, on peut le jouer ou l'arrêter
        if (sound && sound.src) {
            if (sound.paused) {
                sound.loop = true;            // Définit le son en boucle
                sound.play();
                pad.classList.add('playing');  // Ajoute la classe playing au bouton
            } else {
                sound.pause();
                sound.currentTime = 0;         // Réinitialise le son
                pad.classList.remove('playing'); // Retire la classe playing du bouton
            }
        }
    });
});
