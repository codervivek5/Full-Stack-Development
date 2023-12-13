var inputBox = document.querySelector("#txt")
var clickBtn = document.querySelector("#btn")

var spanText = document.querySelector("span")



clickBtn.addEventListener('click',function(){

    var newStr = inputBox.value.toUpperCase();
   
    
    spanText.innerHTML =  newStr



})

// var str = "hello"
