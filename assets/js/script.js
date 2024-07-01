$(document).ready(function () {
    // Handle click events for navigation links
    $('.nav-link').on('click', function (e) {
        e.preventDefault();

        // Remove 'active' class from all links and sections
        $('.nav-link').removeClass('active');
        $('.tab-content').removeClass('active');

        // Add 'active' class to the clicked link and the corresponding tab content
        $(this).addClass('active');
        $('#' + $(this).data('tab')).addClass('active');
    });
});
$(document).ready(function () {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Disable navigation arrows
        dots: false,   // Disable dots navigation
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set the speed of autoplay (in milliseconds)
    });

    $('.star-rating').each(function() {
        const rating = $(this).data('rating'); // Get rating from data attribute
        const starPercentage = (rating / 10) * 100; // Convert to percentage of 5-star width
        $(this).find('.stars-inner').css('width', `${starPercentage}%`); // Set width of inner stars
    });
});


function hidePopup() {
    $('#item-details-popup').fadeOut();
}

function showPopup() {
    $('#item-details-popup').fadeIn();
}

function openDetailsPopup(e) {
    let target = e.currentTarget;
    let item_id = $(target).attr('data-item-id');

    showPopup();
    console.log(target);
}

function getLink(e) {
    e.stopPropagation();
}