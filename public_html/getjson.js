$(document).ready(function() {

console.log("100%");
        $('<ul>', {'class': 'enlista'}).appendTo('#div1');
        $.getJSON('data.json', function(data) {
        console.log(data);
                $('<li>').text(data.siffror).appendTo('.enlista');
                $.each(data.siffror, function(key, val) {

                $('<li id="' + key + '">').text(val).appendTo('.enlista');
                });
        });
    });