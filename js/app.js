const API_KEY = `6137bf60790644f9f70724ef3866292d`

const loadTemp =  city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        displayTemp(data);
    })
}

const displayTemp = data => {
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = data.main.temp;
    innerHTMLById('temperature', data.main.temp);
    innerHTMLById('condition', data.weather[0].main);
    console.log(data.weather[0].main)
}

const innerHTMLById = (id,text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerHTML = city;
    loadTemp(city);
});

loadTemp('dhaka')