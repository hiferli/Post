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
            // console.log(response)
            allPostOffices = response[0]["PostOffice"]
            // console.log(allPostOffices)
            $("#infoTable").empty();

            for(let i = 0; i < allPostOffices.length; i++){
                addEntity(allPostOffices[i] , i + 1);
            }

        }
    });
}

function addEntity(data , i) {
    console.log(data)
    var entity = '';
    entity += '<tr>'
    
    entity += '<td>' + i + '</td>'
    entity += '<td>' + data["Name"] + '</td>'
    entity += '<td>' + data["Division"] + '</td>'
    entity += '<td>' + data["District"] + '</td>'
    entity += '<td>' + data["State"] + '</td>'

    entity += '</tr>'

    $("#infoTable").append(entity);
}
