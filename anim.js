var parleurs = document.getElementsByClassName("parleur");
var persos = document.getElementsByClassName("perso");
var parleur2 = document.getElementsByClassName("parleur2")[0];
var dialogues = document.getElementsByClassName("dialogue");
var dialogues2 = document.getElementsByClassName("dialogue2");
var hidden = document.getElementsByClassName("hidden")[0];
var aParleParleur = false; // Variable pour vérifier si le parleur a été cliqué

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
        toggleDialogue2(dialogue);
    }
});

// Gestion des clics sur la page (désactivation des dialogues)
document.addEventListener("click", function () {
    for (var i = 0; i < dialogues.length; i++) {
        dialogues[i].classList.remove("active");
    }

    for (var i = 0; i < dialogues2.length; i++) {
        dialogues2[i].classList.remove("active2");
    }

    hidden.classList.remove("active");
    hidden.classList.remove("active2");
});

function toggleDialogue(dialogue) {
    for (var i = 0; i < dialogues.length; i++) {
        if (dialogues[i] !== dialogue) {
            dialogues[i].classList.remove("active");
        }
    }

    dialogue.classList.toggle("active");
    hidden.classList.toggle("active");
}

function toggleDialogue2(dialogue) {
    for (var i = 0; i < dialogues2.length; i++) {
        if (dialogues2[i] !== dialogue) {
            dialogues2[i].classList.remove("active2");
        }
    }

    dialogue.classList.toggle("active2");
    hidden.classList.toggle("active2");
};

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



  
  
