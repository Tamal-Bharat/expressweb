const search_city = document.getElementById('search_city');
const error_message = document.getElementById('error_message');
const temp_info = document.getElementById('temp_info');
const city_country = document.getElementById('city_country');
const weather_image = document.getElementById('weather_image');
const submit_city_btn = document.getElementById('submit_city_btn');

submit_city_btn.addEventListener('click', async (event)=>{
    event.preventDefault();

    if(search_city.value === '' || search_city.value===null || search_city.value===undefined){
        error_message.innerText = 'Search cannot be empty';
        error_message.style.display = 'block';
    }
    else{
        error_message.style.display = 'none';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search_city.value}&units=metric&appid=4467f44b04f829bba4c8a47e59d68674`;

       try{
        const data = await fetch(url);
        const jsondata = await data.json();     
        
        if(jsondata.weather[0].main == 'Clouds'){
           
            weather_image.innerHTML = `<img src="images/clouds.png" alt="weather_img">`;
        }
        else if(jsondata.weather[0].main == 'Haze'){
            weather_image.innerHTML = `<img src="images/haze.png" alt="weather_img">`;
        }
        else if(jsondata.weather[0].main == 'Clear'){
            weather_image.innerHTML = `<img src="images/sunny.jpeg" alt="weather_img">`;
        }
        else{
            weather_image.innerHTML = `<img src="images/rain.jpeg" alt="weather_img">`;
        }

        temp_info.innerHTML = `<p>${jsondata.main.temp}&deg;C</p>`;
        city_country.innerHTML = `<p>${jsondata.name}, ${jsondata.sys.country}</p>`;
       }
       catch(error){
        error_message.innerText = 'City name may be wrong';
        error_message.style.display = 'block';        
       }

    }
});