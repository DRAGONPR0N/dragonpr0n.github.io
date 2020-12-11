$(document).ready(function() {
    $('.filter-search-button').click(function() {
        var value = $('.filter-search-input').val().toLowerCase();

        if(value == '') {
            $('.gallery-item').show('1000');
        } else {
            $('.gallery-item').not('.' + value).hide('3000');
            $('.gallery-item').filter('.' + value).show('3000');
        }
    });
});
