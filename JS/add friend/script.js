var check = document.querySelector("h4")
var btn = document.querySelector("#btn")
var badalo = 0

btn.addEventListener("click", function(){

    if (badalo == 0) {
        btn.innerHTML = "Remove Dost";
        btn.style.backgroundColor = "red"
        check.innerHTML = "Dost-Dost";
        check.style.color = "green";
        badalo = 1
        
    } else {
        
        btn.innerHTML = "Add Dost";
        btn.style.backgroundColor = "gray"
        check.innerHTML = "Stranger";
        check.style.color = "red";
        badalo = 0
        
    
    }



})