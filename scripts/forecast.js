const key = 'HlfXg5G1HslXfpOZh2x9SjBtOJ0aQTIq'


// Get weather conditions

const getWeather = async (id) =>{

    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

}



// Get city conditions
const getCity = async (city) =>{

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query =  `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0]

}

// getCity(city).then(data => {
//     return getWeather(data.Key)
// }).then(data => {
//     console.log(data)
// }).catch(err => console.log(err));


  

