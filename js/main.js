let loc = "cairo";
let SearchInput = document.getElementById("searchInput");
// console.log(SearchInput.value);
SearchInput.addEventListener("keyup", function () {
  getFromApi(SearchInput.value);
});
const monthes = [
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
const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
async function getFromApi(location) {
  let weather = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${location}&days=3`
  );
  if (weather.status >= 200 && weather.status <= 299) {
    let data = await weather.json();
    console.log(data);
    show(data);
  } else {
    console.log("error");
  }

  //   return await data;
  //   console.log(data.forecast.forecastday[0].date);
}
function show(data) {
  console.log(data.location.name);
  //   let date = new Date(data.forecast.forecastday[0].date);
  //   let monthName = getMonth(new Date(data.forecast.forecastday[0].date));
  //   let dayName = getDay(new Date(data.forecast.forecastday[0].date));
  //   let dayNum = date.getDate();
  let viewWeather = `
      <div class="card col-md-4 bg-dark p-0 mx-0  border-0">
     <div class="card-s d-flex justify-content-between dark-gray p-1  w-100">
       <p class="text-secondary">${getDay(
         new Date(data.forecast.forecastday[0].date)
       )}</p>
       <p class="text-secondary">${
         new Date(data.forecast.forecastday[0].date).getDate() +
         " " +
         getMonth(new Date(data.forecast.forecastday[0].date))
       }</p>
     </div>
     <div class="card-body bg-dark">
       <p class="text-secondary">
        ${data.location.name}
       </p>
         <div class="degree-img d-flex align-items-center justify-content-between">
           <div class="degree text-light p-2">
             ${data.forecast.forecastday[0].day.avgtemp_c}<sup>o</sup>C
           </div>
           <img src="https:${
             data.forecast.forecastday[0].day.condition.icon
           }" alt="cloudy-img">
         </div>
         <p class="text-info p-2">${
           data.forecast.forecastday[0].day.condition.text
         }</p>
         <div class="card-end bg-transparent d-flex justify-content-around">
           <div class="icon-word text-secondary">
             <i class="fa-solid fa-umbrella"></i>
             <span>20%</span>
           </div>
           <div class="icon-word text-secondary">
             <i class="fa-solid fa-wind"></i>
             <span>18km/h</span>
           </div>
           <div class="icon-word text-secondary">
             <i class="fa-regular fa-compass"></i>
             <span>East</span>
           </div>
         </div>
     </div>
   </div>
   <div class="card col-md-4 bg-dark p-0 mx-0  border-0">
     <div class="card-s d-flex justify-content-center bg-black opacity-25 p-1  w-100">
       <p class="text-secondary">${getDay(
         new Date(data.forecast.forecastday[1].date)
       )}</p>
     </div>
     <div class="card-body  text-center bg-black opacity-50">
         <div class="degree-img d-flex align-items-center justify-content-center">
           <img src="https:${
             data.forecast.forecastday[1].day.condition.icon
           }" alt="sunny-img">
         </div>
         <p class="text-white p-1 fw-bolder fs-2 ">${
           data.forecast.forecastday[1].day.avgtemp_c
         }<sup>o</sup>C</p>
         <p  class="text-secondary p-1">${
           data.forecast.forecastday[1].day.mintemp_c
         }<sup>o</sup></p>
         <p  class="text-info p-2">${
           data.forecast.forecastday[1].day.condition.text
         }</sup></span>
     </div>
   </div>
   <div class="card bg-dark col-md-4  p-0 mx-0  border-0">
     <div class="card-s d-flex justify-content-center p-1 dark-gray  w-100">
       <p class="text-secondary">${getDay(
         new Date(data.forecast.forecastday[2].date)
       )}</p>
     </div>
     <div class="card-body bg-dark text-center">
         <div class="degree-img d-flex align-items-center justify-content-center">
           <img src="https:${
             data.forecast.forecastday[2].day.condition.icon
           }" alt="sunny-img">
         </div>
         <p class="text-white p-1 fw-bolder fs-2 ">${
           data.forecast.forecastday[2].day.avgtemp_c
         }<sup>o</sup>C</p>
         <p  class="text-secondary p-1">${
           data.forecast.forecastday[2].day.mintemp_c
         }<sup>o</sup></p>
         <p  class="text-info p-2">${
           data.forecast.forecastday[2].day.condition.text
         }</sup></span>
     </div>
   </div>`;
  document.getElementById("weather").innerHTML = viewWeather;
}

function getMonth(Date) {
  monthName = monthes[Date.getMonth()];
  return monthName;
}
function getDay(Date) {
  dayName = Days[Date.getDay()];
  return dayName;
}
getFromApi(loc);
