var poost = document.querySelector(".container")
var heart = document.querySelector("i")

poost.addEventListener("dblclick" , function(){

  console.log("click is worlking")

  heart.style.color = "red"
  heart.className = "ri-heart-fill"

})