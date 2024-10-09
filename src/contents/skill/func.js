function hover(e) {
    const span = document.getElementById(e.target.className);
    span.style.display = "inline";
}

function noHover(e) {
    const span = document.getElementById(e.target.className);
    span.style.display = "none";
}

export {hover, noHover};