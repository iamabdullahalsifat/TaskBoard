// Variable Store
let mainBody = document.getElementById('main_body');
let rendomColorBtn = document.getElementById('rendom_color_btn');

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