#!/usr/bin/node
/* changes on each input checkbox tag */
$(document).ready(function () {
    $.ajax({
      url: "http://127.0.0.1:5001/api/v1/status",
        success: function (data) {
            if (data.status === 'OK') {
            
                $("div#api_status").addClass("available");
            } else {
                
                $("div#api_status").removeClass("available");
            }
        }
    });
});