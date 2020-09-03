let parent = document.getElementById("interactive-container");
let a = document.getElementsByClassName("primary-holder column  is-one-third-desktop is-half-tablet is-half-mobile is-full-portrait");
parent.remove();
a[0].setAttribute("style", "width: 100%");
