$(function () {
    // Include nav
    $("#nav-placeholder").load("nav.html");

    // Include footer
    $("#footer-placeholder").load("footer.html");

    // Include header
    $("#header-placeholder").load("header.html");
});

document.getElementById("goTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});