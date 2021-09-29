var outerLink;
function switchOuterLink() {
    if(outerLink.getAttribute("display") === "none")
        outerLink.setAttribute("display", "block");
    else
        outerLink.setAttribute("display", "none");
}