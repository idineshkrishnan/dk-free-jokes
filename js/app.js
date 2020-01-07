$(document).ready(function() {
    getJoke();
});

setInterval(function() {
    getJoke();
}, 10 * 1000);

function getJoke() {
    $.ajax({
        url: "http://api.icndb.com/jokes/random",
        method: "GET",
        success: function(response) { 
            $('#joke').html("\""+response.value.joke+"\"");
        } 
    });
}