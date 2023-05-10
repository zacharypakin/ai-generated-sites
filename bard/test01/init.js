// This file contains the JavaScript code that will be executed when the page loads.

// Add a smooth scroll to the page.
$(document).ready(function () {
    $("a[href*='#']").on("click", function (event) {
        event.preventDefault();
        $(document).scrollTop($(this.hash).offset().top - 50);
    });
});

// Add a smooth fade-in effect to the images on the page.
$("img").on("load", function () {
    $(this).fadeIn(500);
});
