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



// share button for product page

function shareContent() {
    if (navigator.share) {
        navigator.share({
            title: 'Share the link with friends and family members.',
            text: 'This is an awesome webpage, you should visit it.',
            url: window.location.href
        })
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.error('Error sharing', error));
    } else {
        alert('Web Share API is not supported in your browser.');
    }
}