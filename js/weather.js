/* 
 Weather App Javascript code
 author: Gabi Abdo
 date:   23/10/2018
 purpose: Get weather by city name
*/
$(document).ready(function() {
  $("#btn").click(function() {
    //variables
    // var ipUrl = "https://ipinfo.io/json";
    var city = $("#location").val();
    var appId = "&appid=a8015e6e41355584716db867bf66600c";
    var unitC = "&units=metric";
    var htmlString = "";

    if (city != "") {
      $.ajax({
        url:
          "https://api.openweathermap.org/data/2.5/find?q=" +
          city +
          appId +
          unitC,
        type: "GET",
        dataType: "json",
        success: function(data) {
          htmlString +=
            "<h3>Current Weather in " +
            city +
            " is: </h3>" +
            "<b>" +
            data.list[0].main.temp +
            "&#176;" +
            "C" +
            "</b>";

          $("#temperature").empty();

          $("#error").empty();
          $("#temperature").append(htmlString);
        },
        error: function(error) {
          console.log("There is an error" + error);
        }
      });
    } else {
      $("#error").append(
        "<h3><strong>ERROR:</strong> Input field cannot be empty</h3>"
      );
    }
  });
});
