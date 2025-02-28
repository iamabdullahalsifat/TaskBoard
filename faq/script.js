function increaseNum(num, increment = 1) {
  return num + increment;
}
let value = document.querySelector(".add-num")
let numberOfValue = value.innerHTML
let num = document.querySelectorAll(".button");
num.forEach( element =>{
  element.addEventListener("click" ,() =>{
    let addnumber = numberOfValue + 
    console.log(addnumber)
  })
})
