document.addEventListener("DOMContentLoaded", function () {
    // Function to check if an element is in the viewport
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to lazily load content
    function lazyLoadContent() {
        const lazyContentElements = document.querySelectorAll("article");

        for (let i = 0; i < lazyContentElements.length; i++) {
            // Check if the article is in the viewport or close to it
            if (isElementInViewport(lazyContentElements[i])) {
                // Add loaded class
                lazyContentElements[i].classList.remove("fade");
                lazyContentElements[i].classList.add("loaded");

                // Load the next article
                if (i < lazyContentElements.length - 1) {
                    lazyContentElements[i + 1].classList.remove("fade");
                    lazyContentElements[i + 1].classList.add("loaded");
                }
            }
        }
    }

    // Attach the lazyLoadContent function to the scroll event
    window.addEventListener("scroll", lazyLoadContent);

    // Call the function initially to load the visible content on page load
    lazyLoadContent();
});