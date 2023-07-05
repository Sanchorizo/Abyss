var parleurs = document.getElementsByClassName("parleur");
var persos = document.getElementsByClassName("perso");
var parleur2 = document.getElementsByClassName("parleur2")[0];
var dialogues = document.getElementsByClassName("dialogue");
var dialogues2 = document.getElementsByClassName("dialogue2");
var hidden = document.getElementsByClassName("hidden")[0];
var aParleParleur = false; // Variable pour vérifier si le parleur a été cliqué
var dialogue2Active = false; // Variable pour garder une trace de l'état du dialogue2
const sortie = document.querySelector(".lien");
const sidra = document.querySelector(".seadramon");
const objet = document.querySelector(".objet");


// Gestion des clics sur les parleurs
for (var i = 0; i < parleurs.length; i++) {
    parleurs[i].addEventListener("click", function (event) {
        event.stopPropagation();

        aParleParleur = true; // Marquer que le parleur a été cliqué

        var dialogue = this.nextElementSibling;
        toggleDialogue(dialogue);
    });
}

// Gestion des clics sur les persos
for (var i = 0; i < persos.length; i++) {
    persos[i].addEventListener("click", function (event) {
        event.stopPropagation();

        var dialogue = this.nextElementSibling;
        toggleDialogue2(dialogue);
    });
}

// Gestion des clics sur le parleur2
parleur2.addEventListener("click", function (event) {
    event.stopPropagation();

    if (aParleParleur) {
        var dialogue = this.nextElementSibling;
        toggleDialogue(dialogue);
        sortie.classList.remove("lien");
        sortie.classList.add("apparait");
        sidra.addEventListener("click", function () {

            var dialogue3 = document.querySelector("dialogue2");
            hidden.classList.remove("active2");
            objet.classList.add("animation");
            toggleDialogue3(dialogue3);
    })
}
});
 
// Gestion des clics sur la page (désactivation des dialogues)
document.addEventListener("click", function (event) { 

    if (!event.target.classList.contains("dialogue") && !event.target.classList.contains("parleur") || !event.target.classList.contains("parleur2")) {
        for (var i = 0; i < dialogues.length; i++) {
            dialogues[i].classList.remove("active");
        }

        for (var i = 0; i < dialogues2.length; i++) {
            dialogues2[i].classList.remove("active2");
        }

        hidden.classList.remove("active");
        hidden.classList.remove("active2");
    }
});

function toggleDialogue(dialogue) {
    for (var i = 0; i < dialogues.length; i++) {
        if (dialogues[i] !== dialogue) {
            dialogues[i].classList.remove("active");
        }
    }

    if (dialogue.classList.contains("active")) {
        dialogue.classList.remove("active");
    } else {
        dialogue.classList.add("active");
    }

    hidden.classList.add("active");
}

function toggleDialogue2(dialogue) {
    for (var i = 0; i < dialogues2.length; i++) {
        if (dialogues2[i] !== dialogue) {
            dialogues2[i].classList.remove("active2");
        }
    }

    if (dialogue.classList.contains("active2")) {
        dialogue.classList.remove("active2");
    } else {
        dialogue.classList.add("active2");
    }
    
    hidden.classList.add("active2");
}

function toggleDialogue3(dialogue) {
    for (var i = 0; i < dialogues2.length; i++) {
        if (dialogues2[i] !== dialogue) {
            dialogues2[i].classList.remove("active2");
        }
    }

    if (dialogue.classList.contains("active2")) {
        dialogue.classList.remove("active2");
    }

    hidden.classList.add("active2");
}
document.addEventListener('click', function (event) {
    // Vérifiez si l'élément cliqué a la classe "active"
    if (event.target.classList.contains('active')) {
        // Sélectionnez tous les éléments de la classe "dialogue" et supprimez la classe "active"
        var dialogues = document.querySelectorAll('.dialogue');
        dialogues.forEach(function (dialogue) {
            dialogue.classList.remove('active');
        });

        // Sélectionnez tous les éléments de la classe "hidden" et supprimez la classe "active"
        var hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach(function (hidden) {
            hidden.classList.remove('active');
        });
    }
});


$(document).ready(function () {
    $(window).scroll(function () {
        $(".fadein").each(function () {
            var divPosition = $(this).offset().top;
            var divHeight = $(this).height();
            var windowHeight = $(window).height();
            var scroll = $(window).scrollTop();
            var isVisible = divPosition < scroll + windowHeight && divPosition + divHeight > scroll;

            if (isVisible) {
                $(this).addClass("visible");
            } else {
                $(this).removeClass("visible");
            }
        });
    });
});



