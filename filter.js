$(document).ready(function() {
    $('.desktop-page-nav .filter-search-bar .filter-search-button').click(function() {
        var value = $('.filter-search-input').val().toLowerCase();

        if(value == '') {
            $('.gallery-item').show('1000');
        } else {
            $('.gallery-item').not('.' + value).hide('3000');
            $('.gallery-item').filter('.' + value).show('3000');
        }
    });
    $('.mobile-page-nav .filter-search-bar .filter-search-button').click(function() {
        var value = $('.mobile-page-nav .filter-search-bar .filter-search-input').val().toLowerCase();

        if(value == '') {
            $('.gallery-item').show('1000');
        } else {
            $('.gallery-item').not('.' + value).hide('3000');
            $('.gallery-item').filter('.' + value).show('3000');
        }
    });
    $('.show-filter-search-button').click(function() {
        $('.show-filter-search-button').css('display', 'none');
        $('.mobile-page-nav .title').css('display', 'none');
        $('.mobile-page-nav .filter-search-bar').css('display', 'flex');
    });
    $('.mobile-page-nav .filter-search-bar .filter-search-close-button').click(function() {
        $('.mobile-page-nav .filter-search-bar').css('display', 'none');
        $('.show-filter-search-button').css('display', 'flex');
        $('.mobile-page-nav .title').css('display', 'flex');
    });
});
