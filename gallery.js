$(document).ready(function() {
    $.getJSON("https://raw.githubusercontent.com/DRAGONPR0N/dragonpr0n.github.io/main/archive.json", function(json) {
        $.each(json.files, function(i, item) {
            $(".gallery-content").append("<div class='gallery-item gallery-item" + i + "'></div>");
            if(json.files[i].mimeType == "image") {
                $("<img>").attr("src", atob(json.files[i].source)).appendTo(".gallery-item" + i);
            }
            else if(json.files[i].mimeType == "video") {
                $(".gallery-item" + i).append("<video autoplay muted loop class='video" + i + "'></video>");
                $("<source>").attr("src", atob(json.files[i].source)).appendTo(".video" + i);
            }
            $.each(json.files[i].tags, function(t, tag) {
                $(".gallery-item" + i).addClass(atob(json.files[i].tags[t]));
            });
        });
        $('.gallery-item').click(function() {
            $(this).toggleClass('fullscreen');
            if($(this).hasClass('fullscreen')) {
                $('body').css('overflow', 'hidden');
            }
            else {
                $('body').css('overflow', 'visible');
            }
        });
    });
});
