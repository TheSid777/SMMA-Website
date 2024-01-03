const navicon = document.getElementById("navicon");
const navbar = document.getElementById("navbar");
const links = document.querySelectorAll("#center a");
const right = document.getElementById("right");

navicon.addEventListener("click",()=>{

    navbar.classList.toggle("active")
})


// navicon.addEventListener("click",()=>{
//     mobilenav.classList.toggle("active")
// })

links.forEach((e)=>e.addEventListener("click",()=>navbar.classList.remove("active")))

window.addEventListener("scroll",()=>{
    if(scrollY>100){
        navbar.style.background = "#c0e2f585";
    }else{
        navbar.style.background = "transperent";

    }
})