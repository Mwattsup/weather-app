
// function cityFunc() {
//     localStorage.setItem('city', document.getElementById('searchBox').value);
// };


// $('#button-addon2').on('click', cityFunc)


function getWeather() {
    event.preventDefault();
    var cityName = document.getElementById('searchBox').value;
    var apiKey = '&apikey=0736c11bc6eed6a03af8d3641c6af76c';
    var units = '&units=imperial';
    var todayWeather = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + units + apiKey;

    $('#currentWeather').empty();
    $('#fiveDay').empty();

    $.ajax({
        url: todayWeather,
        method: 'GET'
    }).then(function (response) {
        var now = moment().format('(L)');


        var searchName = $('#currentWeather');
        var displayInfo = searchName.append("<div class= 'weather'>");
        var city = response.name;
        var displayCity = $("<h3 id='cityName'>").text(city + ' ' + now);
        displayInfo.append(displayCity);

        var iconCode = response.weather[0].icon;
        var iconURL = 'https://openweathermap.org/img/wn/' + iconCode + '.png';
        var displayIcon = $("<img src='' id='icon'>");
        $('#cityName').append(displayIcon);
        $('#icon').attr('src', iconURL);

        var temperature = response.main.temp;
        var displayTemp = $('<p>').text('Temperature: ' + temperature + '°F');
        displayInfo.append(displayTemp);

        var humidity = response.main.humidity;
        var displayHumidity = $('<p>').text('Humidity: ' + humidity + '%');
        displayInfo.append(displayHumidity);

        var windSpeed = response.wind.speed;
        var displayWind = $('<p>').text('Wind Speed: ' + windSpeed + 'MPH');
        displayInfo.append(displayWind);

        var lon = response.coord.lon;
        var lat = response.coord.lat;
        var uvURL = 'https://api.openweathermap.org/data/2.5/uvi?appid=0736c11bc6eed6a03af8d3641c6af76c&lat=' + lat + '&lon=' + lon;
        $.ajax({
            url: uvURL,
            method: 'GET'
        }).then(function (heatIndex) {
            var uvIndex = heatIndex.value;
            var displayIndex = $('<p>').text('UV Index: ' + uvIndex);
            displayInfo.append(displayIndex);
        })

        var cityID = response.id;
        var weatherForcast = 'https://api.openweathermap.org/data/2.5/forecast?id=' + cityID + units + apiKey;

        $.ajax({
            url: weatherForcast,
            method: 'GET'
        }).then(function (forecast) {
            var grabForecast = forecast.list;
            var days = [];

            for (i = 5; i < grabForecast.length; i += 8) {
                var dayForecast = grabForecast[i];
                days.push(dayForecast);
                $('#fiveDay').append("<div class='col' id='" + i + "'>");
                $('#' + i).append("<img src='' id='icon" + i + "'>");
            }

            var iconCodeOne = days[0].weather[0].icon;
            var iconURLone = 'https://openweathermap.org/img/wn/' + iconCodeOne + '.png';
            $('#icon5').attr('src', iconURLone);

            var tempOne = days[0].main.temp;
            var dayOne = moment().add(1, 'day').format('(L)');
            var oneTemp = $('<p>').text('Temperature: ' + tempOne + '°F');
            $('#5').prepend(dayOne + '<br>');
            $('#5').append(oneTemp);


            var humidityOne = days[0].main.humidity;
            var humOne = $('<p>').text('Humidity: ' + humidityOne + '%');
            $('#5').append(humOne);

            var iconCodeTwo = days[1].weather[0].icon;
            var iconURLtwo = 'https://openweathermap.org/img/wn/' + iconCodeTwo + '.png';
            $('#icon13').attr('src', iconURLtwo);

            var tempTwo = days[1].main.temp;
            var dayTwo = moment().add(2, 'day').format('(L)');
            var twoTemp = $('<p>').text('Temperature: ' + tempTwo + '°F');
            $('#13').prepend(dayTwo + '<br>');
            $('#13').append(twoTemp);

            var humidityTwo = days[1].main.humidity;
            var humTwo = $('<p>').text('Humidity: ' + humidityTwo + '%');
            $('#13').append(humTwo);

            var iconCodeThree = days[2].weather[0].icon;
            var iconURLthree = 'https://openweathermap.org/img/wn/' + iconCodeThree + '.png';
            $('#icon21').attr('src', iconURLthree);

            var tempThree = days[2].main.temp;
            var dayThree = moment().add(3, 'day').format('(L)');
            var threeTemp = $('<p>').text('Temperature: ' + tempThree + '°F');
            $('#21').prepend(dayThree + '<br>');
            $('#21').append(threeTemp);

            var humidityThree = days[2].main.humidity;
            var humThree = $('<p>').text('Humidity: ' + humidityThree + '%');
            $('#21').append(humThree);

            var iconCodeFour = days[3].weather[0].icon;
            var iconURLfour = 'https://openweathermap.org/img/wn/' + iconCodeFour + '.png';
            $('#icon29').attr('src', iconURLfour);

            var tempFour = days[3].main.temp;
            var dayFour = moment().add(4, 'day').format('(L)');
            var fourTemp = $('<p>').text('Temperature: ' + tempFour + '°F');
            $('#29').prepend(dayFour + '<br>');
            $('#29').append(fourTemp);

            var humidityFour = days[3].main.humidity;
            var humFour = $('<p>').text('Humidity: ' + humidityFour + '%');
            $('#29').append(humFour);

            var iconCodeFive = days[4].weather[0].icon;
            var iconURLfive = 'https://openweathermap.org/img/wn/' + iconCodeFive + '.png';
            $('#icon37').attr('src', iconURLfive);

            var tempFive = days[4].main.temp;
            var dayFive = moment().add(5, 'day').format('(L)');
            var fiveTemp = $('<p>').text('Temperature: ' + tempFive + '°F');
            $('#37').prepend(dayFive + '<br>');
            $('#37').append(fiveTemp);

            var humidityFive = days[4].main.humidity;
            var humFive = $('<p>').text('Humidity: ' + humidityFive + '%');
            $('#37').append(humFive);

        })

    })
}

$('#button-addon2').on('click', getWeather);