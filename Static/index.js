function apiCalling() {
    $.ajax({
        type: "POST",
        url: "/",

        success: function (data) {
            console.log(data);
        },

        error: function() {
            console.log("Error");
        }
    });
}

$(document).ready(function () {
    $("#submit").click(function (e) { 
        apiCalling();
        e.preventDefault();
    });
});

