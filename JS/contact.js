class FallingObject{
    constructor(text,ypos){
        this.xpos = 0;
        this.rotation = Math.random() * 360;
        this.textNode = document.createTextNode(text.value);
        this.element = document.createElement("p");
        this.element.append(this.textNode);
        document.querySelector("body").appendChild(this.element);
        this.element.classList.add("fallingObj");
        this.element.style.left = `${ypos}px`
        this.interval = setInterval(this.fall.bind(this),5);
    }

    fall(){
        this.xpos++;
        if(this.xpos >= screenHeight-10){
            clearInterval(this.interval);
        }
        this.element.style.top = `${this.xpos}px`;
        this.rotate();
    }

    rotate(){
        this.rotation++;
        if(this.rotation>360){
            this.rotation = 0;
        }
        this.element.style.transform = `rotate(${this.rotation}deg)`;
    }
}

let screenHeight = document.querySelector(".contact-page").clientHeight;
let sendBtn = document.querySelector("#send-btn");
let name = document.querySelector("#full-name");
let email = document.querySelector("#email");
let body = document.querySelector("#contact-body");

let items = [name,email,body];

sendBtn.addEventListener("click", () => {
    setInterval(spawnItem, 500);
});

function spawnItem(){
    console.log(window.innerWidth);
    new FallingObject(items[Math.floor(Math.random() * 3)], Math.floor(Math.random()*window.innerWidth));
}