// JSExLink.js
window.onload = init;

function init() {
    document.getElementById("myLink").onlick = showWarning
}

function showWarning() {
    return confirm("Warning! Proceed with care!");
}