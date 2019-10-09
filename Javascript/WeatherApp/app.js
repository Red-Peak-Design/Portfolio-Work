
window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector(".temperature-degree");
    let LocationTimeZone = document.querySelector(".Location-TimeZone");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = '${proxy}https://api.darksky.net/forecast/3fd781a90bf2ae05e96cf84f54b802de/${lat},${long}';

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {temperature, summary} = data.currently;
                    //set DOM Elements from the API

                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = temperature;
                })
        })
    }
}); 