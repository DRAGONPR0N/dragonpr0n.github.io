$(document).ready(function() {
    $('.mobile-page-nav .title-content .search-show-button').click(function() {
        showSearchContent();
    });

    $('.mobile-page-nav .search-content .search-close-button').click(function() {
        hideSearchContent();
    });

    $('.mobile-page-nav .search-content .search-button').click(function() {
        filterArchive();
filterArchive2();
    });

    $('.enter-page-button').click(function() {
        $('.nsfw-warning').css('display', 'none');
        $('.page-content').css('display', 'flex');
    });

    getArchive();
});

function showSearchContent() {
    $('.mobile-page-nav .title-content').css('display', 'none');
    $('.mobile-page-nav .search-content').css('display', 'flex');
};

function hideSearchContent() {
    $('.mobile-page-nav .search-content').css('display', 'none');
    $('.mobile-page-nav .title-content').css('display', 'flex');
};

function getArchive() {
    $.getJSON('https://raw.githubusercontent.com/DRAGONPR0N/dragonpr0n.github.io/main/archive.json', function(json) {
        $.each(json.files, function(i, item) {
            $('.page-content').append("<div class='archive-item item" + i + "'></div>");

            if(json.files[i].mimeType == 'image') {
                $('<img>').attr('src', atob(json.files[i].source)).appendTo('.item' + i);
            } else if(json.files[i].mimeType == 'video') {
                $('.item' + i).append("<video autoplay muted loop class='video" + i + "'></video>");
                $('<source>').attr('src', atob(json.files[i].source)).appendTo('.video' + i);
            };

            $.each(json.files[i].tags, function(t, tag) {
                $('.item' + i).addClass(atob(json.files[i].tags[t]));
            });
        });
    });
};

function filterArchive() {
    var value = $('.mobile-page-nav .search-content .search-input').val().toLowerCase();

    if(value == '') {
        $('.archive-item').show('1000');
    } else {
        $('.archive-item').not('.' + value).hide('3000');
        $('.archive-item').filter('.' + value).show('3000');
    };
};

function filterArchive2() {
$.getJSON('https://raw.githubusercontent.com/DRAGONPR0N/dragonpr0n.github.io/main/archive.json', function(json) {
$.each(json.files, function(i, item) {
$.each(json.files[i].tags, function(t, tag) {
if(t.includes('3d') {
$('.archive-item').hide('1000');
$('.item' + i).css('display','flex');
};
});
});
});
};
