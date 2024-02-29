var inputValue = document.querySelector("#cityinput")
var btn = document.querySelector("#search")
var city = document.querySelector("#cityoutput")
var temp = document.querySelector("#temp")
var wind = document.querySelector("#wind")

apiKey = "9a0b82589a1addb500ca459ba8901331"

function conversion(value) {
    return (value - 273).toFixed(3)
}
btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=' + apiKey)
        .then(res => res.json())
        .then(data => {
            var nameVal = data['name']
            var temperature = data['main']['temp']
            var windSpeed = data['wind']['speed']

            city.innerHTML = `Weather of <span>${nameVal}<span>`
            temp.innerHTML = `Temperature : <span>${conversion(temperature)} <sup>o</sup>C <span>`
            wind.innerHTML = `Wind speed : <span>${windSpeed}<span>`
        })
        .catch(error => alert("Can't find your city :( "))
})