function apiCalling() {
    $.ajax({
        type: "POST",
        url: "/",

        success: function (data) {
            data = JSON.parse(data);
            console.log(data["PinCode"]);
            getInformation(data["PinCode"])
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

function getInformation(pincode) {
    api = "https://api.postalpincode.in/pincode/" + pincode;
    
    $.ajax({
        type: "GET",
        url: api,
        
        success: function (response) {
            console.log(response)
            
        }
    });

}
