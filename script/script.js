// Variable Store
let mainBody = document.getElementById('main_body');
let rendomColorBtn = document.getElementById('rendom_color_btn');
let discoverSomethingNewToday = document.querySelector('.discover_something_new_today');
let todayDate = document.getElementById("today_date");

// Random Color Generator
rendomColorBtn.addEventListener('click', () => {
  mainBody.style.backgroundColor = rgbColor();
})
function rgbColor(){
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`
}
// Discover Something New Today
discoverSomethingNewToday.addEventListener('click', () =>{
  window.location.href = "../faq/index.html"
})
// Today Date Update
function getTodayDate(){
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const d = new Date();
  const dayName = days[d.getDay()];
  const monthName = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();
  return `${dayName},<br> <b>${monthName} ${date} ${year}</b>`;
}
todayDate.innerHTML = getTodayDate();
todayDate.style.fontSize = "19px";