$(document).ready(function() {
    $('.mobile-page-nav .title-content .search-show-button').click(function() {
        showSearchContent();
    });

    $('.mobile-page-nav .search-content .search-close-button').click(function() {
        hideSearchContent();
    });

    $('.mobile-page-nav .search-content .search-button').click(function() {
        filterArchive();
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
                $('<img>').attr('src', json.urlPrefixes.driveHighResUrl + json.files[i].fileId).appendTo('.item' + i);
                $('.item' + i).find('img').attr('data-name', json.files[i].name);
            } else if(json.files[i].mimeType == 'video') {
                $('.item' + i).append("<video autoplay muted loop class='video" + i + "'></video>");
                $('.item' + i).find('video').attr('data-name', json.files[i].name);
                $('<source>').attr('src', json.urlPrefixes.driveHighResUrl + json.files[i].fileId).appendTo('.video' + i);
            };

            $.each(json.files[i].tags, function(t, tag) {
                $('.item' + i).addClass(atob(json.files[i].tags[t]));
            });
        });

        $('.archive-item').click(function() {
            $('.file-page-content').css('display', 'flex');
            $('.file-page-content .file-content').html($(this).html());
            $('.details-content .file-name').html($('.file-page-content .file-content').find('img').attr('data-name'));
        });

        $('.archive-item').click(function() {
            if($('.file-page-content .file-content').find('video').length == true) {
                $('.file-page-content .file-content').find('video').prop('muted', !$('.file-page-content .file-content').find('video').prop('muted'));
                $('.details-content .file-name').html($('.file-page-content .file-content').find('video').attr('data-name'));
            };
        });

        $('.file-page-content .close-page').click(function() {
            $('.file-page-content').css('display', 'none');
            $('.file-page-content .file-content').html('');
            $('.details-background').css('display', 'none');
            $('.details-content').css('display', 'none');
        })

        $('.file-page-content .page-more').click(function() {
            $('.details-background').css('display', 'flex');
            $('.details-content').css('display', 'flex');
        })

        $('.file-page-content .cancel-button').click(function() {
            $('.details-background').css('display', 'none');
            $('.details-content').css('display', 'none');
        })
    });
};

// Keydown Event
$(document).on('keydown', function(event) {
    if(event.keyCode == 27) {
        $('.file-page-content').css('display', 'none');
        $('.file-page-content .file-content').html('');
    };
});

function filterArchive() {
    var value = $('.mobile-page-nav .search-content .search-input').val().toLowerCase();

    if(value == '') {
        $('.archive-item').show('1000');
    } else {
        $('.archive-item').not('.' + value).hide('3000');
        $('.archive-item').filter('.' + value).show('3000');
    };
};
