
    $(document).ready(function() {
        $('form').submit(function() {
            // your code here (build up your url)
            var city = $('input').val();

            $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&&appid=57c66dedc00628f7fe46f13df2361f6b', function(res) {
                // your code here
                var name = res.name;
                var temperature = res.main.temp;
                var celsius = Math.floor(res.main.temp-273.15);
                var farenheit = Math.floor((celsius * 9/5) + 32);
                var output = "<div><h1>"+name+"</h1><h3>Kelvin: "+temperature+" Celsius: "+celsius+" Farenheit: "+farenheit+"</h3></div>";

                $('#content').append(output);
                console.log(output);


            }, 'json');
            // don't forget to return false so the page doesn't refresh
            return false;
        });
    });    
