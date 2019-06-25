class FallingObject{
    constructor(text,ypos){
        this.xpos = 0;
        this.textNode = document.createTextNode(text.value);
        this.element = document.createElement("p");
        this.element.append(this.textNode);
        document.querySelector("body").appendChild(this.element);
        this.element.style.position = "absolute";
        this.element.style.left = `${ypos}px`;
        this.element.style.top = "0px";
        this.element.style.width = "250px";
        setInterval(this.fall.bind(this),10);
    }

    fall(){
        this.xpos+=1;
        this.element.style.top = `${this.xpos}px`;
    }
}

let sendBtn = document.querySelector("#send-btn");
let name = document.querySelector("#full-name");
let email = document.querySelector("#email");
let body = document.querySelector("#contact-body");

let items = [name,email,body];

sendBtn.addEventListener("click", () => {
    setInterval(spawnItem,1000);
});

function spawnItem(){
    console.log(window.innerWidth);
    new FallingObject(items[Math.floor(Math.random() * 3)], Math.floor(Math.random()*window.innerWidth));
}