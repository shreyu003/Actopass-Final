document.addEventListener("DOMContentLoaded", function() {
    var prdTag = document.querySelector('.prd-tag');
    if (prdTag && prdTag.textContent.trim() === "") {
        prdTag.style.display = 'none';
    }
});

$(".head").click(function () {
    $(this).toggleClass("active");
    $(this).parent().find(".arrow").toggleClass("arrow-animate");
    $(this).parent().find(".highlightcontent").slideToggle(280);
});