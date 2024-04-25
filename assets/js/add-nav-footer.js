$(function () {
    // Include nav
    $("#nav-placeholder").load("nav.html");

    // Include footer
    $("#footer-placeholder").load("footer.html");
});

document.getElementById("goTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});