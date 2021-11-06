window.onload = function() {
    ol_title = document.getElementById("ol_title");
    ol_subarea = document.getElementById("ol_subarea");
    black_screen = document.getElementById("black_screen");

    ol_subarea.style.display = "none";
    black_screen.style.display = "none";

    ol_title.addEventListener("mouseover", switchOL);
    ol_title.addEventListener("mouseout",  switchOL);
}

var outer_link;

function switchOL(event) {
    if(ol_subarea.style.display === "none")
        ol_subarea.style.display = "block";
    else
        ol_subarea.style.display = "none";
}