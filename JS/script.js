// conditions
// loop 
// functions
// DOM - Document Object Model

// 1 - html content - querySelector, classname selector , id name selector 😎
// 2 - css 
// 3 - event handler


var istatus =document.querySelector("h3")
var btn = document.querySelector("#btn")
var flag = 0


btn.addEventListener("click" , function(){

    if (flag == 0) {
        btn.innerHTML = "Remove"
        btn.style.backgroundColor = "red"
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        flag = 1
    } else {
    
        btn.innerHTML = "Add Friend"
        btn.style.backgroundColor = " rgb(5, 73, 94)"
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        flag = 0
        
    }
 
})
