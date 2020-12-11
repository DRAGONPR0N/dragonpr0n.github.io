$(document).ready(function() {
    $.getJSON("https://raw.githubusercontent.com/DRAGONPR0N/dragonpr0n.github.io/main/archive.json", function(json) {
        $.each(json.files, function(i, item) {
            if(json.files[i].mimeType == "image") {
                $(".gallery-content").append("<div class='gallery-item gallery-item" + i + "'></div>");
                $("<img>").attr("src", atob(json.files[i].source)).appendTo(".gallery-item" + i);
            }
            else if(json.files[i].mimeType == "video") {
                $(".gallery-content").append("<video autoplay muted loop class='gallery-item gallery-item" + i + "'></video>");
                $("<source>").attr("src", atob(json.files[i].source)).appendTo(".gallery-item" + i);
            }
            $.each(json.files[i].tags, function(t, tag) {
                $(".gallery-item" + i).addClass(atob(json.files[i].tags[t]));
            });
        });
    });
});
