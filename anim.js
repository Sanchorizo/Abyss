var moz = document.getElementsByClassName("mosa")[0];
var diag = document.getElementsByClassName("dialogue")[0];
var hidden = document.getElementsByClassName("hidden")[0];

moz.addEventListener("click", function (event) {
    // Empêche la propagation du clic à l'élément de la page
    event.stopPropagation();

    diag.classList.toggle("active");
    hidden.classList.toggle("active");
});

document.addEventListener("click", function () {
    diag.classList.remove("active");
    hidden.classList.remove("active");
});