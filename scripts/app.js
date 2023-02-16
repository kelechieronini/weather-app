const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time')


// update ui
const updateUI = (data) =>{
    const cityDets = data.cityDets;
    const weather = data.weather;

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
        };

    // update details template
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`

if (card.classList.contains('d-none')) {
card.classList.remove('d-none');
}

    let timeSrc = null;
if (weather.IsDayTime) {
    timeSrc = 'img/day.jpeg';
}else{
    timeSrc = 'img/night.jpg'
}

time.setAttribute('src', timeSrc)
}



// update city
const updateCity = async (city) =>{

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key)

    return{ cityDets, weather };
    

  
}

cityForm.addEventListener('submit', e =>{
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();
    console.log(city)

    

    //update ui with new city

    updateCity(city).then(data =>{
        updateUI(data);
    }).catch(err =>{
        console.log(err);
    })
})