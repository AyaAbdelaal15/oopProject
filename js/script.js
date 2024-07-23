import { Games } from "./game.js";
new Games();

let nav = document.querySelector(".nav");
window.onscroll = function(){
    if(window.pageYOffset > 190)
        {
            nav.classList.add("fixed");
            console.log("ok");
        }
        else if(window.pageYOffset < 200)
        {
            nav.classList.remove("fixed");
            nav.classList.add(".nav");
            console.log('no');
            
        }
}
let closeIcon = document.querySelector(".iconMenu");
let listsUL = document.querySelector(".ulLinks ul");
closeIcon.addEventListener("click",function(){
    listsUL.classList.toggle("listLinks");
    nav.classList.toggle("navbar");
})