var poost = document.querySelector(".container");
var heart = document.querySelector("i");
var togel = 0

poost.addEventListener("dblclick", function () {
  console.log("click is worlking");

  heart.style.color = "red";
  heart.className = "ri-heart-fill";
});

heart.addEventListener("click", function () {

  if (togel == 0) {
    heart.style.color = "red";
    heart.className = "ri-heart-fill";
    togel = 1
  } else {
    heart.className = "ri-heart-line";
    heart.style.color = "black";
    togel = 0
    
  }
  
});
