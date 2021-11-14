window.onload = function() {
    ol_title = document.getElementById("ol_title");
    ol_subarea = document.getElementById("ol_subarea");
    black_screen = document.getElementById("black_screen");

    search = document.getElementById("search");
    search_div = document.getElementById("search_div");
    search_bar = document.getElementById("search_bar");
    filter = document.getElementById("filter");
    filter_div = document.getElementById("filter_div");

    hashtag_list = document.getElementById("hashtag_list");
    hashtag = hashtag_list.children;

    black_screen.style.display = "none";
    filter_div.style.display = "none";

    ol_title.addEventListener("mouseover", showOL);
    ol_title.addEventListener("mouseout",  hideOL);

    for(let i=0; i < hashtag.length; i++) {
        hashtag[i].addEventListener("click", event => {
            changeHashtag(i);
        });
    }
    
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

function changeHashtag(i) {
    var hiT = hashtag[i].innerText;
    var k0 = search_bar.value.split(" ");
    var k1 = []
    var keywords = [];
    for(let i=0; i < k0.length; i++) {
        if(k0[i] !== "") {
            k1.push(k0[i]);
        }
    }
    if(k1.length === 0) {
        search_bar.value = hiT;
        return 0;
    }
    for(let i=0; i < k1.length; i++) {
        var keyword = k1[i].split("#");
        if(keyword[0] !== "") {
            keywords.push(keyword[0]);
        }
        for(let j=1; j < keyword.length; j++) {
            keywords.push("#" + keyword[j]);
        }
    }
    if(keywords.includes(hiT)) {
        var i = keywords.indexOf(hiT);
        keywords.splice(i, 1);
    } else {
        keywords.push(hiT);
    }
    search_bar.value = keywords.join(" ");
}