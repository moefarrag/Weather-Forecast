

// global Variables

let goButton = document.getElementById('goButton')

let cityInput = document.getElementById('cityInput')

cityInput.addEventListener('input', function(){
     weatherForcast(cityInput.value)
})
goButton.addEventListener('click', function(){
     weatherForcast(cityInput.value)
})

// getting date

const days = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
 ];
 const months = [
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December",
 ];

const day = new Date().getDate(); // 20  1-31
const today = new Date().getDay();// 0  0-6
const month = new Date().getMonth();// 4 1-12

console.log(days[today]);

// adding function Main

async function weatherForcast(searchvalue = 'cairo') {

     let x = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=3b255d12553f457b83d25212251904&q=${searchvalue}&days=3`, {method:'GET'})
     let data ;
     if(x.ok==true){
          data = await x.json()
          console.log('weather',data);
          display(data);
     }

}

weatherForcast()



          // the process
         
 


// display function




function display(data){
     var xdisp = '';

     let forecastday = data.forecast.forecastday

     for (i = 0; i < forecastday.length; i++)
          xdisp += `<div class='inner col g-3'>
          <div class="card  bg-success-subtle rounded-4 p-2">
                              <div class="d-flex flex-wrap justify-content-between  ">
                                   <span>${days[today + i]}</span>
                                   <span>${day+i}${months[month]}</span>
                                   
                              </div>
                              <div>
                                   <p class="p-2">${data.location.name}</p>
                                   <p class="p-2">
                                   ${forecastday[i].day.maxtemp_c} 
                                   <img src='${forecastday[i].day.condition.icon}' alt='img' width='30px' height='30px'>
                                   </p>
                              </div>
                              <div class="d-flex flex-wrap justify-content-between">
                                   <span>${forecastday[i].day.daily_chance_of_rain}</span>
                                   <span>${forecastday[i].day.maxwind_kph
                                   }</span>
                                   <span>${data.current.
                                        wind_dir
                                        }</span>

                              </div>
                         </div>
     </div>`
     document.getElementById('xdisp').innerHTML = xdisp
     
}









