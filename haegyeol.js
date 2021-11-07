window.onload = function() {
    ol_title = document.getElementById("ol_title");
    ol_subarea = document.getElementById("ol_subarea");
    black_screen = document.getElementById("black_screen");

    search = document.getElementById("search");
    search_div = document.getElementById("search_div");

    filter = document.getElementById("filter");

    black_screen.style.display = "none";

    ol_title.addEventListener("mouseover", showOL);
    ol_title.addEventListener("mouseout",  hideOL);
    
    search.addEventListener("click", event => {
        if(showing_sidebar === "search"){
            black_screen.style.display = "none";
            search_div.style.display = "none";
            showing_sidebar = "none";
        } else if(showing_sidebar === "filter") {
            
        } else {
            black_screen.style.display = "block";
            search_div.style.display = "block";
            showing_sidebar = "search";
        }
    });

    black_screen.addEventListener("click", event => {
        if(showing_sidebar === "search"){
            black_screen.style.display = "none";
            search_div.style.display = "none";
            showing_sidebar = "none";
        } else if(showing_sidebar === "filter") {
            
        } else {
            alert("Something's wrong!");
        }
    });
}

var outer_link;
var showing_sidebar = "none";

function showOL(event) {
    ol_subarea.style.display = "block";
}

function hideOL(event) {
    ol_subarea.style.display = "none";
}

function switchSearch(event) {
    if(black_screen.style.display === "none")
        black_screen.style.display = "block";
    else
        black_screen.style.display = "none";
}