

function addResult() {

    inputCity = document.getElementById("Myinput").value;
    historyList = getInfo();
    var searchCity = $("<div>")
    searchCity.attr('id', inputCity)
    searchCity.text(inputCity)
    searchCity.addClass("h4")


    if (historyList.includes(inputCity) === false) {
        $(".history").append(searchCity)
    }
    $(".subtitle").attr("style", "display:inline")
    addInfo(inputCity);
};

document.getElementById("searchBtn").addEventListener("click", addResult);
document.getElementById("searchBtn").addEventListener("click", getResult);

function getResult(){

    $(".five-day").empty();
    $(".city").empty()

    inputCity = document.getElementById("myInput").value;
    var countryCode='US';
    var cityCode=inputCity;

    var geoLon;
    var geoLat;

    var cityName =$("<h>")
    cityName.addClass("h3")
    var temp = $("<div>")
    var wind = $("<div>")
    var humidity = $("<div>")
    var uvIndex = $("<div>")
    var icon = $("<img>")
    icon.addClass("icon");
    var dateTime = $("<div>")

    $(".city").addClass("list-group")
    $(".city").append(cityName)
    $(".city").append(dateTime)
    $(".city").append(icon)
    $(".city").append(temp)
    $(".city").append(wind)
    $(".city").append(humidity)
    $(".city").append(uvIndex)


    var geoUrl = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=d4cbfd14de8421a10a8fb678a234b81c'

    
}