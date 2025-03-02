// Variable Store
let mainBody = document.getElementById('main_body');
let randomColorBtn = document.getElementById('rendom_color_btn');
let discoverSomethingNewToday = document.querySelector('.discover_something_new_today');
let todayDate = document.getElementById("today_date");
let completedBtn = document.querySelectorAll(".completed_button");
let decrementNumber = document.getElementById("decrement_number");
let increaseNumber = document.getElementById("increase_number");
let count = 0;
const history = document.getElementById("history_list");
let activeLogButton = document.getElementById("activity_log_button");
// Random Color Generator
randomColorBtn.addEventListener('click', () => {
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
// Completed Button
for (let button of completedBtn) {
  button.addEventListener('click', (event) => {
    alert('Board Updated Successfully')
    decrementNumber.innerText = parseInt(decrementNumber.innerText) - 1;
    increaseNumber.innerText = parseInt(increaseNumber.innerText) + 1;
    let clickBtn = event.target;
    // h2 Select
    let box = clickBtn.closest('.box');
    let boxFirst = box.querySelector('.box_first');
    let title = boxFirst.querySelector("h2").innerText;
    if (!clickBtn.disabled) {
      clickBtn.disabled = true;
      clickBtn.style.opacity = "0.5";
      count++;
    }
    if (count === completedBtn.length) {
      alert('All tasks completed!');
    };
    // Current Time Set
    const t = new Date();
    let hours = t.getHours();
    let miniutes = t.getMinutes();
    let seconds = t.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const p = document.createElement("p");
    p.innerHTML = `<p style="background-color: #f4f7ff; padding: 5px 10px; border-radius: 12px; font-size: 14px"
      ">You have Complete The Task. ${title} at ${hours}:${miniutes}:${seconds} ${ampm}</p>`;
    history.appendChild(p);
  });
}
// History Remove
activeLogButton.addEventListener('click', () => {
  history.innerText = "";
})