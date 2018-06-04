/**
 * Created by johan on 13/11/2017.
 */
var content = document.getElementById('content');
var navbar = document.getElementById('navBar');

function autoResizeContent() {
    content.style.minHeight = window.innerHeight - navbar.offsetHeight - content.marginTop +'px';
    console.log(document.getElementById("div_gallery").offsetWidth + " " + window.innerWidth)
}

window.onresize = autoResizeContent;
autoResizeContent();