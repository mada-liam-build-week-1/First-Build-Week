let navButton = document.querySelector("#nav-button");
let links = document.querySelectorAll('header nav a');

let showMenu = false;

navButton.addEventListener("click", (e) =>{
    e.preventDefault();
    if(showMenu == false){
        links.forEach(element => {
            element.style.display = "block"
        });
        showMenu = true;
    }
    else{
        links.forEach(element => {
            element.style.display = "none"
        });
        showMenu = false;
    }
});

window.addEventListener("resize", (e) => {
    if(window.innerWidth > 800){
        links.forEach(element => {
            element.style.display = "block"
        });
    }
});