$(document).ready(function() {
    $.getJSON("https://raw.githubusercontent.com/pr0ndragon/test/main/archive.json", function(json) {
        $.each(json.files, function(i, item) {
            $(".gallery-content").append("<div class='gallery-item gallery-item" + i + "'></div>");
            $("<img>").attr("src", json.files[i].source).appendTo(".gallery-item" + i);
        });
    });
});