window.onload = function() {
    ol_title = document.getElementById("ol_title");
    ol_subarea = document.getElementById("ol_subarea");
    black_screen = document.getElementById("black_screen");

    search = document.getElementById("search");
    search_div = document.getElementById("search_div");
    filter = document.getElementById("filter");
    filter_div = document.getElementById("filter_div");

    black_screen.style.display = "none";
    filter_div.style.display = "none";

    ol_title.addEventListener("mouseover", showOL);
    ol_title.addEventListener("mouseout",  hideOL);
    
    search.addEventListener("click", event => {
        if(showing_sidebar === "search"){
            black_screen.style.display = "none";
            search_div.style.display = "none";
            filter_div.style.display = "none";
            showing_sidebar = "none";
        } else if(showing_sidebar === "filter") {
            filter_div.style.display = "none";
            showing_sidebar = "search";
        } else {
            black_screen.style.display = "block";
            search_div.style.display = "block";
            filter_div.style.display = "none";
            showing_sidebar = "search";
        }
    });

    filter.addEventListener("click", event => {
        if(showing_sidebar === "search"){
            filter_div.style.display = "block";
            showing_sidebar = "filter";
        } else if(showing_sidebar === "filter") {
            black_screen.style.display = "none";
            filter_div.style.display = "none";
            search_div.style.display = "none";
            showing_sidebar = "none";            
        } else {
            black_screen.style.display = "block";
            filter_div.style.display = "block";
            search_div.style.display = "block";
            showing_sidebar = "filter";
        }
    });

    black_screen.addEventListener("click", event => {
        if(showing_sidebar === "search"){
            black_screen.style.display = "none";
            search_div.style.display = "none";
            showing_sidebar = "none";
        } else if(showing_sidebar === "filter") {
            black_screen.style.display = "none";
            search_div.style.display = "none";
            showing_sidebar = "none";
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